

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

// ─── GitHub icon ──────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

// ─── Category definitions ─────────────────────────────────────────────────────
const CATEGORIES = [
  { key: "recent",    label: "Recent"                                  },
  { key: "frontend",  label: "Front-End",  github: true                },
  { key: "fullstack", label: "Full-Stack", github: true,  ongoing: true },
  { key: "analytics", label: "Analytics",  github: false, ongoing: true },
  { key: "research",  label: "Research",   github: false, ongoing: true },
  { key: "uiux",      label: "UI/UX",      github: false               },
  { key: "other",     label: "Other",      github: false               },
];

// ─── Category pills — solid dark bg so always readable over any image ─────────
const CATEGORY_COLORS = {
  frontend:  { pill: "bg-blue-950/90 text-blue-300 border-blue-500/60"       },
  fullstack: { pill: "bg-teal-950/90 text-teal-300 border-teal-500/60"       },
  analytics: { pill: "bg-purple-950/90 text-purple-300 border-purple-500/60" },
  research:  { pill: "bg-amber-950/90 text-amber-300 border-amber-500/60"    },
  uiux:      { pill: "bg-pink-950/90 text-pink-300 border-pink-500/60"       },
  other:     { pill: "bg-zinc-900/90 text-zinc-300 border-zinc-600/60"       },
};

// ─── Tech tag colors keyed by category ───────────────────────────────────────
const TAG_COLORS = {
  frontend:  "bg-blue-500/10 text-blue-300 border-blue-500/25 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-200",
  fullstack: "bg-teal-500/10 text-teal-300 border-teal-500/25 hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-200",
  analytics: "bg-purple-500/10 text-purple-300 border-purple-500/25 hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-200",
  research:  "bg-amber-500/10 text-amber-300 border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-400/50 hover:text-amber-200",
  uiux:      "bg-pink-500/10 text-pink-300 border-pink-500/25 hover:bg-pink-500/20 hover:border-pink-400/50 hover:text-pink-200",
  other:     "bg-zinc-500/10 text-zinc-300 border-zinc-500/25 hover:bg-zinc-500/20 hover:border-zinc-400/50 hover:text-zinc-200",
};

// ─── Modal tech tag colors ────────────────────────────────────────────────────
const MODAL_TAG_COLORS = {
  frontend:  "bg-blue-500/15 text-blue-300 border-blue-500/35 hover:bg-blue-500/25 hover:text-blue-200",
  fullstack: "bg-teal-500/15 text-teal-300 border-teal-500/35 hover:bg-teal-500/25 hover:text-teal-200",
  analytics: "bg-purple-500/15 text-purple-300 border-purple-500/35 hover:bg-purple-500/25 hover:text-purple-200",
  research:  "bg-amber-500/15 text-amber-300 border-amber-500/35 hover:bg-amber-500/25 hover:text-amber-200",
  uiux:      "bg-pink-500/15 text-pink-300 border-pink-500/35 hover:bg-pink-500/25 hover:text-pink-200",
  other:     "bg-zinc-500/15 text-zinc-300 border-zinc-500/35 hover:bg-zinc-500/25 hover:text-zinc-200",
};

// ─── Status pills — solid dark bg, always readable over images ────────────────
const STATUS_STYLES = {
  ongoing:  { dot: "bg-amber-400 animate-pulse", pill: "bg-amber-950/90 border-amber-500/60 text-amber-300", label: "Ongoing"  },
  complete: { dot: "bg-green-400",               pill: "bg-green-950/90 border-green-500/60 text-green-300",  label: "Complete" },
};

