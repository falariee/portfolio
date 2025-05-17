"use client"

import React from "react"
import { ExternalLink } from "lucide-react"
import { experiences } from "@/data/experiences"
import ExperienceModal from "./experience-modal"

interface ExperienceCardProps {
  experience: typeof experiences[0]
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div
        key={experience.id}
        className="group border border-primary/20 rounded-lg p-4 hover:bg-card/50 transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {experience.title}
            </h4>
            <p className="text-sm text-muted-foreground">{experience.organization} • {experience.duration}</p>
            <p className="mt-2 text-sm">{experience.shortDescription}</p>
          </div>
          <div className="text-primary">
            <ExternalLink className="h-5 w-5" />
          </div>
        </div>
      </div>

      <ExperienceModal
        experience={experience}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 