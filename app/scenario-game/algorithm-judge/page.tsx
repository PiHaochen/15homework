"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { TrendingUp, Brain, AlertTriangle } from "lucide-react"

const roundContent = [
  // ROUND 1: AI & TECH PANIC
  [
    {
      id: 1,
      title: "Elon Musk Warns: AI Will Replace 80% of Jobs by 2026",
      type: "Tech Drama",
      engagement: 85,
      healthScore: 35,
      polarization: 70,
      description: "Dramatic but taken out of context",
    },
    {
      id: 2,
      title: "Apple's New AI Glasses Will Scan Your Thoughts, Claims YouTuber",
      type: "Tech Conspiracy",
      engagement: 78,
      healthScore: 12,
      polarization: 85,
      description: "No technical proof, high viewership",
    },
    {
      id: 3,
      title: "AI Can Now Detect Cancer in Early Stages – Peer-reviewed Study",
      type: "Medical Research",
      engagement: 40,
      healthScore: 98,
      polarization: 5,
      description: "Backed by medical journals, low virality",
    },
  ],
  // ROUND 2: CELEBRITY & INFLUENCER STORM
  [
    {
      id: 4,
      title: 'Pop Star Admits: "The Government Paid Me to Stay Silent"',
      type: "Celebrity Drama",
      engagement: 88,
      healthScore: 10,
      polarization: 92,
      description: "Clickbait, completely unverified",
    },
    {
      id: 5,
      title: "#BreakTheSilence: Actor Speaks Out on Humanitarian Crisis",
      type: "Activism",
      engagement: 75,
      healthScore: 50,
      polarization: 60,
      description: "Real statement, but some misinformation mixed in",
    },
    {
      id: 6,
      title: "Influencer Caught Faking Their Entire Travel Photos",
      type: "Social Drama",
      engagement: 70,
      healthScore: 60,
      polarization: 25,
      description: "Mild drama, truth-based",
    },
  ],
  // ROUND 3: WAR & GLOBAL CRISIS
  [
    {
      id: 7,
      title: "Secret NATO Files Leaked – Ukraine War Is a Lie?",
      type: "War Conspiracy",
      engagement: 89,
      healthScore: 8,
      polarization: 95,
      description: "Viral on alt-platforms, proven false",
    },
    {
      id: 8,
      title: "Gaza Ceasefire Timeline Explained: What Happens Next",
      type: "News Analysis",
      engagement: 58,
      healthScore: 90,
      polarization: 40,
      description: "Factual, but emotionally heavy topic",
    },
    {
      id: 9,
      title: '"I Lost My Family in the Strike" – Refugee Testimony Goes Viral',
      type: "Human Interest",
      engagement: 82,
      healthScore: 65,
      polarization: 75,
      description: "Authentic, but lacks context & can spark outrage",
    },
  ],
  // ROUND 4: HEALTH MYTHS & MIRACLES
  [
    {
      id: 10,
      title: "This Plant Cures Diabetes – Doctors Won't Tell You!",
      type: "Health Misinformation",
      engagement: 91,
      healthScore: 5,
      polarization: 88,
      description: "Highly viral, no scientific backing",
    },
    {
      id: 11,
      title: "New Study Shows Sleep Is More Effective Than Any Pill",
      type: "Health Science",
      engagement: 65,
      healthScore: 80,
      polarization: 30,
      description: "Backed by science, but often oversimplified online",
    },
    {
      id: 12,
      title: "COVID Vaccine Microchip Theory Finally Proven?",
      type: "Conspiracy Theory",
      engagement: 87,
      healthScore: 3,
      polarization: 90,
      description: "Completely false, repeated hoax",
    },
  ],
  // ROUND 5: POLITICS & DEMOCRACY UNDER FIRE
  [
    {
      id: 13,
      title: 'Voter Fraud Discovered in 12 States! "We Were Cheated!"',
      type: "Election Conspiracy",
      engagement: 86,
      healthScore: 10,
      polarization: 93,
      description: "Viral narrative during elections, false claims",
    },
    {
      id: 14,
      title: "Your Rights Explained: What New Digital ID Means For You",
      type: "Civic Education",
      engagement: 52,
      healthScore: 92,
      polarization: 10,
      description: "Fact-based explainer",
    },
    {
      id: 15,
      title: '"I Voted – But It Didn\'t Count" – TikTok Goes Viral',
      type: "Viral Claim",
      engagement: 75,
      healthScore: 25,
      polarization: 70,
      description: "User-generated, unverifiable, widely shared",
    },
  ],
]

const roundTitles = [
  "AI & TECH PANIC",
  "CELEBRITY & INFLUENCER STORM",
  "WAR & GLOBAL CRISIS",
  "HEALTH MYTHS & MIRACLES",
  "POLITICS & DEMOCRACY UNDER FIRE",
]

