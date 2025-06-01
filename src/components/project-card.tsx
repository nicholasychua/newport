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
        <Card className="overflow-hidden card-hover border-none bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
          <div className={`md:grid md:grid-cols-2 gap-0 ${isImageRight ? 'md:grid-flow-row-dense' : ''}`}>
            {/* Image Side */}
            <div className={`relative flex items-center justify-center bg-white ${isImageRight ? 'md:order-last' : ''}`}> 
              <div className="relative w-full h-[180px] md:h-[240px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                  priority={index === 0}
                />
              </div>
            </div>
            {/* Text Side */}
            <CardContent className="p-6 flex flex-col bg-transparent justify-center">
              {/* Logo and Type */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[var(--logo-bg,theme(colors.blue.100))]">
                  <img src={project.logo} alt={project.client} className="h-6 w-6 object-contain" />
                </div>
                <Badge variant="secondary" className="text-xs font-medium">
                  {project.type.toUpperCase()}
                </Badge>
              </div>
              {/* Project Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                {project.title}
              </h3>
              {/* Client and Year */}
              <div className="flex items-center text-gray-500 mb-4 text-sm font-medium tracking-wider uppercase">
                <span>{project.client}</span>
                <span className="mx-2">•</span>
                <span>{project.year}</span>
              </div>
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
              {/* Button */}
              <div className="mt-auto">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-sm text-base font-medium text-gray-800 hover:bg-gray-50 transition-colors">
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
