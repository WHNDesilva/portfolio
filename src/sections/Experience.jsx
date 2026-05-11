// const milestones = [
//   {
//     period: "2023 — Present",
//     role: "BSc (Hons) Management Information Systems",
//     company: "NSBM Green University",
//     description:
//       "Currently in my 3rd year, studying the intersection of business strategy and information technology. Coursework covers software development, database management, business analytics, UI/UX design, and project management.",
//     tags: ["MIS", "Software Dev", "Business Analytics", "Databases"],
//     current: true,
//     type: "education",
//   },
//   {
//     period: "2025",
//     role: "Personal Portfolio — Dev Personal Portfolio",
//     company: "Self-Initiated Project",
//     description:
//       "Designed and developed a fully responsive personal portfolio from scratch using React, Tailwind CSS, and Vite. Focused on clean UI, smooth animations, and a dark aesthetic that reflects my design sensibility.",
//     tags: ["React", "Tailwind CSS", "Vite", "Figma", "UI/UX"],
//     current: false,
//     type: "project",
//   },
//   {
//     period: "2024",
//     role: "Student Portal — Group Project",
//     company: "NSBM Green University",
//     description:
//       "Collaborated in a team to design and build a student management portal. Led the frontend development and UI/UX design, creating wireframes in Figma and implementing them with HTML, CSS, and JavaScript.",
//     tags: ["HTML/CSS", "JavaScript", "Figma", "MySQL", "Team Project"],
//     current: false,
//     type: "project",
//   },
//   {
//     period: "2024",
//     role: "Power BI Business Dashboard",
//     company: "Academic Project",
//     description:
//       "Built an interactive business intelligence dashboard in Power BI to visualise sales trends, inventory levels, and KPIs for a simulated retail business. Focused on making data readable and actionable for non-technical stakeholders.",
//     tags: ["Power BI", "Data Analytics", "Business Intelligence", "Draw.io"],
//     current: false,
//     type: "project",
//   },
//   {
//     period: "2022 — 2023",
//     role: "A/L Physical Science Stream",
//     company: "Secondary School",
//     description:
//       "Completed Advanced Levels with a focus on combined maths, physics, and chemistry — building a strong analytical foundation that now informs how I approach technical problem-solving.",
//     tags: ["Mathematics", "Physics", "Analytical Thinking"],
//     current: false,
//     type: "education",
//   },
// ];

// // Badge colour per type
// const typeBadge = {
//   education: "bg-primary/15 text-primary border-primary/30",
//   project: "bg-highlight/10 text-highlight border-highlight/30",
// };

// const typeLabel = {
//   education: "Education",
//   project: "Project",
// };

// export const Experience = () => {
//   return (
//     <section id="experience" className="py-32 relative overflow-hidden">
//       <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             My Journey
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Education &amp; work that
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               shapes me.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A timeline of my academic path, hands-on projects, and the
//             milestones that have built my skills — one step at a time.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Vertical line */}
//           <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

//           <div className="space-y-12">
//             {milestones.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
//                 style={{ animationDelay: `${(idx + 1) * 150}ms` }}
//               >
//                 {/* Dot */}
//                 <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
//                   {item.current && (
//                     <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
//                   )}
//                 </div>

//                 {/* Card */}
//                 <div
//                   className={`pl-8 md:pl-0 ${
//                     idx % 2 === 0
//                       ? "md:pr-16 md:text-right"
//                       : "md:col-start-2 md:pl-16"
//                   }`}
//                 >
//                   <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
//                     {/* Type badge + period */}
//                     <div
//                       className={`flex items-center gap-3 mb-3 ${
//                         idx % 2 === 0 ? "md:justify-end" : ""
//                       }`}
//                     >
//                       <span
//                         className={`px-2.5 py-0.5 text-xs rounded-full border font-medium ${typeBadge[item.type]}`}
//                       >
//                         {typeLabel[item.type]}
//                       </span>
//                       <span className="text-sm text-primary font-medium">
//                         {item.period}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-semibold">{item.role}</h3>
//                     <p className="text-muted-foreground text-sm">{item.company}</p>
//                     <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
//                       {item.description}
//                     </p>

