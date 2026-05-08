'use client';
import { motion } from 'framer-motion';

const fakePartners = ['DelayExpress', 'GhostTravels', 'RefundPending Inc.', 'LostLuggage Corp', 'LateLines'];

export default function TrustedByNobody() {
  const doubled = [...fakePartners, ...fakePartners];
  return (
    <section className="py-24 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-muted uppercase tracking-[0.3em] mb-4"
        >
          Partners in chaos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-black"
        >
          Trusted by{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            absolutely no one.
          </span>
        </motion.h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div key={i} className="flex-shrink-0 mx-12 flex items-center gap-3 opacity-30 hover:opacity-60 transition-opacity">
              <span className="w-3 h-3 rounded-full bg-primary/50" />
              <span className="text-2xl font-heading font-bold whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
