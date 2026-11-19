import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { Package, Search, Plus, Trash2, Edit, Check, X, ArrowUpDown } from 'lucide-react';

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
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Product Catalog Management
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Total {pagination.total} Live Products • 12 Sports Categories
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 bg-[#F26522] hover:bg-[#d95316] text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow cursor-pointer flex-shrink-0"
        >
          <Plus size={16} /> Add New Uniform
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-4">
        
        {/* Sports Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {sports.map((s) => (
            <button
              key={s}
              onClick={() => { setSportFilter(s); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition ${sportFilter === s ? 'bg-[#1E1B6E] text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 w-full relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#F26522]"
          />
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase font-black tracking-wider text-[10px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-5">Product Name</th>
                <th className="py-3 px-5">Sport</th>
                <th className="py-3 px-5">Base Price (1–24)</th>
                <th className="py-3 px-5">Volume Tiers (25–50 / 51–100 / 101+)</th>
                <th className="py-3 px-5">Badge</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3 px-5 font-bold text-slate-900 flex items-center gap-3">
                    <img
                      src={p.images?.[0]?.url || 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=100&q=80'}
                      alt={p.name}
                      className="w-10 h-10 rounded object-cover bg-slate-100 flex-shrink-0"
                    />
                    <div>
                      <div className="text-slate-900 line-clamp-1">{p.name}</div>
                      <span className="text-[10px] text-slate-400 font-mono">/{p.slug}</span>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                      {p.sport}
                    </span>
                  </td>
                  <td className="py-3 px-5 font-mono font-bold text-slate-900">
                    ${p.tierPrices?.tier1 || p.price}
                  </td>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                        25–50: ${p.tierPrices?.tier2 ?? p.volumeTiers?.[1]?.price ?? '—'}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700">
                        51–100: ${p.tierPrices?.tier3 ?? p.volumeTiers?.[2]?.price ?? '—'}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black bg-emerald-50 text-emerald-700">
                        101+: ${p.tierPrices?.tier4 ?? p.volumeTiers?.[3]?.price ?? '—'}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <span className="text-[10px] text-[#F26522] font-black uppercase">
                      {p.badge || 'PRO SPEC'}
                    </span>
                  </td>
                  <td className="py-3 px-5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${p.isActive ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-500'}`}>
                      {p.isActive ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-3 px-5 text-right space-x-1">
                    <button
                      onClick={() => handleOpenEdit(p)}
                      className="p-1.5 rounded hover:bg-slate-200 text-slate-600 cursor-pointer"
                      title="Edit Uniform & Prices"
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="p-1.5 rounded hover:bg-red-100 text-red-600 cursor-pointer"
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
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Image URL (Cloudinary or CDN)</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://res.cloudinary.com/..."
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
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