//                     <div
//                       className={`flex flex-wrap gap-2 mt-4 ${
//                         idx % 2 === 0 ? "md:justify-end" : ""
//                       }`}
//                     >
//                       {item.tags.map((tag, tIdx) => (
//                         <span
//                           key={tIdx}
//                           className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom note */}
//         <div className="mt-16 text-center animate-fade-in animation-delay-500">
//           <p className="text-muted-foreground text-sm">
//             Currently seeking an internship opportunity in{" "}
//             <span className="text-primary font-medium">
//               frontend development
//             </span>{" "}
//             or{" "}
//             <span className="text-primary font-medium">UI/UX design</span>.
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full border border-primary/40 text-sm text-primary hover:bg-primary/10 hover:border-primary/70 transition-all duration-300"
//           >
//             Let's connect →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


// import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// import { ArrowUpRight } from "lucide-react";

// // ─── Mirror the colour/label maps from Projects.jsx ──────────────────────────
// // Kept local here so Experience.jsx has no import dependency on Projects.jsx.
// // If you change colours in Projects.jsx, update these to match.
// const CATEGORY_COLORS = {
//   frontend:  { pill: "bg-blue-500/10 text-blue-400 border-blue-500/30"        },
//   fullstack: { pill: "bg-primary/10 text-primary border-primary/30"           },
//   analytics: { pill: "bg-purple-500/10 text-purple-400 border-purple-500/30"  },
//   research:  { pill: "bg-highlight/10 text-highlight border-highlight/30"     },
//   other:     { pill: "bg-muted/30 text-muted-foreground border-border/50"     },
// };

// const CATEGORY_LABELS = {
//   frontend:  "Front-End",
//   fullstack: "Full-Stack",
//   analytics: "Analytics",
//   research:  "Research",
//   other:     "Other",
// };

// // ─── Timeline entries ─────────────────────────────────────────────────────────
// // type       → "education" | "project"  (controls the left badge colour)
// // category   → Projects category key, or null for education entries
// //              Shows a coloured pill that doubles as a filter shortcut button
// // projectId  → matches the `id` in Projects.jsx
// //              When set, shows a "See project →" link at the card bottom
// const milestones = [
//   {
//     period: "2023 — Present",
//     role: "BSc (Hons) Management Information Systems",
//     company: "NSBM Green University",
//     description:
//       "Currently in my 3rd year, studying the intersection of business strategy and information technology. Coursework covers software development, database management, business analytics, UI/UX design, and project management.",
//     tags: ["MIS", "Software Dev", "Business Analytics", "Databases"],
//     current: true,
//     type: "education",
//     category: null,    // education entry — no category pill or "See project" link
//     projectId: null,
//   },
//   {
//     period: "2025",
//     role: "Personal Portfolio",
//     company: "Self-Initiated Project",
//     description:
//       "Designed and developed a fully responsive dark-themed portfolio from scratch using React, Tailwind CSS, and Vite — focused on clean UI, smooth animations, and a component-driven architecture.",
//     tags: ["React", "Tailwind CSS", "Vite", "Figma", "UI/UX"],
//     current: false,
//     type: "project",
//     category: "frontend",
//     projectId: "portfolio",
//   },
//   {
//     period: "2024",
//     role: "Student Portal — Group Project",
//     company: "NSBM Green University",
//     description:
//       "Collaborated in a team to design and build a student management system. Led the frontend development and UI/UX design — wireframed in Figma, implemented with HTML, CSS, JavaScript, and a MySQL backend.",
//     tags: ["HTML/CSS", "JavaScript", "Figma", "MySQL", "Team Project"],
//     current: false,
//     type: "project",
//     category: "fullstack",
//     projectId: "student-portal",
//   },
//   {
//     period: "2024",
//     role: "Business Intelligence Dashboard",
//     company: "Academic Project",
//     description:
//       "Built an interactive Power BI dashboard to visualise sales trends, inventory KPIs, and regional performance for a simulated retail business — designed to be readable by non-technical stakeholders.",
//     tags: ["Power BI", "DAX", "Data Modelling", "Draw.io"],
//     current: false,
//     type: "project",
//     category: "analytics",
//     projectId: "powerbi-dashboard",
//   },
//   {
//     period: "2024 — Ongoing",
//     role: "Inventory Management System",
//     company: "Self-Initiated Project",
//     description:
//       "An ongoing full-stack build — a real-time inventory tracking system with role-based access, low-stock alerts, and an analytics reporting panel. Currently in active development.",
//     tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
//     current: true,
//     type: "project",
//     category: "fullstack",
//     projectId: "inventory-system",
//   },
//   {
//     period: "2022 — 2023",
//     role: "A/L Physical Science Stream",
//     company: "Secondary School",
//     description:
//       "Completed Advanced Levels with a focus on combined maths, physics, and chemistry — building a strong analytical foundation that now informs how I approach technical problem-solving.",
//     tags: ["Mathematics", "Physics", "Analytical Thinking"],
//     current: false,
//     type: "education",
//     category: null,
//     projectId: null,
//   },
// ];

