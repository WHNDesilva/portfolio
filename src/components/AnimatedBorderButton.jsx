// import { Download } from "lucide-react";

// export const AnimatedBorderButton = ({ children }) => {
//   return (
//     <button
//       className="relative bg-transparent border border-border 
//         text-foreground hover:border-primary/50 transition-all 
//         duration-1000 focus:outline-none focus-visible:ring-2 
//         focus-visible:ring-primary focus-visible:ring-offset-2 
//         disabled:opacity-50 disabled:cursor-not-allowed group 
//         px-8 py-4 text-lg font-medium rounded-full overflow-visible 
//         animated-border"
//     >
//       {/* Animated SVG Border */}
//       <svg
//         className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
//         viewBox="0 0 200 60"
//         preserveAspectRatio="none"
//         style={{ overflow: "visible" }}
//       >
//         <path
//           d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
//           fill="none"
//           stroke="var(--color-primary)"
//           strokeWidth="2"
//           strokeDasharray="400 550"
//           strokeDashoffset="400"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="animated-border-path"
//         />
//       </svg>
//       <span className="relative z-10 flex items-center justify-center gap-2">
//         {children}
//       </span>
//     </button>
//   );
// };

// AnimatedBorderButton.jsx
// Your original animated SVG-border button — now supports onClick and href.
//
// Usage:
//   As a button:  <AnimatedBorderButton onClick={fn}>Label</AnimatedBorderButton>
//   As a link:    <AnimatedBorderButton href="#contact">Label</AnimatedBorderButton>
//
// When href is provided it renders an <a> tag (smooth-scrolls or navigates).
// When onClick is provided it renders a <button> tag.
// Both props can be passed together if needed.

export const AnimatedBorderButton = ({ children, onClick, href }) => {
  // Shared className — identical to your original
  const sharedClass = `relative bg-transparent border border-border 
    text-foreground hover:border-primary/50 transition-all 
    duration-1000 focus:outline-none focus-visible:ring-2 
    focus-visible:ring-primary focus-visible:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed group 
    px-8 py-4 text-lg font-medium rounded-full overflow-visible 
    animated-border`;

  // Shared inner content — your exact SVG border + children, unchanged
  const inner = (
    <>
      {/* Animated SVG Border — your original path, untouched */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  // Render as <a> when href is given, otherwise as <button>
  if (href) {
    return (
      <a href={href} className={sharedClass}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={sharedClass}>
      {inner}
    </button>
  );
};