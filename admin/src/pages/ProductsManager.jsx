import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { Package, Search, Plus, Trash2, Edit, Check, X, ArrowUpDown } from 'lucide-react';
import MediaUploadField from '../components/MediaUploadField';

export default function ProductsManager() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sportFilter, setSportFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });
  const [loading, setLoading] = useState(true);

  // Edit / Create Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    name: '',
    slug: '',
    sport: 'Baseball',
    category: 'Jerseys',
    price: 44.99,
    tier1: 44.99,
    tier2: 42.99,
    tier3: 41.99,
    tier4: 39.99,
    description: '',
    fabric: '180-220 GSM Polyester',
    badge: 'PRO SPEC',
    image: '',
    isActive: true,
  });

  const sports = [
    'ALL', 'Baseball', 'Basketball', 'Football', 'Soccer', 
    'Ice Hockey', 'Lacrosse', 'Rugby', 'Softball', 'Volleyball', 'Wrestling', 'Esports'
  ];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = { page, limit: 20 };
      if (sportFilter !== 'ALL') params.sport = sportFilter;
      if (search) params.search = search;

      const res = await api.get('/products', { params });
      if (res.data.success) {
        setProducts(res.data.data);
        setPagination(res.data.pagination);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [sportFilter, page]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchProducts();
  };

  const handleOpenCreate = () => {
    setEditingProduct(null);
    setForm({
      name: '',
      slug: '',
      sport: 'Baseball',
      category: 'Jerseys',
      price: 44.99,
      tier1: 44.99,
      tier2: 42.99,
      tier3: 41.99,
      tier4: 39.99,
      description: '',
      fabric: '180-220 GSM Performance Polyester',
      badge: 'PRO SPEC',
      image: '',
      isActive: true,
      features: '',
      faqs: [],
    });
    setShowModal(true);
  };

  const handleOpenEdit = (p) => {
    setEditingProduct(p);
    const t1 = p.tierPrices?.tier1 ?? p.volumeTiers?.[0]?.price ?? p.price ?? 44.99;
    const t2 = p.tierPrices?.tier2 ?? p.volumeTiers?.[1]?.price ?? t1;
    const t3 = p.tierPrices?.tier3 ?? p.volumeTiers?.[2]?.price ?? t2;
    const t4 = p.tierPrices?.tier4 ?? p.volumeTiers?.[3]?.price ?? t3;

    setForm({
      name: p.name,
      slug: p.slug,
      sport: p.sport,
      category: p.category,
      price: t1,
      tier1: t1,
      tier2: t2,
      tier3: t3,
      tier4: t4,
      description: p.description || '',
      fabric: p.fabric || '',
      badge: p.badge || '',
      image: p.images?.[0]?.url || '',
      isActive: p.isActive !== undefined ? p.isActive : true,
      features: Array.isArray(p.features) ? p.features.join('\n') : (p.features || ''),
      faqs: Array.isArray(p.faqs) && p.faqs.length > 0 ? p.faqs.map(f => ({ q: f.q || '', a: f.a || '' })) : [],
    });
    setShowModal(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const t1 = parseFloat(form.tier1) || parseFloat(form.price) || 0;
    const t2 = parseFloat(form.tier2) || t1;
    const t3 = parseFloat(form.tier3) || t2;
    const t4 = parseFloat(form.tier4) || t3;

    const payload = {
      ...form,
      price: t1,
      tierPrices: {
        tier1: t1,
        tier2: t2,
        tier3: t3,
        tier4: t4,
      },
      volumeTiers: [
        { minQty: 1, maxQty: 24, label: '1 to 24', price: t1 },
        { minQty: 25, maxQty: 50, label: '25 to 50', price: t2 },
        { minQty: 51, maxQty: 100, label: '51 to 100', price: t3 },
        { minQty: 101, maxQty: 99999, label: '101+', price: t4 },
      ],
      slug: form.slug || form.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      images: form.image ? [{ url: form.image, alt: form.name }] : [],
      features: typeof form.features === 'string' ? form.features.split('\n').map(s => s.trim()).filter(Boolean) : (form.features || []),
      faqs: Array.isArray(form.faqs) ? form.faqs.filter(f => f.q && f.q.trim()) : [],
    };

    try {
      if (editingProduct) {
        await api.put(`/products/${editingProduct._id}`, payload);
      } else {
        await api.post('/products', payload);
      }
      setShowModal(false);
      fetchProducts();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save product');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
            Uniform Products Catalog
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Total {pagination.total} Live Products • 12 Sports Disciplines
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-3.5 py-2 bg-[#1E1B6E] hover:bg-[#2b2787] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-xs cursor-pointer flex-shrink-0"
        >
          <Plus size={15} /> Add New Uniform
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-3">
        
        {/* Sports Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {sports.map((s) => (
            <button
              key={s}
              onClick={() => { setSportFilter(s); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-normal whitespace-nowrap cursor-pointer transition ${
                sportFilter === s ? 'bg-[#1E1B6E] text-white font-medium shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 w-full relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E1B6E]"
          />
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-medium text-[11px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 font-medium">Product Name</th>
                <th className="py-3 px-4 font-medium">Sport</th>
                <th className="py-3 px-4 font-medium">Base Price (1–24)</th>
                <th className="py-3 px-4 font-medium">Volume Tiers (25–50 / 51–100 / 101+)</th>
                <th className="py-3 px-4 font-medium">Badge</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={p.images?.[0]?.url || 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=100&q=80'}
                      alt={p.name}
                      className="w-9 h-9 rounded object-cover bg-slate-100 flex-shrink-0"
                    />
                    <div>
                      <div className="font-medium text-slate-900 line-clamp-1 flex items-center gap-1.5">
                        <span>{p.name}</span>
                        {p.faqs && p.faqs.length > 0 && (
                          <span className="px-1.5 py-0.2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-normal rounded flex-shrink-0">
                            {p.faqs.length} FAQs
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 font-normal">/{p.slug}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[11px] font-normal bg-slate-100 text-slate-700">
                      {p.sport}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-normal text-slate-900">
                    ${p.tierPrices?.tier1 || p.price}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-normal bg-slate-100 text-slate-700">
                        25–50: ${p.tierPrices?.tier2 ?? p.volumeTiers?.[1]?.price ?? '—'}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-normal bg-blue-50 text-blue-700 border border-blue-100">
                        51–100: ${p.tierPrices?.tier3 ?? p.volumeTiers?.[2]?.price ?? '—'}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-normal bg-emerald-50 text-emerald-700 border border-emerald-100">
                        101+: ${p.tierPrices?.tier4 ?? p.volumeTiers?.[3]?.price ?? '—'}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-[11px] text-[#F26522] font-medium">
                      {p.badge || 'PRO SPEC'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${
                      p.isActive 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}>
                      {p.isActive ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right space-x-1">
                    <button
                      onClick={() => handleOpenEdit(p)}
                      className="p-1.5 rounded hover:bg-slate-100 text-slate-600 cursor-pointer"
                      title="Edit Uniform & Prices"
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="p-1.5 rounded hover:bg-rose-50 text-rose-600 cursor-pointer"
                      title="Delete Product"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-400">
                    No products found matching query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Page {pagination.page} of {pagination.pages}</span>
          <div className="flex gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 bg-slate-100 rounded disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            <button
              disabled={page >= pagination.pages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 bg-slate-100 rounded disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Edit / Create Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="font-black text-base uppercase text-slate-900 mb-4">
              {editingProduct ? 'Edit Uniform Spec' : 'Add New Uniform Product'}
            </h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Sport Category</label>
                  <select
                    value={form.sport}
                    onChange={(e) => setForm({ ...form, sport: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                  >
                    {sports.filter(s => s !== 'ALL').map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    placeholder="e.g. PRO SPEC, FACTORY DIRECT"
                    className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                  />
                </div>
              </div>

              {/* 4-Tier Volume Pricing Matrix */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-black uppercase text-slate-900 tracking-wider">
                    Volume Tier Pricing Matrix (USD)
                  </label>
                  <span className="text-[10px] text-slate-500 font-medium">Auto-applied on quotes & catalog</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-600 mb-1">Tier 1: 1–24 Qty ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={form.tier1}
                      onChange={(e) => {
                        const val = e.target.value;
                        setForm({ ...form, tier1: val, price: val });
                      }}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-mono font-bold focus:border-[#F26522] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-600 mb-1">Tier 2: 25–50 Qty ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={form.tier2}
                      onChange={(e) => setForm({ ...form, tier2: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-mono font-bold focus:border-[#F26522] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-600 mb-1">Tier 3: 51–100 Qty ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={form.tier3}
                      onChange={(e) => setForm({ ...form, tier3: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-mono font-bold focus:border-[#F26522] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-emerald-700 mb-1">Tier 4: 101+ Qty ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={form.tier4}
                      onChange={(e) => setForm({ ...form, tier4: e.target.value })}
                      className="w-full bg-white border border-emerald-300 rounded-lg p-2 text-xs font-mono font-bold text-emerald-800 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <MediaUploadField
                  label="Product Primary Image (Cloudinary CDN)"
                  value={form.image}
                  onChange={(url) => setForm({ ...form, image: url })}
                  type="image"
                  placeholder="https://res.cloudinary.com/... or click Browse to upload"
                  helperText="Upload athlete uniform photo directly to Cloudinary or paste image CDN URL"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Fabric Specifications</label>
                <input
                  type="text"
                  value={form.fabric}
                  onChange={(e) => setForm({ ...form, fabric: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Description</label>
                <textarea
                  rows="3"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Feature Bullets (One per line)
                </label>
                <textarea
                  rows="4"
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                  placeholder="e.g. 100% Full dye-sublimation&#10;~165 GSM moisture-wicking poly..."
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-mono focus:border-[#F26522] focus:outline-none"
                />
              </div>

              {/* Product-Specific FAQs Manager */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-900 tracking-wider">
                      Product-Specific FAQs ({form.faqs?.length || 0})
                    </label>
                    <span className="text-[10px] text-slate-500 font-medium">Anti-spam customized Q&As for this uniform</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setForm({
                        ...form,
                        faqs: [...(form.faqs || []), { q: '', a: '' }]
                      });
                    }}
                    className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-[11px] font-bold uppercase tracking-wider cursor-pointer"
                  >
                    + Add FAQ
                  </button>
                </div>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {form.faqs?.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-slate-400">Question #{fIdx + 1}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const newFaqs = form.faqs.filter((_, i) => i !== fIdx);
                            setForm({ ...form, faqs: newFaqs });
                          }}
                          className="text-red-500 hover:text-red-700 text-[10px] font-bold uppercase cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                      <input
                        type="text"
                        value={faq.q}
                        placeholder="Question..."
                        onChange={(e) => {
                          const updated = [...form.faqs];
                          updated[fIdx] = { ...updated[fIdx], q: e.target.value };
                          setForm({ ...form, faqs: updated });
                        }}
                        className="w-full border border-slate-300 rounded p-1.5 text-xs font-semibold focus:border-[#F26522] focus:outline-none"
                      />
                      <textarea
                        rows="2"
                        value={faq.a}
                        placeholder="Detailed answer..."
                        onChange={(e) => {
                          const updated = [...form.faqs];
                          updated[fIdx] = { ...updated[fIdx], a: e.target.value };
                          setForm({ ...form, faqs: updated });
                        }}
                        className="w-full border border-slate-300 rounded p-1.5 text-xs focus:border-[#F26522] focus:outline-none leading-relaxed"
                      />
                    </div>
                  ))}
                  {(!form.faqs || form.faqs.length === 0) && (
                    <div className="text-center py-4 text-xs text-slate-400 italic bg-white rounded border border-dashed border-slate-200">
                      No FAQs configured for this product. Click "+ Add FAQ" above to add one.
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F26522] text-white rounded-lg text-xs font-black uppercase tracking-wider shadow cursor-pointer"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
