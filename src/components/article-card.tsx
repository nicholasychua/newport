"use client"

import { Article } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Function to get color based on category
function getCategoryColor(category: string): string {
  switch (category) {
    case "Startups":
      return "#4f46e5"; // Indigo
    case "Life Lessons":
      return "#0ea5e9"; // Sky blue
    case "Personal":
      return "#f97316"; // Orange
    case "Tech":
      return "#8b5cf6"; // Violet
    default:
      return "#6b7280"; // Gray
  }
}

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link href={`/writing/${article.slug}`}>
        <Card className="overflow-hidden card-hover border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <AspectRatio ratio={2 / 1} className="bg-gray-100">
              {article.coverImage && (
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              )}
            </AspectRatio>
            <div className="absolute top-3 left-3">
              <Badge 
                className="font-medium text-xs capitalize shadow-sm"
                style={{
                  backgroundColor: getCategoryColor(article.category),
                  color: 'white'
                }}
              >
                {article.category}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal text-xs bg-gray-100 text-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-medium text-gray-900">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.date} · {article.readTime}</p>
              <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
