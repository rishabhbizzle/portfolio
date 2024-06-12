import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rishabh Jain",
  initials: "RJ",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi,+India",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
  avatarUrl: "https://avatars.githubusercontent.com/u/100997409?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "rishabhbizzle@gmail.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rishabhbizzle",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishabh223",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rishabhtwt",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University Of Delhi",
      degree: "Bachelor's Degree in Commerce (Hons.)",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Depo24",
      link: "https://depo24.in/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: ConsultlyLogo,
      start: "Feb 2023",
      end: null,
      description:
        "Led the development of a Franchise POS (Point of Sale) system, facilitating streamlined order processing at franchise stores. Maintained a comprehensive e-commerce admin portal using React.js, Node.js, MongoDB, AWS and PostgreSQL, empowering administrators to manage products, orders, and inventory efficiently.",
    },
    {
      company: "Project Parvaah",
      link: "https://www.linkedin.com/company/projectparvaah/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "Sept 2021",
      end: "Nov 2024",
      description:
        "Worked on an ed-tech platform to help disabled people using React.js, Django, SQL. Developed a web application that provides a platform for disabled people to learn annd grow.",
    },
    {
      company: "Freelancing",
      // link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: null,
      description:
      "Worked on various projects for different clients as a full stack developer"
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "StatsCrave",
      techStack: [
        "JavaScript",
        "Next.js",
        "Node.js",
        "AWS",
        "MongoDB",
        'Redis'
      ],
      description:
        "An innovative Spotify streaming analytics platform used by 5000+ users and has accumulated over 50,000 views.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://statscrave.com/",
      },
    },
    {
      title: "POS System",
      techStack: [
        "JavaScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "AWS S3",
      ],
      description:
        "Led the development of a Franchise Point of Sale system for the company, facilitating streamlined order processing at franchise stores",
      logo: EvercastLogo,
      link: {
        label: "pos.depo24.in",
        href: "https://pos.depo24.in/",
      },
    },
    {
      title: "ReactRover",
      techStack: [
        "JavaScript",
        "React",
        "Node.js",
        'PostgreSQL',
        'Redis',
        "Docker",
        "AWS ECS",
      ],
      description: "An application which build, deploy & host any react application with just one click",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/rishabhbizzle/react-rover",
      },
    },
    {
      title: "ResumeLint",
      techStack: ["Side Project", "Next.js", "OpenAI LLMs"],
      description:
        "Evaluate your resume against any job description and get a comprehensive overview of how well you match the position!",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://resumelint.netlify.app/",
      },
    },
    {
      title: "Cute Notes",
      techStack: ["Side Project", "JavaScript", "React"],
      description:
        "A 'Spy X Family' themed simple note taking web app based on React & Local Storage",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://cute-notes.netlify.app/",
      },
    },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers, and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
  ],
} as const;
