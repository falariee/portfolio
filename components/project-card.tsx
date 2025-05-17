import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string[]
  tags: string[]
  githubUrl?: string
  documentationUrl?: string
  demoUrl?: string
  imageUrl: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full border border-primary/20 bg-card/80 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(186,104,200,0.3)] hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/70 backdrop-blur-sm rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {project.demoUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-1 border-primary/30 hover:bg-primary/20 rounded-full"
            asChild
          >
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-1 border-primary/30 hover:bg-primary/20 rounded-full"
            asChild
          >
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {project.documentationUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-1 border-primary/30 hover:bg-primary/20 rounded-full"
            asChild
          >
            <Link href={project.documentationUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              Documentation
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
