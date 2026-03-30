import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, User, Mail, Lock, Eye, EyeOff, Globe, ChevronDown, ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const languages = [
  { flag: "🇮🇳", label: "English (India)" },
  { flag: "🇮🇳", label: "हिंदी (Hindi)" },
  { flag: "🇮🇳", label: "தமிழ் (Tamil)" },
  { flag: "🇮🇳", label: "తెలుగు (Telugu)" },
  { flag: "🇮🇳", label: "ಕನ್ನಡ (Kannada)" },
  { flag: "🇮🇳", label: "മലയാളം (Malayalam)" },
  { flag: "🇮🇳", label: "मराठी (Marathi)" },
  { flag: "🇮🇳", label: "বাংলা (Bengali)" },
  { flag: "🇮🇳", label: "ગુજરાતી (Gujarati)" },
  { flag: "🇮🇳", label: "ਪੰਜਾਬੀ (Punjabi)" },
];

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });

  const passwordStrength = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : form.password.length < 14 ? 3 : 4;
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["", "bg-destructive", "bg-chart-4", "bg-chart-2", "bg-chart-5"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">CareNest</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Create your account</h1>
          <p className="text-muted-foreground text-center">Start your mental wellness journey today</p>
        </div>

        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium mb-2 flex items-center gap-1">Full Name <span className="text-destructive">*</span></label>
            <div className="relative">
              <User className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 rounded-lg border border-border bg-input-background pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 flex items-center gap-1">Email Address <span className="text-destructive">*</span></label>
            <div className="relative">
              <Mail className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-12 rounded-lg border border-border bg-input-background pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Password <span className="text-destructive">*</span></label>
            <div className="relative">
              <Lock className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Create a strong password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full h-12 rounded-lg border border-border bg-input-background pl-11 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
              </button>
            </div>
            {form.password && (
              <div className="mt-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i <= passwordStrength ? strengthColors[passwordStrength] : "bg-muted"}`} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{strengthLabels[passwordStrength]}</p>
              </div>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Preferred Language</label>
            <div className="relative">
              <Globe className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 z-10" />
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="w-full h-12 rounded-lg border border-border bg-input-background pl-11 pr-4 text-left flex items-center justify-between hover:border-primary/30 transition-all"
              >
                <span>{languages[selectedLang].flag} {languages[selectedLang].label}</span>
                <ChevronDown className={`w-[18px] h-[18px] text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute mt-2 w-full max-h-64 overflow-y-auto rounded-xl border border-border bg-popover shadow-xl p-2 z-50">
                  {languages.map((lang, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setSelectedLang(i); setLangOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent cursor-pointer transition-colors text-left"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium text-sm">{lang.label}</span>
                      {i === selectedLang && <Check className="w-4 h-4 text-primary ml-auto" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`w-5 h-5 mt-0.5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                agreed ? "bg-primary border-primary" : "border-border"
              }`}
            >
              {agreed && <Check className="w-3 h-3 text-primary-foreground" />}
            </button>
            <p className="text-sm text-muted-foreground">
              I agree to the <a href="#" className="text-primary underline hover:no-underline">Terms of Service</a> and <a href="#" className="text-primary underline hover:no-underline">Privacy Policy</a>
            </p>
          </div>

          <button
            type="submit"
            disabled={!agreed || loading}
            className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? <><Loader2 className="w-[18px] h-[18px] animate-spin" /> Creating account...</> : <>Create Account <ArrowRight className="w-[18px] h-[18px]" /></>}
          </button>
        </form>

        <div className="relative my-8">
          <div className="border-t border-border" />
          <span className="absolute bg-background px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-muted-foreground">OR</span>
        </div>

        <button className="w-full h-12 rounded-lg border-2 border-border bg-background hover:bg-accent flex items-center justify-center gap-3 font-medium transition-all hover:border-primary/20">
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/signin" className="text-primary font-medium hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
