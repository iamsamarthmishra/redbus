import Link from 'next/link';
import { notFound } from 'next/navigation';

const delayData = {
  7: {
    title: '7 Days',
    headline: 'Your Refund is "Being Processed" — For a Week Now',
    description: 'They said 24-48 hours. It has been 7 days. You have started checking your bank statement more often than your social media.',
    tips: [
      'Follow up again via app chat — screenshot everything',
      'Send a formal email to their support email with booking ID and transaction details',
      'Mention that you will escalate to consumer forum if not resolved in 48 hours',
      'Post on Twitter/X tagging their official handle with screenshots',
    ],
    pattern: 'At 7 days, most customers have received 2-3 automated replies saying "your issue has been escalated." No actual refund movement has happened. The support chat still says "24-48 hours."',
  },
  14: {
    title: '14 Days',
    headline: 'Two Weeks of "We Are Looking Into It"',
    description: '14 days. You have now spent more time following up on your refund than the actual journey would have taken. Twice.',
    tips: [
      'File a complaint on the National Consumer Helpline (NCH) portal — consumerhelpline.gov.in',
      'Call 1800-11-4000 (NCH toll-free) and register your complaint',
      'File on ConsumerComplaints.in for public visibility',
      'Send a legal notice draft via email mentioning Consumer Protection Act, 2019',
    ],
    pattern: 'By day 14, the ticket has been "escalated" at least 3 times. You have spoken to multiple support executives who each promise resolution. The refund amount has not moved. Some customers report being told the refund was "already processed" when it clearly wasn\'t.',
  },
  21: {
    title: '21 Days',
    headline: 'Three Weeks — Your Patience Has Officially Expired',
    description: 'Your complaint has now survived longer than most New Year resolutions. The support team has rotated twice. Your ticket is old enough to drink in some countries.',
    tips: [
      'File a complaint with the District Consumer Disputes Redressal Forum',
      'Prepare documentation: booking confirmation, payment proof, all chat transcripts, emails',
      'Consider filing on the e-Daakhil portal (edaakhil.nic.in) for online consumer court filing',
      'Document everything — screenshots of every interaction become evidence',
    ],
    pattern: 'At 21 days, customers report receiving the exact same "24-48 hours" reply they got on day 1. Some tickets have been marked as "resolved" without any actual resolution. The auto-close mechanism has likely kicked in at least once, requiring the customer to reopen the complaint.',
  },
  30: {
    title: '30 Days',
    headline: 'One Month — A Refund That Has Aged Like Fine Neglect',
    description: 'Congratulations, your refund request is now one month old. In this time, you could have learned a new skill, finished a Netflix series, or driven to the destination yourself. Twice.',
    tips: [
      'File a formal consumer court complaint if not already done',
      'Request compensation for mental harassment and opportunity cost',
      'Send formal legal notice via registered post/email',
      'File a complaint with RBI if payment was made via UPI/net banking (for payment reversal)',
    ],
    pattern: '30-day complaints often reveal a pattern: the support system has completely lost track of the original issue. New agents ask for the same information again. The customer has now spent more on phone calls and data than the refund amount itself.',
  },
  45: {
    title: '45 Days',
    headline: '45 Days — Your Refund Request is Now Older Than Some Pregnancies',
    description: 'At this point, your refund request has its own history, character arc, and support staff who have come and gone. It has outlived multiple "final escalations."',
    tips: [
      'Escalate consumer court complaint if filed — request urgent hearing',
      'File a complaint with the respective State Consumer Commission if district forum is unresponsive',
      'Engage a consumer rights lawyer (many offer free initial consultation)',
      'Make your case public — detailed thread on Twitter/X, Reddit, consumer forums',
    ],
    pattern: 'By 45 days, most customers have exhausted every official support channel. The complaint ticket may have been closed and reopened multiple times. Some customers report receiving refunds at this stage — but only partial refunds without explanation.',
  },
  60: {
    title: '60 Days',
    headline: 'Two Months — Your Refund Has Now Entered Philosophical Territory',
    description: 'Does the refund exist? Is it a concept? A promise? A social experiment? At 60 days, these questions are no longer rhetorical.',
    tips: [
      'Consumer court is your primary remedy at this stage',
      'File a complaint with CERT-In if the issue originated from a technical glitch',
      'Document the total financial and emotional impact for compensation claims',
      'Consider writing a detailed blog post or creating a public timeline for awareness',
    ],
    pattern: '60-day cases typically involve multiple support agents, contradictory information, at least one claim that "the refund was already processed," and zero actual money in the customer\'s account. The system has failed at every level.',
  },
  90: {
    title: '90+ Days',
    headline: '90 Days — Your Refund Request Can Now Apply For a Passport',
    description: 'Three months. A quarter of a year. Your refund request has survived seasons, festivals, and probably a couple of their app updates. And yet, here we are.',
    tips: [
      'Consumer court with full documentation and demand for compensation',
      'File with the National Consumer Disputes Redressal Commission for amounts over ₹1 Crore',
      'Media outreach — contact consumer rights journalists',
      'Create a detailed public case study with timeline, screenshots, and evidence',
    ],
    pattern: 'At 90+ days, the customer has essentially been ignored out of the system. The complaint is ancient history for the support team. Auto-closure bots have marked it "resolved" multiple times. The customer has spent more time, energy, and emotional bandwidth than the refund is worth — which is exactly the strategy.',
  },
};

