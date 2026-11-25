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
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setImgError(false);
  }, [value]);

  const getPreviewUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('/uploads/')) {
      const apiOrigin = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/api\/?$/, '');
      return `${apiOrigin}${url}`;
    }
    return url;
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError('');
    setSuccess(false);

    const isVideo = type === 'video' || file.type.startsWith('video/') || /\.(mp4|webm|mov|mkv|avi)$/i.test(file.name);

    try {
      let uploadSuccess = false;
      let finalUrl = '';

      // 1. Attempt Direct Cloudinary Upload via Signed API (Bypasses Vercel 4.5MB serverless limit)
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
            // For video, ensure optimized WebM format delivery via Cloudinary on-the-fly transformation
            let secureUrl = cldData.secure_url;
            if (isVideo) {
              if (secureUrl.endsWith('.mp4') || secureUrl.endsWith('.mov')) {
                secureUrl = secureUrl.replace(/\.(mp4|mov)$/i, '.webm');
              }
            }
            finalUrl = secureUrl;
            uploadSuccess = true;
          } else if (cldData.error) {
            console.warn('[Direct Cloudinary Error]', cldData.error);
          }
        }
      } catch (directErr) {
        console.warn('Direct Cloudinary signature failed, falling back to server route:', directErr);
      }

      // 2. Fallback to server /media/upload endpoint if direct upload not available
      if (!uploadSuccess) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', 'hamlo-sports');

        const res = await api.post('/media/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (res.data.success && res.data.data?.url) {
          finalUrl = res.data.data.url;
          uploadSuccess = true;
        }
      }

      if (uploadSuccess && finalUrl) {
        onChange(finalUrl);
        setSuccess(true);
        setSuccessMsg(isVideo ? 'Optimized WebM Video Uploaded to Cloudinary CDN!' : 'Uploaded to Cloudinary CDN!');
        setTimeout(() => setSuccess(false), 4000);
      } else {
        throw new Error('Upload failed. Please check Cloudinary configuration.');
      }
    } catch (err) {
      console.error('Upload Error:', err);
      const msg = err.response?.data?.message || err.message || 'Upload failed.';
      setError(`${msg} (Tip: On Vercel, ensure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are configured in Project Settings -> Environment Variables).`);
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
            <video src={getPreviewUrl(value)} className="w-16 h-12 object-cover rounded bg-black" controls={false} />
          ) : !imgError ? (
            <img 
              src={getPreviewUrl(value)} 
              alt="Preview" 
              onError={() => setImgError(true)}
              className="w-16 h-12 object-cover rounded bg-black" 
            />
          ) : (
            <div className="w-16 h-12 rounded bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-slate-400">
              <ImageIcon size={14} />
              <span className="text-[8px] uppercase tracking-wider font-mono mt-0.5">Asset</span>
            </div>
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