// ─── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "Designed and built from scratch — a fully responsive dark-themed portfolio using React, Vite, and Tailwind CSS with smooth animations and a clean component structure.",
    tags: ["React", "Tailwind CSS", "Vite"],
    category: "frontend",
    status: "ongoing",
    github: "https://github.com/WHNDesilva/portfolio",
    slides: [
      { image: "/projects/portfolio/overview.png",   caption: "Project overview" },
      { image: "/projects/portfolio/herosection.png",   caption: "Hero section — animated dark-themed landing page with glowing accents." },
       { image: "/projects/portfolio/aboutsection.png",   caption: "Tech stack marquee — scrolling banner of technologies and tools. About section — personal summary with skill highlight cards." },
        { image: "/projects/portfolio/projectsection.png",   caption: "Projects section — filtered gallery with category buttons and status badges." },
         { image: "/projects/portfolio/educationsection.png",   caption: "Education timeline — academic background and journey." },
          { image: "/projects/portfolio/courses.png",   caption: "Courses & certifications — visual gallery of real certificates." },
           { image: "/projects/portfolio/explore.png",   caption: "What I'm exploring now — carousel of current learning topics." },
            { image: "/projects/portfolio/contact.png",   caption: "Contact section — form with email, LinkedIn and location details." },
             { image: "/projects/portfolio/mobile.png",   caption: "Mobile nav menu and Footer." },
              
    ],
  },
  {
    id: "next.js malewana",
    title: "Malewana College Digital Presence — Official Website",
    description:
      "A modern, responsive front-end website for a college — designed to showcase academic programs, campus life, and student resources. Built with Next.js and Tailwind CSS for optimal performance, SEO and a seamless user experience across all devices.",
    tags: ["Next.js", "Tailwind CSS", "React", "Responsive Design"],
    category: "frontend",
    status: "ongoing",
    github: "https://github.com/WHNDesilva/malewana-website",
    slides: [
      { image: "/projects/nextjs malewana/home page.png",  caption: "Ayurvedic medical college homepage — heritage meets modern wellness education." },
      { image: "/projects/nextjs malewana/courses.png", caption: "course page-Quick links for courses, click-to-reveal certificate, easy bottom navigation menu." },
      { image: "/projects/nextjs malewana/engagement.png", caption: "Gallery filters (Welfare | Graduations | Events), academic excellence highlights, convocation details, featured articles, and journal insights." },
      { image: "/projects/nextjs malewana/contact.png", caption: "Location map, phone & email, opening hours, FAQ accordion, and quick navigation footer." },
      { image: "/projects/nextjs malewana/mobileview.png", caption: "Fully responsive design + bilingual language switcher (EN/SI)." },
      
    ],
  },
  {
    id: "Collaborative Web Project",
    title: "Collaborative Web Project",
    description:
      "Collaborated in a team-based static website project built using HTML5 and CSS3",
    tags: ["HTML5","CSS3"],
    category: "frontend",
    status: "complete",
    github: "https://github.com/OpenStag/Project-13",
    slides: [
      { image: "/projects/collabweb/uicollab.png",  caption: "Overview of the website" },
      { image: "/projects/collabweb/rooms.png", caption: "my collaboration" },
      
    ],
  },
  {
    id: "html website",
    title: "Personal College Website (Practice Project)",
    description:
      "Designed and developed a responsive multi-page website using HTML, CSS, and JavaScript to strengthen front-end development skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    status: "ongoing",
    github: "https://github.com/WHNDesilva/personal-project1",
    slides: [
      { image: "/projects/html malewana/home.png",  caption: "Home page of the demo website." },
      { image: "/projects/html malewana/about.png",  caption: "About page" },
      { image: "/projects/html malewana/services.png",  caption: "Services page" },
      { image: "/projects/html malewana/courses.png",  caption: "courses page" },
      { image: "/projects/html malewana/contact.png",  caption: "contact page" },
      { image: "/projects/html malewana/mobileview.png",  caption: "mobile view" },
    ],
  },
  {
    id: "railway ui",
    title: "Sri Lanka Railway Mobile App Redesign (UI/UX Case Study)",
    description:
      "Conducted a user-centered redesign of the Sri Lanka Railway mobile application to improve usability, accessibility and the overall passenger experience as a group project.",
    tags: ["UX Research", "UI/UX Design", "Prototyping", "Figma", "Heuristic Evaluation", "Affinity Mapping"],
    category: "uiux", 
    status: "complete",
    github: null,
    slides: [
      { image: "/projects/railwayui/home view.png",  caption: "Home view with easy navigation." },
      { image: "/projects/railwayui/train.jpg",  caption: "Easily reserve train seats with many comfortable options to choose." },
      { image: "/projects/railwayui/seat.jpg",  caption: "Seat selection." },
      { image: "/projects/railwayui/payment.jpg",  caption: "Various payment methods." },
      { image: "/projects/railwayui/seatmap.jpg",  caption: "Check and confirm your seat at one glance." },
      { image: "/projects/railwayui/confirmation.jpg",  caption: "Ticket Confirmation." },
      { image: "/projects/railwayui/services.jpg",  caption: "Eye-catching and easy navigation of services. " },
      { image: "/projects/railwayui/history.jpg",  caption: "Vizualized history section." },
      { image: "/projects/railwayui/mybooking.jpg",  caption: "Easily trackable booking history." },
    ],
  },
  {
    id: "java school management",
    title: "School Management System",
    description:
      "Developed a web-based School Management System designed to streamline school operations and administrative workflows as a collaborative project.",
    tags: ["Enterprise Web Application", "JAVA","Project Collaboration"],
    category: "fullstack",
    status: "complete",
    github: null,
    slides: [
      { image: "/projects/java school/dashboard.png",  caption: "Dashboard with key metrics (Total Students, Attendance Rate), trend charts, upcoming events, recent activity feed, and sidebar navigation (Students, Courses, Gradebook, Attendance, Logout)." },
     
    ],
  },
   {
  id: "research1",
  title: "The Impact of AI-Driven Decision Support Systems on Organizational Performance",
  description:
    "Ongoing independent research into how AI-driven Decision Support Systems (AI-DSS) influence organisational performance, strategic decision-making, and operational efficiency. Reviewing academic literature and industry case studies on AI adoption, predictive analytics, and decision automation.",
  tags: ["Artificial Intelligence", "Decision Support Systems", "Business Intelligence", "Research & Analysis"],
  category: "research",
  status: "ongoing",
  github: null,
  slides: [
    { image: "/projects/research/cover.png", caption: "Research overview — AI-DSS and organisational performance." },
  ],
},

