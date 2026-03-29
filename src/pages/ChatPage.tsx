import { useState, useRef, useEffect } from "react";
import {
  Brain, Smile, Meh, Wind, Cloud, Flame, AlertCircle, Heart, Battery,
  ArrowRight, ArrowLeft, Globe, ChevronDown, Check, Send, Mic, Sparkles, Loader2, Info, CloudRain
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const moods = [
  { icon: Smile, label: "Happy", color: "bg-chart-4/20 text-chart-4" },
  { icon: Meh, label: "Neutral", color: "bg-chart-2/20 text-chart-2" },
  { icon: Wind, label: "Anxious", color: "bg-chart-1/20 text-chart-1" },
  { icon: CloudRain, label: "Sad", color: "bg-chart-3/20 text-chart-3" },
  { icon: Flame, label: "Angry", color: "bg-destructive/20 text-destructive" },
  { icon: AlertCircle, label: "Overwhelmed", color: "bg-chart-1/20 text-chart-1" },
  { icon: Heart, label: "Grateful", color: "bg-chart-5/20 text-chart-5" },
  { icon: Battery, label: "Exhausted", color: "bg-muted text-muted-foreground" },
];

const languages = [
  "🇮🇳 English (India)", "🇮🇳 हिंदी (Hindi)", "🇮🇳 தமிழ் (Tamil)", "🇮🇳 తెలుగు (Telugu)",
  "🇮🇳 ಕನ್ನಡ (Kannada)", "🇮🇳 മലയാളം (Malayalam)", "🇮🇳 मराठी (Marathi)",
  "🇮🇳 বাংলা (Bengali)", "🇮🇳 ગુજરાતી (Gujarati)", "🇮🇳 ਪੰਜਾਬੀ (Punjabi)",
];

const initialResponses: Record<string, string> = {
  Happy: "That's wonderful to hear! 😊 I'm glad you're feeling happy. Would you like to journal about what's bringing you joy, or shall we explore ways to maintain this positive energy?",
  Neutral: "Thanks for checking in. Sometimes feeling neutral is perfectly fine. Would you like to talk about your day, or explore some mindfulness exercises?",
  Anxious: "I can see you're feeling anxious right now, and I want you to know that's completely valid. I'm here to listen and support you. Would you like to talk about what's making you feel this way, or would you prefer we start with a calming breathing exercise?",
  Sad: "I hear you, and it's okay to feel sad. Your feelings matter and you don't have to face them alone. Would you like to share what's on your mind?",
  Angry: "I understand you're feeling angry. That's a natural emotion and it's important to acknowledge it. Let's work through this together. What's been bothering you?",
  Overwhelmed: "Feeling overwhelmed can be really tough. Let's take this one step at a time. Would you like to start with a brief grounding exercise, or would you prefer to talk?",
  Grateful: "How beautiful that you're feeling grateful! 🙏 Gratitude is powerful for mental wellness. Would you like to write about what you're grateful for?",
  Exhausted: "I can sense you're running low on energy. It's important to listen to your body. Would you like some relaxation techniques, or just a safe space to rest and chat?",
};

type Message = { role: "user" | "assistant"; content: string };

const ChatPage = () => {
  const [stage, setStage] = useState<"mood" | "chat">("mood");
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [selectedLang, setSelectedLang] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const startChat = () => {
    if (selectedMood === null) return;
    const moodLabel = moods[selectedMood].label;
    setMessages([{ role: "assistant", content: initialResponses[moodLabel] }]);
    setStage("chat");
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thank you for sharing that with me. It takes courage to open up, and I appreciate your trust. Let me help you work through this. Can you tell me more about when these feelings started?",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const suggestions = selectedMood !== null ? [
    "Tell you what's wrong",
    "Try breathing exercise",
    "I just need to vent",
  ] : [];

  if (stage === "mood") {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">How are you feeling today?</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Select the mood that best describes you right now. This helps me provide better support.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 my-8">
            {moods.map((m, i) => (
              <button
                key={m.label}
                onClick={() => setSelectedMood(i)}
                className={`aspect-square flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all duration-300 ${
                  selectedMood === i
                    ? "border-primary bg-primary/5 shadow-lg scale-105"
                    : "border-border hover:border-primary/30 hover:bg-accent/50 hover:scale-[1.02]"
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 ${m.color}`}>
                  <m.icon className="w-7 h-7" />
                </div>
                <span className={`text-sm font-medium ${selectedMood === i ? "text-primary font-semibold" : ""}`}>{m.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedMood !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between text-sm font-medium mb-3">
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
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Mild</span><span>Moderate</span><span>Intense</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred conversation language</label>
                  <div className="relative">
                    <Globe className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 z-10" />
                    <button
                      type="button"
                      onClick={() => setLangOpen(!langOpen)}
                      className="w-full h-12 rounded-lg border border-border bg-input-background pl-11 pr-4 text-left flex items-center justify-between hover:border-primary/30 transition-all"
                    >
                      <span className="text-sm">{languages[selectedLang]}</span>
                      <ChevronDown className={`w-[18px] h-[18px] text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
                    </button>
                    {langOpen && (
                      <div className="absolute mt-2 w-full max-h-64 overflow-y-auto rounded-xl border border-border bg-popover shadow-xl p-2 z-50">
                        {languages.map((lang, i) => (
                          <button
                            key={i}
                            onClick={() => { setSelectedLang(i); setLangOpen(false); }}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent cursor-pointer transition-colors text-left text-sm"
                          >
                            <span>{lang}</span>
                            {i === selectedLang && <Check className="w-4 h-4 text-primary ml-auto" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={startChat}
                  className="w-full h-14 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Start Chatting <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  // Chat Interface
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col -m-6 lg:-m-8">
      {/* Chat Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setStage("mood")} className="w-10 h-10 rounded-lg hover:bg-accent flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold">AI Chat Assistant</span>
        </div>
        {selectedMood !== null && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-accent/50">
            {(() => { const M = moods[selectedMood]; return <M.icon className="w-[18px] h-[18px]" />; })()}
            <span className="text-sm font-medium">{moods[selectedMood].label}</span>
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-semibold">{intensity}/10</span>
          </div>
        )}
        <button className="px-4 py-2 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive/10 text-sm font-medium transition-all">
          End Session
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-background to-secondary/5">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-4 max-w-3xl ${msg.role === "user" ? "ml-auto justify-end" : ""}`}
          >
            {msg.role === "assistant" && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-[18px] h-[18px] text-primary-foreground" />
              </div>
            )}
            <div
              className={`flex-1 rounded-2xl p-4 shadow-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-tr-sm"
                  : "bg-card border border-border rounded-tl-sm"
              }`}
            >
              <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              <p className={`text-xs mt-2 ${msg.role === "user" ? "text-primary-foreground/70 text-right" : "text-muted-foreground"}`}>Just now</p>
            </div>
          </motion.div>
        ))}

        {/* Suggestions after first AI message */}
        {messages.length === 1 && messages[0].role === "assistant" && (
          <div className="flex flex-wrap gap-2 ml-14">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => { setInput(s); }}
                className="px-4 py-2 rounded-full border border-border bg-background hover:bg-accent hover:border-primary/30 text-sm font-medium transition-all hover:scale-105"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {isTyping && (
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-[18px] h-[18px] text-primary-foreground" />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-sm p-4 shadow-sm">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-background/95 backdrop-blur-xl p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <button className="w-12 h-12 flex-shrink-0 rounded-full border border-border hover:bg-accent flex items-center justify-center transition-all">
            <Mic className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="w-full h-12 rounded-xl border border-border bg-input-background px-4 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-all disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
