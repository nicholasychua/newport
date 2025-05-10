"use client";

import { articles } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto py-8">
        <Link
          href="/writing"
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
                  <p>
                    Building AI products that people actually want to use is more than just implementing the latest models or achieving high accuracy metrics. It's about solving real user problems in ways that feel natural and intuitive.
                  </p>

                  <h2>The Human-Centered Approach</h2>
                  <p>
                    The most successful AI products start with a deep understanding of user needs. Instead of asking "What can AI do?", we should ask "What problems do users face that AI can help solve?"
                  </p>

                  <h2>Key Principles</h2>
                  <ul>
                    <li>Focus on user outcomes, not AI capabilities</li>
                    <li>Design for trust and transparency</li>
                    <li>Make AI interactions feel natural and conversational</li>
                    <li>Provide clear feedback and fallback options</li>
                  </ul>

                  <h2>Real-World Examples</h2>
                  <p>
                    Let's explore how companies are successfully implementing these principles in their AI products, from virtual assistants to recommendation systems.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    Building AI products that people love requires a balance of technical excellence and human-centered design. By focusing on real user needs and creating intuitive experiences, we can build AI products that make a meaningful impact.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Starting college is a transformative experience that comes with its own set of challenges and opportunities. Looking back at my time at Berkeley, there are several insights I wish I had known from the beginning.
                  </p>

                  <h2>Academic Success</h2>
                  <p>
                    The transition from high school to college academics can be challenging. Learn how to effectively manage your time, seek help when needed, and maintain a healthy balance between studies and personal life.
                  </p>

                  <h2>Building Relationships</h2>
                  <p>
                    College is about more than just academics. It's a time to build lasting friendships, network with professionals, and develop meaningful connections that can shape your future.
                  </p>

                  <h2>Personal Growth</h2>
                  <p>
                    Embrace opportunities for personal development, whether through clubs, internships, or study abroad programs. These experiences often teach you more than your coursework.
                  </p>

                  <h2>Practical Tips</h2>
                  <ul>
                    <li>Get involved early in campus activities</li>
                    <li>Build relationships with professors and mentors</li>
                    <li>Take care of your physical and mental health</li>
                    <li>Don't be afraid to change your path</li>
                  </ul>

                  <h2>Looking Forward</h2>
                  <p>
                    College is just the beginning of your journey. Use this time to explore, experiment, and discover what truly interests you. The lessons you learn here will serve you well beyond graduation.
                  </p>
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
