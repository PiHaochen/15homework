"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { TrendingUp, Brain, AlertTriangle, Shield, RotateCcw } from "lucide-react"

const contentOptions = [
  {
    id: 1,
    title: "SHOCKING! Major COVID Outbreak in Downtown Area - Officials Silent!",
    type: "Emotional Post",
    engagement: 95,
    healthScore: 20,
    polarization: 80,
    description: "High interaction but creates panic",
  },
  {
    id: 2,
    title: "Celebrity Reveals Vaccine Conspiracy - What They're Hiding From You",
    type: "Fake News",
    engagement: 90,
    healthScore: 10,
    polarization: 90,
    description: "High clicks but completely false",
  },
  {
    id: 3,
    title: "CDC Analysis: Latest Vaccine Safety Data and Effectiveness Rates",
    type: "Rational Content",
    engagement: 30,
    healthScore: 95,
    polarization: 10,
    description: "Low interaction but factual",
  },
  {
    id: 4,
    title: "The Truth About Big Pharma They Don't Want You to Know...",
    type: "Conspiracy Theory",
    engagement: 85,
    healthScore: 15,
    polarization: 95,
    description: "Extremely engaging but divisive",
  },
  {
    id: 5,
    title: "Mayo Clinic Updates Treatment Protocol for Respiratory Conditions",
    type: "Official News",
    engagement: 25,
    healthScore: 90,
    polarization: 5,
    description: "Boring but reliable",
  },
  {
    id: 6,
    title: "BREAKING: Leaked White House Documents Reveal Hidden Agenda",
    type: "Sensational",
    engagement: 88,
    healthScore: 25,
    polarization: 75,
    description: "Viral potential but questionable",
  },
  {
    id: 7,
    title: "10 Reasons Why the Election Was Stolen - #6 Will Shock You!",
    type: "Political Clickbait",
    engagement: 92,
    healthScore: 5,
    polarization: 98,
    description: "Extremely divisive content",
  },
  {
    id: 8,
    title: "New Study Links Common Food Additive to Cancer Risk",
    type: "Health Scare",
    engagement: 87,
    healthScore: 40,
    polarization: 60,
    description: "Alarming but partially misleading",
  },
  {
    id: 9,
    title: "Local School Board Meeting Erupts Over Curriculum Debate",
    type: "Local News",
    engagement: 65,
    healthScore: 75,
    polarization: 50,
    description: "Moderate engagement with factual basis",
  },
  {
    id: 10,
    title: "5G Towers Causing Mysterious Illness in Suburban Neighborhoods",
    type: "Tech Conspiracy",
    engagement: 82,
    healthScore: 8,
    polarization: 85,
    description: "Technophobia with no scientific basis",
  },
]

const algorithmPersonalities = [
  {
    type: "BUBBLE CREATOR",
    description: "High engagement but biased information",
    condition: (engagement: number, health: number) => engagement > 70 && health < 50,
    color: "bg-[#ff3a3a]",
  },
  {
    type: "TRUTH GATEKEEPER",
    description: "Sacrificed clicks for information quality",
    condition: (engagement: number, health: number) => engagement < 50 && health > 70,
    color: "bg-[#00c16e]",
  },
  {
    type: "TOPIC HUNTER",
    description: "Focused on viral spread above all",
    condition: (engagement: number, health: number) => engagement > 80,
    color: "bg-[#ff9500]",
  },
  {
    type: "SLIPPERY SLOPE",
    description: "Increasingly extreme recommendations",
    condition: (engagement: number, health: number, polarization: number) => polarization > 70,
    color: "bg-[#3a66ff]",
  },
]

export default function AlgorithmJudgePage() {
  const [currentRound, setCurrentRound] = useState(1)
  const [selectedContent, setSelectedContent] = useState<number[]>([])
  const [roundContent, setRoundContent] = useState(contentOptions.slice(0, 3))
  const [gameStats, setGameStats] = useState({
    totalEngagement: 0,
    totalHealth: 0,
    totalPolarization: 0,
    rounds: 0,
  })
  const [gameState, setGameState] = useState<"selecting" | "roundResult" | "finalResult">("selecting")
  const [roundStats, setRoundStats] = useState({ engagement: 0, health: 0, polarization: 0 })

  const handleContentSelect = (contentId: number) => {
    if (selectedContent.includes(contentId)) {
      setSelectedContent(selectedContent.filter((id) => id !== contentId))
    } else if (selectedContent.length < 2) {
      setSelectedContent([...selectedContent, contentId])
    }
  }

  const submitRound = () => {
    const selected = roundContent.filter((content) => selectedContent.includes(content.id))
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
      setRoundContent(contentOptions.sort(() => Math.random() - 0.5).slice(0, 3))
      setGameState("selecting")
    } else {
      setGameState("finalResult")
    }
  }

  const resetGame = () => {
    setCurrentRound(1)
    setSelectedContent([])
    setRoundContent(contentOptions.slice(0, 3))
    setGameStats({ totalEngagement: 0, totalHealth: 0, totalPolarization: 0, rounds: 0 })
    setGameState("selecting")
  }

  const getPersonality = () => {
    const avgEngagement = gameStats.totalEngagement / gameStats.rounds
    const avgHealth = gameStats.totalHealth / gameStats.rounds
    const avgPolarization = gameStats.totalPolarization / gameStats.rounds

    return (
      algorithmPersonalities.find((p) => p.condition(avgEngagement, avgHealth, avgPolarization)) ||
      algorithmPersonalities[0]
    )
  }

  if (gameState === "finalResult") {
    const personality = getPersonality()
    return (
      <div className="min-h-screen comic-bg">
        <GameHeader title="ALGORITHM JUDGE" subtitle="Final Results" backUrl="/scenario-game" />

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="comic-box bg-white p-8">
              <div className="text-center mb-8">
                <h2 className="comic-text text-4xl font-black mb-6">YOUR ALGORITHM PERSONALITY</h2>

                <div className={`inline-block px-8 py-6 border-3 border-black ${personality.color} bg-opacity-20 mb-6`}>
                  <h3 className="comic-text text-3xl font-black mb-3">{personality.type}</h3>
                  <p className="text-xl font-bold">{personality.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="comic-box bg-[#ff9500] bg-opacity-20 border-2 border-black p-4">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#ff9500]" />
                    <h4 className="comic-text font-black mb-1">ENGAGEMENT</h4>
                    <p className="text-2xl font-black">{Math.round(gameStats.totalEngagement / gameStats.rounds)}%</p>
                  </div>

                  <div className="comic-box bg-[#00c16e] bg-opacity-20 border-2 border-black p-4">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-[#00c16e]" />
                    <h4 className="comic-text font-black mb-1">HEALTH</h4>
                    <p className="text-2xl font-black">{Math.round(gameStats.totalHealth / gameStats.rounds)}%</p>
                  </div>

                  <div className="comic-box bg-[#ff3a3a] bg-opacity-20 border-2 border-black p-4">
                    <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-[#ff3a3a]" />
                    <h4 className="comic-text font-black mb-1">POLARIZATION</h4>
                    <p className="text-2xl font-black">{Math.round(gameStats.totalPolarization / gameStats.rounds)}%</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={resetGame} className="comic-button bg-black text-white">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  PLAY AGAIN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
                  {currentRound < 5 ? `NEXT ROUND (${currentRound + 1}/5)` : "VIEW FINAL RESULTS"}
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
        subtitle={`Round ${currentRound}/5 - Select 1-2 content to recommend`}
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
            {roundContent.map((content) => (
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
