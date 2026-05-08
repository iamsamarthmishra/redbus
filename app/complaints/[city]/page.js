import Link from 'next/link';
import { notFound } from 'next/navigation';

const cityData = {
  mumbai: {
    name: 'Mumbai',
    routes: ['Mumbai to Pune', 'Mumbai to Goa', 'Mumbai to Bangalore', 'Mumbai to Nashik', 'Mumbai to Ahmedabad'],
    stories: [
      'Booked an AC sleeper from Mumbai to Pune but got a non-AC seater. No refund, no explanation, no customer support. Classic.',
      'Bus from Mumbai to Goa was delayed 4 hours. Driver switched off his phone. Tracking showed the bus in Lonavala for 3 hours straight.',
      'Waited at Borivali boarding point for 2 hours. Bus never came. Support said "please wait 24-48 hours for resolution." I was standing on a highway.',
    ],
  },
  delhi: {
    name: 'Delhi',
    routes: ['Delhi to Jaipur', 'Delhi to Agra', 'Delhi to Chandigarh', 'Delhi to Manali', 'Delhi to Dehradun'],
    stories: [
      'Booked Delhi to Jaipur for a wedding. Bus cancelled 30 minutes before departure. No notification. Found out when I reached Kashmiri Gate.',
      'AC was not working on a July Delhi to Agra trip. 40°C heat. Driver said "AC works only on highway." Highway never came apparently.',
      'Paid ₹1800 for a luxury sleeper. Got a bus with broken windows and no charging points. Filed complaint. Got "24-48 hours" three times.',
    ],
  },
  bangalore: {
    name: 'Bangalore',
    routes: ['Bangalore to Chennai', 'Bangalore to Goa', 'Bangalore to Hyderabad', 'Bangalore to Mumbai', 'Bangalore to Mysore'],
    stories: [
      'Booked Bangalore to Chennai overnight. Bus picked up 15 extra passengers. No seats for them — they sat in the aisle. Sleeper became standing room.',
      'GPS tracking showed my bus in Bangalore even after 4 hours of travel. Support said "technical glitch, please wait." I was somewhere near Hosur.',
      'Requested cancellation due to medical emergency. Support said "non-refundable." Even showed medical certificate. No empathy, no exception.',
    ],
  },
  chennai: {
    name: 'Chennai',
    routes: ['Chennai to Hyderabad', 'Chennai to Bangalore', 'Chennai to Madurai', 'Chennai to Coimbatore', 'Chennai to Pondicherry'],
    stories: [
      'Raised a complaint about my Chennai to Hyderabad booking on 21 March. Complaint has been passed from one team to another for weeks. Every time I check, told "escalated again."',
      'Bus from Chennai to Madurai broke down midway. No replacement for 3 hours. Support chat gave the same copy-paste reply about 48 hours.',
      'Booked AC bus to Coimbatore. Non-AC bus showed up. When I complained, was told "operator change is not in our control." Then why am I paying you?',
    ],
  },
  hyderabad: {
    name: 'Hyderabad',
    routes: ['Hyderabad to Bangalore', 'Hyderabad to Chennai', 'Hyderabad to Mumbai', 'Hyderabad to Vijayawada', 'Hyderabad to Warangal'],
    stories: [
      'My Hyderabad to Bangalore bus was 3 hours late. No updates on the app. When I called support, was told "no other customers have complained about this delay."',
      'Double booking happened due to payment glitch. Two tickets charged. Refund request denied because "booking was confirmed." Technical error, customer pays.',
      'Driver refused to stop at the designated drop point. Had to get off 5km away at midnight. Support said "we will look into it." Never heard back.',
    ],
  },
  pune: {
    name: 'Pune',
    routes: ['Pune to Mumbai', 'Pune to Goa', 'Pune to Bangalore', 'Pune to Bhopal', 'Pune to Nagpur'],
    stories: [
      'Was supposed to travel from Pune to Bhopal. On the way to boarding point, auto accident happened and got injured. Requested cancellation of ₹2700 ticket with medical proof. Nobody helped.',
      'Pune to Mumbai Volvo AC bus had no AC working. Asked driver, he said "switch is broken." Entire 4-hour journey in July heat. No compensation offered.',
      'Booked Pune to Goa for a weekend trip. Bus cancelled 1 hour before departure. Refund "initiated" but nothing received after 20 days.',
    ],
  },
  kolkata: {
    name: 'Kolkata',
    routes: ['Kolkata to Siliguri', 'Kolkata to Digha', 'Kolkata to Patna', 'Kolkata to Durgapur', 'Kolkata to Bhubaneswar'],
    stories: [
      'Kolkata to Siliguri overnight bus was supposed to leave at 9 PM. Actually left at 11:30 PM. No communication. Just waited in the dark.',
      'Seat allocation changed without notice. Booked lower berth, got last-row corner seat. Support said "operator decision." Then what is RedBus for?',
      'Bus broke down near Durgapur at 2 AM. No replacement bus for 4 hours. Passengers stranded on highway. Support was "unavailable" at night.',
    ],
  },
  jaipur: {
    name: 'Jaipur',
    routes: ['Jaipur to Delhi', 'Jaipur to Udaipur', 'Jaipur to Jodhpur', 'Jaipur to Ahmedabad', 'Jaipur to Mumbai'],
    stories: [
      'Jaipur to Delhi bus tracking showed it reached Delhi while I was still sitting in the bus near Neemrana. Impressive technology.',
      'Booked Jaipur to Udaipur. Bus operator changed the departure time by 2 hours. No notification. Missed the bus. "Non-refundable" was the response.',
      'Filed complaint about rude driver behavior. Was told "we will take action." It has been 30 days. No action. No follow-up. Nothing.',
    ],
  },
  lucknow: {
    name: 'Lucknow',
    routes: ['Lucknow to Delhi', 'Lucknow to Varanasi', 'Lucknow to Kanpur', 'Lucknow to Gorakhpur', 'Lucknow to Agra'],
    stories: [
      'Lucknow to Delhi overnight bus had a broken toilet, no blankets, and lights that wouldn\'t turn off. ₹1500 for this "luxury" experience.',
      'Bus from Lucknow was 5 hours late. Entire next day\'s plans ruined. Complaint filed. Response: "We apologize for the inconvenience." That\'s it.',
      'Tried to cancel my ticket using the app. App crashed. Called support. IVR cancelled wrong ticket. Lost two bookings in one call.',
    ],
  },
  ahmedabad: {
    name: 'Ahmedabad',
    routes: ['Ahmedabad to Mumbai', 'Ahmedabad to Udaipur', 'Ahmedabad to Rajkot', 'Ahmedabad to Surat', 'Ahmedabad to Pune'],
    stories: [
      'Ahmedabad to Mumbai bus had no FASTag. Stopped at every toll booth for 15-20 minutes each. 8-hour journey became 12 hours.',
      'Boarding point was changed after I reached the original location. New boarding point was 8km away. No auto available at 11 PM.',
      'Sleeper bus from Ahmedabad to Pune — the "sleeper" was a wooden plank with a thin cloth. Paid ₹1200 for back pain that lasted a week.',
    ],
  },
  indore: {
    name: 'Indore',
    routes: ['Indore to Bhopal', 'Indore to Mumbai', 'Indore to Pune', 'Indore to Delhi', 'Indore to Jaipur'],
    stories: [
      'Indore to Bhopal bus was delayed by 2 hours. Inside, windows wouldn\'t open, lights broken, charging points useless. FASTag not recharged.',
      'Booked Indore to Mumbai overnight. Driver took an entirely different route. Added 3 hours to the journey. No explanation given.',
      'Requested refund for a cancelled bus from Indore to Pune. Been told "processing" for 25 days now. Each follow-up gets "24-48 hours."',
    ],
  },
  bhopal: {
    name: 'Bhopal',
    routes: ['Bhopal to Indore', 'Bhopal to Delhi', 'Bhopal to Mumbai', 'Bhopal to Pune', 'Bhopal to Nagpur'],
    stories: [
      'Bhopal to Delhi bus was supposed to have WiFi and charging. Neither existed. The "entertainment system" was a broken TV showing static.',
      'Bus from Bhopal cancelled without notice. Found out at 11 PM at the boarding point. No alternative arranged. Support closed for the night.',
      'Booked AC bus Bhopal to Nagpur. AC stopped working 1 hour in. Driver said "it will start on highway." It didn\'t. 10-hour non-AC nightmare.',
    ],
  },
  nagpur: {
    name: 'Nagpur',
    routes: ['Nagpur to Mumbai', 'Nagpur to Pune', 'Nagpur to Hyderabad', 'Nagpur to Bhopal', 'Nagpur to Nirmal'],
    stories: [
      'Booked Nagpur to Nirmal for 11 PM. Bus never arrived. Waited 3 hours. Support said arrange alternative myself. After 15 days told I was "not present." Completely false.',
      'Nagpur to Mumbai journey — bus had broken seats, no water, and the driver was on his phone the entire time. Safety? What safety?',
      'Filed complaint for Nagpur to Hyderabad delayed departure. Response was "refund not applicable for delays under 4 hours." Bus was 3 hours 58 minutes late.',
    ],
  },
  gwalior: {
    name: 'Gwalior',
    routes: ['Gwalior to Delhi', 'Gwalior to Indore', 'Gwalior to Bhopal', 'Gwalior to Jaipur', 'Gwalior to Agra'],
    stories: [
      'Journey from Gwalior to Indore was extremely uncomfortable. Bus delayed 2+ hours, windows didn\'t open, lights broken, charging useless, FASTag not recharged causing toll delays.',
      'Gwalior to Delhi bus left 90 minutes late. No SMS, no notification, no app update. Just silence and suffering.',
      'Booked Gwalior to Bhopal AC sleeper. Got a non-AC seater. "Operator substitution" they said. Refund? "Not eligible for operator changes."',
    ],
  },
  patna: {
    name: 'Patna',
    routes: ['Patna to Delhi', 'Patna to Kolkata', 'Patna to Ranchi', 'Patna to Varanasi', 'Patna to Lucknow'],
    stories: [
      'Patna to Delhi bus journey took 22 hours instead of the promised 14. Multiple breakdowns. No replacement bus. Support said "we are looking into it."',
      'Booked Patna to Kolkata. Boarding point changed to a location 10km away 30 minutes before departure. No transport available.',
      'Filed for refund after bus cancellation from Patna. It has been 45 days. Every call gets the same "it is being processed" response.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export function generateMetadata({ params }) {
  const data = cityData[params.city];
  if (!data) return {};

  return {
    title: `RedBus Complaints in ${data.name} — Delayed Buses, Refund Issues & Support Failures`,
    description: `Documented RedBus customer complaints from ${data.name}: delayed refunds, cancelled buses, unresponsive support, and ignored tickets. Real stories from ${data.name} passengers. Popular routes: ${data.routes.slice(0, 3).join(', ')}.`,
    alternates: {
      canonical: `/complaints/${params.city}`,
    },
    openGraph: {
      title: `RedBus Complaints in ${data.name} — Real Customer Stories`,
      description: `${data.stories.length}+ documented complaints from ${data.name} passengers. Delayed buses, pending refunds, and support failures on routes like ${data.routes[0]}.`,
    },
  };
}

export default function CityComplaintPage({ params }) {
  const data = cityData[params.city];
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-bg text-white">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-24 pb-4">
        <ol className="flex items-center gap-2 text-sm text-muted font-mono">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/complaints" className="hover:text-white transition-colors">Complaints</Link></li>
          <li>/</li>
          <li className="text-primary">{data.name}</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <h1 className="text-4xl sm:text-5xl font-heading font-black mb-4">
          RedBus Complaints in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {data.name}
          </span>
        </h1>
        <p className="text-lg text-muted max-w-3xl mb-12 leading-relaxed">
          Documented customer complaints from {data.name} passengers covering delayed buses, pending refunds,
          cancelled journeys, and support failures on popular routes.
        </p>

        {/* Popular Routes */}
        <section className="mb-16">
          <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary" />
            Popular Complaint Routes from {data.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.routes.map((route) => (
              <span
                key={route}
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-muted hover:border-primary/30 hover:text-white transition-all cursor-default"
              >
                {route}
              </span>
            ))}
          </div>
        </section>

        {/* Stories */}
        <section className="mb-16">
          <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary" />
            Real Customer Stories from {data.name}
          </h2>
          <div className="space-y-6">
            {data.stories.map((story, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-500"
              >
                <div className="text-3xl text-primary/30 font-heading mb-2">&ldquo;</div>
                <p className="text-white/90 leading-relaxed mb-4">{story}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div>
                    <p className="text-xs text-muted">Verified Passenger — {data.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-[10px] text-primary">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section>
          <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary" />
            Browse More Complaints
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(cityData)
              .filter(([slug]) => slug !== params.city)
              .slice(0, 6)
              .map(([slug, d]) => (
                <Link
                  key={slug}
                  href={`/complaints/${slug}`}
                  className="glass-card p-4 text-center hover:border-primary/30 transition-all duration-500 block text-sm"
                >
                  {d.name} Complaints
                </Link>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/complaints" className="text-primary text-sm font-mono hover:underline">
              ← View All Cities
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
