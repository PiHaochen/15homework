"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { Share, MessageCircle, EyeOff, Search, RotateCcw } from "lucide-react"

const scenarios = [
  {
    id: 1,
    title: "SOCIAL MEDIA VIRAL MESSAGE",
    content:
      "You see a message on social media: 'URGENT NOTICE! A certain brand of milk has been detected with harmful substances. Please stop drinking immediately and share to warn others!'",
    options: [
      {
        id: "share",
        text: "Share immediately",
        icon: Share,
        personality: "EMOTIONAL AMPLIFIER",
        description: "You're easily triggered by urgent information and tend to spread quickly to protect others",
      },
      {
        id: "comment",
        text: "Ask for source",
        icon: MessageCircle,
        personality: "CALM INVESTIGATOR",
        description: "You prefer to understand more information and background before spreading",
      },
      {
        id: "ignore",
        text: "Ignore it",
        icon: EyeOff,
        personality: "AVOIDANT OBSERVER",
        description: "You tend to avoid getting involved in potential controversies or uncertain information",
      },
      {
        id: "verify",
        text: "Verify first",
        icon: Search,
        personality: "ACTION ANALYST",
        description: "You habitually verify through multiple sources to ensure information accuracy",
      },
    ],
  },
  {
    id: 2,
    title: "WORKPLACE GROUP CHAT LEAK",
    content:
      "Someone in your work group sends: 'Inside info - company will have major layoffs next month. Everyone should prepare resumes! This info is absolutely reliable!'",
    options: [
      {
        id: "share",
        text: "Tell other colleagues",
        icon: Share,
        personality: "EMOTIONAL AMPLIFIER",
        description: "You believe this important information should be known by more people",
      },
      {
        id: "comment",
        text: "Ask for source",
        icon: MessageCircle,
        personality: "CALM INVESTIGATOR",
        description: "You want to understand the specific source and credibility of the message",
      },
      {
        id: "ignore",
        text: "Pretend not to see",
        icon: EyeOff,
        personality: "AVOIDANT OBSERVER",
        description: "You don't want to participate in discussions that might cause panic",
      },
      {
        id: "verify",
        text: "Check through official channels",
        icon: Search,
        personality: "ACTION ANALYST",
        description: "You will verify message authenticity through HR or management",
      },
    ],
  },
]

export default function InfoPersonalityPage() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const scenario = scenarios[currentScenario]

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((prev) => prev + 1)
      setSelectedOption(null)
      setShowResult(false)
    }
  }

  const handleRestart = () => {
    setCurrentScenario(0)
    setSelectedOption(null)
    setShowResult(false)
  }

  const selectedPersonality = scenario.options.find((opt) => opt.id === selectedOption)

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="WHAT'S YOUR INFO PERSONALITY?"
        subtitle="Discover how you process suspicious information"
        backUrl="/scenario-game"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="comic-box bg-white p-3">
                <h2 className="comic-text text-2xl font-black">
                  SCENARIO {currentScenario + 1} / {scenarios.length}
                </h2>
              </div>
              <div className="comic-tag-accent">CHOOSE YOUR REACTION</div>
            </div>
            <div className="w-full bg-black h-4 border-2 border-black">
              <div
                className="bg-[#00c16e] h-full transition-all duration-300"
                style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="comic-box bg-white p-6 mb-6">
            <h3 className="comic-text text-xl font-black mb-4">{scenario.title}</h3>
            <p className="text-lg font-bold text-gray-700 leading-relaxed">{scenario.content}</p>
          </div>

          {!showResult ? (
            <div className="comic-box bg-white p-6">
              <h3 className="comic-text text-xl font-black mb-6">HOW WOULD YOU REACT?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {scenario.options.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <div
                      key={option.id}
                      className={`p-4 border-3 border-black cursor-pointer transition-all ${
                        selectedOption === option.id ? "bg-[#00c16e] text-white" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent
                          className={`w-8 h-8 ${selectedOption === option.id ? "text-white" : "text-gray-500"}`}
                        />
                        <span className="font-black text-lg">{option.text}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="comic-button w-full bg-black text-white text-lg py-3"
              >
                SEE RESULTS
              </Button>
            </div>
          ) : (
            <div className="comic-box bg-white p-6">
              {selectedPersonality && (
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-[#00c16e] border-3 border-black flex items-center justify-center mx-auto mb-4">
                    <selectedPersonality.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="comic-text text-2xl font-black mb-4">{selectedPersonality.personality}</h3>
                  <p className="text-lg font-bold text-gray-700 leading-relaxed">{selectedPersonality.description}</p>
                </div>
              )}

              <div className="bg-[#00c16e] bg-opacity-20 border-2 border-black p-6 mb-6">
                <h4 className="comic-text text-lg font-black mb-4">PERSONALITY ANALYSIS:</h4>
                <div className="space-y-4">
                  {scenario.options.map((option) => {
                    const IconComponent = option.icon
                    const isSelected = selectedOption === option.id
                    return (
                      <div
                        key={option.id}
                        className={`flex items-start space-x-3 p-3 border-2 border-black ${
                          isSelected ? "bg-[#00c16e] text-white" : "bg-white"
                        }`}
                      >
                        <IconComponent className={`w-6 h-6 mt-1 ${isSelected ? "text-white" : "text-gray-500"}`} />
                        <div>
                          <p className={`font-black ${isSelected ? "text-white" : "text-gray-700"}`}>
                            {option.personality}
                          </p>
                          <p className={`text-sm font-bold ${isSelected ? "text-white" : "text-gray-600"}`}>
                            {option.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {currentScenario < scenarios.length - 1 ? (
                  <Button onClick={handleNext} className="comic-button flex-1 bg-black text-white">
                    NEXT SCENARIO
                  </Button>
                ) : (
                  <Button onClick={handleRestart} className="comic-button bg-black text-white">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    RESTART TEST
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
