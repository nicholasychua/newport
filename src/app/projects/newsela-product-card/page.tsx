"use client";

import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { motion } from 'framer-motion'

export default function ProjectPage() {
  const project = projects.find((p) => p.id === "newsela-product-card")

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="w-full pt-8 pb-4">
          <Link href="/?mode=work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 pl-6 sm:pl-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to work</span>
          </Link>
        </div>
        
        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="w-full max-w-4xl mx-auto mb-12 px-8"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-[16/9] w-full min-h-[350px] md:min-h-[500px] relative">
              <Image 
                src="/newsela/images/main-page.png" 
                alt="Instructional resources that connect and deliver" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Brand icon + title section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white pb-12 pt-10"
        >
          <div className="max-w-4xl mx-auto px-8">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 bg-green-600 rounded-md flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">The Product Card</h2>
            </div>
            
            <div className="flex items-center text-gray-500 mb-10">
              <span>Newsela</span>
              <span className="mx-2">•</span>
              <span>February 2024</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-20">
              <div className="md:w-1/2">
                <p className="text-gray-700 max-w-lg text-lg leading-relaxed">
                  For prospective users, the product card is a key
                  element in the Newsela interface, but functionally,
                  it presented several issues; it doesn't fully
                  communicate the efficiency of the platform or the
                  use cases of several features. Here's what could
                  change.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <div className="mb-10">
                      <h3 className="font-medium uppercase text-gray-600 mb-3">Team</h3>
                      <p className="text-lg">Nicholas Chua</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium uppercase text-gray-600 mb-3">Role</h3>
                      <p className="text-lg">Product Manager</p>
                    </div>
                  </div>
                  
                  <div>
                    <div>
                      <h3 className="font-medium uppercase text-gray-600 mb-3">Interests</h3>
                      <p className="mb-1">Product Management</p>
                      <p>User Interface Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-8 py-12 max-w-5xl">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100 hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-indigo-200 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 tracking-tight">Problem</h2>
            <p className="text-lg text-gray-600 mb-4">
              The product card is an essential portion of Newsela's website as an interactive way to learn more about the product. <span className="font-semibold text-gray-800">However, the message and website features aren't communicated clearly.</span>
            </p>
            <p className="text-lg text-gray-600">
              Could we redesign the card to leverage the short-attention span of new users to communicate the ease-of-use of the product?
            </p>
          </motion.div>

          {/* Numbered Explanations + Image in unified container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="bg-gray-100 rounded-3xl shadow-sm border border-gray-200 px-6 md:px-12 py-12 mb-16 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center w-full mb-10">
              <div className="aspect-[16/9] w-full max-w-3xl min-h-[220px] md:min-h-[280px] relative">
                <Image 
                  src="/newsela/images/interface-numbered.png" 
                  alt="Newsela interface with numbered annotations" 
                  fill 
                  className="object-contain rounded-xl" 
                  style={{ objectFit: 'contain' }}
                  priority={false}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
                  1
                </div>
                <div>
                  <p className="text-gray-700">
                    Long title descriptions and all bold words <span className="font-bold">hinder the main message</span> that is conveyed for users quickly scrolling through the platform at a glance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
                  2
                </div>
                <div>
                  <p className="text-gray-700">
                    The side category descriptions <span className="font-bold">does not communicate the actual feature that is being showcased.</span> The title cards do not hint at the actual Newsela feature.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
                  3
                </div>
                <div>
                  <p className="text-gray-700">
                    The static page lacks direction with multiple stimuli for the user and <span className="font-bold">opens opportunity for dynamic short-form videos</span> showing how the product works.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
                  4
                </div>
                <div>
                  <p className="text-gray-700">
                    Newsela already makes a multitude of short form content. There isn't any call to action, so we should connect the user to a hub <span className="font-bold">showcasing all of our other resources.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-32 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-medium mb-8">Research</h2>
            <p className="text-lg mb-6 text-gray-600">
              In the current day and age, attention span is everything. We want to communicate large amounts of information in the least amount of time to keep users hooked onto the product. As a youth myself, I understand this firsthand, but let's see what others have to say.
            </p>
            <p className="text-lg mb-6 text-gray-600">
              After digging in with user interviews and comparing other e-learning platforms, I noticed the use of short form content being utilized.
              <span className="font-semibold text-gray-800"> Consumers now are hooked into platforms like TikTok due to its short form factor.</span> But how can be utilize this knowledge onto our platform?
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-2xl shadow-lg p-8 mt-12 mb-32 border border-gray-100 hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-indigo-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 tracking-tight">My Vision</h3>
              <p className="text-lg text-gray-600">
                I wanted to form a system similar to TikTok to use short form content for learning. Since users know the videos are short, they are more inclined to watch them, incentivizing them to spend more time learning about our product.
              </p>
            </motion.div>
          </motion.div>

          {/* Competitive Analysis Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-24 mb-32 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="uppercase text-sm font-semibold text-muted-foreground mb-1 tracking-wider">Competitive Analysis</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Quizlet</h2>
                <p className="text-lg text-gray-600 max-w-md">
                  Quizlet implemented videos about their products that play on the webpage, allowing users to see live demos of their products as they scroll. This very clearly shows the product and how it works, capturing the attention of the user to the dynamic screen.
                </p>
              </div>
              <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-2 min-h-0">
                <Image src="/newsela/images/quizlet.png" alt="Quizlet screenshot" width={280} height={160} className="object-contain w-full h-auto" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
              <div className="flex items-center justify-center bg-[#F6FEFF]/90 backdrop-blur-sm rounded-xl shadow-sm p-2 min-h-0">
                <Image src="/newsela/images/formative.png" alt="Formative screenshot" width={280} height={160} className="object-contain w-full h-auto" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Formative</h2>
                <p className="text-lg text-gray-600 max-w-md">
                  Formative also implements this short form approach, using hover GIFS instead of replaying videos to deduce clutter on the webpage. They communicate the use case of their feature in a more digestible manner prioritizing comprehension of features over showcasing the actual product.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Research Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-transparent py-16 max-w-4xl mx-auto"
          >
            <div>
              <div className="uppercase text-sm font-semibold text-muted-foreground mb-2 tracking-wider">User Research</div>
              <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight max-w-xl">
                Intuitive Features Separate Newsela From Other E-Learning Companies
              </h2>
              <p className="text-reg text-gray-600 mb-4">
                "Using Newsela for a couple of years now, I noticed a few things about the platform's <span className="font-semibold">intuitive nature</span>. It made <span className="font-semibold">reading complex articles more digestible</span> through its platform and allowed me and other students to engage more frequently with reading unlike before."
              </p>
              <div className="text-base text-muted-foreground font-medium">Madelyn Hui (High School Senior '24)</div>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/newsela/images/userresearch.png" alt="User research photo" width={520} height={320} className="object-contain w-full h-auto rounded-xl shadow-sm" />
            </div>
          </motion.div>

          {/* Exploration Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto mt-20 mb-16"
          >
            <h3 className="uppercase text-sm font-semibold text-gray-700 tracking-wider mb-4">Exploration</h3>
            <p className="text-gray-600 text-lg mb-4">
              Equipped with this knowledge, I now thought about ways that I could implement short form content into Newsela's website. I wanted to keep the card simple like how it was currently, but add more detail and information about the product that could be picked up at a glance.
            </p>
            <p className="text-gray-600 text-lg">
              Here's a look at what I came up with:
            </p>
          </motion.div>

          {/* Static Card Mockup Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <div className="bg-gray-100 rounded-3xl shadow-sm border border-gray-200 px-6 md:px-12 py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">Static Card Mockup</h2>
              <div className="flex flex-col gap-8">
                {/* Top: Extra Large static image */}
                <div className="flex items-center justify-center w-full">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-50 p-2 md:p-3 w-full">
                    <Image 
                      src="/newsela/images/static.png" 
                      alt="Static card mockup" 
                      width={2200} 
                      height={1250} 
                      className="object-contain w-full h-auto rounded-xl" 
                      priority
                    />
                  </div>
                </div>

                {/* Bottom: Numbered explanations */}
                <div className="flex flex-col justify-between h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 items-start">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-base">1</span>
                      <div className="text-gray-700 text-base leading-tight">
                        Shortening the title descriptions and unbolding the lettering creates a <span className="font-semibold">more seamless visual hierarchy</span> making the main message of the card more clear.
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-base">2</span>
                      <div className="text-gray-700 text-base leading-tight">
                        Short but informative card titles give a better representation of what the user can expect to read about and <span className="font-semibold">build anticipation</span> for Newsela's features, <span className="font-semibold">prompting the user to read all cards</span>.
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-base">3</span>
                      <div className="text-gray-700 text-base leading-tight">
                        By having a hover GIF on the webpage (Live Demo), it allows users to get a <span className="font-semibold">better idea of how the product works</span>, showcasing the full potential of Newsela.
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-base">4</span>
                      <div className="text-gray-700 text-base leading-tight">
                        A quick link to Newsela's library of short form product walkthroughs <span className="font-semibold">gives users a call to action</span> to explore other areas of Newsela like the Youtube channel to become immersed in the ecosystem.
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a 
                      href="https://www.figma.com/proto/dzShAEG5ZJBIn8ngLqesSZ/Newsela-Case-Study?page-id=0%3A1&node-id=49-152&viewport=1322%2C68%2C0.21&t=5bXdK7Zu6VXOWsrl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=49%3A152" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-indigo-50 text-indigo-700 font-semibold rounded-full px-5 py-2 md:px-6 md:py-2 text-base hover:bg-indigo-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Summary Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto mt-24 mb-32 px-4"
          >
            <h2 className="text-2xl font-medium mb-6">Summary</h2>
            <p className="text-lg mb-4 text-gray-800">The product card is arguably the most important feature on Newsela's current homepage, providing a simple mix of the product and analysis on why it works. By altering some simple aspects about the card, I received some valuable insights:</p>
            <p className="text-lg mb-4 text-gray-900"><span className="font-semibold">Being able to adapt to users and new constraints on the fly is important.</span> With TikTok and other short form video platforms blowing up recently, I noticed an opportunity to leverage this new way of consuming information and implemented it into the website.</p>
            <p className="text-lg mb-4 text-gray-900"><span className="font-semibold">Sometimes your greatest resources are those around you.</span> As a high schooler at the time of writing this, students around me also served as helpful resources to voice their thoughts about the product. I learned to use my age as an asset and conduct user interviews directly to the target audience to see what could be improved.</p>
            <p className="text-lg text-gray-900"><span className="font-semibold">Communication doesn't only come in words. It comes visually too.</span> In the process of redesigning the job card, I spent countless hours making prototypes of what my vision for this new card could look like. I noticed that telling others your ideas is important, but it is even better to build it so others can visualize your same ideas.</p>
          </motion.section>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
} 