// // Badge styles for the type pill (Education / Project)
// const typeBadge = {
//   education: "bg-primary/15 text-primary border-primary/30",
//   project:   "bg-highlight/10 text-highlight border-highlight/30",
// };
// const typeLabel = {
//   education: "Education",
//   project:   "Project",
// };

// // ─── Helper: fire a cross-section filter event + scroll to Projects ───────────
// // Projects.jsx listens for "portfolio:setCategory" on window.
// // This lets Experience cards control the Projects filter without any shared state.
// const jumpToProjectCategory = (category) => {
//   // 1. Tell Projects.jsx which filter to activate
//   window.dispatchEvent(
//     new CustomEvent("portfolio:setCategory", { detail: { category } })
//   );
//   // 2. Wait one tick then scroll — the state update needs a frame to apply first
//   setTimeout(() => {
//     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
//   }, 50);
// };

// // ─── Component ────────────────────────────────────────────────────────────────
// export const Experience = () => {
//   return (
//     <section id="experience" className="py-32 relative overflow-hidden">
//       {/* Decorative background glow */}
//       <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

//       <div className="container mx-auto px-6 relative z-10">

//         {/* ── Section header ── */}
//         <div className="max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             My Journey
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Education &amp; work that
//             <span className="font-serif italic font-normal text-white">
//               {" "}shapes me.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A timeline of my academic path, hands-on projects, and the
//             milestones that have built my skills — one step at a time.
//           </p>
//         </div>

//         {/* ── Timeline ── */}
//         <div className="relative">
//           {/* Vertical glowing line */}
//           <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

//           <div className="space-y-12">
//             {milestones.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
//                 style={{ animationDelay: `${(idx + 1) * 150}ms` }}
//               >
//                 {/* Timeline dot — pings when current: true */}
//                 <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
//                   {item.current && (
//                     <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
//                   )}
//                 </div>

//                 {/* Card — alternates left/right on desktop */}
//                 <div
//                   className={`pl-8 md:pl-0 ${
//                     idx % 2 === 0
//                       ? "md:pr-16 md:text-right"
//                       : "md:col-start-2 md:pl-16"
//                   }`}
//                 >
//                   <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">

//                     {/* ── Badge row: type pill + category pill + period ──────────
//                         The category pill is a BUTTON — clicking it:
//                           1. Dispatches "portfolio:setCategory" event
//                           2. Projects.jsx receives it and activates that filter
//                           3. Page scrolls up to the Projects section
//                         Education entries have category: null so no pill renders.
//                     ─────────────────────────────────────────────────────────── */}
//                     <div className={`flex items-center gap-2 mb-3 flex-wrap ${idx % 2 === 0 ? "md:justify-end" : ""}`}>

//                       {/* Type badge — Education or Project (not interactive) */}
//                       <span className={`px-2.5 py-0.5 text-xs rounded-full border font-medium ${typeBadge[item.type]}`}>
//                         {typeLabel[item.type]}
//                       </span>

//                       {/* BUTTON: category pill — jumps to Projects section with this filter active */}
//                       {item.category && (
//                         <button
//                           onClick={() => jumpToProjectCategory(item.category)}
//                           title={`View all ${CATEGORY_LABELS[item.category]} projects`}
//                           className={`px-2.5 py-0.5 text-xs rounded-full border font-medium transition-opacity hover:opacity-70 cursor-pointer ${CATEGORY_COLORS[item.category]?.pill}`}
//                         >
//                           {CATEGORY_LABELS[item.category]}
//                         </button>
//                       )}

