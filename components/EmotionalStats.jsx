'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: 'Passengers still waiting for resolution' },
  { value: 24, suffix: '-48hr', label: 'Standard scripted support reply' },
  { value: 2448, suffix: ' Days', label: 'Average unresolved complaint streak' },
  { value: 100, suffix: '%', label: 'Customers asked to “wait again”' },
  { value: 27, suffix: '%', label: 'Escalations before human response' },
  { value: 2448, suffix: '%', label: 'Users refreshing support mails repeatedly' },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-heading font-black text-white">
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function EmotionalStats() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">The numbers don&apos;t lie</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            Emotional Damage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Statistics</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500 red-glow-hover cursor-default"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-muted text-sm mt-3">{stat.label}</p>
              <div className="w-8 h-[2px] bg-primary/50 mx-auto mt-4 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
