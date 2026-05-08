'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';

function FakeTracker() {
  const [delay, setDelay] = useState(42);
  useEffect(() => {
    const i = setInterval(() => setDelay((d) => d + Math.floor(Math.random() * 3) + 1), 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="glass-card p-6 w-full max-w-md relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-muted uppercase tracking-widest">Live Tracking</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-red-400 font-mono">DELAYED</span>
        </span>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted">Bus</span>
          <span className="font-mono font-bold">RB-404</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted">Driver</span>
          <span className="font-mono text-red-400 animate-pulse">Unreachable</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted">Delay</span>
          <span className="font-mono text-accent font-bold">+{delay} min</span>
        </div>
      </div>
      {/* Fake route */}
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden mb-3">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
          animate={{ width: ['30%', '45%', '35%', '42%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="flex justify-between text-xs text-muted">
        <span>Mumbai</span>
        <span>Somewhere</span>
        <span>Pune</span>
      </div>
      {/* Blinking status */}
      <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
        <p className="text-xs text-red-400 font-mono animate-pulse">
          ⚠ Driver phone switched off. GPS emotionally unavailable.
        </p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* SEO: Primary H1 — crawlable, visually hidden */}
      <h1 className="sr-only">
        RedBus Customer Complaints — Delayed Refunds, Ignored Tickets, Unresolved Support & Real Passenger Stories in India (2026)
      </h1>

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-xs font-mono text-primary mb-6 tracking-widest uppercase">
              India's #1 Shitty Experience
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black leading-[0.95] mb-6"
            role="heading"
            aria-level="2"
          >
            Your Solution Has{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Departed.
            </span>
            <br />
            Your Hope{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Hasn't.
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted max-w-lg mb-8 leading-relaxed"
          >
            Welcome to <strong className="text-white">Shit-Bus</strong> — India's premium waiting
            experience for passengers who enjoy uncertainty, emotional growth, and customer support
            marathons.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-2 px-7 py-3.5 bg-primary rounded-full font-semibold text-white hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,29,46,0.4)]">
              <HiOutlineLocationMarker className="group-hover:animate-bounce" />
              Track Imaginary Solution
            </button>
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 font-semibold text-muted hover:text-white hover:border-white/30 transition-all duration-300">
              <BiPhoneCall />
              Talk to our Support Agents in 24-48 hours
            </button>
          </motion.div>
        </div>

        {/* Right: Fake tracker */}
        <div className="flex justify-center lg:justify-end">
          <FakeTracker />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </header>
  );
}
