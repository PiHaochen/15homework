"use client"

import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertTriangle, Brain, Shield } from "lucide-react"
import { ComicBrainIcon } from "@/components/comic-icons"

const emotionalFallacies = [
  {
    title: "Fear-mongering",
    description: "Exaggerates worst-case risks while omitting probability",
    example: '"This chemical will kill you!"',
    color: "bg-[#ff3a3a]",
  },
  {
    title: "Appeal to tradition/nature",
    description: "Uses 'ancient remedy,' 'all-natural,' or 'big pharma doesn't want you to know' as proof",
    example: '"This ancient remedy cures everything!"',
    color: "bg-[#ff9500]",
  },
  {
    title: "Scapegoating",
    description: "Blames a group with sweeping, inflammatory language to stoke outrage and division",
    example: '"They are destroying our way of life!"',
    color: "bg-[#3a66ff]",
  },
]

const redFlags = [
  "Absolute words: 'always,' 'never,' 'miracle cure,' '100% proven'",
  "Apocalyptic framing: 'total blackout,' 'destroys all cancer'",
  "Rhetorical questions: 'Why is no one talking about this?'",
  "Bandwagon claims: '10 million shares can't be wrong'",
  "Urgency hooks: 'Share before it's deleted!'",
  "Anonymous authority: 'experts say,' 'insiders reveal'",
]

const references = [
  {
    title: "UNESCO – Journalism, 'Fake News' & Disinformation Handbook",
    url: "https://unesdoc.unesco.org/ark:/48223/pf0000265552",
    description: "Comprehensive handbook for journalism education and training",
  },
  {
    title: "First Draft – Understanding Information Disorder",
    url: "https://firstdraftnews.org/wp-content/uploads/2019/10/Information_Disorder_Digital_AW.pdf",
    description: "Digital guide to understanding information disorder",
  },
  {
    title: "Stanford History Education Group – Spotting Misinformation Online",
    url: "https://ed.stanford.edu/news/it-doesn-t-take-long-learn-how-spot-misinformation-online-stanford-study-finds",
    description: "Research on learning to spot misinformation online",
  },
  {
    title: "EUvsDisinfo – Staying Vigilant Online",
    url: "https://learning-corner.learning.europa.eu/learning-materials/staying-vigilant-online-can-you-spot-information-manipulation_en",
    description: "Guide to spotting information manipulation",
  },
  {
    title: "Reuters Institute – Digital News Report 2024",
    url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024",
    description: "Annual report on digital news consumption and trust",
  },
  {
    title: "First Draft – A Guide to Prebunking",
    url: "https://firstdraftnews.org/articles/a-guide-to-prebunking-a-promising-way-to-inoculate-against-misinformation/",
    description: "Inoculation strategies against misinformation",
  },
]

