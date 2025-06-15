import Link from "next/link"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ComicPlayIcon, ComicUsersIcon, ComicTargetIcon } from "@/components/comic-icons"
import { Brain } from "lucide-react"

const subModules = [
  {
    id: "info-personality",
    title: "WHAT'S YOUR INFO PERSONALITY?",
    description: "Discover how you process suspicious information",
    icon: ComicUsersIcon,
    color: "bg-[#3a66ff]",
    href: "/scenario-game/info-personality",
  },
  {
    id: "pseudo-expert-bingo",
    title: "PSEUDO-EXPERT BINGO",
    description: "Identify fake expert tactics",
    icon: ComicTargetIcon,
    color: "bg-[#ff9500]",
    href: "/scenario-game/pseudo-expert-bingo",
  },
  {
    id: "algorithm-judge",
    title: "ALGORITHM JUDGE",
    description: "Simulate social media recommendation system",
    icon: Brain,
    color: "bg-[#00c16e]",
    href: "/scenario-game/algorithm-judge",
  },
]

export default function ScenarioGamePage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="SCENARIO GAME" subtitle="Test your judgment in real-world scenarios" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="comic-box bg-white p-6 max-w-2xl mx-auto">
              <h2 className="comic-text text-3xl font-black mb-4">CHOOSE YOUR SCENARIO</h2>
              <p className="text-xl font-bold text-gray-700">
                Test your information processing skills in realistic situations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subModules.map((module) => {
              const IconComponent = module.icon
              return (
                <div key={module.id} className="comic-module">
                  <div className="comic-module-content p-8 h-full">
                    <div className={`${module.color} p-6 mb-6 border-3 border-black`}>
                      <IconComponent className="w-16 h-16 text-white mx-auto" />
                    </div>
                    <h4 className="comic-module-title text-xl mb-4 text-black text-center">{module.title}</h4>
                    <p className="text-center mb-8 text-gray-700 font-bold text-lg">{module.description}</p>
                    <Link href={module.href}>
                      <Button className="comic-button w-full bg-black text-white text-lg py-3">
                        <ComicPlayIcon className="w-5 h-5 mr-2" />
                        START SCENARIO
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
