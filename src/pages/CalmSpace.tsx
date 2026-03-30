import { useState } from "react";
import { Leaf, Play, ChevronLeft, ChevronRight, ExternalLink, Music, Headphones, Wind, Sun } from "lucide-react";
import { motion } from "framer-motion";

type Track = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  mood: string;
  category: string;
  gradient: string;
};

const tracks: Track[] = [
  { id: 1, title: "Rain on Leaves", artist: "Nature Sounds", duration: "5:30", mood: "Calming", category: "Nature", gradient: "from-chart-2/30 to-chart-5/20" },
  { id: 2, title: "Morning Raga", artist: "Classical Vibes", duration: "8:15", mood: "Peaceful", category: "Indian Classical", gradient: "from-chart-4/30 to-chart-1/20" },
  { id: 3, title: "Ocean Waves", artist: "Sea Sounds", duration: "10:00", mood: "Relaxing", category: "Nature", gradient: "from-chart-3/30 to-chart-2/20" },
  { id: 4, title: "Guided Meditation", artist: "CareNest", duration: "15:00", mood: "Mindful", category: "Meditation", gradient: "from-chart-5/30 to-chart-2/20" },
  { id: 5, title: "Breathing Exercise", artist: "Wellness Hub", duration: "4:00", mood: "Calming", category: "Exercise", gradient: "from-chart-1/30 to-chart-4/20" },
  { id: 6, title: "Evening Flute", artist: "Instrumental", duration: "6:45", mood: "Serene", category: "Indian Classical", gradient: "from-chart-2/30 to-chart-3/20" },
];

const categories = [
  { icon: Music, label: "All", count: 6 },
  { icon: Leaf, label: "Nature", count: 2 },
  { icon: Headphones, label: "Indian Classical", count: 2 },
  { icon: Wind, label: "Meditation", count: 1 },
  { icon: Sun, label: "Exercise", count: 1 },
];

const CalmSpace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? tracks : tracks.filter((t) => t.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-72 md:h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-chart-2/20 via-chart-5/10 to-chart-3/20 border border-border"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <Leaf className="w-16 h-16 text-chart-5 animate-float mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold">Your Calm Space</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl">
            Relax your mind with curated music, guided meditations, and breathing exercises
          </p>
        </div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-chart-5/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Category Filter */}
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(cat.label)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border whitespace-nowrap text-sm font-medium transition-all ${
              activeCategory === cat.label
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-accent hover:border-primary/20"
            }`}
          >
            <cat.icon className="w-4 h-4" />
            {cat.label}
            <span className="text-xs opacity-70">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Album Art */}
            <div className={`relative h-48 bg-gradient-to-br ${track.gradient} flex items-center justify-center`}>
              <Music className="w-16 h-16 text-foreground/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <button
                onClick={() => setPlayingId(playingId === track.id ? null : track.id)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm shadow-xl flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-300"
              >
                <Play className={`w-7 h-7 text-primary ml-1 ${playingId === track.id ? "animate-pulse" : ""}`} />
              </button>
              <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-foreground/60 backdrop-blur-sm text-background text-xs font-medium">
                {track.duration}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div>
                <h3 className="font-semibold text-lg line-clamp-1">{track.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{track.artist}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-chart-2/10 text-chart-2">
                  <Leaf className="w-3 h-3" /> {track.mood}
                </span>
                <span>•</span>
                <span>{track.category}</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => setPlayingId(playingId === track.id ? null : track.id)}
                  className="flex-1 h-10 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all text-sm"
                >
                  <Play className="w-4 h-4" /> {playingId === track.id ? "Playing..." : "Play"}
                </button>
                <button className="w-10 h-10 rounded-lg border border-border hover:bg-accent flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Now Playing Bar */}
      {playingId && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 lg:left-64 bg-card border-t border-border p-4 z-40"
        >
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/30 to-chart-5/20 flex items-center justify-center flex-shrink-0">
              <Music className="w-6 h-6 text-chart-2" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{tracks.find((t) => t.id === playingId)?.title}</p>
              <p className="text-xs text-muted-foreground">{tracks.find((t) => t.id === playingId)?.artist}</p>
            </div>
            <div className="flex-1 hidden md:block">
              <div className="h-1.5 rounded-full bg-muted">
                <div className="h-full w-1/3 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
            <button
              onClick={() => setPlayingId(null)}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
            >
              <Play className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CalmSpace;
