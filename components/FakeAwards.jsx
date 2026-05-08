'use client';
import { motion } from 'framer-motion';
import { HiOutlineStar } from 'react-icons/hi';

const awards = [
  'Fastest Refund Delay',
  'Most Creative Excuses',
  'Lifetime Achievement in Waiting',
  'Best Invisible Support Team',
  'Excellence in Passenger Confusion',
  'Most Emotionally Challenging Journey',
];

export default function FakeAwards() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            Awards We Would Win If{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Honesty Existed</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500 red-glow-hover relative overflow-hidden cursor-default"
            >
              {/* Shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20">
                  <HiOutlineStar className="text-2xl text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold">{award}</h3>
                <p className="text-xs text-muted mt-3 font-mono">2006 — Present</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