export default function AlgorithmJudgePage() {
  const [currentRound, setCurrentRound] = useState(1)
  const [selectedContent, setSelectedContent] = useState<number[]>([])
  const [gameStats, setGameStats] = useState({
    totalEngagement: 0,
    totalHealth: 0,
    totalPolarization: 0,
    rounds: 0,
  })
  const [gameState, setGameState] = useState<"selecting" | "roundResult" | "finalResult">("selecting")
  const [roundStats, setRoundStats] = useState({ engagement: 0, health: 0, polarization: 0 })

  const currentRoundContent = roundContent[currentRound - 1]

  const handleContentSelect = (contentId: number) => {
    if (selectedContent.includes(contentId)) {
      setSelectedContent(selectedContent.filter((id) => id !== contentId))
    } else if (selectedContent.length < 2) {
      setSelectedContent([...selectedContent, contentId])
    }
  }

  const submitRound = () => {
    const selected = currentRoundContent.filter((content) => selectedContent.includes(content.id))
    const engagement = selected.reduce((sum, content) => sum + content.engagement, 0) / selected.length || 0
    const health = selected.reduce((sum, content) => sum + content.healthScore, 0) / selected.length || 0
    const polarization = selected.reduce((sum, content) => sum + content.polarization, 0) / selected.length || 0

    setRoundStats({ engagement, health, polarization })
    setGameStats((prev) => ({
      totalEngagement: prev.totalEngagement + engagement,
      totalHealth: prev.totalHealth + health,
      totalPolarization: prev.totalPolarization + polarization,
      rounds: prev.rounds + 1,
    }))

    setGameState("roundResult")
  }

  const nextRound = () => {
    if (currentRound < 5) {
      setCurrentRound(currentRound + 1)
      setSelectedContent([])
      setGameState("selecting")
    } else {
      resetGame()
    }
  }

  const resetGame = () => {
    setCurrentRound(1)
    setSelectedContent([])
    setGameStats({ totalEngagement: 0, totalHealth: 0, totalPolarization: 0, rounds: 0 })
    setGameState("selecting")
  }

  if (gameState === "roundResult") {
    return (
      <div className="min-h-screen comic-bg">
        <GameHeader title="ALGORITHM JUDGE" subtitle={`Round ${currentRound} Results`} backUrl="/scenario-game" />

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="comic-box bg-white p-8">
              <h2 className="comic-text text-3xl font-black mb-6 text-center">ROUND {currentRound} IMPACT</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="comic-box bg-[#ff9500] bg-opacity-20 border-2 border-black p-6">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-[#ff9500]" />
                  <h3 className="comic-text text-xl font-black mb-2">USER ENGAGEMENT</h3>
                  <p className="text-3xl font-black">{Math.round(roundStats.engagement)}%</p>
                </div>

                <div className="comic-box bg-[#00c16e] bg-opacity-20 border-2 border-black p-6">
                  <Brain className="w-12 h-12 mx-auto mb-3 text-[#00c16e]" />
                  <h3 className="comic-text text-xl font-black mb-2">INFO HEALTH</h3>
                  <p className="text-3xl font-black">{Math.round(roundStats.health)}%</p>
                </div>

                <div className="comic-box bg-[#ff3a3a] bg-opacity-20 border-2 border-black p-6">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-[#ff3a3a]" />
                  <h3 className="comic-text text-xl font-black mb-2">POLARIZATION</h3>
                  <p className="text-3xl font-black">{Math.round(roundStats.polarization)}%</p>
                </div>
              </div>

              <div className="text-center">
                <Button onClick={nextRound} className="comic-button bg-black text-white text-lg px-8 py-3">
                  {currentRound < 5 ? `NEXT ROUND (${currentRound + 1}/5)` : "RESTART GAME"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="ALGORITHM JUDGE"
        subtitle={`Round ${currentRound}/5: ${roundTitles[currentRound - 1]} - Select 1-2 content to recommend`}
        backUrl="/scenario-game"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="comic-box bg-white p-6 mb-6">
            <h2 className="comic-text text-2xl font-black mb-4">YOU ARE THE ALGORITHM</h2>
            <p className="text-lg font-bold text-gray-700">
              Choose which content to recommend to users. Your choices will affect engagement, information health, and
              polarization.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {currentRoundContent.map((content) => (
              <div
                key={content.id}
                className={`p-6 border-3 border-black cursor-pointer transition-all ${
                  selectedContent.includes(content.id) ? "bg-[#3a66ff] text-white" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => handleContentSelect(content.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="comic-text text-xl font-black mb-2">{content.title}</h3>
                    <p className="font-bold mb-3">{content.description}</p>
                    <div className="flex space-x-4 text-sm">
                      <span className="comic-tag-accent px-2 py-1">{content.type}</span>
                      <span>📈 {content.engagement}%</span>
                      <span>🧠 {content.healthScore}%</span>
                      <span>🌀 {content.polarization}%</span>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 border-2 border-black flex items-center justify-center ${
                      selectedContent.includes(content.id) ? "bg-white text-black" : "bg-gray-200"
                    }`}
                  >
                    {selectedContent.includes(content.id) ? "✓" : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={submitRound}
              disabled={selectedContent.length === 0}
              className="comic-button bg-black text-white text-lg px-8 py-3"
            >
              RECOMMEND SELECTED ({selectedContent.length}/2)
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
