"use client"

import { Article } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
        <Card className="overflow-hidden card-hover border-muted/20">
          <div className="relative">
            <AspectRatio ratio={2 / 1} className="bg-muted image-gradient">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="font-heading text-xl md:text-2xl font-medium">{article.title}</h3>
              <p className="text-sm text-muted-foreground">{article.date} · {article.readTime}</p>
              <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
