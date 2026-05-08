'use client';
import { motion } from 'framer-motion';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-red-950/20 to-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[200px] animate-pulse-red" />
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-6">One last thing</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6">
            Still booking{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">with us?</span>
          </h2>
          <p className="text-xl text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            Because hope survives longer than battery percentage.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 bg-primary rounded-full font-bold text-white hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_50px_rgba(225,29,46,0.5)] text-lg">
              <HiOutlineTicket className="group-hover:rotate-12 transition-transform" />
              Book Another Shit Experience
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 font-bold text-muted hover:text-white hover:border-white/30 transition-all duration-300 text-lg">
              <BiPhoneCall />
              Talk to Support Again
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
