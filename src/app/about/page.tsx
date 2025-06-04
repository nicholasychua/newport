"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";

// Define custom HTML attributes with motion props
const MotionHeader = motion.h1;
const MotionParagraph = motion.p;
const MotionDiv = motion.div;

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <Header
        center={
          <div className="bg-secondary rounded-full p-1 md:p-1.5 shadow-md flex w-[260px] md:min-w-[240px] justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 invisible">
            <a 
              href="#" 
              className="inline-block px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium text-muted-foreground"
            >
              work
            </a>
            <a 
              href="#" 
              className="inline-block px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium text-muted-foreground"
            >
              writing
            </a>
            <a 
              href="#" 
              className="inline-block px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium text-muted-foreground"
            >
              play
            </a>
          </div>
        }
        right={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-10 h-10 md:w-16 md:h-16"
            onClick={() => router.push("/")}
            style={{ marginRight: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.02)' }}
          >
            <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: 'auto' }}>
              <path d="M28 4L12 22L28 40" stroke="#A3A3A3" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="sr-only">Back</span>
          </Button>
        }
      />

      <div className="container mx-auto px-4 pt-20 pb-24 flex-grow flex flex-col">
        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Left: Description Card */}
          <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                Hey, a little bit more <span className="text-orange-500 italic">about me.</span>
              </h2>
              
              <div className="text-base text-muted-foreground mb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  I'm a product manager based in San Francisco, CA, studying Engineering and Design @ UC Berkeley. I love building consumer-facing products, and finding unconventional ways to apply AI to solve people problems.
                </motion.div>
              </div>
              
              <div className="mb-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="font-semibold mb-1">Outside of work, <span className="text-orange-500 italic">I'm currently:</span></div>
                  <ul className="text-sm text-muted-foreground space-y-2 mt-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>filming cinematic videos and short films (check out my <a href="https://www.youtube.com/channel/UC7X3tyhUcogP7pEcQlfVDAg" className="text-orange-500 hover:text-orange-600 transition-colors" target="_blank" aria-label="YouTube">channel!</a>)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>trying to find the best matcha spot in sf</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>bulking up to 150lbs to bench 225 (currently benching 195 @ 145bw)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>side questing to have some dad lore for my future kids</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="mb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="font-semibold mb-1">Contacts</div>
                  <Link href="mailto:nicholaschua@berkeley.edu" className="underline hover:text-orange-500 transition-colors">nicholaschua@berkeley.edu</Link>
                  <div className="flex items-center gap-4 mt-2 mb-2">
                    <div>
                      <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.1 }}>
                        <Link href="https://www.linkedin.com/in/nicholas-chua-ba870222b/" className="text-muted-foreground hover:text-gray-600 transition-colors" target="_blank" aria-label="LinkedIn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                    <div>
                      <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.1 }}>
                        <Link href="https://x.com/nicholasychua" className="text-muted-foreground hover:text-gray-600 transition-colors" target="_blank" aria-label="Twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                    <div>
                      <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.1 }}>
                        <Link href="https://www.instagram.com/nicholaschuas/" className="text-muted-foreground hover:text-gray-600 transition-colors" target="_blank" aria-label="Instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                  <div className="text-muted-foreground italic text-sm mt-1">feel free to reach out!</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: Layered Collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-8 w-full max-w-md mx-auto">
            {/* Top-left */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: -40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: -6 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.175, 0.885, 0.32, 1.275], 
                  delay: 0.6,
                  exit: { duration: 0.15, ease: "easeIn" }
                }}
                whileHover={{ 
                  rotate: [-6, 2], 
                  scale: 1.05,
                  transition: { 
                    rotate: { duration: 0.3, ease: "easeOut" },
                    scale: { duration: 0.2 },
                    default: { duration: 0.2 }
                  }
                }}
                whileTap={{ scale: 1.02 }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-[95%] mx-auto">
                  <motion.div transition={{ duration: 0.15 }}>
                    <div className="pt-2 px-2">
                      <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                        <Image src="/snowboard.png" alt="Collage 1" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="py-4 px-2 text-center">
                      <p className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Caveat, cursive' }}>
                        My happy place ☀️
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            {/* Top-right (shifted down) */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: -40, scale: 0.8 }}
                animate={{ opacity: 1, y: 20, scale: 1, rotate: 7 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.175, 0.885, 0.32, 1.275], 
                  delay: 0.8,
                  exit: { duration: 0.15, ease: "easeIn" }
                }}
                whileHover={{ 
                  rotate: [7, -3], 
                  scale: 1.05,
                  transition: { 
                    rotate: { duration: 0.3, ease: "easeOut" },
                    scale: { duration: 0.2 },
                    default: { duration: 0.2 }
                  }
                }}
                whileTap={{ scale: 1.02 }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-[95%] mx-auto">
                  <motion.div transition={{ duration: 0.15 }}>
                    <div className="pt-2 px-2">
                      <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                        <Image src="/yosem.png" alt="Collage 2" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="py-4 px-2 text-center">
                      <p className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Caveat, cursive' }}>
                        Weekend adventures 🌿
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            {/* Bottom-left (shifted down more) */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: -40, scale: 0.8 }}
                animate={{ opacity: 1, y: 32, scale: 1, rotate: -10 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.175, 0.885, 0.32, 1.275], 
                  delay: 1.0,
                  exit: { duration: 0.15, ease: "easeIn" }
                }}
                whileHover={{ 
                  rotate: [-10, 4], 
                  scale: 1.05,
                  transition: { 
                    rotate: { duration: 0.3, ease: "easeOut" },
                    scale: { duration: 0.2 },
                    default: { duration: 0.2 }
                  }
                }}
                whileTap={{ scale: 1.02 }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-[95%] mx-auto">
                  <motion.div transition={{ duration: 0.15 }}>
                    <div className="pt-2 px-2">
                      <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                        <Image src="/camera.JPG" alt="Collage 3" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="py-4 px-2 text-center">
                      <p className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Caveat, cursive' }}>
                        filming some stuff
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            {/* Bottom-right (shifted up) */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: -40, scale: 0.8 }}
                animate={{ opacity: 1, y: -4, scale: 1, rotate: 5 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.175, 0.885, 0.32, 1.275], 
                  delay: 1.2,
                  exit: { duration: 0.15, ease: "easeIn" }
                }}
                whileHover={{ 
                  rotate: [5, -2], 
                  scale: 1.05,
                  transition: { 
                    rotate: { duration: 0.3, ease: "easeOut" },
                    scale: { duration: 0.2 },
                    default: { duration: 0.2 }
                  }
                }}
                whileTap={{ scale: 1.02 }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-[95%] mx-auto">
                  <motion.div transition={{ duration: 0.15 }}>
                    <div className="pt-2 px-2">
                      <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                        <Image src="/food.JPG" alt="Collage 4" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="py-4 px-2 text-center">
                      <p className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Caveat, cursive' }}>
                        Foodie adventures 🍜
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 