export default function LanguageManipulationDetectionPage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="LANGUAGE MANIPULATION DETECTION"
        subtitle="Recognize emotional manipulation and loaded language tactics"
        backUrl="/tool-library"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="comic-box bg-white p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#ff9500] border-3 border-black flex items-center justify-center">
                <ComicBrainIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="comic-text text-3xl font-black mb-2">LANGUAGE MANIPULATION DETECTION</h1>
                <p className="text-lg font-bold text-gray-700">
                  Learn to recognize emotional manipulation and loaded language tactics
                </p>
              </div>
            </div>

            <div className="bg-[#ff9500] bg-opacity-20 border-2 border-black p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-[#ff9500] mt-1" />
                <div>
                  <h3 className="comic-text text-lg font-black mb-2">EMOTIONAL MANIPULATION</h3>
                  <p className="font-bold text-gray-700">
                    Manipulative content targets your emotions to bypass critical thinking. Learn to pause, breathe, and
                    analyze before reacting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8 mb-8">
            <h2 className="comic-text text-2xl font-black mb-6">COMMON EMOTIONAL FALLACIES</h2>
            <div className="space-y-6">
              {emotionalFallacies.map((fallacy, index) => (
                <div key={index} className={`border-2 border-black p-6 ${fallacy.color} bg-opacity-20`}>
                  <h3 className="comic-text text-xl font-black mb-3">{fallacy.title}</h3>
                  <p className="font-bold text-gray-700 mb-3">{fallacy.description}</p>
                  <div className="bg-white border-2 border-black p-3">
                    <p className="font-bold text-gray-600 italic">Example: {fallacy.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="comic-box bg-white p-8 mb-8">
            <h2 className="comic-text text-2xl font-black mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3 text-[#ff3a3a]" />
              PAUSE & FEEL
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-gray-50">
                <h3 className="font-black mb-2">EMOTIONAL SPIKE DETECTION</h3>
                <p className="font-bold text-gray-700">
                  If a story sparks instant anger, fear or euphoria, stop scrolling and breathe. Emotional spikes are
                  prime entry points for manipulation.
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-gray-50">
                <h3 className="font-black mb-2">ASK THE RIGHT QUESTION</h3>
                <p className="font-bold text-gray-700">
                  "Who benefits if I react this way?" Traffic, donations, political clicks or product sales are common
                  motives.
                </p>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8 mb-8">
            <h2 className="comic-text text-2xl font-black mb-6">LOADED-LANGUAGE RED FLAGS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {redFlags.map((flag, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border-2 border-black bg-gray-50">
                  <div className="w-3 h-3 bg-[#ff3a3a] mt-2"></div>
                  <span className="font-bold text-gray-700">{flag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="comic-box bg-white p-8 mb-8">
            <div className="mb-6">
              <h4 className="comic-text text-lg font-black mb-4">WHY ARE THESE TACTICS PROBLEMATIC?</h4>
              <div className="space-y-4">
                <div className="p-4 bg-[#ff3a3a] bg-opacity-20 border-2 border-black">
                  <h5 className="comic-text font-black mb-2">LACK OF SPECIFIC EVIDENCE</h5>
                  <p className="font-bold text-sm">
                    These statements are often vague and cannot provide specific data or verifiable sources.
                  </p>
                </div>
                <div className="p-4 bg-[#ff9500] bg-opacity-20 border-2 border-black">
                  <h5 className="comic-text font-black mb-2">APPEAL TO AUTHORITY FALLACY</h5>
                  <p className="font-bold text-sm">
                    Increases credibility by implying "inside information" or "expert opinions" that cannot actually be
                    verified.
                  </p>
                </div>
                <div className="p-4 bg-[#ff9500] bg-opacity-20 border-2 border-black">
                  <h5 className="comic-text font-black mb-2">EMOTIONAL MANIPULATION</h5>
                  <p className="font-bold text-sm">
                    Uses words like "brainwashed" and "truth" to trigger emotional responses rather than rational
                    thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8 mb-8">
            <h2 className="comic-text text-2xl font-black mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-[#00c16e]" />
              BUILD YOUR DEFENSES
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-[#00c16e] bg-opacity-20">
                <h3 className="font-black mb-2">PREBUNK AND INOCULATE</h3>
                <p className="font-bold text-gray-700">
                  Expose yourself to mini versions of common hoaxes so you recognize them later.
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-[#3a66ff] bg-opacity-20">
                <h3 className="font-black mb-2">USE FACT-CHECK TOOLS</h3>
                <p className="font-bold text-gray-700">
                  Many hoaxes are annual re-runs. Reputable fact-check tools can quickly identify recycled content.
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-[#ff9500] bg-opacity-20">
                <h3 className="font-black mb-2">LIMIT DOOM-SCROLLING</h3>
                <p className="font-bold text-gray-700">
                  Prolonged exposure to sensational feeds raises anxiety and lowers judgment. Curate trusted sources.
                </p>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8">
            <h2 className="comic-text text-2xl font-black mb-6">REFERENCES & RESOURCES</h2>
            <div className="space-y-4">
              {references.map((ref, index) => (
                <div key={index} className="border-2 border-black p-4 bg-gray-50">
                  <h3 className="font-black mb-2">{ref.title}</h3>
                  <p className="text-sm font-bold text-gray-700 mb-3">{ref.description}</p>
                  <Button
                    className="comic-button bg-[#3a66ff] text-white text-sm"
                    onClick={() => window.open(ref.url, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    READ RESOURCE
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
