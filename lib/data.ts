import type { Project, Article } from "./types"

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
    id: "1",
    title: "Reduced time taken to discover new content and team resources",
    description:
      "Helped API developers find content they're already working with and discover relevant content in new workspaces fast.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/ecommerce",
    type: "work",
    client: "Postman",
    year: 2023,
  },
  {
    id: "2",
    title: "Boosted landing page engagement of Financial Dashboard",
    description:
      "Designed landing page to increase relevant feature discovery through chosen interests and peer activity, while applying the design system.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/dashboard",
    type: "work",
    client: "Fintech Inc",
    year: 2022,
  },
  {
    id: "3",
    title: "Streamlined onboarding flow increasing conversion by 34%",
    description:
      "Redesigned the onboarding experience with a focus on progressive disclosure and personalization, resulting in higher completion rates.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/mobile-app",
    type: "work",
    client: "HealthApp",
    year: 2023,
  },
  {
    id: "4",
    title: "Revitalized brand identity driving 28% increase in brand recognition",
    description:
      "Developed a comprehensive brand refresh including visual identity, tone of voice, and brand guidelines that resonated with the target audience.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/brand-identity",
    type: "work",
    client: "Startup Co",
    year: 2021,
  },
  {
    id: "5",
    title: "Urban Perspectives: A Street Photography Collection",
    description:
      "A personal project exploring urban environments and street life across major cities, capturing candid moments and architectural contrasts.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/photography",
    type: "play",
    client: "Personal",
    year: 2023,
  },
  {
    id: "6",
    title: "Algorithmic Art: Patterns in Code",
    description:
      "Exploring the intersection of mathematics, code, and visual art through generative algorithms that create unique, evolving patterns.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/generative-art",
    type: "play",
    client: "Art Exhibition",
    year: 2022,
  },
  {
    id: "7",
    title: "Echoes: An Interactive Audio Experience",
    description:
      "A small indie game that transforms player movements into musical compositions, creating a unique audio landscape for each player.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/game-dev",
    type: "play",
    client: "Game Jam",
    year: 2023,
  },
  {
    id: "8",
    title: "Ambient Soundscapes: Electronic Music Collection",
    description:
      "A series of ambient electronic tracks inspired by natural environments and urban spaces, designed for focus and relaxation.",
    image: "/placeholder.svg?height=600&width=800",
    logo: "/placeholder.svg?height=32&width=32",
    link: "/projects/music",
    type: "play",
    client: "Music Project",
    year: 2022,
  },
]

export const articles: Article[] = [
  {
    id: "1",
    title: "Designing for Accessibility: A Practical Guide",
    excerpt: "How to make your digital products more accessible and inclusive for all users.",
    date: "May 15, 2023",
    readTime: "8 min read",
    slug: "designing-for-accessibility",
    coverImage: "/placeholder.svg?height=400&width=800",
    tags: ["Design", "Accessibility", "UX"],
    category: "Tech"
  },
  {
    id: "2",
    title: "The Future of UI Design: Trends to Watch in 2023",
    excerpt: "Exploring emerging design patterns and technologies that will shape user interfaces in the coming year.",
    date: "April 22, 2023",
    readTime: "6 min read",
    slug: "future-of-ui-design",
    coverImage: "/placeholder.svg?height=400&width=800",
    tags: ["Design", "UI", "Trends"],
    category: "Tech"
  },
  {
    id: "3",
    title: "Building Design Systems That Scale",
    excerpt: "Lessons learned from creating and maintaining design systems for large organizations.",
    date: "March 10, 2023",
    readTime: "10 min read",
    slug: "design-systems-that-scale",
    coverImage: "/placeholder.svg?height=400&width=800",
    tags: ["Design Systems", "Development", "Enterprise"],
    category: "Startups"
  },
  {
    id: "4",
    title: "User Research Methods for Remote Teams",
    excerpt:
      "Effective techniques for conducting user research when your team is distributed across different locations.",
    date: "February 5, 2023",
    readTime: "7 min read",
    slug: "remote-user-research",
    coverImage: "/placeholder.svg?height=400&width=800",
    tags: ["Research", "Remote Work", "UX"],
    category: "Life Lessons"
  },
  {
    id: "5",
    title: "The Psychology of Color in Digital Products",
    excerpt: "How color choices influence user perception and behavior in digital interfaces.",
    date: "January 18, 2023",
    readTime: "9 min read",
    slug: "psychology-of-color",
    coverImage: "/placeholder.svg?height=400&width=800",
    tags: ["Design", "Psychology", "Color Theory"],
    category: "Personal"
  },
]
