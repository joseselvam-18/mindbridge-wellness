import { MessageCircle, Globe, Shield, Activity, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MessageCircle,
    title: "24/7 AI Support",
    desc: "Get instant support anytime, powered by advanced AI that understands context and empathy.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    desc: "Converse in 10+ Indian languages including Hindi, Tamil, Telugu, and more.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Bank-grade encryption and complete anonymity. Your data stays yours, always.",
  },
  {
    icon: Activity,
    title: "Smart Triage",
    desc: "Intelligent assessment routes you to appropriate care based on your needs.",
  },
  {
    icon: TrendingUp,
    title: "Mood Analytics",
    desc: "Track patterns, gain insights, and understand your mental health journey.",
  },
  {
    icon: Heart,
    title: "Cultural Sensitivity",
    desc: "Built for India, understanding family dynamics, social pressures, and cultural context.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
    <div className="text-center">
      <span className="text-sm font-semibold text-chart-1 uppercase tracking-wider">Powerful Features</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4">Everything you need for mental wellness</h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        Comprehensive AI-powered tools designed to support your mental health journey
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative"
        >
          <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-1/10 to-chart-2/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            <span className="text-sm font-medium text-primary mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
