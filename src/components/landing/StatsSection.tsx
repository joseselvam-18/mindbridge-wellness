import { Globe, Clock, Lock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10+", label: "Languages Supported", icon: Globe },
  { value: "24/7", label: "Always Available", icon: Clock },
  { value: "100%", label: "Confidential", icon: Lock },
  { value: "50K+", label: "Lives Touched", icon: Heart },
];

const AnimatedStat = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center relative">
      <Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-[0.05]" />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold"
      >
        {value}
      </motion.p>
      <p className="text-sm md:text-base opacity-90 mt-2">{label}</p>
    </div>
  );
};

const StatsSection = () => (
  <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
    }} />
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s) => (
          <AnimatedStat key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
