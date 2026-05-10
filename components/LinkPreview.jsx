'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LinkPreview({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    let isMounted = true;
    setLoading(true);
    setError(false);

    async function fetchMetadata() {
      try {
        const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
        if (!res.ok) throw new Error('Failed to fetch metadata');
        const metadata = await res.json();
        
        if (isMounted) {
          setData(metadata);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchMetadata();

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (!url) return null;

  if (loading) {
    return (
      <div className="w-full max-w-md rounded-xl overflow-hidden bg-white/5 border border-white/10 animate-pulse">
        <div className="w-full h-48 bg-white/10"></div>
        <div className="p-4 space-y-3">
          <div className="h-5 bg-white/10 rounded w-3/4"></div>
          <div className="h-4 bg-white/10 rounded w-full"></div>
          <div className="h-4 bg-white/10 rounded w-5/6"></div>
          <div className="h-3 bg-white/10 rounded w-1/4 mt-2"></div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      </a>
    );
  }

  return (
    <motion.a
      href={data.url || url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px -15px rgba(225,29,46,0.15)' }}
      transition={{ duration: 0.3 }}
      className="block w-full max-w-md rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10 hover:border-primary/50 group"
    >
      {/* Banner Image */}
      <div className="w-full h-48 bg-white/5 relative overflow-hidden flex items-center justify-center">
        {data.image ? (
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Fallback Image / Icon */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white/5 ${data.image ? 'hidden' : 'flex'}`}>
          <svg className="w-12 h-12 text-white/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="text-sm font-mono text-white/40 uppercase tracking-widest">{data.domain}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-black/40 backdrop-blur-md">
        <h3 className="text-white font-semibold text-base line-clamp-1 mb-1 group-hover:text-primary transition-colors">
          {data.title || data.domain}
        </h3>
        
        {data.description && (
          <p className="text-muted text-sm line-clamp-2 mb-3">
            {data.description}
          </p>
        )}
        
        <div className="flex items-center text-xs font-mono text-white/40 uppercase tracking-wider">
          {data.domain}
        </div>
      </div>
    </motion.a>
  );
}
