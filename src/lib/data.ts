import type { Project, Article, Job } from "./types"

export const projects: Project[] = [
  {
    id: "newsela-product-card",
    title: "The Product Card",
    description:
      "For prospective users, the product card is a key element in the Newsela interface, but functionally, it presented several issues; it doesn't fully communicate the efficiency of the platform or the use cases of several features. Here's what could change.",
    image: "/newsela/images/main-page.png",
    logo: "/newsela/product-card.svg",
    link: "/projects/newsela-product-card",
    type: "work",
    client: "Newsela",
    year: 2024,
  },
  {
    id: "everwrite",
    title: "EverWrite",
    description:
      "With Newsela's new launch of a web-based version of EverWrite (an AI writing assistant), there needed to be an efficient way to incorporate questions when the AI algorithm may have outputted an incorrect answer.",
    image: "/newsela/EverWrite.png",
    logo: "/newsela/everwrite-logo.svg",
    link: "/projects/everwrite",
    type: "work",
    client: "Newsela",
    year: 2024,
  }
]

export const articles: Article[] = [
  {
    id: "1",
    title: "Building AI Products That People Actually Want to Use",
    excerpt: "Lessons learned from building and shipping AI products that solve real user problems, not just technical ones.",
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
    link: "#"
  },
  {
    id: "job-3",
    title: "AI Product Analyst",
    company: "Newsela",
    description: "edtech unicorn; optimized user experience and AI usability",
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
    title: "Product Management Intern",
    company: "Welfie",
    description: "user research + design -> created an AI mental health database",
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
    description: "growth marketing strategies -> optimizing cold outreach",
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
    description: "Won Meta's Global Hackathon (Top 5 of 800+); created a social media algorithm to reduce addiction",
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
    description: "Taught a computer-aided design course to 20+ students. Learned how to break down complex topics into bite-sized analogies.",
    startDate: "January 2023",
    endDate: "May 2023",
    year: 2023,
    technologies: [],
    logo: "/logos/berkeley.svg",
    subTeam: "Student TA"
  },
  {
    id: "job-10",
    title: "Built a web-app to simulate ad campaigns",
    company: "Personal Project",
    description: "to battle cancel culture; recognized by leaders @ Groq, Supabase, and more",
    startDate: "January 2024",
    endDate: "Present",
    year: 2024,
    technologies: [],
    logo: "/logos/personal.svg",
    subTeam: "Personal Project",
    link: "#"
  },
]
