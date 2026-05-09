'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

const links = [
  { label: 'Complaints', href: '/#reviews' },
  { label: 'Stories', href: '/#reviews' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Support Data', href: '/support-response-time' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
        : 'bg-transparent backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-heading font-black tracking-tight flex items-center gap-1.5">
            <span className="line-through decoration-primary decoration-[2px] text-white/30 text-[1.1rem]">Red</span>
            <span>shit<span className="text-primary">-bus</span></span>
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-red inline-block" />
        </a>

        {/* Center links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/50 text-sm font-semibold text-white hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(225,29,46,0.3)] transition-all duration-300">
          <HiOutlineLocationMarker className="text-primary" />
          Track vo nahi ho payega
        </button>
      </div>
    </motion.nav>
  );
}
