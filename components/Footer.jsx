'use client';
import { motion } from 'framer-motion';
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Complaints',
    links: [
      { label: 'All Complaints', href: '#reviews' },
      { label: 'kanpur', href: '/#reviews' },
      { label: 'lucknow', href: '/#reviews' },
      { label: 'Allahabad', href: '/#reviews' },
      { label: 'varanasi', href: '/#reviews' },
      { label: 'bhopal', href: '/#reviews' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Refund Delay Guide', href: '/refund-delay/14' },
      { label: 'Support Response Time', href: '/support-response-time' },
      { label: 'Complaint Timeline', href: '/timeline' },
      { label: 'Customer Stories', href: '#reviews' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Animated red divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Logo */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-heading font-black">
                Red<span className="text-primary">Black</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              India&apos;s premium waiting experience. Crafted with frustration, designed with sarcasm, deployed with irony.
            </p>
            {/* Contact for story */}
            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5 inline-block">
              <p className="text-sm text-white/80 font-medium mb-1">Want to add your story?</p>
              <p className="text-xs text-muted">Contact us here: <a href="mailto:nosolution@red-bus.in" className="text-primary hover:underline font-mono">nosolution@red-bus.in</a></p>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-muted hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <div className="text-xs text-muted/60 max-w-4xl mx-auto space-y-4 text-left sm:text-center leading-relaxed">
            <p>
              <strong>Disclaimer:</strong> This is a satirical and consumer-awareness website born from genuine, documented, and verifiable customer frustration — the kind produced by 13+ days of unresolved complaints, repeated &quot;24-48 hours&quot; promises, delayed refunds, ignored support tickets, broken timelines, and endless automated replies.
            </p>
            <p>
              All stories, screenshots, timelines, and customer experiences shared on this platform are based on real user-submitted incidents, publicly available discussions, social media posts, consumer forums, and direct support interactions experienced by us and other affected customers. No fake narratives, manipulated timelines, or fabricated complaints are intentionally published here.
            </p>
            <p>
              This website is protected under Article 19(1)(a) of the Constitution of India relating to Freedom of Speech & Expression, along with the principles of fair comment, honest opinion, consumer awareness, and public criticism. References to company names, trademarks, brands, or services are used strictly for identification, commentary, satire, criticism, and informational purposes under nominative fair use principles.
            </p>
            <p>
              As of 08-May-2026, this website does not claim to impersonate, represent, replicate, or officially affiliate itself with RedBus or any associated company, nor is it intended to violate or infringe existing trademarks, copyrights, or intellectual property rights. Any resemblance to official branding is purely referential in the context of customer commentary and public discussion.
            </p>
            <p>
              <strong>To the Legal & PR teams:</strong> if this website feels damaging, the solution is simple — fix the issues customers are publicly facing. Improve support. Stop copy-pasting &quot;48 hours&quot; replies for weeks. Process legitimate refunds. Resolve complaints before they become public timelines. This platform exists because unresolved customer frustration exists.
            </p>
            <p>
              Every ignored complaint added another line of code. Every delayed refund added another section. Every &quot;we are escalating your issue&quot; message while nothing changed became another screenshot archived here.
            </p>
            <p className="font-mono text-xs uppercase tracking-widest pt-6 text-white/50">
              Built with Next.js, public frustration, and 13+ days of unresolved patience.<br /><br />
              shit*bus — because optimism does not reach the destination.<br /><br />
              This website loads faster than unresolved tickets get solved.
            </p>
          </div>
          <p className="text-xs text-muted/40 mt-12">
            &copy; {new Date().getFullYear()} red-bus. No buses were harmed in the making of this website. Only customer patience.
          </p>
        </div>
      </div>
    </footer>
  );
}
