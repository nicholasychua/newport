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
    // Only include jobs without parents in the main timeline
    if (!job.parentJobId) {
      const year = job.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(job);
    }
    return acc;
  }, {} as Record<number, Job[]>);

  // Find child jobs for a given parent job ID
  const getChildJobs = (parentId: string): Job[] => {
    return jobs.filter(job => job.parentJobId === parentId);
  };

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
                    <div className="flex flex-col space-y-3 w-full">
                      <div className="flex items-center gap-1 flex-wrap">
                        {job.id === "job-7" ? (
                          // Special formatting for Teaching Assistant - no company container
                          <span className="text-base text-gray-700">{job.description}</span>
                        ) : job.id === "job-8" ? (
                          // Special formatting for Meta hackathon - no company container
                          <span className="text-base text-gray-700">Won Meta's Global Hackathon (Top 5 of 800+); created a social media algorithm to reduce addiction</span>
                        ) : job.id === "job-10" ? (
                          // Special formatting for Personal Project - no company container
                          <span className="text-base text-gray-700">Built a web-app to simulate ad campaigns — to battle cancel culture; recognized by leaders @ Groq, Supabase, and more</span>
                        ) : job.id === "job-9" ? (
                          // Special formatting for Subspace - building with company container
                          <div className="flex items-center gap-1 flex-wrap">
                            <span className="text-base text-gray-700">currently building</span>
                            <a href={job.link || '#'} className="focus:outline-none" tabIndex={0} target="_blank" rel="noopener noreferrer">
                              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 border mx-1" style={{ backgroundColor: '#E6F9FB', borderColor: '#A8DDE6' }}>
                                {job.logo && (
                                  <img src={job.logo} alt={job.company} className="h-4 w-4 object-contain" />
                                )}
                                <span className="font-medium text-gray-900 text-sm">{job.company}</span>
                              </div>
                            </a>
                            <span className="text-base text-gray-700">:)... </span>
                          </div>
                        ) : (
                          <>
                            <span className="text-base text-gray-700">{job.title} at</span>
                            <a href={job.link || '#'} className="focus:outline-none" tabIndex={0} target="_blank" rel="noopener noreferrer">
                              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 border mx-1
                                ${job.company === "Newsela" ? ''
                                  : job.company === "Berkeley SkyDeck" ? ''
                                  : job.company === "Sotira" ? ''
                                  : job.company === "Welfie" ? ''
                                  : job.company === "subspace" ? ''
                                  : 'border-gray-200 bg-gray-100'}`}
                                style={job.company === "Newsela"
                                  ? { backgroundColor: '#E6F0FF', borderColor: '#B2D4FF' }
                                  : job.company === "Berkeley SkyDeck"
                                    ? { backgroundColor: '#E6EBF4', borderColor: '#A0ABC2' }
                                  : job.company === "Sotira"
                                    ? { backgroundColor: '#E6F4ED', borderColor: '#A8D8C2' }
                                  : job.company === "Welfie"
                                    ? { backgroundColor: '#EAF3F6', borderColor: '#BCD8E4' }
                                  : job.company === "subspace"
                                    ? { backgroundColor: '#E6F9FB', borderColor: '#A8DDE6' }
                                  : {}}>
                                {job.logo && (
                                  <img src={job.logo} alt={job.company} className="h-4 w-4 object-contain" />
                                )}
                                <span className="font-medium text-gray-900 text-sm">{job.company}</span>
                              </div>
                            </a>
                            <span className="text-base text-gray-700">-</span>
                            <span className="text-base text-gray-700">{job.description}</span>
                          </>
                        )}
                      </div>
                      
                      {/* Sub-bullet points for child jobs */}
                      {getChildJobs(job.id).length > 0 && (
                        <div className="pl-6 space-y-3 mt-1 relative">
                          {/* Vertical connector line */}
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-orange-200"></div>
                          
                          {getChildJobs(job.id).map((childJob, childIndex) => (
                            <motion.div 
                              key={childJob.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              className="flex items-start gap-3"
                              whileHover={{ x: 2 }}
                            >
                              {/* Hollow bullet point for sub-items */}
                              <div className="w-2 h-2 rounded-full bg-white border border-orange-300 mt-2 flex-shrink-0"></div>
                              
                              <div className="flex items-center gap-1 flex-wrap">
                                <span className="text-sm text-gray-700">{childJob.title} at</span>
                                <a href={childJob.link || '#'} className="focus:outline-none" tabIndex={0} target="_blank" rel="noopener noreferrer">
                                  <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 border mx-1`}
                                    style={childJob.company === "Welfie"
                                      ? { backgroundColor: '#EAF3F6', borderColor: '#BCD8E4' }
                                      : childJob.company === "Sotira"
                                        ? { backgroundColor: '#E6F4ED', borderColor: '#A8D8C2' }
                                        : { backgroundColor: '#F3F4F6', borderColor: '#D1D5DB' }}>
                                    {childJob.logo && (
                                      <img src={childJob.logo} alt={childJob.company} className="h-3.5 w-3.5 object-contain" />
                                    )}
                                    <span className="font-medium text-gray-900 text-xs">{childJob.company}</span>
                                  </div>
                                </a>
                                <span className="text-sm text-gray-700">-</span>
                                <span className="text-sm text-gray-700">{childJob.description}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
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