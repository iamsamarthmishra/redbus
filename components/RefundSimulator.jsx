'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RefundSimulator() {
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };

  return (
    <section className="py-28 relative">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-6 relative z-10">Simulation</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-black mb-8 relative z-10">Your Refund Progress</h2>

          {/* Progress bar */}
          <div className="relative h-6 bg-white/5 rounded-full overflow-hidden mb-4 z-10">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full progress-stuck"
              style={{ width: '97%' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-white drop-shadow-lg">97%</span>
            </div>
          </div>

          <p className="text-muted text-sm mb-8 relative z-10">
            Final approval pending since the previous financial year.
          </p>

          <button
            onClick={handleRefresh}
            disabled={loading}
            className="relative z-10 px-8 py-3 bg-primary rounded-full font-semibold text-white hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,29,46,0.4)] disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing...
              </span>
            ) : (
              'Refresh Disappointment'
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
