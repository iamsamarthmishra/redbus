'use client';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineUsers, HiOutlineLightBulb, HiOutlineTrendingUp, HiOutlineHeart, HiOutlineRefresh } from 'react-icons/hi';

const features = [
  { icon: HiOutlineSearch, title: 'Curious', desc: 'We are deeply curious about how many times a customer can hear “24-48 hours” before losing their sanity.' },
  { icon: HiOutlineUsers, title: 'Customer Focus', desc: 'Customers remain at the center of our system — mostly stuck there, waiting endlessly for replies, refunds and real humans.' },
  { icon: HiOutlineLightBulb, title: 'Creativity', desc: 'We constantly invent new ways to delay resolutions while making every response sound automated yet emotionally damaging.' },
  { icon: HiOutlineTrendingUp, title: 'Commitment to Results', desc: 'We take full ownership of escalating your ticket from one support executive to another without producing any actual result.' },
  { icon: HiOutlineHeart, title: 'Caring', desc: 'We genuinely care about your patience, mental stability and screen time as you refresh mails, chats and tracking pages repeatedly.' },
  { icon: HiOutlineRefresh, title: 'Continuous Improvement', desc: 'We continuously improve our ability to respond with the same copy-pasted message across every platform possible.' },
];

export default function PremiumFeatures() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Our core values</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black leading-tight">
            Premium Services.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Premium Neglect.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500 red-glow-hover relative overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <f.icon className="text-3xl text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-heading font-bold mb-3">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
