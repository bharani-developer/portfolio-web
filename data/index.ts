export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export interface Technology {
  name: string;
  logo: string;
}

export interface GridItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  technologies: Technology[];
  className: string;
  img: string;
}

export const gridItems: GridItem[] = [
  {
    id: 1,
    badge: "Architecture",
    title: "Full Stack Portfolio",
    description:
      "A modern portfolio platform built with a scalable three-tier architecture consisting of an Express.js REST API backend, a React admin dashboard, and a high-performance Next.js website.",
    technologies: [
      { name: "Express", logo: "/logo/express.png" },
      { name: "React", logo: "/logo/react.png" },
      { name: "Next.js", logo: "/logo/nextjs.png" },
      { name: "MongoDB", logo: "/logo/mongodb.png" },
    ],
    className: "md:col-span-4 md:row-span-2",
    img: "/portfolio/portfolio.png",
  },

  {
    id: 2,
    badge: "Database",
    title: "MongoDB Database",
    description:
      "Designed a flexible NoSQL database using MongoDB and Mongoose with schema validation, indexing, reusable models, optimized queries, and scalable collections.",
    technologies: [
      { name: "MongoDB", logo: "/logo/mongodb.png" },
      { name: "Mongoose", logo: "/logo/mongoose.png" },
    ],
    className: "md:col-span-2 md:row-span-2",
    img: "/logo/mongodb.png",
  },

  {
    id: 3,
    badge: "Backend",
    title: "REST API Backend",
    description:
      "Built a secure REST API with authentication, authorization, image uploads, validation, modular architecture, and comprehensive API documentation.",
    technologies: [
      { name: "Node.js", logo: "/logo/nodejs.png" },
      { name: "Express", logo: "/logo/express.png" },
      { name: "TypeScript", logo: "/logo/typescript.png" },
      { name: "MongoDB", logo: "/logo/mongodb.png" },
      { name: "JWT", logo: "/logo/jwt.png" },
      { name: "Google OAuth", logo: "/logo/google.png" },
      { name: "Cloudinary", logo: "/logo/cloudinary.png" },
      { name: "Zod", logo: "/logo/zod.png" },
      { name: "Swagger", logo: "/logo/swagger.png" },
    ],
    className: "md:col-span-2",
    img: "/portfolio/restapi.png",
  },

  {
    id: 4,
    badge: "Admin Panel",
    title: "Content Management System",
    description:
      "Modern dashboard for managing hero, about, skills, services, projects, blogs, testimonials, education, certifications, and contact information.",
    technologies: [
      { name: "React", logo: "/logo/react.png" },
      { name: "TypeScript", logo: "/logo/typescript.png" },
      { name: "Vite", logo: "/logo/vite.png" },
      { name: "TanStack Query", logo: "/logo/react-query.png" },
      { name: "React Hook Form", logo: "/logo/react-hook-form.png" },
      { name: "Shadcn UI", logo: "/logo/shadcn.png" },
      { name: "Tailwind CSS", logo: "/logo/tailwindcss.png" },
      { name: "Axios", logo: "/logo/axios.png" },
    ],
    className: "md:col-span-2",
    img: "/portfolio/adminpanel.png",
  },

  {
    id: 5,
    badge: "Frontend",
    title: "Portfolio Website",
    description:
      "Built using Next.js App Router with smooth animations, responsive layouts, SEO optimization, reusable components, and excellent performance.",
    technologies: [
      { name: "Next.js", logo: "/logo/nextjs.png" },
      { name: "React", logo: "/logo/react.png" },
      { name: "TypeScript", logo: "/logo/typescript.png" },
      { name: "Motion", logo: "/logo/motion.png" },
      { name: "Tailwind CSS", logo: "/logo/tailwindcss.png" },
      { name: "React Query", logo: "/logo/react-query.png" },
      { name: "Axios", logo: "/logo/axios.png" },
      { name: "Next Themes", logo: "/logo/nextthemes.png" },
    ],
    className: "md:col-span-2",
    img: "/portfolio/frontend.png",
  },

  {
    id: 6,
    badge: "Developer Tools",
    title: "Development Workflow",
    description:
      "Maintained high code quality using modern development tools, version control, formatting, linting, debugging, and API testing.",
    technologies: [
      { name: "Git", logo: "/logo/git.png" },
      { name: "GitHub", logo: "/logo/github.png" },
      { name: "VS Code", logo: "/logo/vscode.png" },
      { name: "Postman", logo: "/logo/postman.png" },
      { name: "npm", logo: "/logo/npm.png" },
      { name: "ESLint", logo: "/logo/eslint.png" },
      { name: "Prettier", logo: "/logo/prettier.png" },
    ],
    className: "md:col-span-4",
    img: "/portfolio/development.png",
  },

  {
    id: 7,
    badge: "Features",
    title: "Project Highlights",
    description:
      "Secure authentication, Google OAuth, image uploads, REST APIs, SEO, responsive design, dark mode, performance optimization, and reusable architecture.",
    technologies: [
      { name: "JWT", logo: "/logo/jwt.png" },
      { name: "Google OAuth", logo: "/logo/google.png" },
      { name: "Cloudinary", logo: "/logo/cloudinary.png" },
      { name: "REST API", logo: "/logo/restapi.png" },
      { name: "Responsive", logo: "/logo/responsive.png" },
      { name: "SEO", logo: "/logo/seo.png" },
      { name: "Performance", logo: "/logo/performance.png" },
      { name: "Dark Mode", logo: "/logo/darkmode.png" },
    ],
    className: "md:col-span-2",
    img: "/portfolio/security.png",
  },
];
export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
