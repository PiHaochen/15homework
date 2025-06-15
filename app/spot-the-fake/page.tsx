import Link from "next/link"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ComicPlayIcon, ComicSearchIcon, ComicEyeIcon, ComicCameraIcon, ComicBrainIcon } from "@/components/comic-icons"

const subModules = [
  {
    id: "fake-news",
    title: "FAKE NEWS SPOTTING",
    description: "Identify problems in fake news",
    icon: ComicSearchIcon,
    color: "bg-[#ff3a3a]",
    href: "/spot-the-fake/fake-news",
  },
  {
    id: "headline",
    title: "HEADLINE SPOTTING",
    description: "Spot misleading headlines",
    icon: ComicEyeIcon,
    color: "bg-[#ff9500]",
    href: "/spot-the-fake/headline",
  },
  {
    id: "photo",
    title: "PHOTO CHALLENGE",
    description: "Detect fake images",
    icon: ComicCameraIcon,
    color: "bg-[#00c16e]",
    href: "/spot-the-fake/photo",
  },
  {
    id: "ai-detection",
    title: "AI DETECTION LAB",
    description: "Identify AI-generated content",
    icon: ComicBrainIcon,
    color: "bg-[#3a66ff]",
    href: "/spot-the-fake/ai-detection",
  },
]

export default function SpotTheFakePage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="SPOT THE FAKE" subtitle="Train your detection skills to identify fake information" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="comic-box bg-white p-6 max-w-2xl mx-auto">
              <h2 className="comic-text text-3xl font-black mb-4">CHOOSE YOUR MISSION</h2>
              <p className="text-xl font-bold text-gray-700">Practice with real cases and boost your media literacy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subModules.map((module) => {
              const IconComponent = module.icon
              return (
                <div key={module.id} className="comic-module">
                  <div className="comic-module-content p-6 h-full">
                    <div className={`${module.color} p-4 mb-4 border-3 border-black`}>
                      <IconComponent className="w-12 h-12 text-white mx-auto" />
                    </div>
                    <h4 className="comic-module-title text-lg mb-3 text-black text-center">{module.title}</h4>
                    <p className="text-center mb-6 text-gray-700 font-bold text-sm">{module.description}</p>
                    <Link href={module.href}>
                      <Button className="comic-button w-full bg-black text-white">
                        <ComicPlayIcon className="w-4 h-4 mr-2" />
                        START MISSION
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
