import Link from 'next/link';

export const metadata = {
  title: '13+ Days of Unresolved RedBus Complaints — A Complete Timeline',
  description:
    'Day-by-day timeline of how RedBus handles (or doesn\'t handle) customer complaints. From first contact to complete abandonment — documented with real interaction patterns and support behavior.',
  alternates: {
    canonical: '/timeline',
  },
  openGraph: {
    title: '13+ Days of Unresolved Complaints — The Complete RedBus Support Timeline',
    description: 'A day-by-day breakdown of what happens when you file a complaint with RedBus. Spoiler: nothing good.',
  },
};

const days = [
  {
    day: 1,
    title: 'First Contact — Hope is Alive',
    status: 'Ticket Opened',
    statusColor: 'text-green-400',
    events: [
      'You contact support via app chat or call',
      'Bot asks for booking ID, phone number, email — the holy trinity',
      'After 15 minutes, you reach a human agent',
      'Agent says: "I understand your concern. Let me check."',
      'After 10 minutes of hold music: "This will be resolved in 24-48 hours."',
      'You receive an automated SMS: "Your complaint has been registered."',
    ],
    mood: 'Cautiously optimistic. You still believe in the system.',
  },
  {
    day: 2,
    title: 'The Silence Begins',
    status: 'Pending',
    statusColor: 'text-yellow-400',
    events: [
      'No update via SMS, email, or app notification',
      'You check the app — complaint status shows "In Progress"',
      'You wait. Because they said 24-48 hours. You trust the process.',
    ],
    mood: 'Patient. The 48-hour window hasn\'t closed yet.',
  },
  {
    day: 3,
    title: 'The 48-Hour Mark — Round 2',
    status: 'No Update',
    statusColor: 'text-yellow-400',
    events: [
      '48 hours have passed. No resolution.',
      'You contact support again. New agent.',
      'New agent asks the same 3 questions from Day 1.',
      'Agent says: "I can see the ticket. Let me escalate this."',
      '"This will be resolved in 24-48 hours." (Sound familiar?)',
    ],
    mood: 'Irritated. The déjà vu is strong.',
  },
  {
    day: 5,
    title: 'Escalation Theater',
    status: 'Escalated',
    statusColor: 'text-orange-400',
    events: [
      'You contact support for the third time',
      'Agent says: "This has been escalated to the senior team."',
      'You ask for the senior team\'s contact. "That\'s not possible, sir."',
      'You ask for a timeline. "24-48 hours."',
      'You realize the entire support script has exactly one timeline: 24-48 hours.',
    ],
    mood: 'Angry. You start googling "consumer court complaint process."',
  },
  {
    day: 7,
    title: 'The Auto-Close Trap',
    status: '⚠ Auto-Resolved',
    statusColor: 'text-red-400',
    events: [
      'You receive an SMS: "Your complaint has been resolved."',
      'Your complaint has NOT been resolved.',
      'You check the app — ticket is marked "Closed"',
      'You reopen the ticket. Start from scratch.',
      'New agent. Same 3 questions. Same 24-48 hours.',
    ],
    mood: 'Furious. The audacity of marking it "resolved" is breathtaking.',
  },
  {
    day: 9,
    title: 'Social Media Escalation',
    status: 'Reopened',
    statusColor: 'text-orange-400',
    events: [
      'You tweet about your experience tagging their official handle',
      'Within 4 hours, they reply: "Please DM us your booking details."',
      'You DM them. They ask the same 3 questions.',
      '"We have forwarded this to the concerned team. 24-48 hours."',
      'At least Twitter engagement was faster than their app support.',
    ],
    mood: 'Resigned rage. You\'re now fighting on multiple fronts.',
  },
  {
    day: 11,
    title: 'The Accountability Void',
    status: 'Escalated (Again)',
    statusColor: 'text-orange-400',
    events: [
      'You call support and ask to speak to a supervisor',
      'Agent says: "I am the senior executive handling this."',
      'You ask for their employee ID. They hesitate.',
      'You ask for an email confirmation. "We will send it."',
      'No email arrives. No callback. No resolution.',
    ],
    mood: 'Cold determination. This is no longer about the refund. It\'s about principle.',
  },
  {
    day: 13,
    title: 'The Breaking Point — This Website is Born',
    status: '🔥 Unresolved',
    statusColor: 'text-red-500',
    events: [
      'Day 13. No refund. No resolution. No empathy.',
      'Every channel has been tried: app, chat, phone, email, Twitter',
      'Total support interactions: 8+',
      'Total times told "24-48 hours": 6+',
      'Total actual resolution: Zero',
      'This website goes live. Built with Next.js and frustration.',
      'Every ignored complaint became a line of code.',
      'Every "24-48 hours" became a section.',
      'Every auto-closed ticket became a feature.',
    ],
    mood: 'Transcendent. You have moved beyond anger into creation.',
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-bg text-white">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-24 pb-4">
        <ol className="flex items-center gap-2 text-sm text-muted font-mono">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-primary">Complaint Timeline</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <h1 className="text-4xl sm:text-5xl font-heading font-black mb-4 leading-tight">
          13+ Days of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Unresolved Complaints
          </span>
        </h1>
        <p className="text-lg text-muted max-w-3xl mb-16 leading-relaxed">
          A day-by-day timeline documenting how a simple customer complaint transforms into an existential crisis.
          Based on real support interactions and documented escalation patterns.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-8">
            {days.map((day, i) => (
              <div key={i} className="relative pl-16">
                {/* Day marker */}
                <div className="absolute left-0 w-12 h-12 rounded-full bg-bg border-2 border-primary/50 flex items-center justify-center text-sm font-mono font-bold text-primary z-10">
                  D{day.day}
                </div>

                <div className="glass-card p-6 hover:border-primary/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <h2 className="text-lg font-heading font-bold">{day.title}</h2>
                    <span className={`text-xs font-mono uppercase tracking-wider ${day.statusColor}`}>
                      {day.status}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {day.events.map((event, j) => (
                      <li key={j} className="text-sm text-white/80 leading-relaxed flex items-start gap-2">
                        <span className="text-primary/50 mt-1 flex-shrink-0">›</span>
                        {event}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-white/5">
                    <p className="text-xs text-muted italic">
                      <span className="text-primary font-mono">MOOD:</span> {day.mood}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-muted text-sm">
            This timeline is ongoing. The complaints remain unresolved.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/complaints" className="text-primary text-sm font-mono hover:underline">
              Browse All Complaints →
            </Link>
            <Link href="/support-response-time" className="text-primary text-sm font-mono hover:underline">
              View Response Time Data →
            </Link>
            <Link href="/refund-delay/13" className="text-primary text-sm font-mono hover:underline">
              Refund Delay Guide →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
