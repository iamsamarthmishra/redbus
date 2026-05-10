'use client';
import { useState, useEffect } from 'react';
import LinkPreview from './LinkPreview';
import { motion } from 'framer-motion';

export default function LinkPreviewDemo() {
  const [inputUrl, setInputUrl] = useState('https://github.com');
  const [debouncedUrl, setDebouncedUrl] = useState(inputUrl);

  // Debounce the input so we don't spam the API while the user types
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUrl(inputUrl);
    }, 800);
    return () => clearTimeout(timer);
  }, [inputUrl]);

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full text-center mb-8"
      >
        <h2 className="text-3xl font-heading font-black mb-4">Link Preview Test</h2>
        <p className="text-muted text-sm max-w-md mx-auto mb-8">
          Paste any URL below to fetch its Open Graph metadata and generate a beautiful preview card automatically.
        </p>

        <div className="relative w-full max-w-md mx-auto">
          <input
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none text-white/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="w-full flex justify-center min-h-[320px]">
        {debouncedUrl ? (
          <LinkPreview url={debouncedUrl} />
        ) : (
          <div className="text-white/30 text-sm italic mt-12">
            Waiting for URL...
          </div>
        )}
      </div>
    </div>
  );
}
