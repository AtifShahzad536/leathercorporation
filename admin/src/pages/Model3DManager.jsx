import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { 
  Box, Upload, Plus, Trash2, Edit, Check, X, 
  Eye, Layers, AlertCircle, CheckCircle2, Search, 
  LayoutList, LayoutGrid, ChevronRight, RefreshCw, FileBox
} from 'lucide-react';
import MeshInspector3D from '../components/MeshInspector3D';

const SPORTS_LIST = [
  'Baseball', 'Basketball', 'Football', 'Flag Football', 'Soccer', 
  'Ice Hockey', 'Lacrosse', 'Rugby', 'Cricket', 'Tennis', 
  'Field Hockey', 'Esports', 'Volleyball', 'Softball', 'Wrestling'
];

const REGION_OPTIONS = [
  { id: 'front_body', label: 'Front Torso / Chest' },
  { id: 'back_body', label: 'Back Torso / Nameplate' },
  { id: 'left_sleeve', label: 'Left Sleeve' },
  { id: 'right_sleeve', label: 'Right Sleeve' },
  { id: 'collar', label: 'Collar & Neck Ribbing' },
  { id: 'cuffs', label: 'Sleeve Cuffs / Wrist Rib' },
  { id: 'side_panels', label: 'Side Vent Panels' },
  { id: 'zipper', label: 'Zipper / Placket' },
  { id: 'buttons', label: 'Fasteners / Buttons' },
  { id: 'pockets', label: 'Kangaroo / Pockets' },
  { id: 'waistband', label: 'Elastic Waistband' },
  { id: 'left_leg', label: 'Left Leg / Short' },
  { id: 'right_leg', label: 'Right Leg / Short' },
  { id: 'stripes', label: 'Trim / Decorative Stripes' }
];

