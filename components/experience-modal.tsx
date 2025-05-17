"use client"

import React from "react"
import { X } from "lucide-react"
import { experiences } from "@/data/experiences"

interface ExperienceModalProps {
  experience: typeof experiences[0]
  isOpen: boolean
  onClose: () => void
}

export default function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-lg z-50">
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm border-b p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                {experience.title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mt-1">
                {experience.organization} • {experience.duration}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
            <p className="text-base md:text-lg font-medium">{experience.shortDescription}</p>
            
            <div className="space-y-4 mt-6">
              {experience.longDescription.map((desc, index) => (
                <p key={index} className="text-muted-foreground">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {experience.skills && (
            <div className="border-t pt-6">
              <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 