{
  id: "analytics-dashboard",
  title: "Data Analytics Dashboard",
  description:
    "End-to-end analytics project covering data extraction, transformation, and visualization. Building interactive dashboards and reports using Power BI and Tableau, with SQL for data querying and Excel for data preparation — focused on translating raw datasets into actionable business insights.",
  tags: ["Power BI", "SQL", "Tableau", "Microsoft Excel", "Data Visualization", "Business Intelligence"],
  category: "analytics",
  status: "ongoing",
  github: null,
  slides: [
    { image: "/projects/analytics/dashboard.png", caption: "Interactive Power BI dashboard — key business metrics at a glance." },
  ],
},
];

const RECENT_COUNT = 4;
const CYCLE_ORDER  = ["frontend", "fullstack", "analytics", "research", "uiux", "other"];  // ← added uiux

const goToBlog = (projectId) => {
  if (typeof window.__navigateTo === "function") {
    window.__navigateTo(`/blog#${projectId}`);
  } else {
    window.location.href = `/blog#${projectId}`;
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// ProjectModal
// ═══════════════════════════════════════════════════════════════════════════════
const ProjectModal = ({ project, onClose }) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = project.slides;
  const status = STATUS_STYLES[project.status];

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const prev = () => setSlideIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setSlideIdx((i) => (i + 1) % slides.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.80)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(32,178,166,0.15)] animate-fade-in flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* X close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-zinc-900/90 border border-zinc-600 text-zinc-200 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg"
          title="Close (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Image area — scrollable ── */}
        {/* The pills are absolutely positioned inside this wrapper so they   */}
        {/* always sit at the top of the image, matching the card exactly.    */}
        <div className="relative flex-shrink-0">

          {/* Scrollable image */}
          <div className="overflow-y-auto" style={{ maxHeight: "60vh" }}>
            <img
              key={slideIdx}
              src={slides[slideIdx].image}
              alt={`${project.title} — slide ${slideIdx + 1}`}
              className="w-full h-auto block animate-fade-in"
            />
          </div>

          {/* ── Status pill — top-left, same as card ── */}
          <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full border shadow-md backdrop-blur-sm ${status.pill}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            <span className="text-[11px] font-medium tracking-wide">{status.label}</span>
          </div>

          {/* ── Category pill — top-right, same as card ── */}
          {/* Offset left a bit so it doesn't clash with the X close button */}
          <div className={`absolute top-3 right-12 z-10 px-2.5 py-0.5 text-[11px] rounded-full border font-medium shadow-md backdrop-blur-sm ${CATEGORY_COLORS[project.category]?.pill}`}>
            {CATEGORIES.find((c) => c.key === project.category)?.label}
          </div>

          {/* Slide count badge — bottom-right */}
          {slides.length > 1 && (
            <div className="absolute bottom-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[11px] text-white/80">
              {slideIdx + 1} / {slides.length}
            </div>
          )}

          {/* Slide nav arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-600 text-zinc-200 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg"
                title="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-600 text-zinc-200 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg"
                title="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Info panel */}
        <div className="p-6 space-y-4 overflow-y-auto border-t border-border/30">

          {/* Slide caption */}
          <p className="text-sm text-muted-foreground leading-relaxed italic">
            {slides[slideIdx].caption}
          </p>

          {/* Dot indicators */}
          {slides.length > 1 && (
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === slideIdx
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-primary/60"
                  }`}
                  title={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}

          <div className="border-t border-border/30 pt-4">
            <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${MODAL_TAG_COLORS[project.category]}`}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <GithubIcon />
                  GitHub
                </a>
              )}
              {slides.length > 1 && (
                <span className="ml-auto text-xs text-muted-foreground">
                  {slideIdx + 1} / {slides.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// Projects component
// ═══════════════════════════════════════════════════════════════════════════════
export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("recent");
  const cycleIndexRef = useRef(-1);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setActiveCategory(e.detail.category);
      cycleIndexRef.current = CYCLE_ORDER.indexOf(e.detail.category);
    };
    window.addEventListener("portfolio:setCategory", handler);
    return () => window.removeEventListener("portfolio:setCategory", handler);
  }, []);

  const handleCategoryClick = (key) => {
    setActiveCategory(key);
    cycleIndexRef.current = CYCLE_ORDER.indexOf(key);
  };

  const handleCycleNext = () => {
    const nextIndex = cycleIndexRef.current + 1;
    if (nextIndex >= CYCLE_ORDER.length) {
      cycleIndexRef.current = -1;
      setActiveCategory("recent");
    } else {
      cycleIndexRef.current = nextIndex;
      setActiveCategory(CYCLE_ORDER[nextIndex]);
    }
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const openModal  = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  const filtered =
    activeCategory === "recent"
      ? projects.slice(0, RECENT_COUNT)
      : projects.filter((p) => p.category === activeCategory);

  const showGithubFor = (project) => {
    const catDef = CATEGORIES.find((c) => c.key === project.category);
    return catDef?.github === true && !!project.github;
  };

  const cycleButtonLabel = (() => {
    if (cycleIndexRef.current === -1)
      return `View ${CATEGORIES.find((c) => c.key === CYCLE_ORDER[0])?.label}`;
    if (cycleIndexRef.current >= CYCLE_ORDER.length - 1)
      return "View Recent";
    return `View ${CATEGORIES.find((c) => c.key === CYCLE_ORDER[cycleIndexRef.current + 1])?.label}`;
  })();

  return (
    <>
      {modalProject && (
        <ProjectModal project={modalProject} onClose={closeModal} />
      )}

      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">

          {/* Section header */}
          <div className="text-center mx-auto max-w-3xl mb-10">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}make an impact.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A selection of my recent work — Through academic and personal projects, I’ve gained experience in collaborative development, user-centered design, 
                 requirement analysis, usability evaluation
                  and modern web technologies. I’m especially interested in understanding how business needs, user behavior
                  and technology can work together to solve real-world problems
            </p>
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in animation-delay-300">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_16px_rgba(32,178,166,0.35)]"
                    : "glass border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat.label}
                {cat.ongoing && (
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    activeCategory === cat.key ? "bg-primary-foreground/70" : "bg-highlight/60"
                  }`} />
                )}
              </button>
            ))}
          </div>

          {/* Project cards grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project, idx) => {
              const status = STATUS_STYLES[project.status];
              return (
                <div
                  key={project.id}
                  className="group glass rounded-2xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  {/* Image area */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.slides[0].image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                    {/* Status tag — top-left, solid bg */}
                    <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full border backdrop-blur-sm shadow-md ${status.pill}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      <span className="text-[11px] font-medium tracking-wide">{status.label}</span>
                    </div>

                    {/* Category pill — top-right, solid bg */}
                    <div className={`absolute top-3 right-3 px-2.5 py-0.5 text-[11px] rounded-full border font-medium backdrop-blur-sm shadow-md ${CATEGORY_COLORS[project.category]?.pill}`}>
                      {CATEGORIES.find((c) => c.key === project.category)?.label}
                    </div>

                    {/* Slide count badge */}
                    {project.slides.length > 1 && (
                      <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[11px] text-white/80">
                        {project.slides.length} photos
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openModal(project)}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        title="Preview screenshots"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                      {showGithubFor(project) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                          title="View on GitHub"
                        >
                          <GithubIcon />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => openModal(project)}
                        title="Preview screenshots"
                        className="flex-shrink-0 ml-2"
                      >
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </button>
                    </div>

                    <p className="text-muted-foreground text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${TAG_COLORS[project.category]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cycling CTA */}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton onClick={handleCycleNext}>
              {cycleButtonLabel}
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>

        </div>
      </section>
    </>
  );
};