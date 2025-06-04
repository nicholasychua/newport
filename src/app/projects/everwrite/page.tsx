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
  const project = projects.find((p) => p.id === "everwrite")

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full max-w-4xl mx-auto mb-12 px-8"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex justify-center">
            <div className="inline-block bg-gray-200 rounded-lg relative overflow-hidden">
              <Image 
                src="/newsela/everwrite.png" 
                alt="EverWrite AI Writing Assistant" 
                layout="intrinsic" 
                width={1200} 
                height={675} 
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Brand icon + title section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white pb-12 pt-10"
        >
          <div className="max-w-4xl mx-auto px-8">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">EverWrite</h2>
            </div>
            
            <div className="flex items-center text-gray-500 mb-10">
              <span>Newsela</span>
              <span className="mx-2">•</span>
              <span>2024</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-20">
              <div className="md:w-1/2">
                <p className="text-gray-700 max-w-lg text-lg leading-relaxed">
                  EverWrite is an AI writing assistant designed to help students improve their writing skills. 
                  The challenge was to design features that would bridge gaps in the user flow and create a 
                  seamless experience for students using the tool.
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
          {/* My Role Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">My Role</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Using my age and connections as a high school senior, I worked on addressing the problems with EverWrite's AI system as well as possible concerns that would be a problem with implementing this into a classroom. Throughout the process, I consistently consulted teachers and other students for their perspective in the creative process for their insight.
            </p>
          </motion.div>

          {/* Problem Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-2xl shadow-lg p-12 mb-12 border border-gray-100 hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-indigo-200 max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-semibold mb-10 text-gray-800 tracking-tight">Problem</h2>
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">AI isn't always accurate.</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Although Newsela's AI grading system is accurate, there are still occasional mistakes in recognizing and categorizing different aspects of writing. What student's thesis wasn't detected by the AI? These mishaps can result in unintentional grading mistakes in the classroom.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Teachers have no ability to reassess grading from the AI.</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Due to the possibility of these mistakes, teachers currently have no ability to quickly reassess possible grading mistakes without going through every single assignment manually. This would not be time efficient and would eliminate the benefits of AI in the first place.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Lack of student to teacher connection.</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently, EverWrite's platform is almost entirely run by AI and lacks the ability for the student and teacher to discuss the work. In case of possible problems with the AI, student's currently have no way to directly ask questions regarding grading or how their work was assessed.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Example Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto mb-12"
          >
            <h3 className="font-medium text-gray-900 mb-4">Example:</h3>
            <div className="w-full bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/newsela/everwritecase/problemarea.png" 
                alt="EverWrite UI – Problem Area Example" 
                layout="intrinsic" 
                width={1200} 
                height={630} 
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 mb-8">
              Here, the student had a thesis in the third sentence ("Even though there is promise…") but the EverWrite program did not detect it in the checklist.
            </p>
          </motion.div>

          {/* Goal Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">Goal</h2>
            <div className="mb-8">
              <span className="font-semibold text-lg">Making AI a teacher's friend instead of a enemy.</span>
              <p className="text-lg text-gray-700 mt-3 mb-4 leading-relaxed">
                Currently, any teaching product using AI is scary. There can be errors with the program or students who will gain the system to their advantage. Building trust in teachers to use AI products will be essential in integrating them with Newsela's products.
              </p>
            </div>
            <div className="mb-8">
              <span className="font-semibold text-lg">Fill in the gaps in EverWrite's platform.</span>
              <p className="text-lg text-gray-700 mt-3 mb-4 leading-relaxed">
                We want to reduce all possible areas of friction as to why a prospective user would not purchase the service in hopes to onboard more users to the platform.
              </p>
            </div>
            <div className="mb-8">
              <span className="font-semibold text-lg">Retain the teacher and student connection seen in classrooms.</span>
              <p className="text-lg text-gray-700 mt-3 mb-4 leading-relaxed">
                While the system does use AI, we want to make sure student's still know they have easy access to help should they need it. Retaining this connection is important to entice students to use the platform.
              </p>
            </div>
            <div>
              <span className="font-semibold text-lg">Incentivizing revision for students while saving the teacher's time.</span>
              <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                With any changes we make, an another underrated benefit for students is the learning developments that come as a part of revising and checking over their work. We want to encourage students to look back at their mistakes and ask questions while also giving enough time for the teacher to explain errors.
              </p>
            </div>
          </motion.div>

          {/* Early Ideation Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-xl font-semibold mb-6 text-gray-900 tracking-tight">Early Ideation</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Before consulting teacher's opinions, I thought of a few ideas from a student's perspective of what could be helpful in seamlessly implementing AI into the grading process.
            </p>

            <div className="mb-8">
              <span className="font-semibold text-lg">For Students: "Raise Hand" Asking a question about how a section was graded.</span>
              <p className="text-lg text-gray-700 mt-3 mb-6 leading-relaxed">
                We want to give students the ability to ask meaningful questions about their work, incentivizing them to ask questions and settle grading issues while reviewing their writing in the process.
              </p>
              <div className="w-full bg-gray-200 rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/newsela/everwritecase/wireframe1.png" 
                  alt="EverWrite Wireframe 1" 
                  layout="intrinsic" 
                  width={1200} 
                  height={600} 
                  priority
                />
              </div>
            </div>

            <div className="mb-8">
              <span className="font-semibold text-lg">For Students: "Highlight and Comment": Marking a question</span>
              <p className="text-lg text-gray-700 mt-3 mb-6 leading-relaxed">
                In order to make the grading process easier for teachers, student's should be able to directly highlight problem areas in their writing to open the door for more asynchronous resolutions.
              </p>
              <div className="w-full bg-gray-200 rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/newsela/everwritecase/wireframe2.png" 
                  alt="EverWrite Wireframe 2" 
                  layout="intrinsic" 
                  width={1200} 
                  height={600} 
                  priority
                />
              </div>
            </div>

            <div>
              <span className="font-semibold text-lg">For Teachers: "Grade Center" Addressing and correcting grading concerns.</span>
              <p className="text-lg text-gray-700 mt-3 mb-6 leading-relaxed">
                After students report their errors to their teacher, it should be as simple as possible for the teacher to resolve and explain errors to their students. Having a hub for all of these features would be effective and organized.
              </p>
              <div className="w-full bg-gray-200 rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/newsela/everwritecase/wireframe3.png" 
                  alt="EverWrite Wireframe 3" 
                  layout="intrinsic" 
                  width={1200} 
                  height={600} 
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* User Research Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">User Research</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              After scoping out the problem and drawing up wireframes, I wanted to consult teachers for a direct perspective on where they see themselves using products like EverWrite. I asked a total of 4 humanities teachers for their opinions with a set list of questions and recorded the most notable answers to each question below.
            </p>

            <div className="mb-8">
              <p className="font-semibold italic mb-2">How do you feel about AI being used for grading English assignments in the classroom?</p>
              <p className="text-lg text-gray-700 mb-2">"I think it's definitely a mysterious area. We as teachers want to make sure that <span className='font-semibold'>students are using it as a tool, not to get around doing work.</span>"</p>
              <p className="text-gray-500 mb-6">– Matthew Mizrahi, AP Literature</p>

              <p className="font-semibold italic mb-2">What are some pain points you foresee with a product like this?</p>
              <p className="text-lg text-gray-700 mb-2">"I think the most scary part of these AI products is finding out where teachers fit in the process. We want to make sure to <span className='font-semibold'>continue utilizing the teacher to student connection</span> in classrooms. Additionally, the <span className='font-semibold'>learning curve</span> to use these AI products is a big factor holding back teachers from making the switch."</p>
              <p className="text-gray-500 mb-6">– Matthew Mizrahi, AP Literature</p>

              <p className="font-semibold italic mb-2">In your ideal AI English teaching product, what are some key features you would want to see that would compliment your teaching style?</p>
              <p className="text-lg text-gray-700 mb-2">"There are a couple things:<br />
              1. Having a <span className='font-semibold'>clean user interface</span> to make the process smooth for both teachers and students.<br />
              2. Features that make the process of communicating teacher → student as easy as possible, not just AI grading the work.<br />
              3. Keeping the "generative" AI aspect of the product as minimal as possible. <span className='font-semibold'>Reducing ways that students can take advantage of the product.</span>"</p>
              <p className="text-gray-500">– Peter Paccone, AP US History</p>
            </div>
          </motion.div>

          {/* Takeaways Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">Takeaways:</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              By asking specific questions about the use of AI products in the classroom, I was able to get a good sense of why teachers are hesitant to implement AI.
            </p>
            <div className="space-y-8">
              <div>
                <span className="font-semibold text-lg">1. The learning curve</span>
                <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                  Teachers have been implementing the same grading process for all of their life of hand-grading and reading. Not only is AI scary, but the process of learning all of these new gadgets is a headache for some teachers. We want to make the onboarding and transition process as simple as possible.
                </p>
              </div>
              <div>
                <span className="font-semibold text-lg">2. Retaining the student → teacher relationship</span>
                <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                  Whenever a new automated system is released, one of the first concerns is if it will replace jobs for humans. With these systems, we want to emphasize including teacher's in this process. We need to ask ourselves: why would teachers implement a product that would essentially take their favorite aspects of their job?
                </p>
              </div>
              <div>
                <span className="font-semibold text-lg">3. Guiding students along the learning process, not around it</span>
                <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                  The main concern with any AI learning tool is how students will use it. With products like ChatGPT, it can be a teacher's nightmare trying to decipher if the use case of AI is a productive learning tool or a shortcut around work. We want to make it clear how we provide a productive experience for students, not a harmful one.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final Designs Section (from screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">Final Designs</h2>
            <h3 className="font-semibold text-lg mb-4">Before and after</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Before the redesign, there was lack of human interaction with the program. Almost everything was automated, and teachers were only being used to assign work.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Here's a detailed walkthrough of what I improved post-testing.
            </p>
            <div className="w-full bg-gray-200 rounded-lg mb-12 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/newsela/everwritecase/finaldesign1.png" 
                alt="EverWrite Final Design Before/After UI Comparison" 
                layout="intrinsic" 
                width={1200} 
                height={630} 
                priority
              />
            </div>
          </motion.div>

          {/* New Features Section (from screenshot, compact and balanced) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto my-16"
          >
            <div className="font-semibold text-gray-900 text-sm mb-2">New Features</div>
            <div className="flex items-center mb-2">
              <div className="border-l-4 border-gray-300 mr-4 pl-4" style={{ minHeight: '2.5rem' }}>
                <span className="text-2xl md:text-2xl font-semibold text-gray-800 leading-snug">Giving clearcut explanations of how a student's work was graded.</span>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              By utilizing the empty space on the side menu, it opens up the door for students to get more clarification on how their work was graded with both an AI explanation and opportunity to ask their teacher.
            </p>
          </motion.div>

          {/* AI Explanation Feature Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto my-16"
          >
            <div className="w-full bg-gray-200 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/newsela/everwritecase/finaldesign2.png" 
                alt="EverWrite Final Design AI Explanation" 
                layout="intrinsic" 
                width={1200} 
                height={600} 
                priority
              />
            </div>
            <div className="flex items-center mb-2">
              <div className="border-l-4 border-gray-300 mr-4 pl-4" style={{ minHeight: '2rem' }}>
                <span className="text-2xl md:text-2xl font-semibold text-gray-800 leading-snug">AI Explanation</span>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              In order to increase transparency for how their work was graded, including the AI's explanation allows students to see what exactly was wrong with their writing. If it is still unclear, then they can ask their teacher.
            </p>
          </motion.div>

          {/* Getting Teachers Involved Feature Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto my-16"
          >
            <div className="w-full bg-gray-200 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/newsela/everwritecase/finaldesign3.png" 
                alt="EverWrite Final Design Ask Teacher" 
                layout="intrinsic" 
                width={1200} 
                height={600} 
                priority
              />
            </div>
            <div className="flex items-center mb-2">
              <div className="border-l-4 border-gray-300 mr-4 pl-4" style={{ minHeight: '2rem' }}>
                <span className="text-2xl md:text-2xl font-semibold text-gray-800 leading-snug">Getting teachers involved</span>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Teachers are the backbone of the learning process, so why not utilize them! Adding a section for students to directly ask their teacher about their writing grants students the ability to explore their intellectual curiosity if they are not happy with the grade they received.
            </p>
          </motion.div>

          {/* Making Questions Specific Feature Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto my-16"
          >
            <div className="w-full bg-gray-200 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/newsela/everwritecase/finaldesign4.png" 
                alt="EverWrite Final Design Highlight UI Screenshot 1" 
                layout="intrinsic" 
                width={1200} 
                height={600} 
                priority
              />
            </div>
            <div className="w-full bg-gray-200 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/newsela/everwritecase/finaldesign5.png" 
                alt="EverWrite Final Design Highlight UI Screenshot 2" 
                layout="intrinsic" 
                width={1200} 
                height={600} 
                priority
              />
            </div>
            <div className="flex items-center mb-2">
              <div className="border-l-4 border-gray-300 mr-4 pl-4" style={{ minHeight: '2rem' }}>
                <span className="text-2xl md:text-2xl font-semibold text-gray-800 leading-snug">Making questions specific</span>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              As teachers look for issues in the writing, letting the student highlight their specific problem area saves time for teachers. This also incentives students to look back at their writing for problems, instead of just accepting their grade and moving on.
            </p>
          </motion.div>

          {/* Notification Center & Expanding Interface Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto my-16"
          >
            <div className="w-full bg-gray-200 rounded-lg mb-10 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/newsela/everwritecase/finaldesign6.png" 
                alt="EverWrite Final Design Notification Center UI" 
                layout="intrinsic" 
                width={1200} 
                height={600} 
                priority
              />
            </div>
            <div className="font-semibold text-gray-900 text-base mb-4">Expanding EverWrite's Interface</div>
            <div className="flex mb-4">
              <div className="border-l-4 border-gray-300 mr-4 pl-4" style={{ minHeight: '3.5rem' }}></div>
              <div>
                <span className="text-2xl md:text-2xl font-semibold text-gray-800 leading-snug">Having <span className="font-bold">a clean user interface</span> to makes the process smooth for both teachers and students. — Peter Paccone</span>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To accelerate the process of teachers looking through these new requests, implementing a notification center would give quick access to reviewing and addressing grading concerns from students.
            </p>
            <a
              className="bg-black text-white rounded-lg px-6 py-2 font-medium text-base shadow hover:bg-gray-900 transition-colors inline-block text-center"
              href="https://www.figma.com/proto/T0DKIuC8Kom3QquzEdxZYi/Newsela-EverWrite-Case?page-id=0%3A1&node-id=187-141&starting-point-node-id=187%3A141&scaling=min-zoom&content-scaling=fixed&t=nf9qEBC5s14k2AA2-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out the demo 🎉
            </a>
          </motion.div>

          {/* Future Steps Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto mt-24 mb-32 px-4"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Future steps</h2>
            <p className="text-base text-gray-700 mb-6">Here are my future plans for EverWrite's platform:</p>

            <div className="mb-6">
              <span className="font-semibold text-gray-900">Continuing to optimize for efficiency</span>
              <p className="text-base text-gray-700 mt-1">
                With the addition of these new features, I would want to continue accelerating the process of grading for teachers. Specifically, after a request is sent and is placed in the notification center, implementing voice notes that allow teachers to say their critics out loud would be an efficient next step to saving time for teachers.
              </p>
            </div>

            <div className="mb-6">
              <span className="font-semibold text-gray-900">Update our website with supportive information</span>
              <p className="text-base text-gray-700 mt-1">
                Because of how skeptical teachers were of AI teaching platforms, we should target their concerns by including as much information as possible about our platform. From studies showing the effectiveness of EverWrite to real feedback given from other teachers, we should include all of this information to improve trust in our platform.
              </p>
            </div>

            <div className="mb-8">
              <span className="font-semibold text-gray-900">Expand the use cases of EverWrite</span>
              <p className="text-base text-gray-700 mt-1">
                Right now, EverWrite is only being used to grade assignments that the teacher assigns. While it is good to excel at one specific task, we want to expand the scope to include students who want to practice individually or even collaborative writing assignments.
              </p>
            </div>

            <p className="text-base text-gray-700 mb-2">Thank you for reading through! Hope you enjoyed learning about my design and thought process.</p>
            <p className="text-base text-gray-700">I really enjoyed the emphasis on user research for this case study specifically while also expanding upon EverWrite's already existing features.</p>
          </motion.div>
        </div>
        <Footer />
      </motion.div>
    </div>
  )
} 