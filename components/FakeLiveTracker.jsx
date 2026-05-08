'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const logs = [
  { time: '18:42', msg: 'Driver stopped for tea.', status: 'info' },
  { time: '19:15', msg: 'Bus took spiritual detour.', status: 'warn' },
  { time: '19:47', msg: 'GPS emotionally unavailable.', status: 'error' },
  { time: '20:03', msg: 'Expected arrival updated again.', status: 'warn' },
  { time: '20:31', msg: 'Route recalculated via parallel universe.', status: 'info' },
  { time: '21:00', msg: 'Driver entered meditation zone.', status: 'error' },
];

export default function FakeLiveTracker() {
  const [activeLog, setActiveLog] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setActiveLog((prev) => (prev + 1) % logs.length), 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Real-time fiction</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            Fake Live{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tracker</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

          {/* Bus info */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-muted uppercase tracking-widest">Bus Number</span>
              <p className="text-3xl font-heading font-black text-white mt-1">RB<span className="text-primary">404</span></p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-muted uppercase tracking-widest">Status</span>
              <p className="text-sm text-accent font-medium mt-1">Somewhere between optimism and reality.</p>
            </div>
          </div>

          {/* Fake route map */}
          <div className="relative h-3 bg-white/5 rounded-full mb-8 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              animate={{ width: ['20%', '50%', '30%', '45%', '25%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-3 h-3 bg-primary rounded-full border-2 border-bg" />
            <div className="absolute top-1/2 left-[50%] -translate-y-1/2 w-3 h-3 bg-white/20 rounded-full border-2 border-bg" />
            <div className="absolute top-1/2 left-[90%] -translate-y-1/2 w-3 h-3 bg-white/20 rounded-full border-2 border-bg" />
          </div>

          <div className="flex justify-between text-xs text-muted mb-8 font-mono">
            <span>Mumbai (Departed?)</span>
            <span>Unknown Location</span>
            <span>Pune (Hopeful)</span>
          </div>

          {/* Live logs */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-muted uppercase tracking-widest">Live Logs</span>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i <= activeLog ? 1 : 0.3 }}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                  i === activeLog ? 'bg-white/[0.03] border border-white/5' : ''
                }`}
              >
                <span className="text-xs font-mono text-muted w-12">{log.time}</span>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  log.status === 'error' ? 'bg-red-500 animate-pulse' :
                  log.status === 'warn' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <span className="text-sm text-white/80">{log.msg}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
