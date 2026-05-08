'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const memes = [
  {
    src: '/memes/goose.png',
    caption: 'When support asks "Can you explain the issue again?"',
    alt: 'Wo sab to theek hai par tu hai kon meme - confused goose',
  },
  {
    src: '/memes/bear.png',
    caption: 'Writing your 7th follow-up email to support',
    alt: 'Kya likhu samajh nahi aa raha meme - confused bear on phone',
  },
  {
    src: '/memes/ignore.png',
    caption: 'When your complaint gets auto-closed as "resolved"',
    alt: 'Haay ignore kar diya meme - sad stick figure',
  },
  {
    src: '/memes/doge.png',
    caption: 'Support team every time you ask for a refund update',
    alt: 'Kal aana kal meme - sad doge',
  },
  {
    src: '/memes/skeleton.png',
    caption: 'Still waiting for that "24-48 hours" refund',
    alt: 'Customer waiting for 24-48 hours refund skeleton meme',
  },
];

export default function MemeGallery() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">
            Meme therapy
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            When Words Fail,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Memes Speak.
            </span>
          </h2>
          <p className="text-muted text-sm mt-4 max-w-lg mx-auto">
            Because sometimes the only way to cope with support trauma is through memes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500 red-glow-hover cursor-pointer"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={meme.src}
                  alt={meme.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <p className="text-sm text-white/80 leading-relaxed">
                  {meme.caption}
                </p>
                <div className="w-6 h-[2px] bg-primary/50 mt-3 group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted/50 text-xs mt-10 font-mono"
        >
          * These memes are community-sourced expressions of genuine frustration. Laugh now, cry later.
        </motion.p>
      </div>
    </section>
  );
}
