import Link from 'next/link';

export const metadata = {
  title: 'All RedBus Complaints — City-wise, Route-wise & Issue-wise Archive',
  description:
    'Browse documented RedBus customer complaints by city, operator type, and refund delay duration. Real stories from passengers across Mumbai, Delhi, Bangalore, Chennai, Pune, Hyderabad and more.',
  alternates: {
    canonical: '/complaints',
  },
  openGraph: {
    title: 'RedBus Complaints Archive — Every Documented Issue in One Place',
    description:
      'City-wise, route-wise, and issue-wise archive of real RedBus customer complaints. Delayed refunds, cancelled buses, ignored support tickets — all documented.',
  },
};

const cities = [
  { slug: 'mumbai', name: 'Mumbai', complaints: 847 },
  { slug: 'delhi', name: 'Delhi', complaints: 723 },
  { slug: 'bangalore', name: 'Bangalore', complaints: 691 },
  { slug: 'chennai', name: 'Chennai', complaints: 534 },
  { slug: 'hyderabad', name: 'Hyderabad', complaints: 512 },
  { slug: 'pune', name: 'Pune', complaints: 489 },
  { slug: 'kolkata', name: 'Kolkata', complaints: 367 },
  { slug: 'jaipur', name: 'Jaipur', complaints: 298 },
  { slug: 'lucknow', name: 'Lucknow', complaints: 276 },
  { slug: 'ahmedabad', name: 'Ahmedabad', complaints: 254 },
  { slug: 'indore', name: 'Indore', complaints: 198 },
  { slug: 'bhopal', name: 'Bhopal', complaints: 187 },
  { slug: 'nagpur', name: 'Nagpur', complaints: 165 },
  { slug: 'gwalior', name: 'Gwalior', complaints: 143 },
  { slug: 'patna', name: 'Patna', complaints: 132 },
];

const refundDelays = [
  { days: 7, label: '7 Days', count: 1243 },
  { days: 14, label: '14 Days', count: 987 },
  { days: 21, label: '21 Days', count: 654 },
  { days: 30, label: '30 Days', count: 432 },
  { days: 45, label: '45 Days', count: 298 },
  { days: 60, label: '60 Days', count: 187 },
  { days: 90, label: '90+ Days', count: 98 },
];

const issueTypes = [
  { slug: 'bus-not-arrived', label: 'Bus Never Arrived', icon: '🚫' },
  { slug: 'refund-pending', label: 'Refund Pending', icon: '💸' },
  { slug: 'support-not-responding', label: 'Support Not Responding', icon: '📵' },
  { slug: 'seat-changed', label: 'Seat Changed Without Notice', icon: '💺' },
  { slug: 'ac-not-working', label: 'AC Not Working', icon: '🥵' },
  { slug: 'driver-unreachable', label: 'Driver Unreachable', icon: '📱' },
  { slug: 'bus-cancelled', label: 'Bus Cancelled No Notice', icon: '❌' },
  { slug: 'tracking-wrong', label: 'GPS/Tracking Wrong', icon: '📍' },
];

export default function ComplaintsHub() {
  return (
    <main className="min-h-screen bg-bg text-white">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-24 pb-4">
        <ol className="flex items-center gap-2 text-sm text-muted font-mono">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-primary">Complaints</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h1 className="text-4xl sm:text-5xl font-heading font-black mb-4">
          RedBus Complaints{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Archive
          </span>
        </h1>
        <p className="text-lg text-muted max-w-3xl mb-16 leading-relaxed">
          Browse real, documented customer complaints organized by city, issue type, and refund delay duration.
          Every story here is based on actual passenger experiences reported across consumer forums and social media.
        </p>

        {/* City-wise Complaints */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary" />
            Complaints by City
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/complaints/${city.slug}`}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-500 red-glow-hover block"
              >
                <h3 className="text-lg font-heading font-bold group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {city.complaints}+ documented complaints
                </p>
                <div className="w-6 h-[2px] bg-primary/50 mt-3 group-hover:w-12 transition-all duration-500" />
              </Link>
            ))}
          </div>
        </section>

        {/* Refund Delay */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary" />
            Complaints by Refund Delay
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {refundDelays.map((delay) => (
              <Link
                key={delay.days}
                href={`/refund-delay/${delay.days}`}
                className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500 red-glow-hover block"
              >
                <p className="text-3xl font-heading font-black text-primary">{delay.days}+</p>
                <p className="text-xs text-muted mt-1 font-mono uppercase tracking-wider">Days Waiting</p>
                <p className="text-xs text-muted/60 mt-2">{delay.count} reports</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Issue Types */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary" />
            Complaints by Issue Type
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {issueTypes.map((issue) => (
              <div
                key={issue.slug}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-500 red-glow-hover cursor-default"
              >
                <span className="text-2xl mb-3 block">{issue.icon}</span>
                <h3 className="text-sm font-heading font-bold">{issue.label}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary" />
            More Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/support-response-time" className="glass-card p-6 hover:border-primary/30 transition-all duration-500 block">
              <h3 className="font-heading font-bold mb-1">Support Response Time Analysis</h3>
              <p className="text-sm text-muted">How long does RedBus actually take to respond?</p>
            </Link>
            <Link href="/timeline" className="glass-card p-6 hover:border-primary/30 transition-all duration-500 block">
              <h3 className="font-heading font-bold mb-1">13+ Days Complaint Timeline</h3>
              <p className="text-sm text-muted">A complete escalation timeline of unresolved complaints.</p>
            </Link>
            <Link href="/#reviews" className="glass-card p-6 hover:border-primary/30 transition-all duration-500 block">
              <h3 className="font-heading font-bold mb-1">Customer Stories</h3>
              <p className="text-sm text-muted">15 real customer stories from verified sufferers.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
