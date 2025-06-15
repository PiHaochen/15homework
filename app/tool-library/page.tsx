"use client"

import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"
import { ComicCameraIcon, ComicTargetIcon, ComicBookIcon, ComicUsersIcon } from "@/components/comic-icons"

const toolCategories = [
  {
    id: "detection-guides",
    title: "DETECTION GUIDES",
    icon: ComicBookIcon,
    color: "bg-[#ff3a3a]",
    tools: [
      {
        name: "Fake News Detection Guide",
        description: "Step-by-step guide to identify fake news and misinformation",
        url: "/tool-library/fake-news-detection",
        type: "GUIDE",
        isInternal: true,
      },
      {
        name: "Language/Emotion Manipulation Detection Guide",
        description: "Recognize emotional manipulation and loaded language tactics",
        url: "/tool-library/language-manipulation-detection",
        type: "GUIDE",
        isInternal: true,
      },
      {
        name: "Misleading Image Detection Guide",
        description: "Verify images and detect visual misinformation",
        url: "/tool-library/image-detection",
        type: "GUIDE",
        isInternal: true,
      },
      {
        name: "AI-Generated Image Detection Guide",
        description: "Identify AI-generated and deepfake images",
        url: "/tool-library/ai-image-detection",
        type: "GUIDE",
        isInternal: true,
      },
    ],
  },
  {
    id: "image-verification",
    title: "IMAGE VERIFICATION TOOLS",
    icon: ComicCameraIcon,
    color: "bg-[#3a66ff]",
    tools: [
      {
        name: "Google Reverse Image Search",
        description: "Upload images or input URLs to find similar images and original sources",
        url: "https://images.google.com",
        type: "ONLINE TOOL",
        isInternal: false,
      },
      {
        name: "InVID WeVerify",
        description: "Professional video and image verification tool with metadata analysis",
        url: "https://www.invid-project.eu/tools-and-services/invid-verification-plugin/",
        type: "BROWSER PLUGIN",
        isInternal: false,
      },
      {
        name: "TinEye",
        description: "Reverse image search engine to track image usage history",
        url: "https://tineye.com",
        type: "ONLINE TOOL",
        isInternal: false,
      },
    ],
  },
  {
    id: "fact-checking",
    title: "FACT-CHECKING PLATFORMS",
    icon: ComicTargetIcon,
    color: "bg-[#ff9500]",
    tools: [
      {
        name: "IFCN Global Fact-Check Database",
        description: "International Fact-Checking Network's global database",
        url: "https://www.poynter.org/ifcn",
        type: "DATABASE",
        isInternal: false,
      },
      {
        name: "Google Fact Check Explorer",
        description: "Search fact-checked claims and news",
        url: "https://toolbox.google.com/factcheck/explorer",
        type: "SEARCH TOOL",
        isInternal: false,
      },
      {
        name: "Snopes",
        description: "Veteran fact-checking website covering various rumors and myths",
        url: "https://www.snopes.com",
        type: "WEBSITE",
        isInternal: false,
      },
    ],
  },
  {
    id: "education",
    title: "EDUCATIONAL RESOURCES",
    icon: ComicUsersIcon,
    color: "bg-[#00c16e]",
    tools: [
      {
        name: "Checkology by News Literacy Project",
        description: "Free online news literacy course",
        url: "https://checkology.org",
        type: "ONLINE COURSE",
        isInternal: false,
      },
      {
        name: "CrashCourse Media Literacy",
        description: "Media literacy video course series",
        url: "https://thecrashcourse.com",
        type: "VIDEO COURSE",
        isInternal: false,
      },
      {
        name: "First Draft Essential Guide",
        description: "Misinformation identification and verification guide",
        url: "https://firstdraftnews.org",
        type: "GUIDE DOCS",
        isInternal: false,
      },
    ],
  },
]

export default function ToolLibraryPage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="TOOL LIBRARY" subtitle="Practical tools and guides collection" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="comic-box bg-white p-6 max-w-3xl mx-auto">
              <h2 className="comic-text text-3xl font-black mb-4">PROFESSIONAL VERIFICATION TOOLKIT</h2>
              <p className="text-xl font-bold text-gray-700">
                Master these tools to become a wise judge in the information age. From image verification to
                fact-checking, here's the most practical media literacy toolkit and learning resources.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {toolCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} className="comic-module">
                  <div className="comic-module-content p-0 h-full">
                    <div className={`${category.color} p-6 border-b-3 border-black`}>
                      <IconComponent className="w-12 h-12 text-white mx-auto mb-3" />
                      <h3 className="comic-text text-xl font-black text-white text-center">{category.title}</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {category.tools.map((tool, index) => (
                          <div
                            key={index}
                            className="border-2 border-black p-4 bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-black text-black">{tool.name}</h4>
                              <span className="comic-tag-accent text-xs px-2 py-1">{tool.type}</span>
                            </div>
                            <p className="text-gray-700 font-bold text-sm mb-3 leading-relaxed">{tool.description}</p>
                            {tool.isInternal ? (
                              <Link href={tool.url}>
                                <Button className="comic-button w-full bg-black text-white text-sm py-2">
                                  <BookOpen className="w-4 h-4 mr-2" />
                                  READ GUIDE
                                </Button>
                              </Link>
                            ) : (
                              <Button
                                className="comic-button w-full bg-black text-white text-sm py-2"
                                onClick={() => window.open(tool.url, "_blank")}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                ACCESS TOOL
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
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
