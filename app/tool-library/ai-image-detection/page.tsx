"use client"

import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Zap, Search, AlertTriangle } from "lucide-react"
import { ComicBrainIcon } from "@/components/comic-icons"

const detectionCategories = [
  {
    title: "Zoom-In Reality Check",
    icon: Eye,
    color: "bg-[#3a66ff]",
    checks: [
      "Hands, feet & ears: extra or missing fingers, fused toes, floating earrings",
      "Text glitches: nonsense letters on signs, uniforms, or book covers",
      "Eyes & reflections: off-center pupils, mismatched catch-lights",
    ],
  },
  {
    title: "Physics & Logic Test",
    icon: Zap,
    color: "bg-[#ff9500]",
    checks: [
      "Anatomical impossibilities: elbows bending wrong way, limbs merging",
      "Clone crowds: identical faces, trees, or clouds copied across background",
      "Shadow & scale errors: inconsistent lighting and proportions",
    ],
  },
  {
    title: "Metadata & Reverse-Image Toolkit",
    icon: Search,
    color: "bg-[#00c16e]",
    checks: [
      "EXIF gaps: genuine photos usually keep make, model, date, GPS",
      "Reverse search first: Google Images, TinEye, Yandex for older versions",
      "AI-detection portals: Hive Moderation, AI or Not, SynthID watermarks",
    ],
  },
]

const aiTropes = [
  {
    title: "Too-Perfect Portraits",
    description: "Fashion and fantasy portraits with wax-smooth skin and cinematic lighting",
    warning: "🎭",
  },
  {
    title: "Retro Hoaxes",
    description: "Fake black-and-white shots of modern gadgets or historical leaders",
    warning: "📸",
  },
  {
    title: "Hyper-Emotional Scenes",
    description: "Disaster or protest scenes designed to provoke outrage or sympathy",
    warning: "😱",
  },
]

const resources = [
  {
    title: "Reuters – OpenAI launches tool to detect images created by DALL-E 3",
    url: "https://www.reuters.com/technology/openai-launch-tool-detect-images-created-by-dall-e-3-2024-05-07/",
    description: "Latest developments in AI image detection technology",
  },
  {
    title: "Google DeepMind Blog – SynthID Detector",
    url: "https://blog.google/technology/ai/google-synthid-ai-content-detector/",
    description: "Google's approach to identifying AI-generated content",
  },
  {
    title: "Poynter – How do you know it's not AI?",
    url: "https://www.poynter.org/mediawise/misinformation-resilience-toolkit-libraries/how-do-you-know-its-not-ai/",
    description: "Practical guide to identifying AI-generated content",
  },
  {
    title: "Kellogg Insight – 5 Telltale Signs That a Photo Is AI-generated",
    url: "https://insight.kellogg.northwestern.edu/article/ai-photos-identification",
    description: "Academic research on AI image identification",
  },
  {
    title: "AP News – One Tech Tip: How to spot AI-generated deepfake images",
    url: "https://apnews.com/article/1df8064173239c41b2ea83ef050b3cdb",
    description: "Practical tips for spotting deepfake images",
  },
  {
    title: "Hive Moderation – AI-Generated Content Detection",
    url: "https://hivemoderation.com/ai-generated-content-detection",
    description: "Professional AI content detection service",
  },
  {
    title: "AI or Not – Image & Audio AI Detector",
    url: "https://www.aiornot.com/",
    description: "Free online AI detection tool",
  },
]

export default function AIImageDetectionPage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="AI-GENERATED IMAGE DETECTION"
        subtitle="Identify AI-generated and deepfake images"
        backUrl="/tool-library"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="comic-box bg-white p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#ff3a3a] border-3 border-black flex items-center justify-center">
                <ComicBrainIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="comic-text text-3xl font-black mb-2">AI-GENERATED IMAGE DETECTION</h1>
                <p className="text-lg font-bold text-gray-700">
                  Learn to identify AI-generated and deepfake images in the digital age
                </p>
              </div>
            </div>

            <div className="bg-[#ff3a3a] bg-opacity-20 border-2 border-black p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-[#ff3a3a] mt-1" />
                <div>
                  <h3 className="comic-text text-lg font-black mb-2">THE AI IMAGE CHALLENGE</h3>
                  <p className="font-bold text-gray-700">
                    AI-generated images are becoming increasingly sophisticated. Learning to spot them is crucial for
                    maintaining information integrity in news, social media, and digital communications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {detectionCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="comic-box bg-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-12 h-12 ${category.color} border-2 border-black flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="comic-text text-2xl font-black">{category.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {category.checks.map((check, checkIndex) => (
                      <div key={checkIndex} className="flex items-start space-x-3 p-3 border-2 border-black bg-gray-50">
                        <div className="w-3 h-3 bg-[#ff3a3a] mt-2"></div>
                        <span className="font-bold text-gray-700">{check}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="comic-box bg-white p-8 mt-8">
            <h2 className="comic-text text-2xl font-black mb-6">CONTEXT & PLAUSIBILITY SCAN</h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-[#3a66ff] bg-opacity-20">
                <h3 className="font-black mb-2">🤔 ASK "COULD THIS REALLY HAPPEN?"</h3>
                <p className="font-bold text-gray-700">
                  Seasonal clothing, architecture, license plates, weather, and event timeline should all align with the
                  claimed context.
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-[#ff9500] bg-opacity-20">
                <h3 className="font-black mb-2">📰 DOUBLE-SOURCE BIG CLAIMS</h3>
                <p className="font-bold text-gray-700">
                  Look for a second reputable outlet or official statement that matches the visual evidence.
                </p>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8 mt-8">
            <h2 className="comic-text text-2xl font-black mb-6">CURRENT AI VISUAL TROPES (2024-25)</h2>
            <div className="space-y-4">
              {aiTropes.map((trope, index) => (
                <div key={index} className="border-2 border-black p-4 bg-gray-50">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{trope.warning}</span>
                    <div>
                      <h3 className="font-black mb-2">{trope.title}</h3>
                      <p className="font-bold text-gray-700">{trope.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="comic-box bg-white p-8 mt-8">
            <h2 className="comic-text text-2xl font-black mb-6">SELF-DEFENSE STRATEGY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-black p-4 bg-[#ff3a3a] bg-opacity-20 text-center">
                <h3 className="comic-text text-xl font-black mb-2">TOO PERFECT?</h3>
                <p className="font-bold">Consider AI</p>
              </div>
              <div className="border-2 border-black p-4 bg-[#ff9500] bg-opacity-20 text-center">
                <h3 className="comic-text text-xl font-black mb-2">TOO SHOCKING?</h3>
                <p className="font-bold">Verify before sharing</p>
              </div>
              <div className="border-2 border-black p-4 bg-[#00c16e] bg-opacity-20 text-center">
                <h3 className="comic-text text-xl font-black mb-2">PROOF AVAILABLE?</h3>
                <p className="font-bold">Check independent source</p>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8 mt-8">
            <h2 className="comic-text text-2xl font-black mb-6">REFERENCES & USEFUL LINKS</h2>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="border-2 border-black p-4 bg-gray-50">
                  <h3 className="font-black mb-2">{resource.title}</h3>
                  <p className="text-sm font-bold text-gray-700 mb-3">{resource.description}</p>
                  <Button
                    className="comic-button bg-[#3a66ff] text-white text-sm"
                    onClick={() => window.open(resource.url, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ACCESS RESOURCE
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
