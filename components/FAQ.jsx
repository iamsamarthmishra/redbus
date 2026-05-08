'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  { q: 'Where is my bus?', a: 'Philosophically or geographically?', img: 'https://scrolldroll.com/wp-content/uploads/2020/08/Kanp-Rahi-Ho-Gangs-Of-Wasseypur-Memes-750x331.jpg' },
  { q: 'Why was my seat changed?', a: 'Growth begins outside comfort zones.', img: 'https://i0.wp.com/www.opindia.com/wp-content/uploads/2019/06/mamata-banerjee.png?fit=760%2C465&ssl=1' },
  { q: 'Why is the driver not answering?', a: 'He is emotionally unavailable.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UJ4Za7O93UPjAJYPf7O9Xa2T1j3b11iQdg&s' },
  { q: 'When will I get my refund?', a: 'Time is a social construct.', img: 'https://indianmemetemplates.com/wp-content/uploads/nahi-munnabhai-mbbs.jpg' },
  { q: 'Why is tracking frozen?', a: 'The GPS entered deep reflection.' },
  { q: 'Can I trust the arrival time?', a: 'That\'s between you and destiny.', img: 'https://media.tenor.com/bs0Na0j7-t8AAAAM/no-no-not-at-all-nahi-nahi-bilkul-nahi.gif' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-28 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Help center</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            FAQs — Because Answers Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Optional</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <HiChevronDown className={`text-primary flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted border-t border-white/5 pt-4">
                      <p className="mb-4">{faq.a}</p>
                      {faq.img && (
                        <div className="rounded-xl overflow-hidden max-w-sm mt-4 border border-white/10">
                          <img src={faq.img} alt="FAQ Meme" className="w-full object-cover" loading="lazy" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
