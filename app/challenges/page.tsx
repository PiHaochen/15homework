"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ComicTargetIcon,
  ComicBrainIcon,
  ComicGamepadIcon,
  ComicBookIcon,
  ComicPlayIcon,
} from "@/components/comic-icons"
import { GameHeader } from "@/components/game-header"

const gameModules = [
  {
    id: "spot-the-fake",
    title: "SPOT THE FAKE",
    description: "Train your detection skills to identify fake information",
    icon: ComicTargetIcon,
    color: "bg-[#ff3a3a]",
    tag: "DETECT",
    subModules: [
      { name: "Fake News Spotting", description: "Identify fake news patterns" },
      { name: "Headline Spotting", description: "Spot misleading headlines" },
      { name: "Photo Challenge", description: "Detect manipulated images" },
      { name: "AI Detection Lab", description: "Identify AI-generated content" },
    ],
  },
  {
    id: "scenario-game",
    title: "SCENARIO GAME",
    description: "Test your judgment in real-world scenarios",
    icon: ComicGamepadIcon,
    color: "bg-[#ff9500]",
    tag: "PLAY",
    subModules: [
      { name: "What's Your Info Personality?", description: "Discover how you process suspicious information" },
      { name: "Pseudo-Expert Bingo", description: "Identify fake expert tactics" },
      { name: "Algorithm Judge", description: "Simulate social media recommendation system" },
    ],
  },
  {
    id: "fake-content-factory",
    title: "FAKE CONTENT FACTORY",
    description: "Learn by creating fake news (educational)",
    icon: ComicBrainIcon,
    color: "bg-[#3a66ff]",
    tag: "CREATE",
    subModules: [
      { name: "Who Do You Pretend To Be?", description: "Post as them. Watch what happens." },
      { name: "Build Your Own News Trap", description: "Create the site. Craft the spin." },
      { name: "How Will You Flood the Feed?", description: "Control the trolls. Shape the storm." },
    ],
  },
  {
    id: "tool-library",
    title: "TOOL LIBRARY",
    description: "Practical tools and guides collection",
    icon: ComicBookIcon,
    color: "bg-[#00c16e]",
    tag: "LEARN",
    subModules: [],
  },
]

export default function ChallengesPage() {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="CHOOSE YOUR CHALLENGE" subtitle="Master the art of spotting fake information" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="comic-box bg-white p-6 max-w-3xl mx-auto mb-6">
              <h2 className="comic-text text-4xl font-black mb-4">READY TO BECOME A FAKE DETECTOR?</h2>
              <p className="text-xl font-bold text-gray-700">
                Choose your training path and level up your media literacy skills through hands-on practice!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gameModules.map((module) => {
              const IconComponent = module.icon
              const isHovered = hoveredModule === module.id

              return (
                <Link href={`/${module.id}`} key={module.id} className="block">
                  <div
                    className="comic-module h-full"
                    onMouseEnter={() => setHoveredModule(module.id)}
                    onMouseLeave={() => setHoveredModule(null)}
                  >
                    <div className="comic-module-content p-8 h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`${module.color} p-4 border-3 border-black`}>
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        <span className="comic-tag text-lg px-3 py-1">{module.tag}</span>
                      </div>

                      <h4 className="comic-module-title mb-4 text-black text-2xl">{module.title}</h4>
                      <p className="mb-6 text-gray-700 font-bold text-lg">{module.description}</p>

                      {module.subModules.length > 0 && isHovered ? (
                        <div className="space-y-4 mb-6">
                          {module.subModules.map((subModule, index) => (
                            <div key={index} className="border-3 border-black p-4 bg-gray-100">
                              <h5 className="font-black mb-2 text-lg">{subModule.name}</h5>
                              <p className="text-gray-600 font-bold">{subModule.description}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <Button className="comic-button w-full bg-black text-white text-lg py-3">
                        <ComicPlayIcon className="w-5 h-5 mr-2" />
                        START CHALLENGE
                      </Button>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
