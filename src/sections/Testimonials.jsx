import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";

// ─── What Hiruni is currently learning / exploring ────────────────────────────
const explorations = [
  {
    topic: "Advanced React Development",
    description:
      "Going deeper into React hooks, custom hooks, context API, and performance optimisation. I want to write code that doesn't just work — but scales cleanly and reads well.",
    tag: "Front-End",
    tagColor: "bg-primary/15 text-primary border-primary/30",
    icon: "⚛️",
    why: "Because clean component architecture is what separates a good interface from a great one.",
  },
  {
    topic: "UX Research Methods",
    description:
      "Learning how to conduct user interviews, usability testing, and affinity mapping so my design decisions are backed by real human insight — not just gut feeling.",
    tag: "UI/UX",
    tagColor: "bg-orange-900/40 text-orange-300 border-orange-700/40",
    icon: "🔍",
    why: "My psychology background makes this feel natural. People are the whole point of design.",
  },
  {
    topic: "Data Storytelling with Power BI",
    description:
      "Exploring DAX, dashboard layout principles, and how to transform raw data into visuals that actually change how people think and decide.",
    tag: "Analytics",
    tagColor: "bg-amber-900/40 text-amber-300 border-amber-700/40",
    icon: "📊",
    why: "Data without narrative is just noise. I want to be the person who makes it meaningful.",
  },
  {
    topic: "Software Testing & QA",
    description:
      "Getting into unit testing, integration testing, and end-to-end testing. Understanding how to catch issues before users do is becoming a core skill I want to own.",
    tag: "Software QA",
    tagColor: "bg-stone-800/60 text-stone-300 border-stone-600/40",
    icon: "🧪",
    why: "Quality is invisible when done well — and noticed immediately when it's not.",
  },
  {
    topic: "Full-Stack Development",
    description:
      "Building complete applications with React, Node.js, and MySQL. Understanding how the frontend and backend talk to each other makes me a far more effective developer.",
    tag: "Full-Stack",
    tagColor: "bg-primary/15 text-primary border-primary/30",
    icon: "🔗",
    why: "I never want to be stuck at the boundary between two parts of a system.",
  },
  {
    topic: "AI-Assisted Workflows",
    description:
      "Exploring how AI tools can speed up design iteration, automate repetitive tasks, and help generate better ideas faster — without replacing the human judgement behind them.",
    tag: "Productivity",
    tagColor: "bg-highlight/15 text-highlight border-highlight/30",
    icon: "🤖",
    why: "The best tools amplify what you're already good at. I want to work smarter.",
  },
  {
    topic: "Human-Centered Product Design",
    description:
      "Studying how to design digital products that are truly accessible and intuitive — where every decision starts with the question: what does the person actually need here?",
    tag: "UI/UX",
    tagColor: "bg-orange-900/40 text-orange-300 border-orange-700/40",
    icon: "🌿",
    why: "Technology should serve people, not the other way around.",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = explorations[activeIdx];

  const next     = () => setActiveIdx((i) => (i + 1) % explorations.length);
  const previous = () => setActiveIdx((i) => (i - 1 + explorations.length) % explorations.length);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Continuous Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            What I'm{" "}
            <span className="font-serif italic font-normal text-white">
              exploring now.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Learning doesn't stop at the classroom. Here's what's on my desk, in my tabs, and keeping me curious right now.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">

            {/* Main card */}
            <div className="glass p-8 md:p-12 rounded-3xl glow-border animate-fade-in animation-delay-200 min-h-[280px] flex flex-col justify-between">

              {/* Icon badge — top-left */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xl shadow-lg">
                {active.icon}
              </div>

              {/* Tag — top-right */}
              <div className="absolute top-5 right-6">
                <span className={`px-3 py-0.5 text-[11px] rounded-full border font-medium ${active.tagColor}`}>
                  {active.tag}
                </span>
              </div>

              {/* Content */}
              <div className="pt-6 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {active.topic}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
                  {active.description}
                </p>

                {/* "Why this matters to me" note */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/6 border border-primary/15">
                  <span className="text-primary mt-0.5 flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    <span className="text-primary font-medium not-italic">Why this matters to me: </span>
                    {active.why}
                  </p>
                </div>
              </div>

              {/* Counter */}
              <div className="mt-6 text-right text-xs text-muted-foreground">
                {activeIdx + 1} / {explorations.length}
              </div>
            </div>

            {/* ── Navigation ── */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                className="p-3 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all"
                title="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {explorations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    title={explorations[idx].topic}
                    className={`rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 h-2 bg-primary"
                        : "w-2 h-2 bg-muted-foreground/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all"
                title="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* ── Topic preview strip ── */}
            <div className="mt-8 grid grid-cols-3 md:grid-cols-7 gap-2">
              {explorations.map((e, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`rounded-xl p-2 text-center transition-all duration-300 border text-xs leading-tight ${
                    idx === activeIdx
                      ? "bg-primary/15 border-primary/40 text-primary"
                      : "glass border-border/30 text-muted-foreground hover:border-primary/30 hover:text-primary/70"
                  }`}
                  title={e.topic}
                >
                  <span className="text-lg block mb-1">{e.icon}</span>
                  <span className="hidden md:block line-clamp-2">{e.topic.split(" ").slice(0, 2).join(" ")}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};