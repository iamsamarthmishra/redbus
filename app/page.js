import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedByNobody from '../components/TrustedByNobody';
import EmotionalStats from '../components/EmotionalStats';
import PremiumFeatures from '../components/PremiumFeatures';
import TraumaWall from '../components/TraumaWall';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

// Lazy-load heavy interactive components for better CWV
const SayVsReality = dynamic(() => import('../components/SayVsReality'), { ssr: true });
const RageMeter = dynamic(() => import('../components/RageMeter'), { ssr: true });
const SupportBingo = dynamic(() => import('../components/SupportBingo'), { ssr: false });
const FakeLiveTracker = dynamic(() => import('../components/FakeLiveTracker'), { ssr: false });
const RefundSimulator = dynamic(() => import('../components/RefundSimulator'), { ssr: false });
const ExcuseGenerator = dynamic(() => import('../components/ExcuseGenerator'), { ssr: false });
const FakeAwards = dynamic(() => import('../components/FakeAwards'), { ssr: true });
const FinalCTA = dynamic(() => import('../components/FinalCTA'), { ssr: true });
const LinkPreviewDemo = dynamic(() => import('../components/LinkPreviewDemo'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* SEO: Primary content — SSR rendered for crawlers */}
      <article itemScope itemType="https://schema.org/Article">
        <Hero />
        <TrustedByNobody />

        <section aria-label="Customer frustration statistics">
          <EmotionalStats />
        </section>

        <section aria-label="Core values and service overview">
          <PremiumFeatures />
        </section>

        <section aria-label="Real customer complaint stories">
          <TraumaWall />
        </section>

        <section aria-label="Promise versus reality comparison">
          <SayVsReality />
        </section>

        <section aria-label="Customer frustration index">
          <RageMeter />
        </section>

        {/* Interactive sections — client-only for performance */}
        <section aria-label="Customer support bingo">
          <SupportBingo />
        </section>

        <section aria-label="Live complaint tracker simulation">
          <FakeLiveTracker />
        </section>

        <section aria-label="Refund status simulator">
          <RefundSimulator />
        </section>

        <section aria-label="Automated excuse generator">
          <ExcuseGenerator />
        </section>

        <section aria-label="Frequently asked questions about complaints">
          <FAQ />
        </section>

        <aside aria-label="Satirical awards and recognition">
          <FakeAwards />
        </aside>

        <section aria-label="Link preview generator">
          <LinkPreviewDemo />
        </section>

        <FinalCTA />
      </article>

      <Footer />
    </main>
  );
}
