"use client";

import { articles } from "@/lib/data"
import { notFound, useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === "string" ? params.slug : Array.isArray(params.slug) ? params.slug[0] : "";
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto py-8">
        <Link
          href="/?mode=writing"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to writing</span>
        </Link>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 pb-12">
          <article className="max-w-3xl mx-auto">
            <div className="mb-10">
              <div className="text-sm text-orange-500 mb-2">{article.category}</div>
              <h1 className="text-4xl font-heading font-medium mb-6 leading-tight">{article.title}</h1>
              {article.subtitle && (
                <p className="text-lg text-muted-foreground mb-4 italic">{article.subtitle}</p>
              )}
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {article.coverImage && (
              <div className="aspect-[2/1] relative rounded-2xl overflow-hidden mb-12 shadow-lg">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {article.slug === "building-ai-products" ? (
                <>
                  <h2 className="font-heading text-2xl font-semibold mb-6">Background:</h2>
                  <p>
                    When Sam Altman unveiled ChatGPT in 2022, the world erupted in a frenzy of excitement over this "new era" of technology. My friends pursuing careers in software engineering jumped on this new opportunity, embarking on anything from LLM fine tuning to creating their own neural networks.
                  </p>
                  <p>
                    But even as someone who enjoyed building projects, this new craze of excitement was shortlived. I didn't know how to code, and ultimately felt lost with projects flying around me at all times. <span className="font-semibold">It was the first time I felt coding FOMO.</span> Realizing this complication, I decided to jump into the deep end and enrolled in the world's biggest AI hackathon to really get a feel of <span className="font-semibold">how my skillset could transfer to this new era of projects.</span>
                  </p>
                  <p>
                    Throughout this article, I'll take you through the lessons I learned through competing against over 1200 students at UC Berkeley's AI Hackathon, from ideation strategies to how we ended up as a finalist pitching for a $25,000 VC investment. Whether you're a software engineer with years of coding experience or someone like me, just trying to navigate through what feels like a code-dominated world, I hope you can draw from my experiences and lessons to develop your own entrepreneurial skillset.
                  </p>
                  <div className="my-8 flex flex-col items-center">
                    <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6 text-white text-base font-mono mb-2">
                      <span className="font-bold text-orange-300">[SkyDeck Fund]</span> <span className="text-gray-400">2:46 PM</span>
                      <div className="mt-2">Hey Nicholas, your team has been selected as a finalist for the AI for Good prize, can you head over to Stephen's lounge right away to pitch to the judges?</div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">our teams advancement to the final hackathon round</div>
                  </div>

                  <h2 className="font-heading text-2xl font-semibold mt-12 mb-6">Phase 1: Ideation</h2>
                  <p>
                    Before the hackathon started, my team and I racked up ideas on possible projects to embark on the following day. <span className="font-semibold">Brainstorming was done through one of three ways:</span>
                  </p>
                  <ol className="list-decimal pl-6 my-4">
                    <li>Consulting ChatGPT for untapped issues to solve.</li>
                    <li>Scraping the internet for public datasets and ideating how they could be utilized in machine learning models.</li>
                    <li>A combination on methods 1 and 2; applying public datasets to untapped (or even indirectly related) issues.</li>
                  </ol>
                  <p>Here's what I noticed.</p>

                  <h3 className="font-heading text-xl font-semibold mt-8 mb-4">Lesson 1: Rewire how you use AI in your workflow.</h3>
                  <p>
                    Oftentimes, consulting ChatGPT for ideas on problem areas to tackle led to repetitive, basic answers that were far from helpful. I soon found that the ideal workflow is to <span className="font-semibold">think of innovative problems and solutions yourself, but use AI</span> to instead generate any supportive facts needed to <span className="font-semibold">validate your solution.</span>
                  </p>
                  <p>
                    When asking ChatGPT for "innovative solutions to untapped problems in the healthcare sector," responses would range anywhere from using drones to deliver health samples to developing health wearables (that already exist). Some may say that it is a user's job to generate a prompt worthy of a quality response, but there comes a point where the return on investment of fine tuning a prompt simply isn't productive in fast turnaround environments.
                  </p>
                  <p>
                    Instead, use AI to determine the feasibility of your ideas. I've thrown crazy ideas at ChatGPT, from augmented reality text translators to wearable devices to cure period cramps, all in an effort to see if there was legitimate evidence that could support whatever idea I was trying to pursue. I found that <span className="font-semibold">instead of spending time coming up with the most elaborate prompts for LLMs to make interesting solutions, my most innovative ideas came from spending that time repeatedly throwing bold ideas at the wall until one is validated.</span>
                  </p>

                  <p className="mt-10"><span className="font-semibold">Eventually, my team and I settled on our idea: an <span className='font-bold'>all-in-one health app to optimize daily habits using AI.</span></span></p>

                  <h2 className="font-heading text-2xl font-semibold mt-12 mb-6">Phase 2: Building</h2>
                  <p>
                    Now, with idea in mind, it was time to start building. We marked our territory at the bottom of Berkeley's MLK Jr. Building and got to work.
                  </p>
                  <p>
                    Immediately, I laid the foundation for our teams dynamic and delegated tasks to each team member.
                  </p>
                  <p><span className="font-semibold">Nick (Me):</span> Product Manager</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Creating the PRD framework, slide deck, and devpost</li>
                    <li>Design and create Hi-Fi mockup in Figma</li>
                  </ul>
                  <p><span className="font-semibold">Marcus:</span> Software Engineer</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Backend prompt generation and G-Suite integration</li>
                    <li>Sponsorship prize optimization (Include as many sponsors as possible for eligibility)</li>
                  </ul>
                  <p><span className="font-semibold">Steven:</span> Software Engineer</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Computer vision (AI Food Scanner)</li>
                    <li>Use data to generate AI Health Diagnosis; integrate ElevenLabs</li>
                  </ul>
                  <p><span className="font-semibold">Sean:</span> Data Scientist</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Parsed health data from CSV export of Health App</li>
                    <li>Reformatted data into readable format for LLM</li>
                  </ul>
                  <p>
                    I got to work designing my interactive prototype of the product, drawing low fidelity wireframes and finding UX inspirations from sites like Dribble. I sat their for hours with my team as we designed, coded, and deliberated our ideas for hours on end. But like the ebb and flow of any work sprint, productivity peaked and it wasn't long until exhaustion started to kick in.
                  </p>

                  {/* Figma wireframes image placeholder */}
                  <div className="my-12 flex flex-col items-center">
                    <div className="w-full max-w-3xl aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-gray-500 text-lg">[Figma wireframes placeholder]</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">my figma wireframes</div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold mt-8 mb-4">Lesson 2: Hackathons are a marathon, not a sprint.</h3>
                  <p>
                    While this takeaway might raise an eyebrow to some, hear me out. Hackathons are known for their rigorous all-nighters insinuating the notion of a sprint, but that approach isn't always optimal.
                  </p>
                  <p>
                    Just a few months before enrolling in this AI Hackathon, I competed in LA Hacks, a 72-hour hackathon where my team and I built a Google Meet bot for real-time meeting translation. However, my team and I tried the stereotypical approach of no sleep and constant grinding, foreshadowing groans of discomfort and stagnation with our project down the line.
                  </p>
                  <p>
                    Fast forward months later and I found myself facing a similar situation at this AI Hackathon. Up until that point, we had been working for almost 15 hours straight with minimal breaks before productivity started to slow down. <span className="font-semibold">How could I foster the most productive atmosphere for the longest period of time?</span>
                  </p>
                  <p>
                    The answer lied in <span className="font-semibold">short, high-quality breaks.</span> Instead of pockets of time wasted on doomscrolling through Instagram, I focused on creating micro breaks with my team to stay productive while being efficient with our time. From anything as simple as a deep conversation on our quick stroll to dinner to a break to pet the llamas, these seemingly 5-10 minute sacrifices actually resulted in massive amounts of productivity gain.
                  </p>

                  {/* Llama break image placeholder */}
                  <div className="my-12 flex flex-col items-center">
                    <div className="w-full max-w-2xl aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-gray-500 text-lg">[Llama petting break placeholder]</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">llama petting break</div>
                  </div>

                  <h2 className="font-heading text-2xl font-semibold mt-12 mb-6">Phase 3: Judging</h2>
                  <p>
                    As the coding period came to a close, my team and I sat back in our chairs, exhausted from the 26 hours of work that had overcome us. But it wasn't over yet. We had been told that we had mere minutes to prepare before droves of judges would scatter throughout the halls, eager to learn what we had built over the course of the last few days.
                  </p>
                  <h3 className="font-heading text-xl font-semibold mt-8 mb-4">Lesson 3: Know your audience.</h3>
                  <p>
                    One of the most highly valued traits in any type of technical job today is <span className="font-semibold">communication</span>. But communication is more than just smooth talking and elegant diction. As an avid communicator, I learned that being able to <span className="font-semibold">tailor your conversational approach</span> based on your audience results in more interested feedback from listeners. In technical environments like these, good communicators need to recognize their audience and what they are interested in...all in a split second.
                  </p>
                  <p className="italic text-muted-foreground">
                    Should I explain our tech stack? Do I explain what API's we used? Do they even care about what an API is?
                  </p>
                  <p>
                    As the first judge walked to our table, I immediately started to scan them for possible interests. <span className="italic">Apple watch on the left hand, Vivo barefoot shoes, exuberant energy.</span> From these observations, I assumed the emotional appeal of our company (aligning heavily to the problems fitness industry) would be more impactful than a dropping a bomb of technical knowledge. On the other hand, another judge came over to our table with a Meta jacket in hand, staring at our code base without asking a single question about our idea. Safe to say, I wasted no time handing them over to our software engineers so he could pick their brain.
                  </p>
                  <p>
                    While tailoring your pitch on the fly may seem risky, decisions like these can make or break your hackathon placement. <span className="font-semibold">The premise of any pitch should be to leave a positive and lasting impact on your judge,</span> and finding ways to tailor your pitch to itch the judges best interests is the best way to do that.
                  </p>
                  <p>
                    While the hours of judging went relatively smoothly, I soon looked down at my phone and was met with a disturbing message.
                  </p>
                  <p className="italic text-muted-foreground">*7 missed calls*</p>
                  <h3 className="font-heading text-xl font-semibold mt-8 mb-4">Lesson 2: Seize your opportunities and don't let go.</h3>
                  <p>
                    It had turned out that while we were pitching to our final judges from Intel, I failed to hear the calls announcing our advancement to the next round. Alarmed, I dialed the number on the phone. I was told that we had been selected as Finalists for the AI For Good Award and a $25,000 investment, <span className="font-semibold">but they had moved on and replaced us due to our failure to respond.</span>
                  </p>

                  <blockquote className="border-l-4 border-red-500 pl-4 my-8 text-gray-700 text-lg">
                    "It's too late. I think they've moved on without your group…You can try coming up to floor 3 to see if there's still a chance…" <span className="text-sm text-muted-foreground">– SkyDeck Representative</span>
                  </blockquote>
                  <p>
                    To me, the words of "I think" and "still a chance" was enough hope for me to grasp on to as I grabbed my group and bolted up the stairs to the judging venue. Out of breath, I looked up at the two SkyDeck Representatives I had called, only to be met with disapproving head shakes signifying our defeat. It was too late.
                  </p>
                  <p className="italic font-semibold mt-6 mb-2">Or was it?</p>
                  <p>
                    Overwhelmed by the effort our group had put in over the last 26-hours without a blink of sleep, I tried everything to explain our group's circumstances to salvage our last shot at this investment. I explained everything, from the Intel judging scenario to our investments we took to even compete at this hackathon. I was met with constant denial before finally…
                  </p>
                  <p className="italic text-muted-foreground">"…let me see if I can ask."</p>
                  <p>
                    A short conversation later, my group and I were let through and had 1 minute to pitch our idea. We didn't end up winning the $25,000 investment, but to me, fighting and clinching a spot to even pitch on the main stage was a big enough win for me to take from my second major hackathon.
                  </p>

                  <h2 className="font-heading text-2xl font-semibold mt-12 mb-6">Executive Summary:</h2>
                  <p>
                    It's easy to get bogged down by the recent surge in AI, especially for someone like me who is recently breaking into the coding scene. I do think coding is an essential piece of knowledge (especially for PMs) that unlock potential for better connections and leadership with SWEs. I myself still take the time to read up on advancements in code and AI in order to best lead and understand what software engineers are thinking. But at the same time, coding isn't everything. In my recent hackathon, I served as the PM for my group, focusing more on the planning and presentation of our project while overseeing my team's SWEs throughout the execution process. I learned how to utilize AI in more productive idea generation, fostered productive environments through microbreaks, and battled my way with admin to get a spot on the final pitch panel. These experiences haven't completely eradicated my coding FOMO, but instead remind me that there are always valuable contributions to make outside of our github repo.
                  </p>

                  {/* Substack CTA */}
                  <div className="mt-16 mb-8 flex flex-col items-center">
                    <div className="text-lg font-semibold text-foreground mb-1 text-center">Read more of nick's notions on Substack</div>
                    <div className="text-sm text-muted-foreground mb-6 text-center">documenting the mvp of my ideas</div>
                    <a
                      href="https://nicholaschua.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-7 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 text-base no-underline hover:underline"
                      style={{ letterSpacing: '0.01em', textDecoration: 'none' }}
                    >
                      Subscribe on Substack
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    <span className="italic text-muted-foreground">…my opponent has a tight range, only opening on pocket pairs or high suited connectors. He three-bet jammed for half-pot but I have a backdoor flush draw and a gutshot. I have 40% equity which nets me a positive EV so I call…</span>
                  </p>
                  
                  <p>
                    Whether the last few lines of text looked like a sludge of gibberish or made perfect sense, it walks you through what goes on in the mind of a pro poker player. It's a complex decision process of reading body language, mental manipulation, and mathematical calculations. However, the stigma behind the game of poker is often negative, thrown into the same pool of ideas as gambling addicts and slot machines, and I strongly believe this is <span className="font-semibold">far from the truth</span>.
                  </p>
                  
                  <p>
                    This summer, I gave poker a chance. What started as a fun hobby with my friends evolved into something I became genuinely passionate about, downloading videos for plane rides to studying between subway stops. After hours of researching everything from the calculations behind poker decisions to body language reads, I noticed that <span className="font-semibold">the skills required to become an adept poker player are extremely applicable to being a successful entrepreneur.</span>
                  </p>
                  
                  <p>
                    I'll first walk you through a very brief introduction to poker before describing 3 unconventional traits that make poker players special.
                  </p>
                  
                  <h2 className="font-sans text-2xl font-semibold mt-12 mb-4 text-black">How do you play poker?</h2>
                  <p>
                    If you've never played poker, here's a <span className="font-semibold">very</span> quick rundown.
                  </p>
                  
                  <div className="space-y-3 mb-4 mt-3">
                    <div className="pt-1.5 pb-2 px-3 border border-orange-100 rounded-lg bg-orange-50">
                      <h4 className="font-medium mb-0.5 text-sm">1. Get Cards</h4>
                      <p className="text-xs text-gray-700 leading-tight">Each player gets two cards that they keep secret from the others. Players bet chips based on how good they think their cards are.</p>
                    </div>
                    
                    <div className="pt-1.5 pb-2 px-3 border border-orange-100 rounded-lg bg-orange-50">
                      <h4 className="font-medium mb-0.5 text-sm">2. Bet or Fold</h4>
                      <p className="text-xs text-gray-700 leading-tight">After the initial bets, more cards are gradually turned face-up in the center. They can also choose to fold (quit) if they think their hand isn't good enough.</p>
                    </div>
                    
                    <div className="pt-1.5 pb-2 px-3 border border-orange-100 rounded-lg bg-orange-50">
                      <h4 className="font-medium mb-0.5 text-sm">3. Reveal</h4>
                      <p className="text-xs text-gray-700 leading-tight">After all the cards are revealed, players compare their final hands. The player with the best combination of cards in their hand with those in the middle wins the chips.</p>
                    </div>
                  </div>
                  
                  <div className="my-4 flex flex-col items-center">
                    <div className="w-full max-w-xl rounded-2xl overflow-hidden mb-2 shadow-md bg-[#121212] flex items-center justify-center">
                      <Image
                        src="/pokerarticle.jpg"
                        alt="Poker game in progress"
                        width={700}
                        height={394}
                        className="object-cover w-full"
                        priority
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Picture of step 3, Daniel wins with one pair of 6's.</div>
                  </div>
                  
                  <h2 className="font-sans text-2xl font-semibold mt-12 mb-4 text-black">The 3 Essential Skills</h2>
                  
                  <h3 className="font-sans text-xl font-semibold mt-8 mb-3 text-black">Skill 1: Storytelling</h3>
                  <p>
                    One of the most important elements of poker is mystery. You don't know what the opponent has, how strong their cards are, or who's winning in each situation. Amateur players fall into a routine of patterns, betting big when they have a good hand and betting small/folding when they are weak. The problem with this approach is that its <span className="font-semibold">predictable</span>, and good players can exploit this pattern by comparing what you bet to how strong their hand is.
                  </p>
                  
                  <div className="my-4">
                    <blockquote className="border-l-4 border-orange-300 pl-4 italic text-gray-700">
                      <span className="font-semibold">Picture this:</span>
                    </blockquote>
                  </div>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>You're playing heads up with pocket 9s and your opponent raises 3x the big blind.
                      <ul className="list-none pl-6 mt-1 italic text-gray-600">
                        <li>You call</li>
                      </ul>
                    </li>
                    <li>Flop comes Ace, Six, Deuce → Opponent bets out half pot
                      <ul className="list-none pl-6 mt-1 italic text-gray-600">
                        <li>You call</li>
                      </ul>
                    </li>
                    <li>King on the river → Opponent bets pot
                      <ul className="list-none pl-6 mt-1 italic text-gray-600">
                        <li>You call</li>
                      </ul>
                    </li>
                    <li>Jack on the river → Opponent jams all in
                      <ul className="list-none pl-6 mt-1 italic text-gray-600">
                        <li>You fold</li>
                      </ul>
                    </li>
                    <li>Opponent shows three, four, and bluffs his way to a win.</li>
                  </ul>

                  <p>
                    This is a common scenario, being dealt a mid pocket pair only to see a few over-cards that scare you away. In my opinion, you played the hand well, but the opponent knew how to tell a "story" that he had one of the cards that beat you (Jack, King, or Ace) to scare you away. Good poker players know how to utilize this aspect of storytelling to their advantage, <span className="font-semibold">telling different "stories"</span> with their hands to maximize the chips they can win.
                  </p>
                  
                  <h4 className="font-sans text-base font-medium mt-6 mb-2 text-black">How this relates:</h4>
                  <p>
                    A similar scenario is seen through venture capital where communication and storytelling overrides substance.
                  </p>
                  
                  <div className="my-4">
                    <blockquote className="border-l-4 border-orange-300 pl-4 italic text-gray-700">
                      "We should invest in people, not good ideas." - Simon Sinek
                    </blockquote>
                  </div>
                  
                  <p>
                    Oftentimes, when raising money, people invest in the <span className="italic">people</span> pitching, rather than the idea itself. Charisma, grit, and initiative are just a few traits that we are able to portray, <span className="font-semibold">simply by telling a story</span>. These are the traits that people <span className="font-semibold">want to work with</span> (and invest in), so showing off these skillsets through storytelling is fundamental in entrepreneurship. In areas we are weak (similar to having a weak poker hand), storytelling helps cover up those flaws. We can talk about the lessons learned from times we failed, finding ways to still appear strong to others.
                  </p>
                  
                  <p>
                    Being able to tell a story is a fundamental skill for entrepreneurs, showcasing your ability to communicate information at a high level and learn from your failures when needed.
                  </p>

                  <h3 className="font-sans text-xl font-semibold mt-8 mb-3 text-black">Skill 2: Belief</h3>
                  <p>
                    Poker teaches us how to bet on ourself. Literally.
                  </p>
                  
                  <p>
                    In poker, an aggressive player is defined as somebody who constantly bets with a loose range, getting others to fold. Think about the situation above, would you be able to call the opponents bluff?
                  </p>
                  
                  <p>
                    In poker, we'll constantly get shoved around by bluffers, aggressive players, or simply by being unlucky. But at the end of the day, I always return to the quote: <span className="font-semibold">"Scared money doesn't make money"</span>. If we are constantly scared of calling an all in because of the amount we <span className="italic">could</span> lose, we'll never make money. Sometimes you need to be the "hero" and make the tough call, even if it means losing a couple of hands in the process.
                  </p>
                  
                  <h4 className="font-sans text-base font-medium mt-6 mb-2 text-black">How this relates:</h4>
                  <p>
                    In life, the same process applies. Whether you're interviewing for jobs or attending a conference, its normal to want to quit because you feel "weak" compared to others. You feel like "there's no chance I get the job," and end up not applying as a result. But at the end of the day, <span className="font-semibold">there will be bluffs</span>. The individuals that beef up their resume with fake information, or portray a fake character to appeal to recruiters. It's easy to lose hope during these processes because of the sheer amount of competitors involved, but its important to try. You've heard the saying "You miss 100% of the shots you don't take," so believe in yourself and take the shot.
                  </p>

                  <h3 className="font-sans text-xl font-semibold mt-8 mb-3 text-black">Skill 3: Fortitude</h3>
                  <p>
                    At the end of the day, poker is about decisions, not results.
                  </p>
                  
                  <p>
                    In poker, you could make every single "right" decision and still lose a hand. You could be a 99% favorite to win the hand and go all-in, just to lose to the 1% scenario of your opponent hitting their only out. But that's the mindset about poker: <span className="font-semibold">focus on decisions you can control, leave what you can't.</span>
                  </p>
                  
                  <h4 className="font-sans text-base font-medium mt-6 mb-2 text-black">How this relates:</h4>
                  <p>
                    This concept applies in many facets of life as well. I'm sure all of us have poured our hearts and souls into something, just to receive an unfavorable result. We've all experienced it sometime or another. Losing a game you deserved to win due to a bad ref call, studying your a** off for a test just to receive a question that the teacher never covered, you get the point. Just like in poker, there will be times where you did <span className="font-semibold">everything</span> right. Yet something still happens that was out of your control. It feels like the world has something against us in these moments, and that's okay. The reality is, you can't control everything, only the moves you make. <span className="font-semibold">Once we can become content with the fact that we truly gave everything we had, the result just becomes a bonus.</span>
                  </p>

                  <h2 className="font-sans text-2xl font-semibold mt-12 mb-4 text-black">Conclusion:</h2>
                  <p>
                    Whether you think of poker players as statistical geniuses or degenerate gamblers, I'd suggest zooming out to look at the lessons from poker. <span className="font-semibold">Storytelling, belief, and fortitude, are all beneficial skills not only in poker, but in an entrepreneurial journey as well.</span> Once we learn how to tell a strong story and call bluffs in life, we'll always be the strongest player at the table.
                  </p>
                  
                  {/* Substack CTA */}
                  <div className="mt-16 mb-8 flex flex-col items-center">
                    <div className="text-lg font-semibold text-foreground mb-1 text-center">Read more of nick's notions on Substack</div>
                    <div className="text-sm text-muted-foreground mb-6 text-center">documenting the mvp of my ideas</div>
                    <a
                      href="https://nicholaschua.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-7 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 text-base no-underline hover:underline"
                      style={{ letterSpacing: '0.01em', textDecoration: 'none' }}
                    >
                      Subscribe on Substack
                    </a>
                  </div>
                </>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
