import { articles } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto py-8 flex justify-between items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border border-muted/20">
          <Avatar className="w-full h-full">
            <img src="/placeholder.svg?height=100&width=100" alt="Profile" />
          </Avatar>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-muted/20 hover:bg-primary/5 hover:border-primary/20"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <article className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-heading font-medium mb-6 leading-tight">{article.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {article.coverImage && (
              <div className="aspect-[2/1] relative rounded-2xl overflow-hidden mb-12 shadow-lg">
                <Image
                  src={article.coverImage || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p>
                This is the full content of your article. You can add more detailed content here, including paragraphs,
                headings, lists, code blocks, and more.
              </p>

              <h2>Introduction</h2>
              <p>
                Start with an engaging introduction that sets the context for your article and explains why the topic is
                important or relevant to your readers.
              </p>

              <h2>Main Points</h2>
              <p>
                Break down your main arguments or points into clear sections with descriptive headings. This makes your
                content more scannable and easier to follow.
              </p>

              <h3>First Point</h3>
              <p>
                Elaborate on your first main point with supporting evidence, examples, or explanations. Use concrete
                details to make your point more compelling.
              </p>

              <h3>Second Point</h3>
              <p>
                Continue with your second main point, building on the previous section and advancing your overall
                argument or narrative.
              </p>

              <h2>Practical Applications</h2>
              <p>
                Provide practical takeaways or applications that readers can implement in their own work or projects.
                This adds value to your article and makes it more actionable.
              </p>

              <h2>Conclusion</h2>
              <p>
                Summarize your key points and reinforce the main message or insight of your article. You might also
                suggest further reading or next steps for readers interested in exploring the topic further.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
