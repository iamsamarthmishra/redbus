'use client';
import { motion } from 'framer-motion';

export default function RageMeter() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Intense red background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-bg to-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-8">Rage Meter</p>
          <h2 className="text-8xl sm:text-9xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 mb-4">
            76%
          </h2>
          <p className="text-2xl sm:text-3xl font-heading font-bold text-white/90 mb-6 max-w-2xl mx-auto leading-snug">
            of passengers refreshed tracking more than 19 times.
          </p>
          <p className="text-lg text-muted max-w-lg mx-auto leading-relaxed">
            Human patience has limits.<br />
            <span className="text-primary">Our delays are researching them.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
