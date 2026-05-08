'use client';
import { motion } from 'framer-motion';

const testimonials = [
  "I booked my ticket expecting a normal journey, but the bus never even arrived at the boarding point. I was left stranded and had to deal with unnecessary stress and last-minute travel arrangements. What made the experience worse was the customer support. Every executive gave a different answer, fake timelines were promised, calls were disconnected, and nobody actually helped. It honestly feels like the company only cares until the payment is completed. Extremely disappointing and unprofessional experience.",
  "I booked a bus from Nagpur to Nirmal for 11 PM on 20 April, but the bus never arrived. I waited at the boarding point for almost 3 hours, continuously trying to contact support. Your team advised me to arrange an alternative bus myself, which caused extra expense and inconvenience. Now after more than 15 days, I’m being told that the bus had arrived and I was “not present,” which is completely false. The driver’s number was unreachable the whole time. As a customer, it feels unfair to suffer losses for a journey that never happened.",
  "It has been more than 10 days since my failed journey, and I’m still struggling to get support. The bus never arrived at the boarding point, and I had to arrange another mode of travel at the last moment. Since then, I’ve spent days contacting customer care through calls and chats, but nobody seems responsible enough to resolve the issue. The lack of urgency and customer care is extremely disappointing.",
  "My entire journey experience became frustrating mainly because of the poor customer support system. Whenever something goes wrong, it takes 15–20 minutes just to connect to customer care, and even after waiting so long, there’s rarely any proper solution. On chat support, all I receive is the same copy-paste reply saying the issue will be resolved in 48 hours. A journey lasts a few hours, but customers are expected to wait days for support. This kind of service needs serious improvement.",
  "I specifically booked and paid extra for an AC bus because comfort mattered during my journey. But when I reached the boarding point, a non-AC bus arrived instead. Despite paying around ₹1100 for an AC ticket, I received no refund or proper explanation. When I contacted customer support, the executive simply said nothing could be done. It felt like complete negligence toward customer expectations and money.",
  "I raised a complaint regarding my Chennai to Hyderabad booking on 21 March, expecting a quick resolution. Instead, my complaint has been passed from one team to another for weeks with no actual solution. Every time I check, I’m told the issue has been escalated again. As a customer, it’s exhausting to repeatedly follow up while nobody takes responsibility. The lack of proper issue handling and support has been extremely disappointing.",
  "I urgently wanted to cancel my ticket because of a serious situation at home, but no proper help was provided. Despite repeated attempts, my cancellation request was ignored, and there was no understanding from the support team. During difficult personal situations, customers expect at least basic cooperation and empathy, but the service experience was extremely poor.",
  "My journey from Gwalior to Indore turned into a very uncomfortable and frustrating experience. The bus was delayed by more than two hours, completely disturbing my schedule. Inside the bus, basic facilities were not working properly — windows wouldn’t open, lights were not functioning, and charging points were useless. To make things worse, the FASTag wasn’t recharged, causing repeated delays at toll plazas. Overall, the entire trip felt poorly managed and highly unprofessional.",
  "I was supposed to travel from Pune to Bhopal, but on the way to the boarding point, my auto met with an accident and I got injured. In that emergency situation, I immediately contacted support and requested cancellation of my ₹2700 ticket. I even offered medical proof and asked them to speak to my family member, but nobody helped. I was repeatedly told that an agent would contact me, but no one ever did. After being a regular customer for so long, this complete lack of empathy during an emergency was heartbreaking.",
  "One of the most disturbing travel experiences I’ve witnessed was when the driver refused to allow my daughter to board the bus and left her stranded on the highway at night around 9:30 PM. There was absolutely no concern shown for her safety. As a parent, it was terrifying and unacceptable. A travel platform should make passengers feel secure, especially women travelers, but this experience felt extremely unsafe and irresponsible.",
  "I booked my journey on 22 April expecting a smooth trip, but instead faced a six-hour delay without any proper updates or communication. What disappointed me even more was the response after raising a complaint. Rather than addressing the issue, I was told that no one else had complained about the delay. Delays can happen, but dismissing a genuine customer concern instead of helping reflects very poor customer support and accountability.",
  "I had a very poor experience when my bus was suddenly canceled without any prior notice. For hours, there was no response from staff or customer support, leaving me unable to plan any alternative travel arrangements on time. Even after all this inconvenience, I am still waiting for my refund. The lack of communication and responsibility made the entire experience extremely stressful.",
  "I booked a ticket through the website, but due to a technical glitch, the payment initially showed as failed. When I tried again, the payment succeeded — but two tickets ended up getting booked instead of one. Now when I’m requesting a refund for the duplicate booking caused by the system error, the request is being denied. As a customer, it feels unfair to pay the price for a technical issue that was clearly not my fault.",
  "I contacted customer care simply to cancel one ticket from my booking, but due to a fault in the IVR system, my entire booking of five tickets got canceled without my consent. There was no confirmation or warning before this happened. The worst part is that there was no proper way to connect with a real support executive afterward. Losing all five tickets because of an automated system error is completely unacceptable and highly irresponsible.",
  "My bus got canceled, but I never received any notification or update through the app. I only found out after contacting the driver myself. When I reached customer support for help, the behavior was extremely rude and unprofessional. The executive refused to connect me to a supervisor and spoke very disrespectfully. People trust travel platforms during important journeys, and such careless service completely destroys that trust."
];

export default function TraumaWall() {
  return (
    <section id="reviews" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Customer stories</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black">
            Things Passengers Have{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Heard Before.</span>
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid glass-card p-6 group hover:border-primary/30 transition-all duration-500 red-glow-hover cursor-default"
            >
              <div className="text-4xl text-primary/30 font-heading mb-2">&ldquo;</div>
              <p className="text-white/90 text-lg font-medium leading-relaxed mb-4">{t}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(65 + (i % 26))}
                </div>
                <div>
                  <p className="text-xs text-muted">Verified Sufferer</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-[10px] text-primary">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-muted italic text-sm max-w-2xl mx-auto"
        >
          More stories are there but their team is trying to hide the user comments asap so it take some time to connect with customer to share there stories here.
        </motion.div>
      </div>
    </section>
  );
}
