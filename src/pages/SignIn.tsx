import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft, Check, Loader2, Shield } from "lucide-react";
import { motion } from "framer-motion";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%23fff'/%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold">MindBridge</span>
          </Link>
        </div>
        <div className="relative z-10">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            "The 24/7 availability changed everything for me. Having support at any hour, in my own language, feels like a lifeline."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-bold">RV</div>
            <div>
              <p className="font-semibold">Rahul Verma</p>
              <p className="text-sm opacity-90">Software Engineer, Bangalore</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-2 text-sm opacity-80">
          <Shield className="w-4 h-4" />
          Encrypted • Private • Secure
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-6 md:p-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-8">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground mb-8">Sign in to continue your journey</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  autoFocus
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-12 rounded-lg border border-border bg-input-background pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Password</label>
              <div className="relative">
                <Lock className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full h-12 rounded-lg border border-border bg-input-background pl-11 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRemember(!remember)}
                  className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    remember ? "bg-primary border-primary" : "border-border"
                  }`}
                >
                  {remember && <Check className="w-3 h-3 text-primary-foreground" />}
                </button>
                <span className="text-sm text-muted-foreground">Remember me</span>
              </div>
              <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? <><Loader2 className="w-[18px] h-[18px] animate-spin" /> Signing in...</> : <>Sign In <ArrowRight className="w-[18px] h-[18px]" /></>}
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
            Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign Up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
