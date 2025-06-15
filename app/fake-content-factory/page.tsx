import Link from "next/link"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ComicPlayIcon } from "@/components/comic-icons"
import { VenetianMaskIcon as Mask, Building, Zap } from "lucide-react"

const subModules = [
  {
    id: "who-do-you-pretend",
    title: "WHO DO YOU PRETEND TO BE?",
    description: "Post as them. Watch what happens.",
    icon: Mask,
    color: "bg-[#ff3a3a]",
    href: "/fake-content-factory/who-do-you-pretend",
  },
  {
    id: "build-news-trap",
    title: "BUILD YOUR OWN NEWS TRAP",
    description: "Create the site. Craft the spin.",
    icon: Building,
    color: "bg-[#ff9500]",
    href: "/fake-content-factory/build-news-trap",
  },
  {
    id: "flood-the-feed",
    title: "HOW WILL YOU FLOOD THE FEED?",
    description: "Control the trolls. Shape the storm.",
    icon: Zap,
    color: "bg-[#3a66ff]",
    href: "/fake-content-factory/flood-the-feed",
  },
]

export default function FakeContentFactoryPage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="FAKE CONTENT FACTORY" subtitle="Learn by creating fake news (educational)" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="comic-box bg-white p-6 max-w-3xl mx-auto">
              <h2 className="comic-text text-3xl font-black mb-4">CHOOSE YOUR DECEPTION</h2>
              <p className="text-xl font-bold text-gray-700 mb-4">
                Learn how disinformation works by playing the role of someone who creates it.
              </p>
              <div className="comic-box-accent bg-[#ff3a3a] text-white p-4">
                <p className="text-lg font-black">
                  EDUCATIONAL PURPOSE: Understanding tactics helps you recognize and resist them!
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subModules.map((module) => {
              const IconComponent = module.icon
              return (
                <div key={module.id} className="comic-module">
                  <div className="comic-module-content p-6 h-full">
                    <div className={`${module.color} p-6 mb-6 border-3 border-black`}>
                      <IconComponent className="w-16 h-16 text-white mx-auto" />
                    </div>
                    <h4 className="comic-module-title text-lg mb-4 text-black text-center">{module.title}</h4>
                    <p className="text-center mb-8 text-gray-700 font-bold text-sm leading-relaxed">
                      {module.description}
                    </p>
                    <Link href={module.href}>
                      <Button className="comic-button w-full bg-black text-white">
                        <ComicPlayIcon className="w-4 h-4 mr-2" />
                        START ROLE-PLAY
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
