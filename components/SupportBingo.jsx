'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const cells = [
  'Please wait', 'Escalated', 'Driver unreachable',
  'Refund initiated', 'Technical issue', 'Server down',
  'We understand your concern', 'Team is checking', 'Retry after sometime',
  'Kindly cooperate', 'We apologize', 'Unexpected traffic',
  { type: 'image', src: '/memes/goose.png', alt: 'Goose meme' },
  { type: 'image', src: '/memes/bear.png', alt: 'Bear meme' },
  { type: 'image', src: '/memes/ignore.png', alt: 'Ignore meme' },
  { type: 'image', src: '/memes/doge.png', alt: 'Doge meme' },
  { type: 'image', src: '/memes/skeleton.png', alt: 'Skeleton meme' },
  'Share booking ID', 'Wait 24-48 hrs', 'Auto-closing ticket',
  'Let me transfer you', 'No supervisor', 'System upgrade', 'Feedback noted'
];

const CENTER = 'SOUL LEFT BODY';

export default function SupportBingo() {
  const [selected, setSelected] = useState(new Set());
  const [bingo, setBingo] = useState(false);

  const toggle = (idx) => {
    const next = new Set(selected);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setSelected(next);

    // Check rows/cols for bingo (simplified: if all in a row are selected)
    const grid = [];
    let cellIdx = 0;
    for (let r = 0; r < 5; r++) {
      grid[r] = [];
      for (let c = 0; c < 5; c++) {
        if (r === 2 && c === 2) {
          grid[r][c] = true; // center always selected
        } else {
          grid[r][c] = next.has(cellIdx);
          cellIdx++;
        }
      }
    }

    // Check rows, cols, diags
    for (let i = 0; i < 5; i++) {
      if (grid[i].every(Boolean)) { setBingo(true); return; }
      if (grid.every(row => row[i])) { setBingo(true); return; }
    }
    if ([0,1,2,3,4].every(i => grid[i][i])) { setBingo(true); return; }
    if ([0,1,2,3,4].every(i => grid[i][4-i])) { setBingo(true); return; }
    setBingo(false);
  };

  const allCells = [];
  let cellIdx = 0;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (r === 2 && c === 2) {
        allCells.push({ text: CENTER, isCenter: true, idx: -1 });
      } else {
        allCells.push({ text: cells[cellIdx], isCenter: false, idx: cellIdx });
        cellIdx++;
      }
    }
  }

  return (
    <section id="support" className="py-28 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Interactive</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            Customer Support{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Bingo</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {allCells.map((cell, i) => {
            const isImage = typeof cell.text === 'object' && cell.text?.type === 'image';
            return (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => !cell.isCenter && toggle(cell.idx)}
                className={`relative aspect-square flex items-center justify-center p-2 rounded-xl text-[10px] sm:text-xs font-semibold text-center transition-all duration-300 border overflow-hidden ${
                  cell.isCenter
                    ? 'bg-primary/30 border-primary text-white font-bold'
                    : selected.has(cell.idx)
                    ? 'bg-primary/20 border-primary/60 text-white'
                    : 'bg-card border-white/5 text-muted hover:border-white/20'
                }`}
              >
                {cell.isCenter ? (
                  <span className="relative z-10">{cell.text}</span>
                ) : isImage ? (
                  <>
                    <Image 
                      src={cell.text.src} 
                      alt={cell.text.alt} 
                      fill 
                      sizes="(max-width: 640px) 20vw, 150px" 
                      className={`object-cover transition-opacity duration-300 ${selected.has(cell.idx) ? 'opacity-30' : 'opacity-80 hover:opacity-100'}`} 
                    />
                    {selected.has(cell.idx) && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <span className="text-2xl sm:text-4xl font-black text-white drop-shadow-lg">✕</span>
                      </div>
                    )}
                  </>
                ) : (
                  <span className="relative z-10">{cell.text}</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Bingo achievement popup */}
        <AnimatePresence>
          {bingo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setBingo(false)}
            >
              <div className="glass-card p-12 text-center max-w-md red-glow">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-3xl font-heading font-black text-primary mb-3">BINGO!</h3>
                <p className="text-xl font-bold mb-2">Achievement Unlocked:</p>
                <p className="text-accent font-mono text-lg mb-6">Customer Support Survivor</p>
                <button
                  onClick={() => setBingo(false)}
                  className="px-6 py-2.5 bg-primary rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Accept Trauma
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
