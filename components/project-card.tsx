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
  // Determine if image should be on the right based on odd index
  const isImageRight = index % 2 !== 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={project.link} className="group">
        <Card className="overflow-hidden card-hover border-muted/20">
          <div className={`md:grid md:grid-cols-2 gap-0 ${isImageRight ? 'md:grid-flow-row-dense' : ''}`}>
            <div className={`relative p-5 md:p-6 bg-white ${isImageRight ? 'md:order-last' : ''}`}>
              <div className="relative h-full min-h-[280px] md:min-h-[320px] rounded-md overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <CardContent className="p-7 md:p-10 flex flex-col">
              <div className="mb-5 flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-muted">
                  <Avatar className="h-full w-full">
                    <img src={project.logo} alt={project.client} />
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium">{project.client}</span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  {project.type}
                </Badge>
              </div>
              <div className="space-y-5 flex-grow">
                <h3 className="font-heading text-2xl md:text-3xl font-medium leading-tight">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">{project.description}</p>
              </div>
              <div className="pt-7 flex items-center text-base font-medium text-primary">
                <span>View Project</span>
                <ArrowUpRight className="h-5 w-5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
