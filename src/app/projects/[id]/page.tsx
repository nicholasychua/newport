import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-medium mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

        <div className="aspect-video relative rounded-lg overflow-hidden mb-12">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            This is a detailed description of the project. You can add more content here about the project, including
            your role, the challenges you faced, the solutions you implemented, and the results achieved.
          </p>

          <h2>The Challenge</h2>
          <p>
            Describe the challenge or problem that this project aimed to solve. What were the requirements? What
            constraints did you have to work within?
          </p>

          <h2>The Process</h2>
          <p>
            Explain your approach to the project. What methodologies did you use? How did you collaborate with others?
            What tools and technologies were involved?
          </p>

          <h2>The Solution</h2>
          <p>
            Detail the solution you developed. What features did you implement? How did your solution address the
            challenge? What makes your approach unique or effective?
          </p>

          <h2>The Outcome</h2>
          <p>
            Share the results of the project. What impact did it have? How was it received by users or stakeholders?
            Include any metrics or testimonials that demonstrate success.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Live Project
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
