"use client"

import { Job } from "@/lib/types"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface JobTimelineProps {
  jobs: Job[]
}

export function JobTimeline({ jobs }: JobTimelineProps) {
  // Sort jobs by year in descending order (newest first)
  const sortedJobs = [...jobs].sort((a, b) => b.year - a.year);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-6">
      {/* Vertical line with gradient */}
      <div className="absolute left-[75px] top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200"></div>
      
      <div className="space-y-12">
        {sortedJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Year label - fixed spacing */}
            <div className="absolute left-0 top-2 text-[16px] font-bold text-gray-400 w-16 text-right tracking-tight">
              {job.year}
            </div>

            {/* Timeline dot - scaled down */}
            <div className="absolute left-[71px] top-2.5 w-[10px] h-[10px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white shadow-md ring-2 ring-orange-100"></div>
            
            {/* Job card - scaled down */}
            <div className="ml-[105px] group">
              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 ease-out relative overflow-hidden"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 pointer-events-none"></div>
                
                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  {/* Content - with improved spacing */}
                  <div className="relative">
                    {/* Content - with improved spacing */}
                    <div className="space-y-4">
                      {/* Title and Company pill */}
                      <div className="space-y-3">
                        <h3 className="font-bold text-xl text-gray-900 tracking-tight leading-tight m-0">{job.title}</h3>
                        
                        {/* Company pill/box */}
                        <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
                          {/* Company logo */}
                          {job.logo && (
                            <div className="flex-shrink-0">
                              <img src={job.logo} alt={job.company} className="h-5 w-5 object-contain" />
                            </div>
                          )}
                          
                          {/* Company name */}
                          <span className="font-medium text-gray-900 text-sm">{job.company}</span>
                          
                          {/* Sub-team or contract type */}
                          {job.subTeam && (
                            <span className="text-gray-500 text-sm">{job.subTeam}</span>
                          )}
                        </div>
                      </div>
                      
                      {/* Description with consistent spacing */}
                      <p className="text-gray-600 text-base leading-relaxed font-medium m-0">{job.description}</p>
                    </div>
                  </div>
                </div>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 