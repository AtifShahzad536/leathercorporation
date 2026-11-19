import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { 
  Box, Upload, Plus, Trash2, Edit, Check, X, 
  Eye, Layers, Sparkles, AlertCircle, CheckCircle2, Search, Sliders 
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
      sport: model.sport.charAt(0).toUpperCase() + model.sport.slice(1),
      cut: model.cut,
      modelUrl: model.modelUrl,
      thumbnailUrl: model.thumbnailUrl || '',
      fileSize: model.fileSize || 0,
      isPublished: model.isPublished,
      isDefault: model.isDefault,
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
    // Merge detected meshes with existing configuration if editing
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
      alert('Please provide a Model Name and upload a .GLB model.');
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

  const filteredModels = models.filter(m => {
    const matchesSport = sportFilter === 'ALL' || m.sport.toLowerCase() === sportFilter.toLowerCase();
    const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.cut.toLowerCase().includes(search.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="p-8 space-y-8 bg-[#0F1422] min-h-screen text-slate-100">
      
      {/* ── Top Header & Stats ── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F26522] uppercase font-bold mb-1">
            <Sparkles size={14} />
            <span>3D CUSTOMIZATION VAULT</span>
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-white">
            3D Garment Models & Intelligent Mesh Inspector
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl font-light">
            Upload production GLB models, inspect scene graphs, map meshes to garment regions, assign PBR material presets, and control live customer builder models.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-5 py-3 bg-[#F26522] hover:bg-[#ff7b3d] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 transition cursor-pointer self-start"
        >
          <Plus size={16} /> Upload New 3D Model
        </button>
      </div>

      {/* ── Filter Bar ── */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <Search size={16} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search by model name, cut, or sport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">Sport:</span>
          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            className="bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none"
          >
            <option value="ALL">All Sports</option>
            {SPORTS_LIST.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Models Grid ── */}
      {loading ? (
        <div className="py-20 text-center text-slate-500 text-xs font-mono uppercase tracking-widest animate-pulse">
          Loading 3D Model Vault...
        </div>
      ) : filteredModels.length === 0 ? (
        <div className="py-16 text-center bg-slate-900/50 rounded-2xl border border-dashed border-slate-800 space-y-3">
          <Box size={40} className="mx-auto text-slate-600" />
          <h3 className="text-sm font-bold text-slate-300 uppercase">No 3D Models in Vault</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Click "Upload New 3D Model" to upload your first sportswear .GLB file with automated mesh inspection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <div
              key={model._id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition flex flex-col justify-between shadow-xl"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/30 text-[10px] font-mono font-bold uppercase">
                    {model.sport}
                  </span>
                  <div className="flex items-center gap-2">
                    {model.isDefault && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold uppercase">
                        Default Sport Kit
                      </span>
                    )}
                    <span className={`w-2 h-2 rounded-full ${model.isPublished ? 'bg-emerald-500' : 'bg-slate-500'}`} />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black uppercase text-white truncate">
                    {model.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium block">
                    Cut: {model.cut}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{model.meshes?.length || 0} Meshes Detected</span>
                  <span>v{model.version || 1}</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenEdit(model)}
                  className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Edit size={13} className="text-[#F26522]" /> Edit Meshes
                </button>
                <button
                  onClick={() => handleDeleteModel(model._id)}
                  className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition cursor-pointer"
                  title="Delete Model"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Upload & Mesh Inspector Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F26522]/20 text-[#F26522] flex items-center justify-center">
                  <Box size={18} />
                </div>
                <div>
                  <h2 className="text-base font-black uppercase text-white tracking-tight">
                    {editingModel ? 'Edit 3D Model & Mesh Hierarchy' : 'Upload & Configure 3D Sportswear Model'}
                  </h2>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    Three.js GLTF Scene Graph Inspection & Region Mapping
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white p-1 transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveModel} className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Basic Meta Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Model Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Pro Baseball Full-Button"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-[#F26522] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Sport Discipline *
                  </label>
                  <select
                    value={form.sport}
                    onChange={(e) => setForm({ ...form, sport: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-bold focus:border-[#F26522] focus:outline-none"
                  >
                    {SPORTS_LIST.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Silhouette Cut *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.cut}
                    onChange={(e) => setForm({ ...form, cut: e.target.value })}
                    placeholder="e.g. Full Button Jersey"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-[#F26522] focus:outline-none"
                  />
                </div>
              </div>

              {/* File Upload Zone */}
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-slate-300">
                    3D Model Asset (.GLB / .GLTF)
                  </span>
                  {uploading && (
                    <span className="text-xs text-[#F26522] font-mono animate-pulse">
                      Uploading to Persistent Storage...
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={form.modelUrl}
                    onChange={(e) => setForm({ ...form, modelUrl: e.target.value })}
                    placeholder="Model file URL (e.g. /uploads/models3d/jersey.glb)"
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
                  />
                  <label className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase rounded-lg border border-slate-700 transition cursor-pointer flex items-center gap-1.5 flex-shrink-0">
                    <Upload size={14} className="text-[#F26522]" /> Choose .GLB File
                    <input type="file" accept=".glb,.gltf" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              {/* 3D Mesh Inspector Canvas */}
              {form.modelUrl && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-slate-300 flex items-center gap-2">
                      <Layers size={14} className="text-[#F26522]" />
                      Real-Time Scene Graph & Mesh Inspector
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Click any mesh in the table below to highlight it in orange in 3D.
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
                <div className="space-y-3">
                  <span className="text-xs font-black uppercase text-slate-300 block">
                    Detected Mesh Nodes & Garment Region Mapping ({form.meshes.length})
                  </span>

                  <div className="border border-slate-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                        <tr>
                          <th className="p-3">Mesh ID</th>
                          <th className="p-3">Display Label</th>
                          <th className="p-3">Garment Region</th>
                          <th className="p-3">Poly/UV</th>
                          <th className="p-3">Default Color</th>
                          <th className="p-3">Decals</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {form.meshes.map((mesh) => {
                          const isSelected = selectedMeshId === mesh.meshId;
                          return (
                            <tr
                              key={mesh.meshId}
                              onClick={() => setSelectedMeshId(mesh.meshId)}
                              className={`transition cursor-pointer ${
                                isSelected ? 'bg-[#F26522]/15 text-white font-bold' : 'hover:bg-slate-800/50 text-slate-300'
                              }`}
                            >
                              <td className="p-3 font-mono text-[11px] truncate max-w-[140px]" title={mesh.meshId}>
                                {mesh.meshId}
                              </td>
                              <td className="p-3">
                                <input
                                  type="text"
                                  value={mesh.name || ''}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'name', e.target.value)}
                                  className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs w-full text-white"
                                />
                              </td>
                              <td className="p-3">
                                <select
                                  value={mesh.region || 'torso'}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'region', e.target.value)}
                                  className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white"
                                >
                                  {REGION_OPTIONS.map(r => (
                                    <option key={r.id} value={r.id}>{r.label}</option>
                                  ))}
                                </select>
                              </td>
                              <td className="p-3 font-mono text-[10px] text-slate-400">
                                {mesh.triangleCount || 0} polys • {mesh.uvMapped ? 'UV OK' : 'No UV'}
                              </td>
                              <td className="p-3">
                                <input
                                  type="color"
                                  value={mesh.defaultColor || '#0A192F'}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'defaultColor', e.target.value)}
                                  className="w-6 h-6 rounded border border-slate-700 p-0 cursor-pointer"
                                />
                              </td>
                              <td className="p-3">
                                <input
                                  type="checkbox"
                                  checked={mesh.allowsDecals !== false}
                                  onChange={(e) => handleMeshFieldChange(mesh.meshId, 'allowsDecals', e.target.checked)}
                                  className="accent-[#F26522]"
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
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
                    className="accent-[#F26522]"
                  />
                  <span>Published (Visible in Customer 3D Studio)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                  <input
                    type="checkbox"
                    checked={form.isDefault}
                    onChange={(e) => setForm({ ...form, isDefault: e.target.checked })}
                    className="accent-[#F26522]"
                  />
                  <span>Set as Default Model for this Sport</span>
                </label>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase rounded-lg transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#F26522] hover:bg-[#ff7b3d] text-white text-xs font-black uppercase rounded-lg transition shadow-lg cursor-pointer flex items-center gap-1.5"
                >
                  <Check size={16} /> Save 3D Model Configuration
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
