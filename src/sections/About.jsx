// import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

// const highlights = [
//   {
//     icon: Code2,
//     title: "Clean Code",
//     description:
//       "Writing maintainable, scalable code that stands the test of time.",
//   },
//   {
//     icon: Rocket,
//     title: "Performance",
//     description:
//       "Optimizing for speed and delivering lightning-fast user experiences.",
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     description: "Working closely with teams to bring ideas to life.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description:
//       "Staying ahead with the latest technologies and best practices.",
//   },
// ];

// export const About = () => {
//   return (
//     <section id="about" className="py-32 relative overflow-hidden">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Column */}
//           <div className="space-y-8">
//             <div className="animate-fade-in">
//               <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
//                 About Me
//               </span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
//               Building the future,
//               <span className="font-serif italic font-normal text-white">
//                 {" "}
//                 one component at a time.
//               </span>
//             </h2>

//             <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
//               <p>
//                 I'm a passionate software engineer with over 5 years of
//                 experience crafting digital products that make a difference. My
//                 journey started with a curiosity for how things work on the web,
//                 and it has evolved into a deep expertise in modern frontend
//                 technologies.
//               </p>
//               <p>
//                 I specialize in React, Next.js, and TypeScript, building
//                 everything from sleek landing pages to complex enterprise
//                 applications. My approach combines technical excellence with a
//                 keen eye for design and user experience.
//               </p>
//               <p>
//                 When I'm not coding, you'll find me exploring new technologies,
//                 contributing to open-source projects, or sharing knowledge with
//                 the developer community.
//               </p>
//             </div>

//             <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
//               <p className="text-lg font-medium italic text-foreground">
//                 "My mission is to create digital experiences that are not just
//                 functional, but truly delightful — products that users love to
//                 use and developers love to maintain."
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Hilights */}
//           <div className="grid sm:grid-cols-2 gap-6">
//             {highlights.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="glass p-6 rounded-2xl animate-fade-in"
//                 style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//               >
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
//                   <item.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Code2, Lightbulb, Palette, BarChart2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Front-End Dev",
    description:
      "Building clean, responsive websites using React, JavaScript, and Tailwind CSS.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces with Figma, focused on simplicity and flow.",
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    description:
      "Visualizing data with Power BI and Draw.io to support better business decisions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Bridging the gap between business needs and technology with creative thinking.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning, building,
              <span className="font-serif italic font-normal text-white">
                {" "}
                improving every day.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Hiruni Desilva, a 3rd year Management Information Systems
                undergraduate at NSBM Green University. I'm passionate about
                the space where technology meets business — building things that
                are both functional and meaningful.
              </p>
              <p>
                I enjoy creating digital experiences that are not only visually appealing 
                but also user-friendly, accessible, and meaningful. My interests range from designing 
                wireframes and interactive prototypes in Figma to developing responsive web interfaces with React
                 and analyzing data through Power BI dashboards.

                
              </p>
              <p>
                Outside of tech, I find balance in crocheting, gardening, 
                reading, and capturing the beauty of nature through photography 
                and videography. I believe creativity in life fuels creativity 
                in work.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I'm on a journey to grow into a professional who understands
                both the technical and human side of technology - building
                solutions that truly make a difference."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
