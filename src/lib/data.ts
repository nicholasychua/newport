import type { Project, Article, Job } from "./types"

export const projects: Project[] = [
  {
    id: "newsela-product-card",
    title: "The Product Card",
    description:
      "Improving landing page retention with modern attention grabbing techniques.",
    image: "/newsela/images/main-page.png",
    logo: "/logos/newsela.png",
    link: "/projects/newsela-product-card",
    type: "work",
    client: "Newsela",
    year: 2024,
  },
  {
    id: "everwrite",
    title: "EverWrite",
    description:
      "Designing features to bridge gaps in the user flow for an AI writing assistant.",
    image: "/newsela/everwrite.png",
    logo: "/logos/newsela.png",
    link: "/projects/everwrite",
    type: "work",
    client: "Newsela",
    year: 2024,
  }
]

export const articles: Article[] = [
  {
    id: "1",
    title: "How I (Almost) Won the World's Biggest AI Hackathon...With Zero Coding Experience",
    excerpt: "the value proposition of a product manager at hackathons",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-ai-products",
    coverImage: "/hackathon.png",
    tags: ["AI", "Product", "Technology"],
    category: "Tech"
  },
  {
    id: "2",
    title: "how to win @ life; explained in poker terms",
    excerpt: "entrepreneurial lessons on the felt",
    subtitle: "entrepreneurial lessons on the felt",
    date: "March 10, 2024",
    readTime: "4 min read",
    slug: "college-lessons",
    coverImage: "/pokerdisplayimage.webp",
    tags: ["Poker", "Entrepreneurship", "Strategy"],
    category: "Life Lessons"
  },
]

export const jobs: Job[] = [
  {
    id: "job-9",
    title: "Founder",
    company: "subspace",
    description: "currently building subspace :)...",
    startDate: "January 2025",
    endDate: "Present",
    year: 2025,
    technologies: [],
    logo: "/logos/fintech.svg",
    subTeam: "Startup",
    link: "https://trysubspace.vercel.app/"
  },
  {
    id: "job-3",
    title: "AI Product Analyst",
    company: "Newsela",
    description: "edtech unicorn; designed user experience and AI usability",
    startDate: "March 2024",
    endDate: "August 2024",
    year: 2024,
    technologies: [],
    logo: "/logos/newsela.png",
    subTeam: "Internship",
    link: "https://newsela.com"
  },
  {
    id: "job-4",
    title: "Product",
    company: "Berkeley SkyDeck",
    description: "helped early startups figure out what to build first",
    startDate: "May 2022",
    endDate: "July 2024",
    year: 2023,
    technologies: [],
    logo: "/logos/skydeck.jpeg",
    subTeam: "Accelerator",
    link: "https://skydeck.berkeley.edu/"
  },
  {
    id: "job-5",
    title: "First product hire",
    company: "Welfie",
    description: "user research + design -> created a gen AI therapy tool",
    startDate: "May 2022",
    endDate: "June 2024",
    year: 2023,
    technologies: [],
    logo: "/logos/welfie.jpeg",
    subTeam: "Internship",
    link: "https://welfie.com",
    parentJobId: "job-4"
  },
  {
    id: "job-6",
    title: "Business Development Intern",
    company: "Sotira",
    description: "growth marketing strategies -> onboarded 500+ clients",
    startDate: "May 2023",
    endDate: "August 2023",
    year: 2023,
    technologies: [],
    logo: "/logos/sotira.webp",
    subTeam: "Internship",
    link: "https://sotira.co",
    parentJobId: "job-4"
  },
  {
    id: "job-8",
    title: "Hackathon Winner",
    company: "Meta",
    description: "Won Meta's Global Hackathon (<b>Top 1</b> <b>of 800+</b>); created a social media algorithm to reduce addiction",
    startDate: "March 2023",
    endDate: "March 2023",
    year: 2024,
    technologies: [],
    logo: "/logos/meta.svg",
    subTeam: "Global Hackathon"
  },
  {
    id: "job-7",
    title: "Teaching Assistant",
    company: "UC Berkeley",
    description: "Taught a computer-aided design course to 20+ elementary students; turned complex topics into bite-sized analogies.",
    startDate: "January 2023",
    endDate: "May 2023",
    year: 2023,
    technologies: [],
    logo: "/logos/berkeley.svg",
    subTeam: "Student TA"
  },
  {
    id: "job-10",
    title: "Built a web-app to simulate ad campaigns using AI agents",
    company: "Personal Project",
    description: "; recognized by leaders @ Groq, Supabase, and more",
    startDate: "January 2024",
    endDate: "Present",
    year: 2024,
    technologies: [],
    logo: "/logos/personal.svg",
    subTeam: "Personal Project",
    link: "#"
  },
]
