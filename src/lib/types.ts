export interface Project {
  id: string
  title: string
  description: string
  image: string
  logo?: string
  link: string
  type: "work" | "play" | "writing"
  client: string
  year: number
}

export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  coverImage?: string
  tags: string[]
  category: "Startups" | "Life Lessons" | "Personal" | "Tech"
}
