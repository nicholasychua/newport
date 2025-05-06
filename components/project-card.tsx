"use client"

import { Project } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={project.link} className="group">
        <Card className="overflow-hidden card-hover border-muted/20">
          <div className="md:grid md:grid-cols-2 gap-0">
            <div className="relative">
              <AspectRatio ratio={4/3} className="bg-muted image-gradient">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </AspectRatio>
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col">
              <div className="mb-4 flex items-center">
                <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full overflow-hidden bg-muted">
                  <Avatar className="h-full w-full">
                    <img src={project.logo} alt={project.client} />
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{project.client}</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  {project.type}
                </Badge>
              </div>
              <div className="space-y-4 flex-grow">
                <h3 className="font-heading text-xl md:text-2xl font-medium leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="pt-6 flex items-center text-sm font-medium text-primary">
                <span>View Project</span>
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
