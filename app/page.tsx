import { Avatar } from "@/components/ui/avatar"
import { ProjectCard } from "@/components/project-card"
import { ArticleCard } from "@/components/article-card"
import { ModeToggle } from "@/components/mode-toggle"
import { Footer } from "@/components/footer"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { projects, articles } from "@/lib/data"

type ModeType = "work" | "play" | "writing"

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: HomeProps) {
  // In Next.js 15, searchParams needs to be awaited
  const resolvedParams = await searchParams
  const modeParam = resolvedParams.mode as string | undefined
  const mode = modeParam || "work"
  const validMode: ModeType = ["work", "play", "writing"].includes(mode) ? (mode as ModeType) : "work"

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-16 h-16 rounded-full bg-primary/5 blur-xl"></div>
        <div className="absolute top-[30%] right-[25%] w-24 h-24 rounded-full bg-primary/5 blur-xl"></div>
        <div className="absolute bottom-[35%] left-[15%] w-20 h-20 rounded-full bg-primary/5 blur-xl"></div>
        <div className="absolute top-[60%] right-[10%] w-16 h-16 rounded-full bg-primary/5 blur-xl"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto py-8 flex justify-between items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border border-muted/20">
          <Avatar className="w-full h-full">
            <img src="/placeholder-user.jpg" alt="Profile" />
          </Avatar>
        </div>

        <ModeToggle />

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-muted/20 hover:bg-primary/5 hover:border-primary/20"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 pt-16 pb-24 flex-grow">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-6xl font-heading font-medium text-foreground mb-8 leading-tight">
            hi, i'm <span className="gradient-text">nicholas</span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-5 w-5 text-primary/80" />
            <span>san francisco, ca</span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            currently working on{" "}
            <a href="#" className="text-primary hover:text-primary/80 transition-colors font-medium">
              your company
            </a>
            , a brief description about what you do and your expertise.
          </p>
        </div>

        <ContentSection mode={validMode} />
      </main>

      <Footer />
    </div>
  )
}

interface ContentSectionProps {
  mode: ModeType
}

function ContentSection({ mode }: ContentSectionProps) {
  return (
    <div className="max-w-6xl mx-auto">
      {mode === "writing" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {projects
            .filter((project) => project.type === mode)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
      )}
    </div>
  )
}
