import { useState } from "react";
import { PenTool, Search, Filter, Calendar, Smile, Meh, Wind, Cloud, Flame, Heart, Trash2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type Entry = {
  id: number;
  title: string;
  content: string;
  mood: string;
  date: string;
  preview: string;
};

const sampleEntries: Entry[] = [
  { id: 1, title: "Grateful for small things", content: "Today I noticed the beauty in small things. The morning chai, the birds singing, the warmth of sunlight through my window. These moments of gratitude are helping me build resilience.", mood: "Grateful", date: "2024-12-17", preview: "Today I noticed the beauty in small things..." },
  { id: 2, title: "Work stress management", content: "Had a tough day at work with back-to-back meetings. But I used the breathing techniques from CareNest and felt much better. Need to set better boundaries.", mood: "Anxious", date: "2024-12-16", preview: "Had a tough day at work with back-to-back meetings..." },
  { id: 3, title: "Family dinner joy", content: "Had the most wonderful dinner with my family today. Mom made my favorite biryani. These moments remind me what truly matters in life.", mood: "Happy", date: "2024-12-15", preview: "Had the most wonderful dinner with my family today..." },
  { id: 4, title: "Processing feelings", content: "Feeling a bit low today. Missing my friends from college. It's okay to feel this way. Tomorrow is a new day.", mood: "Sad", date: "2024-12-14", preview: "Feeling a bit low today. Missing my friends..." },
  { id: 5, title: "Morning meditation", content: "Started the day with a 15-minute meditation. Felt incredibly calm afterwards. Want to make this a daily habit.", mood: "Neutral", date: "2024-12-13", preview: "Started the day with a 15-minute meditation..." },
];

const moodIcons: Record<string, React.ElementType> = {
  Happy: Smile, Neutral: Meh, Anxious: Wind, Sad: Cloud, Angry: Flame, Grateful: Heart,
};

const moodColors: Record<string, string> = {
  Happy: "bg-chart-4/10 text-chart-4",
  Neutral: "bg-chart-2/10 text-chart-2",
  Anxious: "bg-chart-1/10 text-chart-1",
  Sad: "bg-chart-3/10 text-chart-3",
  Angry: "bg-destructive/10 text-destructive",
  Grateful: "bg-chart-5/10 text-chart-5",
};

const JournalPage = () => {
  const [entries] = useState(sampleEntries);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(sampleEntries[0]);
  const [isWriting, setIsWriting] = useState(false);
  const [newEntry, setNewEntry] = useState({ title: "", content: "" });

  return (
    <div className="h-[calc(100vh-8rem)] -m-6 lg:-m-8 flex">
      {/* Left Panel - Journal List */}
      <div className="w-full md:w-[400px] border-r border-border flex flex-col bg-background">
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold mb-4">My Journal</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setIsWriting(true); setSelectedEntry(null); }}
              className="flex-1 h-11 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
            >
              <PenTool className="w-[18px] h-[18px]" /> New Entry
            </button>
            <button className="w-11 h-11 rounded-lg border border-border hover:bg-accent flex items-center justify-center">
              <Filter className="w-[18px] h-[18px]" />
            </button>
          </div>
          <div className="relative mt-3">
            <Search className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search entries..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-border bg-input-background text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {entries.map((entry) => {
            const Icon = moodIcons[entry.mood] || Meh;
            const colors = moodColors[entry.mood] || "bg-muted text-muted-foreground";
            return (
              <button
                key={entry.id}
                onClick={() => { setSelectedEntry(entry); setIsWriting(false); }}
                className={`w-full text-left px-6 py-4 border-b border-border hover:bg-accent/50 transition-colors ${
                  selectedEntry?.id === entry.id ? "bg-accent" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${colors}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-sm truncate">{entry.title}</h3>
                      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{entry.preview}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{new Date(entry.date).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${colors}`}>{entry.mood}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Panel - Entry View / Editor */}
      <div className="hidden md:flex flex-1 flex-col bg-background">
        {isWriting ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">New Journal Entry</h2>
              <div className="flex gap-2">
                <button onClick={() => setIsWriting(false)} className="px-4 py-2 rounded-lg border border-border hover:bg-accent text-sm font-medium">Cancel</button>
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Save Entry</button>
              </div>
            </div>
            <input
              type="text"
              value={newEntry.title}
              onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
              placeholder="Entry title..."
              className="text-3xl font-bold mb-4 bg-transparent border-none outline-none placeholder:text-muted-foreground/50"
            />
            <textarea
              value={newEntry.content}
              onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
              placeholder="What's on your mind? Let your thoughts flow..."
              className="flex-1 bg-transparent border-none outline-none text-lg leading-relaxed placeholder:text-muted-foreground/50 resize-none"
            />
          </motion.div>
        ) : selectedEntry ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = moodIcons[selectedEntry.mood] || Meh;
                  const colors = moodColors[selectedEntry.mood] || "bg-muted text-muted-foreground";
                  return (
                    <div className={`px-3 py-1.5 rounded-full flex items-center gap-2 ${colors}`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{selectedEntry.mood}</span>
                    </div>
                  );
                })()}
                <span className="text-sm text-muted-foreground">
                  {new Date(selectedEntry.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <button className="w-10 h-10 rounded-lg hover:bg-destructive/10 flex items-center justify-center text-muted-foreground hover:text-destructive transition-all">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <h1 className="text-3xl font-bold mb-6">{selectedEntry.title}</h1>
            <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">{selectedEntry.content}</p>
          </motion.div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <PenTool className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg">Select an entry or create a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;
