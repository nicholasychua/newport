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
        <Card className="overflow-hidden card-hover border-none bg-gray-50">
          <div className={`md:grid md:grid-cols-2 gap-0 ${isImageRight ? 'md:grid-flow-row-dense' : ''}`}>
            {/* Image Side */}
            <div className={`relative flex items-center justify-center bg-white ${isImageRight ? 'md:order-last' : ''}`}> 
              <div className="relative w-full h-[220px] md:h-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
            {/* Text Side */}
            <CardContent className="p-8 flex flex-col bg-transparent justify-center">
              {/* Logo */}
              <div className="mb-6">
                <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-[var(--logo-bg,theme(colors.blue.100))]">
                  <img src={project.logo} alt={project.client} className="h-8 w-8 object-contain" />
                </div>
              </div>
              {/* Project Title */}
              <h3 className="text-4xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                {project.title}
              </h3>
              {/* Project Type */}
              <div className="mb-5">
                <span className="text-base uppercase font-semibold text-gray-500 tracking-wider">{project.type.toUpperCase()}</span>
              </div>
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-normal">
                {project.description}
              </p>
              {/* Button */}
              <div className="mt-auto">
                <div className="w-full inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow text-lg font-medium text-gray-800 hover:bg-gray-100 transition-colors justify-center">
                  <span>See the Live Site</span>
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
