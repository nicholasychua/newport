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
  
  // Group jobs by year
  const groupedJobs = sortedJobs.reduce((acc, job) => {
    const year = job.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(job);
    return acc;
  }, {} as Record<number, Job[]>);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-6">
      {/* Timeline Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Timeline</h2>
      </div>
      
      {/* Vertical line with gradient */}
      <div className="absolute left-[25px] top-20 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200"></div>
      
      <div className="space-y-12">
        {Object.entries(groupedJobs)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, yearJobs], yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: yearIndex * 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Year header */}
            <div className="relative mb-6">
              <div className="absolute left-[21px] top-2 w-[10px] h-[10px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white shadow-md"></div>
              <div className="ml-[50px]">
                <span className="font-bold text-xl text-gray-900">{year}</span>
              </div>
            </div>
            
            {/* Jobs for this year */}
            <div className="ml-[50px] space-y-4">
              {yearJobs.map((job, jobIndex) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: (yearIndex * 0.2) + (jobIndex * 0.1), ease: "easeOut" }}
                  className="relative"
                >
                  <motion.div 
                    className="relative flex items-start gap-3"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Bullet point */}
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                    
                    {/* Job content */}
                    <div className="flex items-center gap-1 flex-wrap">
                      {job.id === "job-7" ? (
                        // Special formatting for Teaching Assistant - no company container
                        <span className="text-base text-gray-700">{job.description}</span>
                      ) : job.id === "job-8" ? (
                        // Special formatting for Meta hackathon - no company container
                        <span className="text-base text-gray-700">Won Meta's Global Hackathon (Top 5 of 800+); created a social media algorithm to reduce addiction</span>
                      ) : job.id === "job-9" ? (
                        // Special formatting for Subspace - building with company container
                        <div className="flex items-center gap-1 flex-wrap">
                          <span className="text-base text-gray-700">curently building</span>
                          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 border border-gray-200 mx-1">
                            {job.logo && (
                              <img src={job.logo} alt={job.company} className="h-4 w-4 object-contain" />
                            )}
                            <span className="font-medium text-gray-900 text-sm">{job.company}</span>
                          </div>
                          <span className="text-base text-gray-700">:)...</span>
                        </div>
                      ) : (
                        <>
                          <span className="text-base text-gray-700">{job.title} at</span>
                          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 border border-gray-200 mx-1">
                            {job.logo && (
                              <img src={job.logo} alt={job.company} className="h-4 w-4 object-contain" />
                            )}
                            <span className="font-medium text-gray-900 text-sm">{job.company}</span>
                          </div>
                          <span className="text-base text-gray-700">-</span>
                          <span className="text-base text-gray-700">{job.description}</span>
                        </>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 