//                       <span className="text-sm text-primary font-medium">{item.period}</span>
//                     </div>

//                     <h3 className="text-xl font-semibold">{item.role}</h3>
//                     <p className="text-muted-foreground text-sm">{item.company}</p>
//                     <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{item.description}</p>

//                     {/* Tags — decorative only */}
//                     <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
//                       {item.tags.map((tag, tIdx) => (
//                         <span
//                           key={tIdx}
//                           className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* ── "See project →" link ──────────────────────────────────
//                         Only renders when the milestone has both a projectId and
//                         a category (i.e. it is a project entry, not education).
//                         Clicking:
//                           1. Dispatches "portfolio:setCategory" → Projects filter activates
//                           2. Scrolls up to the Projects section
//                         So the user lands directly on the filtered view for this project.
//                     ─────────────────────────────────────────────────────────── */}
//                     {item.projectId && item.category && (
//                       <div className={`mt-5 pt-4 border-t border-border/30 flex ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
//                         {/* BUTTON: scrolls to Projects section and activates the matching category filter */}
//                         <button
//                           onClick={() => jumpToProjectCategory(item.category)}
//                           className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/70 transition-colors group/link"
//                         >
//                           See project
//                           <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
//                         </button>
//                       </div>
//                     )}

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── Bottom CTA ───────────────────────────────────────────────────────
//             Uses AnimatedBorderButton with href="#contact" so it scrolls
//             to the Contact section — same style as the Projects cycling button.
//             AnimatedBorderButton renders an <a> when href is passed.
//         ─────────────────────────────────────────────────────────────────── */}
//         <div className="mt-16 text-center animate-fade-in animation-delay-500">
//           <p className="text-muted-foreground text-sm mb-6">
//             Currently seeking an internship in{" "}
//             <span className="text-primary font-medium">frontend development</span>{" "}
//             or{" "}
//             <span className="text-primary font-medium">UI/UX design</span>.
//           </p>

//           {/* LINK: scrolls to the Contact section — href renders this as an <a> tag */}
//           <AnimatedBorderButton href="#contact">
//             Let's Connect
//             <ArrowUpRight className="w-5 h-5" />
//           </AnimatedBorderButton>
//         </div>
        

//       </div>
//     </section>
//   );
// };

// Experience.jsx
// Education timeline + Certifications section.
//
// CERTIFICATE MODAL:
//   Clicking the ArrowUpRight on a certificate card opens a full-screen popup
//   modal — same style, same backdrop blur, same glass panel as the Projects
//   image modal — showing the certificate image at full size with title,
//   provider, tags, and a direct "Open Certificate" link.
//   Close: X button, click backdrop, or Escape key.

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X, ExternalLink, ChevronDown } from "lucide-react";

