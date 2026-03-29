import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "MindBridge helped me through my darkest days. The AI understood me better than I thought possible, and having support in Hindi made all the difference.",
    name: "Priya S.",
    location: "Mumbai",
    color: "from-chart-1 to-chart-4",
  },
  {
    text: "As someone dealing with work anxiety, the 24/7 availability is a lifesaver. I can journal at 2 AM and chat when I need to, without judgment.",
    name: "Rahul V.",
    location: "Bangalore",
    color: "from-chart-2 to-chart-5",
  },
  {
    text: "The cultural sensitivity is what sets MindBridge apart. It understands family pressure and doesn't just give generic Western advice.",
    name: "Meera K.",
    location: "Chennai",
    color: "from-chart-5 to-chart-1",
  },
  {
    text: "The mood analytics helped me identify patterns I never noticed. Now I know my triggers and can manage them proactively.",
    name: "Arjun P.",
    location: "Delhi",
    color: "from-chart-3 to-chart-2",
  },
  {
    text: "I was skeptical about AI therapy, but MindBridge's triage system connected me with a real therapist when I needed it most.",
    name: "Anjali M.",
    location: "Pune",
    color: "from-chart-4 to-chart-1",
  },
  {
    text: "Being able to talk in Tamil removed a huge barrier. I finally felt comfortable opening up about my struggles.",
    name: "Karthik R.",
    location: "Coimbatore",
    color: "from-chart-2 to-chart-3",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
    <div className="text-center">
      <span className="text-sm font-semibold text-chart-2 uppercase tracking-wider">Testimonials</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4">Trusted by thousands across India</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative"
        >
          <span className="absolute top-4 right-6 text-6xl text-muted/20 leading-none font-serif">"</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-card-foreground mt-4 leading-relaxed italic">"{t.text}"</p>
          <div className="mt-6 flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-primary-foreground font-semibold text-sm`}>
              {t.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="font-semibold text-card-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.location}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
