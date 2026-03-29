import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => (
  <section className="py-24 md:py-32 max-w-4xl mx-auto px-6 text-center">
    <div className="bg-gradient-to-br from-secondary/30 via-background to-accent/30 rounded-3xl p-12 md:p-16 border border-border">
      <h2 className="text-3xl md:text-5xl font-bold">Ready to start your wellness journey?</h2>
      <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
        Join thousands taking control of their mental health. Your first session is free.
      </p>
      <Link
        to="/signup"
        className="inline-flex items-center gap-2 mt-10 px-10 py-5 bg-primary text-primary-foreground rounded-xl text-lg font-semibold shadow-2xl hover:scale-105 transition-transform"
      >
        Get Started Free <ArrowRight className="w-5 h-5" />
      </Link>
      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> No credit card required</span>
        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 100% confidential</span>
        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Cancel anytime</span>
      </div>
    </div>
  </section>
);

export default CTASection;