// ─── Certificate modal ────────────────────────────────────────────────────────
const CertModal = ({ cert, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: "rgba(0,0,0,0.80)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(32,178,166,0.15)] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-900/90 border border-zinc-600 text-zinc-200 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg"
          title="Close (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Certificate image — scrollable so tall certs aren't cropped */}
        <div className="relative overflow-y-auto bg-surface" style={{ maxHeight: "58vh" }}>
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto block"
          />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card/90 to-transparent pointer-events-none" />
        </div>

        {/* Info panel */}
        <div className="p-6 space-y-4 border-t border-border/30">
          {/* Provider badge */}
          <span className="inline-block px-3 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
            {cert.provider}
          </span>

          <h3 className="text-2xl font-bold text-foreground">{cert.title}</h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {cert.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-surface border border-border/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action */}
          <div className="pt-1 flex items-center gap-3">
            {/* <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Open Certificate
              <ExternalLink className="w-4 h-4" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences = [
  {
    period: "2023 — Present",
    role: "BSc (Hons) Management Information Systems",
    company: "NSBM Green University",
    description:
      "Currently in my 3rd year, studying the intersection of business strategy and information technology. Coursework covers software development, database management, business analytics, UI/UX design, and project management.",
    technologies: ["MIS", "Software Dev", "Business Analytics", "Databases"],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Diploma in Psychology & Counselling",
    company: "IMBS",
    description:
      "Studied human behaviour, cognitive processes, and foundational counselling techniques. This background shapes how I approach UI/UX — placing the human experience at the centre of every design decision.",
    technologies: ["Psychology", "Counselling", "Human Behaviour", "Communication"],
    current: false,
  },
  {
    period: "2020 — 2023",
    role: "Advanced Level",
    company: "St John's Girls' School",
    description:
      "Completed Advanced Levels with a focus on Biology subjects — building a strong analytical and scientific foundation that continues to inform how I approach complex technical problems.",
    technologies: [],
    current: false,
  },
];

const certificates = [
  {
    title: "Data Analytics Essentials",
    provider: "Cisco Networking Academy",
    image: "/certificates/data-analytics.png",
    tags: ["Data Analysis", "Microsoft Excel", "SQL", "Data Visualization"],
    link: "/certificates/data-analytics.png",
  },
  {
    title: "Introduction to Modern AI",
    provider: "Cisco Networking Academy",
    image: "/certificates/AI.jpg",
    tags: ["Generative AI for Learning and Development"],
    link: "/certificates/AI.jpg",
  },
  {
    title: "Diploma in Psychology & Counselling",
    provider: "IMBS Green Campus Distance Learning Centre (DLC) Sri Lanka",
    image: "/certificates/psychology.jpg",
    tags: ["Counseling Psychology"],
    link: "/certificates/psychology.jpg",
  },
  {
    title: "Power BI for Beginners",
    provider: "Simplilearn",
    image: "/certificates/powerbi.jpg",
    tags: ["Power BI", "Data Viz", "Analytics"],
    link: "/certificates/poerbi.jpg",
  },
  {
    title: "Introduction to Figma",
    provider: "Simplilearn",
    image: "/certificates/figma.jpg",
    tags: ["Figma (Software)"],
    link: "/certificates/figma.jpg",
  },
  {
    title: "Introduction to Graphic Design; Basics of UI/UX",
    provider: "Simplilearn",
    image: "/certificates/uiux.jpg",
    tags: ["User Interface Design", "User Experience (UX)"],
    link: "/certificates/uiux.jpg",
  },
  {
    title: "Fundamentals of Quality Assuranc",
    provider: "Alison",
    image: "/certificates/qa.jpg",
    tags: ["Quality Assurance"],
    link: "/certificates/qa.jpg",
  },
  {
    title: "Creating Compelling Reports",
    provider: "Cisco Networking Academy",
    image: "/certificates/report.jpg",
    tags: ["Determining Relevance", "Report Purpose", "Report Audience"],
    link: "/certificates/report.jpg",
  },
  {
    title: "Engaging Stakeholders for Success",
    provider: "Cisco Networking Academy",
    image: "/certificates/stake.jpg",
    tags: ["Active Listening", "Interview Techniques"],
    link: "/certificates/stake.jpg",
  },
    {
    title: "Business Analysis Basics",
    provider: "Simplilearn",
    image: "/certificates/BI.jpg",
    tags: ["Business Analysis", "Requirement Gathering & Documentation"],
    link: "/certificates/BI.jpg",
  },
    {
    title: "Project Management 101",
    provider: "Simplilearn",
    image: "/certificates/PM.jpg",
    tags: ["Project Planning", "Problem Solving"],
    link: "/certificates/PM.jpg",
  },
    {
    title: "Introduction to cybersecurity ",
    provider: "Cisco Networking Academy",
    image: "/certificates/cyber.jpg",
    tags: ["Threat Detection", "Privacy And Data Confidentiality", "Threat Detection"],
    link: "/certificates/cyber.jpg",
  },
];

// How many cards to show before the "Show more" toggle
const INITIAL_VISIBLE = 6;

// ─── Certificate card ─────────────────────────────────────────────────────────
const CertCard = ({ cert, idx, onClick }) => (
  <div
    className="group glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_28px_rgba(32,178,166,0.12)] transition-all duration-500 animate-fade-in flex flex-col"
    style={{ animationDelay: `${(idx % INITIAL_VISIBLE) * 80}ms` }}
  >
    {/* Image area */}
    <div
      className="relative overflow-hidden cursor-pointer flex-shrink-0"
      style={{ aspectRatio: "16/9" }}
      onClick={onClick}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Arrow icon — centred on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-3 rounded-full glass border border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" title="View certificate">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Provider badge — top-left, always visible */}
      <div className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] rounded-full bg-primary/20 border border-primary/40 text-primary font-medium backdrop-blur-sm">
        {cert.provider}
      </div>

      {/* Index badge — top-right */}
      <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-zinc-900/70 border border-border/40 text-[10px] font-bold text-muted-foreground backdrop-blur-sm">
        {String(idx + 1).padStart(2, "0")}
      </div>
    </div>

    {/* Card body */}
    <div className="p-5 flex flex-col gap-3 flex-1">
      {/* Title row */}
      <div className="flex items-start justify-between gap-2">
        <h4
          className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors cursor-pointer flex-1"
          onClick={onClick}
        >
          {cert.title}
        </h4>
        <button
          onClick={onClick}
          title="View certificate"
          className="flex-shrink-0 mt-0.5"
        >
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-1 mt-auto">
        {cert.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-surface border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
export const Experience = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null);

  const hidden = certificates.length - INITIAL_VISIBLE;
  const showToggle = certificates.length > INITIAL_VISIBLE;
  const visible = expanded ? certificates : certificates.slice(0, INITIAL_VISIBLE);

  // Smooth scroll back up to grid top when collapsing
  const handleCollapse = () => {
    setExpanded(false);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}

      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">

          {/* ══ EDUCATION TIMELINE ══════════════════════════════════════════ */}
          <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Education &amp; work that{" "}
              <span className="font-serif italic font-normal text-white">
                shapes me.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A timeline of my educational journey and personal growth — shaped by
              continuous learning, curiosity, creativity, and the experiences that
              continue to guide me toward a future in technology and innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  <div
                    className={`pl-8 md:pl-0 ${
                      idx % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                        {exp.description}
                      </p>
                      {exp.technologies.length > 0 && (
                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                          {exp.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ CERTIFICATIONS ══════════════════════════════════════════════ */}
          <div className="mt-28">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Self Learning
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-5 text-secondary-foreground">
                Courses &amp;{" "}
                <span className="font-serif italic font-normal text-white">
                  certifications.
                </span>
              </h3>
              <p className="text-muted-foreground">
                A collection of certifications and self-learning experiences that
                reflect my passion for continuous growth, creativity, and exploring
                new areas in technology and design.
              </p>
            </div>

            {/* Grid — scroll anchor */}
            <div ref={gridRef} className="scroll-mt-8">

              {/* ── Collapsible grid with soft fade mask at bottom when collapsed ── */}
              <div className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visible.map((cert, idx) => (
                    <CertCard
                      key={idx}
                      cert={cert}
                      idx={idx}
                      onClick={() => setActiveCert(cert)}
                    />
                  ))}
                </div>

                {/* Fade mask — only shown when collapsed and there are hidden cards */}
                {!expanded && showToggle && (
                  <div
                    className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, var(--background, #0a0a0a) 20%, transparent 100%)",
                    }}
                  />
                )}
              </div>

              {/* ── Show more / Show less toggle ── */}
              {showToggle && (
                <div className="flex flex-col items-center gap-3 mt-10">
                  <button
                    onClick={expanded ? handleCollapse : () => setExpanded(true)}
                    className="group flex items-center gap-2.5 px-7 py-3 rounded-full glass border border-primary/30 text-sm font-medium text-primary hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all duration-300"
                  >
                    {expanded ? (
                      <>
                        Show less
                        <ChevronDown className="w-4 h-4 rotate-180 transition-transform duration-300" />
                      </>
                    ) : (
                      <>
                        Show {hidden} more certificate{hidden !== 1 ? "s" : ""}
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                      </>
                    )}
                  </button>

                  {/* Count indicator */}
                  <span className="text-xs text-muted-foreground">
                    {expanded ? `All ${certificates.length}` : `${INITIAL_VISIBLE} of ${certificates.length}`} certificates shown
                  </span>
                </div>
              )}
            </div>

          </div>
          {/* ══ END CERTIFICATIONS ═══════════════════════════════════════════ */}

        </div>
      </section>
    </>
  );
};