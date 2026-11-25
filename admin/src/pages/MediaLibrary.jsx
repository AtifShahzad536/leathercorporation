import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { Upload, Trash2, Video, Image as ImageIcon, Copy, Check, RefreshCw } from 'lucide-react';

export default function MediaLibrary() {
  const [media, setMedia] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const fetchMedia = async () => {
    try {
      const params = {};
      if (filterType !== 'all') params.type = filterType;
      const res = await api.get('/media', { params });
      if (res.data.success) {
        setMedia(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [filterType]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const isVideo = file.type.startsWith('video/') || /\.(mp4|webm|mov|mkv|avi)$/i.test(file.name);

    try {
      let uploadSuccess = false;

      // 1. Direct Cloudinary Upload via Backend Signature
      try {
        const sigRes = await api.get('/media/signature', {
          params: { folder: 'hamlo-sports', type: isVideo ? 'video' : 'image' }
        });

        if (sigRes.data?.success && sigRes.data?.data) {
          const { signature, timestamp, apiKey, cloudName, folder } = sigRes.data.data;
          const resourceType = isVideo ? 'video' : 'image';

          const cldFormData = new FormData();
          cldFormData.append('file', file);
          cldFormData.append('api_key', apiKey);
          cldFormData.append('timestamp', timestamp);
          cldFormData.append('signature', signature);
          cldFormData.append('folder', folder);

          const cldRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
            method: 'POST',
            body: cldFormData,
          });

          const cldData = await cldRes.json();
          if (cldData.secure_url) {
            let finalUrl = cldData.secure_url;
            if (isVideo) {
              finalUrl = finalUrl
                .replace('/upload/', '/upload/f_webm,q_auto/')
                .replace(/\.(mp4|mov|mkv|avi)$/i, '.webm');
            }

            await api.post('/media/record', {
              url: finalUrl,
              publicId: cldData.public_id,
              type: isVideo ? 'video' : 'image',
              format: isVideo ? 'webm' : (cldData.format || 'jpg'),
              size: cldData.bytes,
              width: cldData.width,
              height: cldData.height,
              folder,
              filename: file.name
            });

            uploadSuccess = true;
            fetchMedia();
          } else if (cldData.error) {
            throw new Error(cldData.error.message || 'Direct Cloudinary upload failed');
          }
        }
      } catch (directErr) {
        console.warn('Direct upload error:', directErr);
        if (directErr.message && directErr.message.includes('Cloudinary')) {
          throw directErr;
        }
      }

      // 2. Fallback to server route for small files
      if (!uploadSuccess && file.size < 4 * 1024 * 1024) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', 'hamlo-sports');

        const res = await api.post('/media/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (res.data.success) {
          fetchMedia();
          uploadSuccess = true;
        }
      }

      if (!uploadSuccess) {
        throw new Error('Upload failed. Please check Cloudinary configuration.');
      }
    } catch (err) {
      alert(err.message || 'Upload to Cloudinary failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this media from Cloudinary and database?')) return;
    try {
      await api.delete(`/media/${id}`);
      fetchMedia();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyUrl = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Cloudinary Media Library
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Centralized Asset Management for Athlete Videos, Product Images & Lookbook Assets
          </p>
        </div>

        <label className="px-4 py-2.5 bg-[#F26522] hover:bg-[#d95316] text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow cursor-pointer flex-shrink-0">
          <Upload size={16} />
          <span>{uploading ? 'Uploading to Cloudinary...' : 'Upload Image / Video'}</span>
          <input
            type="file"
            accept="image/*,video/*"
            disabled={uploading}
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-xs font-bold">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 rounded-lg cursor-pointer transition ${filterType === 'all' ? 'bg-[#1E1B6E] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
        >
          All Assets ({media.length})
        </button>
        <button
          onClick={() => setFilterType('image')}
          className={`px-3 py-1.5 rounded-lg cursor-pointer transition flex items-center gap-1.5 ${filterType === 'image' ? 'bg-[#1E1B6E] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
        >
          <ImageIcon size={14} /> Images
        </button>
        <button
          onClick={() => setFilterType('video')}
          className={`px-3 py-1.5 rounded-lg cursor-pointer transition flex items-center gap-1.5 ${filterType === 'video' ? 'bg-[#1E1B6E] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
        >
          <Video size={14} /> Videos
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {media.map((item) => (
          <div key={item._id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between">
            <div className="relative aspect-square bg-slate-900 overflow-hidden flex items-center justify-center">
              {item.type === 'video' ? (
                <video src={item.url} className="w-full h-full object-cover" controls={false} />
              ) : (
                <img src={item.url} alt={item.filename} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              )}
              <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-black/70 text-white">
                {item.type}
              </span>
            </div>

            <div className="p-3">
              <span className="text-[11px] font-bold text-slate-800 truncate block">
                {item.filename}
              </span>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleCopyUrl(item.url, item._id)}
                  className="text-[10px] text-slate-500 hover:text-[#F26522] font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copiedId === item._id ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  <span>{copiedId === item._id ? 'Copied' : 'Copy URL'}</span>
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-slate-400 hover:text-red-600 cursor-pointer"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {media.length === 0 && (
          <div className="col-span-full py-16 text-center text-slate-400 text-xs">
            No media uploaded to Cloudinary yet. Add Cloudinary credentials in <code>server/.env</code> and upload videos/images above.
          </div>
        )}
      </div>

    </div>
  );
}
