"use client"

import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle, AlertTriangle } from "lucide-react"
import { ComicSearchIcon } from "@/components/comic-icons"

const detectionSteps = [
  {
    title: "Read past the headline",
    description: "Headlines are designed to grab attention, not always to inform accurately. Read the full article.",
  },
  {
    title: "Check what news outlet published it",
    description: "Look for established, credible news organizations with editorial standards.",
  },
  {
    title: "Check the publish date and time",
    description: "Old news can be recycled to seem current. Verify when the story was actually published.",
  },
  {
    title: "Who is the author?",
    description: "Look for bylines and author credentials. Anonymous or fake authors are red flags.",
  },
  {
    title: "Look at what sources and links are used",
    description: "Credible articles cite verifiable sources. Check if links actually support the claims.",
  },
  {
    title: "Look out for questionable quotes and photos",
    description: "Verify quotes are real and in context. Check if photos match the story and timeframe.",
  },
  {
    title: "Be aware of confirmation bias",
    description: "We tend to believe information that confirms our existing beliefs. Stay objective.",
  },
  {
    title: "Search if any other outlet is reporting this",
    description: "Major news should be covered by multiple credible sources. Single-source stories need scrutiny.",
  },
  {
    title: "Think before you share",
    description: "Pause and verify before spreading information. You're responsible for what you share.",
  },
]

export default function FakeNewsDetectionPage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="FAKE NEWS DETECTION GUIDE"
        subtitle="Step-by-step guide to identify fake news and misinformation"
        backUrl="/tool-library"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="comic-box bg-white p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#ff3a3a] border-3 border-black flex items-center justify-center">
                <ComicSearchIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="comic-text text-3xl font-black mb-2">FAKE NEWS DETECTION GUIDE</h1>
                <p className="text-lg font-bold text-gray-700">
                  Master the essential skills to identify and combat misinformation
                </p>
              </div>
            </div>

            <div className="bg-[#ff3a3a] bg-opacity-20 border-2 border-black p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-[#ff3a3a] mt-1" />
                <div>
                  <h3 className="comic-text text-lg font-black mb-2">WHY THIS MATTERS</h3>
                  <p className="font-bold text-gray-700">
                    Fake news spreads faster than real news and can influence elections, public health decisions, and
                    social harmony. Learning to spot it is a crucial 21st-century skill.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="comic-text text-2xl font-black mb-6">9-STEP DETECTION PROCESS</h2>

            <div className="space-y-6">
              {detectionSteps.map((step, index) => (
                <div key={index} className="border-2 border-black p-6 bg-gray-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ff3a3a] border-2 border-black flex items-center justify-center text-white font-black">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="comic-text text-xl font-black mb-3">{step.title}</h3>
                      <p className="font-bold text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="comic-box bg-white p-8 mb-8">
            <h2 className="comic-text text-2xl font-black mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-[#00c16e]" />
              QUICK CHECKLIST
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Credible news outlet?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Recent publication date?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Named author with credentials?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Verifiable sources cited?</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Photos match the story?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Other outlets reporting it?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Checked my bias?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-black bg-white"></div>
                  <span className="font-bold">Verified before sharing?</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8">
            <h2 className="comic-text text-2xl font-black mb-6">REFERENCES & RESOURCES</h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-gray-50">
                <h3 className="font-black mb-2">HuffPost - Fake News Guide</h3>
                <p className="text-sm font-bold text-gray-700 mb-3">
                  Comprehensive guide to identifying fake news on social media platforms
                </p>
                <Button
                  className="comic-button bg-[#3a66ff] text-white text-sm"
                  onClick={() =>
                    window.open(
                      "https://www.huffpost.com/entry/fake-news-guide-facebook_n_5831c6aae4b058ce7aaba169",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  READ ARTICLE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
