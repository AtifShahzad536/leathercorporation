import React, { useState } from 'react';
import api from '../api/client';
import { Upload, Loader2, Check, Image as ImageIcon, Video as VideoIcon, AlertCircle } from 'lucide-react';

/**
 * Reusable Direct Cloudinary / Local Uploader Component
 * Allows user to either upload a file directly or paste an external URL.
 */
export default function MediaUploadField({ 
  label, 
  value, 
  onChange, 
  type = 'image', // 'image' | 'video'
  placeholder = 'https://...',
  helperText = ''
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'hamlo-sports');

    try {
      const res = await api.post('/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.data.success && res.data.data?.url) {
        onChange(res.data.data.url);
        setSuccess(true);
        setSuccessMsg(res.data.storage === 'cloudinary' ? 'Uploaded to Cloudinary CDN!' : 'Uploaded to Local Server Storage!');
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed. Check Cloudinary credentials in server/.env.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
          {label}
        </label>
        {success && (
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
            <Check size={12} /> {successMsg || 'Uploaded successfully!'}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full border border-slate-300 rounded-lg pl-3 pr-8 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#F26522] bg-white"
          />
        </div>

        {/* Upload Button */}
        <label className="px-3.5 py-2 bg-slate-100 hover:bg-[#F26522] text-slate-700 hover:text-white border border-slate-300 hover:border-[#F26522] rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer flex-shrink-0">
          {uploading ? (
            <>
              <Loader2 size={13} className="animate-spin text-white" />
              <span>Uploading...</span>
            </>
          ) : (
            <>
              <Upload size={13} />
              <span>Browse</span>
            </>
          )}
          <input
            type="file"
            accept={type === 'video' ? 'video/*' : 'image/*'}
            disabled={uploading}
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {helperText && (
        <span className="text-[10px] text-slate-400 block">{helperText}</span>
      )}

      {error && (
        <div className="p-2 bg-red-50 text-red-600 border border-red-200 rounded text-[11px] flex items-center gap-1.5">
          <AlertCircle size={13} className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Live Preview */}
      {value && (
        <div className="mt-2 p-2 bg-slate-900 rounded-lg flex items-center gap-3 max-w-sm">
          {type === 'video' ? (
            <video src={value} className="w-16 h-12 object-cover rounded bg-black" controls={false} />
          ) : (
            <img src={value} alt="Preview" className="w-16 h-12 object-cover rounded bg-black" />
          )}
          <div className="truncate flex-1">
            <span className="text-[10px] font-mono text-slate-300 block truncate">{value}</span>
            <span className="text-[9px] text-[#F26522] uppercase font-bold tracking-wider">Live Preview</span>
          </div>
        </div>
      )}
    </div>
  );
}
