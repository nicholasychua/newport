import { Avatar } from "@/components/ui/avatar"
import { ProjectCard } from "@/components/project-card"
import { ArticleCard } from "@/components/article-card"
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
  const resolvedParams = await searchParams
  const modeParam = resolvedParams.mode as string | undefined
  const mode = modeParam || "work"
  const validMode: ModeType = ["work", "play", "writing"].includes(mode) ? (mode as ModeType) : "work"

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      {/* Header Navigation */}
      <header className="w-full fixed top-0 z-50 py-5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm border border-muted/10">
            <Avatar className="w-full h-full">
              <img src="/placeholder-user.jpg" alt="Profile" />
            </Avatar>
          </div>

          <div className="bg-secondary rounded-full p-1">
            <a 
              href="?mode=work" 
              className={`inline-block px-5 py-2 text-sm ${validMode === 'work' ? 'bg-white rounded-full shadow-sm' : 'text-muted-foreground'}`}
            >
              work
            </a>
            <a 
              href="?mode=writing" 
              className={`inline-block px-5 py-2 text-sm ${validMode === 'writing' ? 'bg-white rounded-full shadow-sm' : 'text-muted-foreground'}`}
            >
              writing
            </a>
            <a 
              href="?mode=play" 
              className={`inline-block px-5 py-2 text-sm ${validMode === 'play' ? 'bg-white rounded-full shadow-sm' : 'text-muted-foreground'}`}
            >
              play
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-11 h-11"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 pt-36 pb-24 flex-grow flex flex-col">
        <div className="mx-auto text-center max-w-[560px]">
          <h1 className="text-[70px] font-heading font-normal text-foreground leading-none mb-5">
            hi, i'm <span className="text-foreground">nicholas</span>
          </h1>

          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">san francisco, ca</span>
          </div>

          <p className="text-muted-foreground text-base max-w-md mx-auto">
            currently building{" "}
            <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">
              tami
            </a>
            , an ai second brain for automated task management based on your google calendar.
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
    <div className="w-full max-w-5xl mx-auto mt-16">
      {mode === "writing" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="space-y-12">
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
