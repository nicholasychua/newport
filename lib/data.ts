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
    title: "What I Wish I Knew Before Starting College",
    excerpt: "Reflections on navigating academics, relationships, and personal growth during my time at Berkeley.",
    date: "March 10, 2024",
    readTime: "4 min read",
    slug: "college-lessons",
    coverImage: "/placeholder.svg?height=400&width=800",
    tags: ["Life", "Education", "Personal Growth"],
    category: "Life Lessons"
  },
]
