/**
 * Centralized Profile & Portfolio Data Configuration for Intzar Ali
 * Keep all personal information, links, and content here for easy modification.
 */

export const personalInfo = {
  name: "Intzar Ali",
  role: "Web Developer | MERN Stack Developer",
  subRole: "BCA Full Stack Student & Aspiring Software Engineer",
  tagline: "From Student to Developer — Crafting cinematic, modern web experiences.",
  email: "aliintzar8896@gmail.com",
  enrollmentNo: "TCA2468220",
  currentSemester: "5th Semester",
  section: "Section E",
  university: "Teerthankar Mahaveer University, Moradabad",
  admissionYear: "2024",
  degree: "BCA – Full Stack",
  bio: "I'm a BCA Full Stack student passionate about web development, modern technologies and building useful digital experiences. I'm continuously improving my skills and turning ideas into real-world projects.",
  aboutDetailed: "I am Intzar Ali, a BCA Full Stack student and aspiring Web Developer. My journey started with my high school education in 2020, followed by Intermediate in 2022. In 2024, I began my BCA journey at Teerthankar Mahaveer University. Since then, I have been developing my technical skills and working on real-world projects to strengthen my understanding of web development.",
  vision: "My goal is to become a skilled Full Stack Developer, build impactful digital products and continuously grow with modern technologies.",
  resumeUrl: "#contact", // or link to /resume-placeholder.pdf
};

export const socialLinks = {
  github: "https://github.com/aliintzar8896-pixel",
  linkedin: "https://www.linkedin.com/in/intzar-ali", // update if needed
  instagram: "https://www.instagram.com/intzar_x?stkn=MTZ0MnRscDRxOGNpcg==",
  email: "mailto:aliintzar8896@gmail.com",
};

export const statistics = [
  { value: "2020", label: "High School Milestone", suffix: "" },
  { value: "2022", label: "Intermediate Milestone", suffix: "" },
  { value: "2024", label: "BCA Journey Began", suffix: "" },
  { value: "5", label: "Current Semester", suffix: "th" },
  { value: "2", label: "Major Projects Built", suffix: "+" },
];

export const educationTimeline = [
  {
    year: "2020",
    title: "High School Examination",
    institution: "DSM Inter College, Bhainsora",
    grade: "73.67%",
    status: "Completed",
    description: "Built a solid academic foundation in science and mathematics, sparking an early interest in computing and technology.",
    highlight: "Scored 73.67% with academic excellence",
    color: "from-blue-500 to-cyan-400",
  },
  {
    year: "2022",
    title: "Intermediate (10+2)",
    institution: "M.M.S.S.V.M. Inter College, Madhan, Sambhal",
    grade: "79.20%",
    status: "Completed",
    description: "Deepened quantitative and analytical reasoning skills while preparing for higher education in Computer Applications.",
    highlight: "Achieved 79.20% distinction",
    color: "from-cyan-400 to-emerald-400",
  },
  {
    year: "2024",
    title: "BCA – Full Stack Specialization",
    institution: "Teerthankar Mahaveer University, Moradabad",
    grade: "5th Sem, Sec E",
    status: "In Progress (Active)",
    description: "Intensive training in Full Stack Software Development, modern web architectures, MERN stack, data structures, and database management.",
    highlight: "Enrollment No: TCA2468220 | Current: 5th Sem (Section E)",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "Present & Future",
    title: "Full Stack & Web Innovation",
    institution: "Continuous Evolution & Real-World Projects",
    grade: "Active Developer",
    status: "Forward Vision",
    description: "Designing end-to-end applications, solving real-world automotive and recruitment problems, and gearing up for impactful industry roles.",
    highlight: "Building scalable web platforms & modern UI architectures",
    color: "from-pink-500 to-amber-400",
  },
];

export const skillsData = [
  {
    category: "Core Frontend",
    description: "Designing responsive, animated, and accessible user interfaces",
    skills: [
      { name: "React.js", icon: "Code2", level: "Advanced Component Architecture" },
      { name: "JavaScript (ES6+)", icon: "FileCode2", level: "Async, DOM, Modern Syntax" },
      { name: "HTML5", icon: "Layout", level: "Semantic, Accessible Markup" },
      { name: "CSS3 / Tailwind", icon: "Palette", level: "Modern Flex/Grid, Glassmorphism, Animations" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Building robust REST APIs and scalable server architectures",
    skills: [
      { name: "Node.js", icon: "Server", level: "Event-driven runtime & asynchronous I/O" },
      { name: "Express.js", icon: "Cpu", level: "REST API routes, middleware & auth" },
      { name: "Python", icon: "Terminal", level: "Scripting, logic & data processing" },
    ],
  },
  {
    category: "Databases & Analytics",
    description: "Organizing, querying, and deriving insights from structured & NoSQL data",
    skills: [
      { name: "MongoDB", icon: "Database", level: "NoSQL document modeling & aggregation" },
      { name: "SQL", icon: "Table2", level: "Relational queries, schema design & joins" },
      { name: "Data Analytics", icon: "BarChart3", level: "Data exploration, patterns & visualization" },
    ],
  },
  {
    category: "Tools & Collaboration",
    description: "Modern developer workflow, version control, and rapid deployment",
    skills: [
      { name: "Git & GitHub", icon: "GitBranch", level: "Version control, commits, branching & PRs" },
      { name: "Vite / Build Tools", icon: "Zap", level: "Modern bundling, optimization & HMR" },
      { name: "REST APIs", icon: "Network", level: "Endpoints, JSON contracts & status handling" },
    ],
  },
];

export const projectsData = [
  {
    id: "motor-doctor",
    title: "Motor Doctor",
    subtitle: "24x7 Roadside Assistance & Service Bill Doctor",
    badge: "Featured Full Stack Project",
    category: "Automotive & Service Platform",
    description: "A vehicle service and maintenance web application designed to provide users with useful vehicle-related services and information. Features live mechanic emergency dispatch, interactive map tracking, AI bill doctor verification, and digital payments.",
    highlights: [
      "24x7 SOS emergency roadside recovery with live mechanic dispatch",
      "Interactive location & emergency workshop locator",
      "Bill Doctor algorithm for auditing repair quotes against standard rates",
      "Decoupled React + Express architecture with Razorpay/UPI gateway integration",
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Express.js", "Node.js", "Leaflet Maps"],
    githubUrl: "https://github.com/aliintzar8896-pixel/Dara.git",
    liveDemoUrl: "http://localhost:3000",
    image: "/src/assets/motor-doctor/Screenshot 2026-09-15 225336.png",
    diagrams: [
      "/src/assets/motor-doctor/arch_diagram_motor_doctor.png",
      "/src/assets/motor-doctor/dfd_diagram_motor_doctor.png",
    ],
  },
  {
    id: "job-portal",
    title: "Job Portal Platform",
    subtitle: "Next-Gen Talent Acquisition & Recruitment Hub",
    badge: "Full Stack MERN Platform",
    category: "Career & Enterprise Web App",
    description: "A recruitment and job management platform connecting students, employees and organizations through a modern web interface. Empowers candidates to discover vacancies and recruiters to manage applicants seamlessly.",
    highlights: [
      "Role-based authentication & dashboard (Recruiter vs Job Seeker)",
      "Dynamic job search with multi-parameter filtering & keyword indexing",
      "Resume submission pipeline with real-time application status tracker",
      "Responsive glassmorphism UI with clean RESTful backend endpoints",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    githubUrl: "https://github.com/aliintzar8896-pixel",
    liveDemoUrl: "#contact",
    image: "/src/assets/job-portal/job-portal-preview.svg",
    diagrams: [],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
