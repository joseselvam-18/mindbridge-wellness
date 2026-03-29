import { Link } from "react-router-dom";
import { ArrowRight, Play, Shield, Globe, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-mesh-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-5/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%23e5e7eb' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-chart-1" />
          <span className="text-sm font-medium text-muted-foreground">AI-Powered Mental Wellness</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          Your Mental Wellness,
          <br />
          <span className="text-gradient-brand">Our Priority</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          AI-powered mental health support in your language, available 24/7.
          Breaking barriers, building trust, one conversation at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-10 flex-wrap"
        >
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
          >
            Start Free Today <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm font-semibold text-lg hover:bg-accent hover:border-accent-foreground/20 transition-all duration-300">
            <Play className="w-5 h-5" /> Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground flex-wrap"
        >
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> 100% Confidential</span>
          <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> 10+ Languages</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Available</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