export default function Model3DManager() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sportFilter, setSportFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingModel, setEditingModel] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedMeshId, setSelectedMeshId] = useState(null);

  // Form State
  const [form, setForm] = useState({
    name: '',
    sport: 'Baseball',
    cut: 'Full Button Jersey',
    modelUrl: '',
    thumbnailUrl: '',
    fileSize: 0,
    isPublished: true,
    isDefault: false,
    meshes: []
  });

  const fetchModels = async () => {
    setLoading(true);
    try {
      const res = await api.get('/models3d/admin');
      if (res.data?.success) {
        setModels(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching 3D models:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleOpenCreate = () => {
    setEditingModel(null);
    setForm({
      name: '',
      sport: 'Baseball',
      cut: 'Full Button Jersey',
      modelUrl: '',
      thumbnailUrl: '',
      fileSize: 0,
      isPublished: true,
      isDefault: false,
      meshes: []
    });
    setSelectedMeshId(null);
    setShowModal(true);
  };

  const handleOpenEdit = (model) => {
    setEditingModel(model);
    setForm({
      name: model.name,
      sport: model.sport ? model.sport.charAt(0).toUpperCase() + model.sport.slice(1) : 'Baseball',
      cut: model.cut || 'Standard Cut',
      modelUrl: model.modelUrl || '',
      thumbnailUrl: model.thumbnailUrl || '',
      fileSize: model.fileSize || 0,
      isPublished: model.isPublished !== undefined ? model.isPublished : true,
      isDefault: Boolean(model.isDefault),
      meshes: model.meshes || []
    });
    setSelectedMeshId(model.meshes?.[0]?.meshId || null);
    setShowModal(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await api.post('/models3d/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (res.data?.success) {
        const url = res.data.data.url;
        setForm(prev => ({
          ...prev,
          modelUrl: url,
          fileSize: file.size,
          name: prev.name || file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
        }));
      }
    } catch (err) {
      alert('Upload failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setUploading(false);
    }
  };

  const handleMeshesDetected = (detected) => {
    setForm(prev => {
      const existingMap = new Map((prev.meshes || []).map(m => [m.meshId, m]));
      const merged = detected.map(d => {
        if (existingMap.has(d.meshId)) {
          return { ...d, ...existingMap.get(d.meshId) };
        }
        return d;
      });
      return { ...prev, meshes: merged };
    });
    if (!selectedMeshId && detected.length > 0) {
      setSelectedMeshId(detected[0].meshId);
    }
  };

  const handleMeshFieldChange = (meshId, field, value) => {
    setForm(prev => ({
      ...prev,
      meshes: prev.meshes.map(m => m.meshId === meshId ? { ...m, [field]: value } : m)
    }));
  };

  const handleSaveModel = async (e) => {
    e.preventDefault();
    if (!form.name || !form.modelUrl) {
      alert('Please provide a Model Name and upload a .GLB file.');
      return;
    }

    try {
      if (editingModel) {
        await api.put(`/models3d/${editingModel._id}`, form);
      } else {
        await api.post('/models3d', form);
      }
      setShowModal(false);
      fetchModels();
    } catch (err) {
      alert('Failed to save 3D Model: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDeleteModel = async (id) => {
    if (!window.confirm('Are you sure you want to delete this 3D model?')) return;
    try {
      await api.delete(`/models3d/${id}`);
      fetchModels();
    } catch (err) {
      alert('Error deleting model: ' + err.message);
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return '—';
    const mb = bytes / (1024 * 1024);
    if (mb >= 1) return `${mb.toFixed(2)} MB`;
    return `${(bytes / 1024).toFixed(0)} KB`;
  };

  const filteredModels = models.filter(m => {
    const matchesSport = sportFilter === 'ALL' || m.sport.toLowerCase() === sportFilter.toLowerCase();
    const matchesSearch = !search || 
      m.name.toLowerCase().includes(search.toLowerCase()) || 
      (m.cut && m.cut.toLowerCase().includes(search.toLowerCase()));
    return matchesSport && matchesSearch;
  });

  const totalPublished = models.filter(m => m.isPublished).length;
  const sportsCoveredCount = new Set(models.map(m => m.sport)).size;
  const totalMeshesConfigured = models.reduce((acc, m) => acc + (m.meshes?.length || 0), 0);

  return (
    <div className="space-y-6">
      
      {/* ── Top Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
            3D Garment Models & Scene Graph
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Manage GLB files, inspect mesh nodes, assign garment regions, and publish 3D silhouettes to the customer studio.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2 bg-[#1E1B6E] hover:bg-[#2b2787] text-white text-xs font-medium rounded-lg shadow-xs flex items-center gap-2 transition cursor-pointer self-start sm:self-auto"
        >
          <Plus size={15} /> Upload 3D Model
        </button>
      </div>

      {/* ── Metric Summary Strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-normal block">Total 3D Models</span>
          <span className="text-xl font-semibold text-slate-900 mt-1 block">{models.length}</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-normal block">Published & Live</span>
          <span className="text-xl font-semibold text-emerald-700 mt-1 block">{totalPublished}</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-normal block">Sports Covered</span>
          <span className="text-xl font-semibold text-slate-900 mt-1 block">{sportsCoveredCount}</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-normal block">Total Mesh Regions</span>
          <span className="text-xl font-semibold text-slate-900 mt-1 block">{totalMeshesConfigured}</span>
        </div>
      </div>

      {/* ── Filter Toolbar & View Mode Switcher ── */}
      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 w-full md:w-auto relative">
          <Search size={15} className="absolute left-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by model name, cut, or sport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E1B6E]"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
          {/* Sport Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-500 font-normal">Sport:</span>
            <select
              value={sportFilter}
              onChange={(e) => setSportFilter(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none"
            >
              <option value="ALL">All Sports</option>
              {SPORTS_LIST.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded text-xs transition cursor-pointer ${
                viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs font-medium' : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Table View"
            >
              <LayoutList size={15} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded text-xs transition cursor-pointer ${
                viewMode === 'grid' ? 'bg-white text-slate-900 shadow-xs font-medium' : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Grid View"
            >
              <LayoutGrid size={15} />
            </button>
          </div>
        </div>

      </div>

      {/* ── Content View (Table or Grid) ── */}
      {loading ? (
        <div className="py-20 text-center text-slate-400 text-xs font-normal">
          <RefreshCw size={24} className="mx-auto mb-2 animate-spin text-slate-400" />
          <span>Loading 3D Models...</span>
        </div>
      ) : filteredModels.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-xl border border-slate-200 shadow-xs space-y-2.5 p-6">
          <Box size={36} className="mx-auto text-slate-400" />
          <h3 className="text-sm font-medium text-slate-700">No 3D Models Found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto font-normal">
            {search || sportFilter !== 'ALL'
              ? 'No models match the selected filter criteria. Try resetting filters.'
              : 'Click "Upload 3D Model" to upload your first sportswear .GLB file.'}
          </p>
        </div>
      ) : viewMode === 'table' ? (
        /* ── TABLE VIEW (PRIMARY ENTERPRISE LIST) ── */
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 font-medium">3D Model Name</th>
                  <th className="py-3 px-4 font-medium">Sport</th>
                  <th className="py-3 px-4 font-medium">Silhouette Cut</th>
                  <th className="py-3 px-4 font-medium">Mesh Hierarchy</th>
                  <th className="py-3 px-4 font-medium">File Size</th>
                  <th className="py-3 px-4 font-medium">Default Kit</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredModels.map((model) => (
                  <tr key={model._id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#1E1B6E] flex items-center justify-center flex-shrink-0">
                          <Box size={16} />
                        </div>
                        <div>
                          <span className="font-medium text-slate-900 block truncate max-w-[200px]">
                            {model.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-normal block truncate max-w-[200px]">
                            {model.modelUrl ? model.modelUrl.split('/').pop() : 'No GLB path'}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[11px] font-normal bg-slate-100 text-slate-700">
                        {model.sport}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-normal text-slate-700">
                      {model.cut || 'Standard'}
                    </td>

                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-normal text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        <Layers size={12} className="text-slate-400" />
                        <span>{model.meshes?.length || 0} meshes</span>
                      </span>
                    </td>

                    <td className="py-3 px-4 font-normal text-slate-500">
                      {formatFileSize(model.fileSize)}
                    </td>

                    <td className="py-3 px-4">
                      {model.isDefault ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Default Kit
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">—</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${
                        model.isPublished 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {model.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(model)}
                          className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded text-xs font-medium border border-slate-200 transition cursor-pointer flex items-center gap-1"
                          title="Inspect meshes and map regions"
                        >
                          <Edit size={12} className="text-[#1E1B6E]" />
                          <span>Inspect Meshes</span>
                        </button>
                        <button
                          onClick={() => handleDeleteModel(model._id)}
                          className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition cursor-pointer"
                          title="Delete Model"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ── GRID VIEW (CARDS) ── */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModels.map((model) => (
            <div
              key={model._id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition flex flex-col justify-between"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-normal">
                    {model.sport}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${
                    model.isPublished 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {model.isPublished ? 'Published' : 'Draft'}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 truncate">
                    {model.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-normal block mt-0.5">
                    Cut: {model.cut}
                  </span>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-normal">
                  <span>{model.meshes?.length || 0} meshes configured</span>
                  <span>{formatFileSize(model.fileSize)}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50/60 border-t border-slate-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenEdit(model)}
                  className="flex-1 py-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
                >
                  <Edit size={13} className="text-[#1E1B6E]" />
                  <span>Inspect Meshes</span>
                </button>
                <button
                  onClick={() => handleDeleteModel(model._id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                  title="Delete Model"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Upload & Mesh Inspector Modal (Light Theme) ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-xl max-h-[92vh] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#1E1B6E] flex items-center justify-center">
                  <Box size={18} />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    {editingModel ? 'Configure 3D Model & Mesh Hierarchy' : 'Upload & Configure 3D Sportswear Model'}
                  </h2>
                  <span className="text-xs text-slate-500 font-normal block">
                    Three.js scene graph inspection, garment region mapping, and materials.
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveModel} className="flex-1 overflow-y-auto p-6 space-y-5">
              
              {/* Basic Meta Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Model Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Pro Baseball Full-Button"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:border-[#1E1B6E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Sport Discipline *
                  </label>
                  <select
                    value={form.sport}
                    onChange={(e) => setForm({ ...form, sport: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:border-[#1E1B6E] focus:outline-none"
                  >
                    {SPORTS_LIST.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Silhouette Cut *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.cut}
                    onChange={(e) => setForm({ ...form, cut: e.target.value })}
                    placeholder="e.g. Full Button Jersey"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:border-[#1E1B6E] focus:outline-none"
                  />
                </div>
              </div>

              {/* File Upload Zone */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-700">
                    3D Model Asset (.GLB / .GLTF)
                  </span>
                  {uploading && (
                    <span className="text-xs text-[#F26522] font-normal animate-pulse">
                      Uploading to storage...
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  <input
                    type="text"
                    value={form.modelUrl}
                    onChange={(e) => setForm({ ...form, modelUrl: e.target.value })}
                    placeholder="Model file URL (e.g. /uploads/models3d/jersey.glb)"
                    className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 font-mono"
                  />
                  <label className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition cursor-pointer flex items-center gap-1.5 flex-shrink-0 shadow-xs">
                    <Upload size={14} className="text-[#1E1B6E]" />
                    <span>Choose .GLB File</span>
                    <input type="file" accept=".glb,.gltf" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              {/* 3D Mesh Inspector Canvas */}
              {form.modelUrl && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                      <Layers size={14} className="text-[#1E1B6E]" />
                      <span>3D Scene Graph & Mesh Inspector</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      Select any mesh below to highlight it in the viewport.
                    </span>
                  </div>

                  <MeshInspector3D
                    modelUrl={form.modelUrl}
                    selectedMeshId={selectedMeshId}
                    onMeshesDetected={handleMeshesDetected}
                  />
                </div>
              )}

              {/* Detected Meshes & Region Mapping Table */}
              {form.meshes.length > 0 && (
                <div className="space-y-2.5">
                  <span className="text-xs font-medium text-slate-700 block">
                    Detected Mesh Nodes & Garment Region Mapping ({form.meshes.length})
                  </span>

                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500 font-medium text-[11px] border-b border-slate-200">
                        <tr>
                          <th className="p-2.5 font-medium">Mesh ID</th>
                          <th className="p-2.5 font-medium">Display Name</th>
                          <th className="p-2.5 font-medium">Garment Region</th>
                          <th className="p-2.5 font-medium">Poly Count</th>
                          <th className="p-2.5 font-medium">Default Color</th>
                          <th className="p-2.5 font-medium">Allow Decals</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {form.meshes.map((mesh) => {
                          const isSelected = selectedMeshId === mesh.meshId;
                          return (
                            <tr
                              key={mesh.meshId}
                              onClick={() => setSelectedMeshId(mesh.meshId)}
                              className={`transition cursor-pointer ${
                                isSelected ? 'bg-indigo-50/60 font-medium' : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <td className="p-2.5 font-mono text-[11px] truncate max-w-[140px]" title={mesh.meshId}>
                                {mesh.meshId}
                              </td>
                              <td className="p-2.5">
                                <input
                                  type="text"
                                  value={mesh.name || ''}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'name', e.target.value)}
                                  className="bg-white border border-slate-200 rounded px-2 py-1 text-xs w-full text-slate-800"
                                />
                              </td>
                              <td className="p-2.5">
                                <select
                                  value={mesh.region || 'torso'}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'region', e.target.value)}
                                  className="bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-800"
                                >
                                  {REGION_OPTIONS.map(r => (
                                    <option key={r.id} value={r.id}>{r.label}</option>
                                  ))}
                                </select>
                              </td>
                              <td className="p-2.5 text-[11px] text-slate-500 font-normal">
                                {mesh.triangleCount || 0} polys
                              </td>
                              <td className="p-2.5">
                                <input
                                  type="color"
                                  value={mesh.defaultColor || '#0A192F'}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'defaultColor', e.target.value)}
                                  className="w-6 h-6 rounded border border-slate-200 p-0 cursor-pointer"
                                />
                              </td>
                              <td className="p-2.5">
                                <input
                                  type="checkbox"
                                  checked={mesh.allowsDecals !== false}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'allowsDecals', e.target.checked)}
                                  className="accent-[#1E1B6E]"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Toggles */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-normal text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
                    className="accent-[#1E1B6E]"
                  />
                  <span>Published (Visible in Customer 3D Studio)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-normal text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.isDefault}
                    onChange={(e) => setForm({ ...form, isDefault: e.target.checked })}
                    className="accent-[#1E1B6E]"
                  />
                  <span>Set as Default Model for {form.sport}</span>
                </label>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition cursor-pointer shadow-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1E1B6E] hover:bg-[#2b2787] text-white text-xs font-medium rounded-lg transition shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Check size={15} />
                  <span>Save Configuration</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}