export function generateStaticParams() {
  return Object.keys(delayData).map((days) => ({ days }));
}

export function generateMetadata({ params }) {
  const data = delayData[params.days];
  if (!data) return {};

  return {
    title: `RedBus Refund Delayed ${data.title} — What To Do When Support Doesn't Respond`,
    description: `Your RedBus refund has been pending for ${data.title}. Here's what actually happens at this stage, what to expect from support, and exact steps to escalate your complaint legally.`,
    alternates: {
      canonical: `/refund-delay/${params.days}`,
    },
    openGraph: {
      title: `RedBus Refund Delayed ${data.title} — Escalation Guide`,
      description: `${data.description} Here's how to actually get your money back.`,
    },
  };
}

export default function RefundDelayPage({ params }) {
  const data = delayData[params.days];
  if (!data) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Get RedBus Refund After ${data.title} Delay`,
    description: data.description,
    step: data.tips.map((tip, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: tip,
    })),
  };

  return (
    <main className="min-h-screen bg-bg text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-24 pb-4">
        <ol className="flex items-center gap-2 text-sm text-muted font-mono">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/complaints" className="hover:text-white transition-colors">Complaints</Link></li>
          <li>/</li>
          <li className="text-primary">Refund Delay — {data.title}</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-xs font-mono text-primary tracking-widest uppercase">
            Refund Pending — {data.title}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-black mb-4 leading-tight">
          {data.headline}
        </h1>
        <p className="text-lg text-muted max-w-3xl mb-12 leading-relaxed">
          {data.description}
        </p>

        {/* What Actually Happens */}
        <section className="mb-12">
          <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary" />
            What Actually Happens at {data.title}
          </h2>
          <div className="glass-card p-6">
            <p className="text-white/80 leading-relaxed">{data.pattern}</p>
          </div>
        </section>

        {/* What To Do */}
        <section className="mb-12">
          <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary" />
            What You Should Do Now
          </h2>
          <div className="space-y-3">
            {data.tips.map((tip, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-mono text-primary flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-white/90 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section>
          <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary" />
            Other Refund Delay Durations
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {Object.entries(delayData)
              .filter(([days]) => days !== params.days)
              .map(([days, d]) => (
                <Link
                  key={days}
                  href={`/refund-delay/${days}`}
                  className="glass-card p-4 text-center hover:border-primary/30 transition-all duration-500 block"
                >
                  <p className="text-2xl font-heading font-black text-primary">{days}</p>
                  <p className="text-xs text-muted mt-1">Days</p>
                </Link>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/complaints" className="text-primary text-sm font-mono hover:underline">
              ← All Complaints
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
