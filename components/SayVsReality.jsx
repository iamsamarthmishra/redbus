'use client';
import { motion } from 'framer-motion';

const rows = [
  { say: 'Live Tracking', reality: 'Last active yesterday' },
  { say: 'Luxury Sleeper', reality: 'Broken recliner physics experiment' },
  { say: 'Refund in 24 hrs', reality: 'A philosophical concept' },
  { say: 'Customer Support', reality: 'Emotional endurance training' },
  { say: 'On-Time Arrival', reality: 'Depends on planetary alignment' },
  { say: 'Instant Confirmation', reality: 'Spiritually confirmed' },
];

export default function SayVsReality() {
  return (
    <section className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Expectation vs Reality</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            What They{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Say</span>
            {' '}vs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Reality</span>
          </h2>
        </motion.div>

        <div className="glass-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-white/10">
            <div className="p-5 text-sm font-mono uppercase tracking-widest text-primary border-r border-white/10">What shit-bus Says</div>
            <div className="p-5 text-sm font-mono uppercase tracking-widest text-accent">What Actually Happens</div>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-2 border-b border-white/5 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="p-5 text-white font-semibold border-r border-white/10">{row.say}</div>
              <div className="p-5 text-muted group-hover:text-accent transition-colors">{row.reality}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
