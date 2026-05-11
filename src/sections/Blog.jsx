import { useState, useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Code2, Lightbulb, Rocket, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

// ─── Code Snippet Component ───────────────────────────────────────────────────
const CodeSnippet = ({ title, language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-border/50 my-6">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-muted-foreground font-mono">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{language}</span>
          <button
            onClick={handleCopy}
            className="text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded border border-border/50 hover:border-primary/50"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      {/* Code body */}
      <pre className="overflow-x-auto p-4 bg-card text-sm font-mono text-foreground/80 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Section Toggle Component ────────────────────────────────────────────────
const CollapsibleSection = ({ icon: Icon, title, color, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="glass rounded-xl overflow-hidden mb-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-surface/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-4 h-4" />
          </span>
          <span className="font-semibold text-foreground">{title}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      {open && <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">{children}</div>}
    </div>
  );
};

// ─── Project Data ─────────────────────────────────────────────────────────────
const blogProjects = [
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    subtitle: "Real-time financial analytics with AI-powered insights",
    date: "March 2025",
    readTime: "8 min read",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "NodeJS"],
    github: "https://github.com/yourusername/fintech-dashboard",
    overview: `This project started from a real frustration — existing finance dashboards were either too simple to be useful or too complex to navigate quickly. I wanted to build something that felt like a cockpit: dense with information but instantly readable. The result is a platform that aggregates portfolio data, renders live charts, and uses an AI layer to surface anomalies and opportunities before the user even thinks to ask.`,
    problem: `Most retail investors have no single view across their holdings. They tab between apps, manually calculate percentages, and miss patterns hidden in the noise. I set out to solve that with a unified real-time dashboard.`,
    whatIDid: [
      "Architected a WebSocket-driven data pipeline using Node.js that feeds live price ticks into a React state tree without excessive re-renders.",
      "Built custom chart components on top of Recharts with animated entry transitions and tooltip overlays showing 7-day, 30-day, and YTD comparisons.",
      "Integrated an AI summarisation layer (GPT-4 via API) that reads portfolio state and generates a plain-English daily briefing.",
      "Wrote a TypeScript schema layer that validates all incoming market data shapes, catching API drift before it reaches the UI.",
    ],
    codeSnippets: [
      {
        title: "useMarketSocket.ts — Live price hook",
        language: "TypeScript",
        code: `import { useEffect, useRef, useState } from "react";

interface TickData {
  symbol: string;
  price: number;
  change: number;
  timestamp: number;
}

export function useMarketSocket(symbols: string[]) {
  const [ticks, setTicks] = useState<Record<string, TickData>>({});
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(
      \`wss://api.market-feed.io/stream?symbols=\${symbols.join(",")}\`
    );

    ws.current.onmessage = (event) => {
      const data: TickData = JSON.parse(event.data);
      setTicks((prev) => ({ ...prev, [data.symbol]: data }));
    };

    return () => ws.current?.close();
  }, [symbols.join(",")]);

  return ticks;
}`,
      },
      {
        title: "portfolioSummary.ts — AI briefing call",
        language: "TypeScript",
        code: `import Anthropic from "@anthropic-ai/sdk";

export async function generatePortfolioBriefing(
  holdings: Holding[]
): Promise<string> {
  const client = new Anthropic();

  const holdingsSummary = holdings
    .map((h) => \`\${h.symbol}: \${h.quantity} shares @ $\${h.currentPrice}\`)
    .join("\\n");

  const message = await client.messages.create({
    model: "claude-opus-4-20250514",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: \`Analyse this portfolio and give a 3-sentence briefing:
\${holdingsSummary}
Focus on risk concentration, top mover, and one actionable observation.\`,
      },
    ],
  });

  return message.content[0].type === "text" ? message.content[0].text : "";
}`,
      },
    ],
    learnings: [
      "WebSocket state management at scale requires careful throttling — naive setState on every tick causes jank on low-end devices. Batching updates every 250ms solved it.",
      "TypeScript's discriminated unions are invaluable for modelling API responses that can be 'loading', 'error', or 'data' — it made the UI code far more predictable.",
      "AI-generated summaries need strict output length constraints and a fallback — sometimes the model returns verbose prose when a user wants one sentence.",
    ],
    futurePlans: [
      "Add Options chain visualisation with Greeks displayed inline on each contract.",
      "Build a backtesting module that lets users replay strategies against historical data.",
      "Explore local LLM inference for the briefing feature so it works offline and avoids API costs.",
      "Publish the WebSocket hook as an open-source npm package.",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-stack store with inventory management and Stripe checkout",
    date: "January 2025",
    readTime: "7 min read",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    github: "https://github.com/yourusername/ecommerce-platform",
    overview: `A production-grade e-commerce build covering the full lifecycle from product listing to order fulfilment. I treated this as a learning ground for Next.js App Router, server components, and Stripe's newer Payment Element — areas I wanted to understand deeply rather than just skim.`,
    problem: `Template-based stores (Shopify, WooCommerce) hide the plumbing. I wanted to know exactly what happens between "Add to Cart" and a Stripe webhook confirming payment, so I built it from scratch.`,
    whatIDid: [
      "Used Next.js App Router with server components for product pages — HTML is generated at the edge, making load times near-instant.",
      "Integrated Stripe Payment Element with address autocomplete and 3DS2 handling for EU customers.",
      "Built an inventory management admin panel with low-stock alerts and CSV export.",
      "Implemented a PostgreSQL database with Prisma ORM — schema migrations are version-controlled alongside the app code.",
    ],
    codeSnippets: [
      {
        title: "checkout/route.ts — Stripe session creation",
        language: "TypeScript",
        code: `import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCartItems } from "@/lib/cart";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { cartId } = await req.json();
  const items = await getCartItems(cartId);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name, images: [item.imageUrl] },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    success_url: \`\${process.env.NEXT_PUBLIC_URL}/success?session={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_URL}/cart\`,
  });

  return NextResponse.json({ url: session.url });
}`,
      },
    ],
    learnings: [
      "Next.js server components dramatically simplify data fetching — no useEffect, no loading spinners, just async functions that return JSX.",
      "Stripe webhooks need idempotency keys handled carefully; processing the same event twice caused duplicate order records in early testing.",
      "Prisma's relation queries can produce N+1 problems silently — always check the generated SQL with logging enabled during development.",
    ],
    futurePlans: [
      "Add multi-currency support using Stripe's presentment currency feature.",
      "Build a recommendation engine using purchase history patterns.",
      "Implement abandoned cart email flows with Resend.",
    ],
  },
  {
    id: "ai-writing-assistant",
    title: "AI Writing Assistant",
    subtitle: "GPT-4 powered tool for drafting, editing, and ideation",
    date: "November 2024",
    readTime: "6 min read",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    github: "https://github.com/yourusername/ai-writing-assistant",
    overview: `An AI-assisted writing environment that goes beyond a chat box. Users can create documents, highlight sections to rewrite, adjust tone sliders, and run a "critic mode" that analyses weak arguments and flags passive voice. The backend is a Python FastAPI service that manages prompt construction and streams tokens to the React frontend.`,
    problem: `Most AI writing tools give you one text field and a generate button. I wanted a workspace where the AI is woven into the editing flow — not a separate tool you copy-paste into.`,
    whatIDid: [
      "Built a rich-text editor using Tiptap with custom AI-powered commands accessible via a slash-menu (e.g. /rewrite, /shorten, /critic).",
      "Streamed OpenAI responses token-by-token over SSE (Server-Sent Events) from FastAPI to the React client for a live typing effect.",
      "Implemented a 'tone dial' — a slider from 'Casual' to 'Formal' that injects style instructions into the system prompt dynamically.",
      "Added document version history so users can compare before/after AI edits side-by-side.",
    ],
    codeSnippets: [
      {
        title: "stream.py — FastAPI SSE endpoint",
        language: "Python",
        code: `from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from openai import AsyncOpenAI
import asyncio

app = FastAPI()
client = AsyncOpenAI()

async def token_stream(prompt: str, tone: float):
    tone_label = "formal" if tone > 0.7 else "casual" if tone < 0.3 else "neutral"
    system = f"You are an expert writing assistant. Tone: {tone_label}."

    stream = await client.chat.completions.create(
        model="gpt-4-turbo",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": prompt},
        ],
        stream=True,
    )

    async for chunk in stream:
        delta = chunk.choices[0].delta.content
        if delta:
            yield f"data: {delta}\\n\\n"
            await asyncio.sleep(0)  # yield control to event loop

@app.post("/stream-write")
async def stream_write(body: dict):
    return StreamingResponse(
        token_stream(body["prompt"], body.get("tone", 0.5)),
        media_type="text/event-stream",
    )`,
      },
    ],
    learnings: [
      "SSE is simpler than WebSockets for one-directional streaming — no handshake overhead and it works over plain HTTP/2.",
      "Prompt construction is engineering, not magic. Small changes in system prompt wording caused large swings in output quality.",
      "Tiptap's extension API is powerful but under-documented — I ended up reading source code to understand how transaction states work.",
    ],
    futurePlans: [
      "Add a citation/reference management system that auto-formats sources.",
      "Fine-tune a smaller model on writing samples for lower latency and cost.",
      "Explore a browser extension version that works inside Google Docs.",
    ],
  },
  {
    id: "project-management-tool",
    title: "Project Management Tool",
    subtitle: "Real-time collaborative workspace for distributed teams",
    date: "September 2024",
    readTime: "9 min read",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    // No GitHub — this was a private client project
    github: null,
    overview: `A collaborative project management platform built for a client whose team spans four time zones. The core challenge was real-time sync — when one person moves a card or updates a task, everyone else sees it immediately, with no page refresh and no conflicts. This is not on GitHub as it was built under an NDA for a private client.`,
    problem: `The client was using a spreadsheet shared over email to track 60+ active tasks across 12 team members. Version conflicts and missed updates were costing hours every week.`,
    whatIDid: [
      "Built a Kanban board with drag-and-drop (dnd-kit) that syncs state across all connected clients via Socket.io rooms.",
      "Used Redis as a pub/sub layer between multiple Node.js instances so the app could scale horizontally behind a load balancer.",
      "Implemented optimistic UI updates — the UI reflects changes immediately while the server confirms in the background, keeping perceived latency near zero.",
      "Added a conflict resolution strategy for simultaneous edits: last-write-wins for simple fields, operational transforms for rich text.",
      "Built a notification system with per-user preferences (in-app, email digest, or Slack webhook).",
    ],
    codeSnippets: [
      {
        title: "taskSocket.js — Optimistic update pattern",
        language: "JavaScript",
        code: `// Client side — optimistic update + rollback on error
function moveTask(taskId, fromColumn, toColumn) {
  // 1. Update local state immediately (optimistic)
  dispatch({ type: "MOVE_TASK", taskId, fromColumn, toColumn });

  // 2. Emit to server
  socket.emit("task:move", { taskId, fromColumn, toColumn }, (ack) => {
    if (ack.status === "error") {
      // 3. Roll back if server rejects
      console.error("Move rejected:", ack.reason);
      dispatch({ type: "MOVE_TASK", taskId, fromColumn: toColumn, toColumn: fromColumn });
      toast.error("Could not move task — please try again.");
    }
  });
}

// Server side — Redis pub/sub broadcast
socket.on("task:move", async ({ taskId, fromColumn, toColumn }, callback) => {
  try {
    await db.tasks.updateOne({ _id: taskId }, { $set: { column: toColumn } });
    // Broadcast to everyone else in the room
    socket.to(roomId).emit("task:moved", { taskId, fromColumn, toColumn });
    callback({ status: "ok" });
  } catch (err) {
    callback({ status: "error", reason: err.message });
  }
});`,
      },
    ],
    learnings: [
      "Optimistic UI is the single biggest perceived performance win — even a 200ms network round-trip feels instant when the UI doesn't wait for it.",
      "Redis pub/sub is straightforward to add but requires careful thought about message ordering guarantees when network partitions occur.",
      "MongoDB's flexible schema was helpful early on but became a liability as the data model stabilised — I'd use PostgreSQL for a greenfield version today.",
      "Real-time features surface race conditions that are invisible in single-user testing. Writing concurrent integration tests early would have saved debugging time.",
    ],
    futurePlans: [
      "Build a mobile companion app (React Native) for on-the-go task updates.",
      "Add a timeline/Gantt view for milestone tracking.",
      "Explore CRDTs (Conflict-free Replicated Data Types) to replace the current conflict resolution approach with something provably correct.",
    ],
  },
];

// ─── Single Project Article ───────────────────────────────────────────────────
const ProjectArticle = ({ project }) => {
  return (
    <article id={project.id} className="py-24 border-b border-border/30 scroll-mt-24">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden aspect-video mb-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Meta overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/30">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{project.title}</h2>
          <p className="text-muted-foreground text-sm">{project.subtitle}</p>
        </div>
      </div>

      {/* Date + read time + links */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{project.date}</span>
          <span>·</span>
          <span>{project.readTime}</span>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all border border-border/50"
            >
              <GithubIcon />
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <p className="text-foreground/80 text-base leading-relaxed">{project.overview}</p>
      </div>

      {/* Problem */}
      <CollapsibleSection
        icon={BookOpen}
        title="The Problem"
        color="bg-blue-500/10 text-blue-400"
      >
        <p>{project.problem}</p>
      </CollapsibleSection>

      {/* What I Did */}
      <CollapsibleSection
        icon={Code2}
        title="What I Built & How"
        color="bg-primary/10 text-primary"
      >
        <ul className="space-y-3">
          {project.whatIDid.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CollapsibleSection>

      {/* Code Snippets */}
      {project.codeSnippets && project.codeSnippets.length > 0 && (
        <CollapsibleSection
          icon={Code2}
          title="Code Highlights"
          color="bg-purple-500/10 text-purple-400"
        >
          <p className="mb-2">Key implementation details worth looking at:</p>
          {project.codeSnippets.map((snippet, i) => (
            <CodeSnippet key={i} {...snippet} />
          ))}
        </CollapsibleSection>
      )}

      {/* Learnings */}
      <CollapsibleSection
        icon={Lightbulb}
        title="What I Learned"
        color="bg-yellow-500/10 text-yellow-400"
      >
        <ul className="space-y-3">
          {project.learnings.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CollapsibleSection>

      {/* Future Plans */}
      <CollapsibleSection
        icon={Rocket}
        title="Future Plans"
        color="bg-green-500/10 text-green-400"
      >
        <ul className="space-y-3">
          {project.futurePlans.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CollapsibleSection>
    </article>
  );
};

// ─── Blog Page ────────────────────────────────────────────────────────────────
export const Blog = () => {
  // Scroll to hash on load
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient glows */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 max-w-3xl">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </a>

        {/* Page header */}
        <div className="mb-16 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Case Studies
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-secondary-foreground">
            Project
            <span className="font-serif italic font-normal text-white"> Deep Dives.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Behind every project card is a story — the problem, the decisions, the code, the mistakes, and what comes next. This is where I write that story.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="glass rounded-2xl p-6 mb-16 animate-fade-in animation-delay-200">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            In this page
          </h3>
          <ul className="space-y-2">
            {blogProjects.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className="flex items-center justify-between group py-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>{p.title}</span>
                  <div className="flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{p.readTime}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Articles */}
        {blogProjects.map((project) => (
          <ProjectArticle key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Blog;