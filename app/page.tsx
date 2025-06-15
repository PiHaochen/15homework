"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ComicTargetIcon,
  ComicBrainIcon,
  ComicGamepadIcon,
  ComicBookIcon,
  ComicUsersIcon,
  ComicFileIcon,
  ComicChevronRightIcon,
  ComicPlayIcon,
} from "@/components/comic-icons"
import { VenetianMaskIcon as Mask } from "lucide-react"

const gameModules = [
  {
    id: "spot-the-fake",
    title: "SPOT THE FAKE",
    description: "Train your detection skills to identify fake information",
    icon: ComicTargetIcon,
    color: "bg-[#ff3a3a]",
    tag: "DETECT",
    buttonText: "Start Playing",
    subModules: [
      { name: "Fake News Spotting", description: "Identify fake news" },
      { name: "Headline Spotting", description: "Spot misleading headlines" },
      { name: "Photo Challenge", description: "Detect fake images" },
    ],
  },
  {
    id: "scenario-game",
    title: "SCENARIO GAME",
    description: "Test your judgment in real-world scenarios",
    icon: ComicGamepadIcon,
    color: "bg-[#ff9500]",
    tag: "PLAY",
    buttonText: "Start Playing",
    subModules: [
      { name: "Suspicious Info Challenge", description: "Scenario simulation" },
      { name: "Pseudo-Expert Bingo", description: "Identify fake experts" },
    ],
  },
  {
    id: "fake-content-factory",
    title: "FAKE CONTENT FACTORY",
    description: "Learn by creating fake news (educational)",
    icon: Mask,
    color: "bg-[#3a66ff]",
    tag: "CREATE",
    buttonText: "Start Playing",
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
    buttonText: "View Details",
    subModules: [],
  },
]

export default function HomePage() {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <div className="min-h-screen comic-bg">
      {/* Header */}
      <header className="comic-header py-4 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#ff3a3a] flex items-center justify-center border-2 border-black">
                <ComicTargetIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="comic-text text-2xl font-black">FAKESPOTTER</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h2 className="comic-title text-6xl md:text-8xl text-white mb-4">
                LEARN TO <span className="text-[#ff3a3a]">SPOT FAKE.</span>
                <br />
                PLAY TO <span className="text-[#3a66ff]">GET SMARTER.</span>
              </h2>
              <div className="comic-box bg-white p-6 max-w-2xl mb-6">
                <p className="comic-subtitle text-lg mb-3">
                  Master media literacy through interactive games and real-world practice. Become a wise judge in the
                  information age.
                </p>
                <div className="comic-highlight-alt inline-block text-xl font-black">Know Wiser Now</div>
              </div>
            </div>

            <Link href="/challenges">
              <Button size="lg" className="comic-button bg-[#ff3a3a] text-white border-black px-8 py-6 text-xl">
                <span className="flex items-center">
                  START EXPLORING
                  <ComicChevronRightIcon className="ml-2 w-6 h-6" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* 装饰性元素 */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#3a66ff] border-4 border-black transform rotate-12 hidden md:block">
          <ComicBrainIcon className="w-16 h-16 text-white m-8" />
        </div>
        <div className="absolute bottom-10 right-40 w-20 h-20 bg-[#ff3a3a] border-4 border-black transform -rotate-6 hidden md:block">
          <ComicTargetIcon className="w-12 h-12 text-white m-4" />
        </div>
      </section>

      {/* Preview Modules */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-12">
            <div className="inline-block comic-box-accent">
              <h3 className="comic-text text-4xl bg-[#ff3a3a] text-white px-6 py-3 border-4 border-black">
                GAME MODULES
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameModules.map((module) => {
              const IconComponent = module.icon

              return (
                <div key={module.id} className="comic-module h-full">
                  <div className="comic-module-content p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`${module.color} p-3 border-2 border-black`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <span className="comic-tag">{module.tag}</span>
                    </div>

                    <h4 className="comic-module-title mb-3 text-black">{module.title}</h4>
                    <p className="mb-6 text-gray-700 font-bold flex-grow">{module.description}</p>

                    <Link href={`/${module.id}`} className="mt-auto">
                      <Button className="comic-button w-full bg-black text-white">
                        <ComicPlayIcon className="w-4 h-4 mr-2" />
                        {module.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="comic-footer" id="about">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="comic-text text-2xl mb-4 text-white flex items-center">
                <ComicUsersIcon className="w-8 h-8 mr-3" />
                ABOUT US
              </h4>
              <p className="text-gray-300 mb-4">
                This is the journalistic product by Tianxue Ma, a master's student of Journalism, Media, and
                Globalization at the University of Amsterdam.
              </p>
              <p className="text-gray-300 mb-4">
                FakeSpotter is dedicated to improving public media literacy and critical thinking skills, helping users
                distinguish truth from falsehood in the information explosion era.
              </p>
            </div>

            <div>
              <h4 className="comic-text text-2xl mb-4 text-white flex items-center">
                <ComicFileIcon className="w-8 h-8 mr-3" />
                DATA SOURCES
              </h4>
              <p className="text-gray-300 mb-4">
                While most used data and examples are based on reports from authoritative media and fact-checking
                organizations, some items have been intentionally fabricated to simulate common misinformation patterns
                and support the gameplay experience.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              <ComicTargetIcon className="w-5 h-5 mr-2" />© 2025 FakeSpotter. Learn to spot fake. Play to get smarter.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
