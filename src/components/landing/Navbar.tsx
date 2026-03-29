import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Brain className="w-7 h-7 text-primary" />
            <span className="text-xl font-semibold tracking-tight text-foreground group-hover:text-gradient-brand transition-all duration-300">
              MindBridge
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/signin"
              className="px-4 py-2 rounded-lg text-foreground hover:bg-accent font-medium text-sm transition-all"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-border">
              <div className="flex items-center gap-3">
                <Brain className="w-7 h-7 text-primary" />
                <span className="text-xl font-semibold">MindBridge</span>
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col px-6 py-8 gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="h-14 flex items-center text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="px-6 pb-8 space-y-3">
              <Link
                to="/signin"
                className="block w-full py-3 text-center rounded-lg border border-border font-medium hover:bg-accent transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
