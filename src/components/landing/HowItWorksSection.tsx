import { UserPlus, MessageSquare, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { num: 1, icon: UserPlus, title: "Sign Up & Share", desc: "Create your account and tell us how you're feeling today", color: "chart-1" },
  { num: 2, icon: MessageSquare, title: "Connect & Converse", desc: "Chat with our AI assistant in your preferred language, anytime", color: "chart-2" },
  { num: 3, icon: LineChart, title: "Track & Thrive", desc: "Monitor your progress, gain insights, and access resources", color: "chart-5" },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Your journey to wellness
          <br />
          <span className="text-muted-foreground">in three simple steps</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[20%] right-[20%] border-t-2 border-dashed border-border" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-xl relative z-10">
              {s.num}
            </div>
            <div className={`w-48 h-48 mx-auto mt-8 rounded-2xl bg-gradient-to-br from-${s.color}/20 to-${s.color}/5 flex items-center justify-center`}>
              <s.icon className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mt-6">{s.title}</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
