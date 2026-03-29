import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flame, BookOpen, Smile, TrendingUp, RefreshCw, MessageCircle,
  PenTool, Music, BarChart3, ArrowRight, Meh, Wind, Cloud, AlertCircle, Heart, Battery
} from "lucide-react";
import { motion } from "framer-motion";

const moods = [
  { icon: Smile, label: "Happy", color: "text-chart-4 bg-chart-4/10" },
  { icon: Meh, label: "Neutral", color: "text-chart-2 bg-chart-2/10" },
  { icon: Wind, label: "Anxious", color: "text-chart-1 bg-chart-1/10" },
  { icon: Cloud, label: "Sad", color: "text-chart-3 bg-chart-3/10" },
  { icon: Flame, label: "Angry", color: "text-destructive bg-destructive/10" },
  { icon: AlertCircle, label: "Overwhelmed", color: "text-chart-1 bg-chart-1/10" },
  { icon: Heart, label: "Grateful", color: "text-chart-5 bg-chart-5/10" },
  { icon: Battery, label: "Exhausted", color: "text-muted-foreground bg-muted" },
];

const quickActions = [
  { icon: MessageCircle, title: "Start Chat", subtitle: "Talk to AI Assistant", path: "/dashboard/chat", color: "from-chart-1/10" },
  { icon: PenTool, title: "New Journal", subtitle: "Write your thoughts", path: "/dashboard/journal", color: "from-chart-2/10" },
  { icon: Music, title: "Listen", subtitle: "Calm your mind", path: "/dashboard/calm", color: "from-chart-5/10" },
  { icon: BarChart3, title: "Analytics", subtitle: "Track progress", path: "/dashboard/analytics", color: "from-chart-3/10" },
];

const DashboardHome = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [intensity, setIntensity] = useState(5);
  const now = new Date();
  const greeting = now.getHours() < 12 ? "Good Morning" : now.getHours() < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-br from-secondary via-chart-1/5 to-chart-2/5"
      >
        <h1 className="text-3xl md:text-4xl font-bold">{greeting}, John</h1>
        <p className="text-lg text-muted-foreground mt-2">
          {now.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} • {now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
        </p>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Current Streak", value: "14", trend: "+3 from last week", icon: Flame, color: "chart-1" },
          { label: "Journal Entries", value: "18", trend: "+5 this week", icon: BookOpen, color: "chart-2" },
          { label: "Average Mood", value: "7.2/10", trend: "+0.8 improvement", icon: Smile, color: "chart-4" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{s.label}</p>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-xs flex items-center gap-1 mt-2 text-chart-5">
                  <TrendingUp className="w-3.5 h-3.5" /> {s.trend}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-${s.color}/10 flex items-center justify-center`}>
                <s.icon className={`w-6 h-6 text-${s.color}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mood Check-In */}
      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">How are you feeling right now?</h2>
        <p className="text-muted-foreground mb-6">Take a moment to check in with yourself</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {moods.map((m, i) => (
            <button
              key={m.label}
              onClick={() => setSelectedMood(i)}
              className={`aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                selectedMood === i
                  ? "border-primary bg-primary/5 scale-105"
                  : "border-transparent hover:border-primary/20 hover:bg-accent"
              }`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${m.color}`}>
                <m.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-xs font-medium">{m.label}</span>
            </button>
          ))}
        </div>
        {selectedMood !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 space-y-4"
          >
            <div className="flex items-center justify-between text-sm font-medium">
              <span>How intense is this feeling?</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">{intensity}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Mild</span><span>Moderate</span><span>Intense</span>
            </div>
            <Link
              to="/dashboard/chat"
              className="block w-full py-3 text-center rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
              Save & Start Chat
            </Link>
          </motion.div>
        )}
      </div>

      {/* Quote */}
      <div className="bg-gradient-to-br from-chart-2/10 via-card to-chart-5/10 border border-border rounded-2xl p-8 relative overflow-hidden">
        <span className="absolute top-4 left-6 text-6xl text-muted/10 font-serif leading-none">"</span>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-center italic px-8">
          Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.
        </p>
        <p className="text-right text-sm text-muted-foreground mt-4">— Anonymous</p>
        <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full hover:bg-accent flex items-center justify-center group">
          <RefreshCw className="w-[18px] h-[18px] text-muted-foreground group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((a) => (
          <Link
            key={a.title}
            to={a.path}
            className={`group bg-gradient-to-br ${a.color} to-card border border-border rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all cursor-pointer`}
          >
            <a.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">{a.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">{a.subtitle}</p>
            <span className="text-sm font-medium text-primary flex items-center gap-1">
              Start <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
