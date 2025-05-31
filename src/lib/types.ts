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

export interface Job {
  id: string
  title: string
  company: string
  description: string
  startDate: string
  endDate: string
  year: number
  technologies: string[]
  logo?: string
  subTeam?: string
  link?: string
}
