'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const excuses = [
  'Unexpected traffic',
  'Driver phone switched off',
  'Technical issue',
  'Festival rush',
  'Bus replacement coming',
  'Server synchronization issue',
  'Weather conditions',
  'Operational constraints',
  'Cosmic imbalance detected',
  'Mercury is in retrograde',
  'Driver lost in metaverse',
  'Bus ran out of optimism',
];

export default function ExcuseGenerator() {
  const [excuse, setExcuse] = useState(excuses[0]);
  const [spinning, setSpinning] = useState(false);

  const generate = () => {
    setSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setExcuse(excuses[Math.floor(Math.random() * excuses.length)]);
      count++;
      if (count > 10) {
        clearInterval(interval);
        setSpinning(false);
      }
    }, 100);
  };

  return (
    <section id="excuses" className="py-28 relative">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Interactive</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-12">
            Excuse{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Generator</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={excuse}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-2xl sm:text-3xl font-heading font-bold mb-8 h-20 flex items-center justify-center ${
                  spinning ? 'animate-glitch text-accent' : 'text-white'
                }`}
              >
                &ldquo;{excuse}&rdquo;
              </motion.p>
            </AnimatePresence>

            <button
              onClick={generate}
              disabled={spinning}
              className="px-8 py-3.5 bg-primary rounded-full font-semibold text-white hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,29,46,0.4)] disabled:opacity-50"
            >
              {spinning ? 'Generating...' : 'Generate Latest Excuse'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
