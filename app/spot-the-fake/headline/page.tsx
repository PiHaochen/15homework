"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, ExternalLink, RotateCcw } from "lucide-react"
import Link from "next/link"

const headlineExamples = [
  {
    id: 1,
    headlines: [
      "Research shows moderate exercise benefits health",
      "SHOCKING! This food can make you 10 years younger!",
      "New technology may improve energy efficiency",
      "Experts recommend maintaining balanced diet",
    ],
    correctAnswer: 1,
    explanation:
      "The second headline uses emotional words like 'SHOCKING!' and exaggerated claims like '10 years younger' to attract clicks.",
    manipulationTechniques: [
      "Emotional language: 'SHOCKING' triggers strong emotional response",
      "Exaggerated claims: '10 years younger' lacks scientific basis",
      "Excessive use of exclamation marks creates urgency",
      "Vague 'this food' creates suspense",
    ],
  },
  {
    id: 2,
    headlines: [
      "Climate change impact on agriculture study released",
      "Government announces new education policy details",
      "Weight loss secrets doctors don't want you to know! Click for truth",
      "Tech company releases quarterly earnings report",
    ],
    correctAnswer: 2,
    explanation:
      "The third headline uses conspiracy-style language and strong call-to-action to manipulate reader emotions.",
    manipulationTechniques: [
      "Conspiracy implication: 'doctors don't want you to know'",
      "Mystery creation: 'secrets', 'truth' keywords",
      "Direct call-to-action: 'Click for truth'",
      "Creating opposition: implies doctors hide information",
    ],
  },
]

export default function HeadlineSpottingPage() {
  const [currentExample, setCurrentExample] = useState(0)
  const [selectedHeadline, setSelectedHeadline] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const example = headlineExamples[currentExample]

  const handleHeadlineSelect = (index: number) => {
    setSelectedHeadline(index)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentExample < headlineExamples.length - 1) {
      setCurrentExample((prev) => prev + 1)
      setSelectedHeadline(null)
      setShowResult(false)
    }
  }

  const handleRestart = () => {
    setCurrentExample(0)
    setSelectedHeadline(null)
    setShowResult(false)
  }

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="HEADLINE SPOTTING" subtitle="Identify manipulative headlines" backUrl="/spot-the-fake" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="comic-box bg-white p-3">
                <h2 className="comic-text text-2xl font-black">
                  QUESTION {currentExample + 1} / {headlineExamples.length}
                </h2>
              </div>
              <div className="comic-tag-accent">SPOT THE MANIPULATION</div>
            </div>
            <div className="w-full bg-black h-4 border-2 border-black">
              <div
                className="bg-[#ff9500] h-full transition-all duration-300"
                style={{ width: `${((currentExample + 1) / headlineExamples.length) * 100}%` }}
              />
            </div>
          </div>

          {!showResult ? (
            <div className="comic-box bg-white p-6">
              <h3 className="comic-text text-xl font-black mb-6">WHICH HEADLINE IS MOST MANIPULATIVE?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {example.headlines.map((headline, index) => (
                  <div
                    key={index}
                    className={`p-4 border-3 border-black cursor-pointer transition-all ${
                      selectedHeadline === index ? "bg-[#ff9500] text-white" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => handleHeadlineSelect(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 border-2 border-black flex items-center justify-center font-black ${
                          selectedHeadline === index ? "bg-white text-black" : "bg-white text-black"
                        }`}
                      >
                        {selectedHeadline === index ? "✓" : index + 1}
                      </div>
                      <p className="font-bold leading-relaxed">{headline}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={selectedHeadline === null}
                className="comic-button w-full bg-black text-white text-lg py-3"
              >
                SUBMIT ANSWER
              </Button>
            </div>
          ) : (
            <div className="comic-box bg-white p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {selectedHeadline === example.correctAnswer ? (
                    <CheckCircle className="w-8 h-8 text-[#00c16e]" />
                  ) : (
                    <XCircle className="w-8 h-8 text-[#ff3a3a]" />
                  )}
                  <h3 className="comic-text text-2xl font-black">
                    {selectedHeadline === example.correctAnswer ? "CORRECT!" : "WRONG ANSWER"}
                  </h3>
                </div>

                <div className="comic-box-accent bg-[#ff9500] text-white p-4 mb-4">
                  <p className="text-xl font-black">CORRECT ANSWER: "{example.headlines[example.correctAnswer]}"</p>
                </div>

                <p className="text-lg font-bold text-gray-700 mb-6">{example.explanation}</p>
              </div>

              <div className="mb-6">
                <h4 className="comic-text text-lg font-black mb-4">MANIPULATION TECHNIQUES ANALYSIS:</h4>
                <div className="space-y-3">
                  {example.manipulationTechniques.map((technique, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-[#ff9500] bg-opacity-20 border-2 border-black"
                    >
                      <div className="w-3 h-3 bg-[#ff9500] mt-2" />
                      <span className="font-bold text-gray-800">{technique}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {currentExample < headlineExamples.length - 1 ? (
                  <Button onClick={handleNext} className="comic-button flex-1 bg-black text-white">
                    NEXT QUESTION
                  </Button>
                ) : (
                  <Button onClick={handleRestart} className="comic-button flex-1 bg-black text-white">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    RESTART
                  </Button>
                )}
                <Link href="/tool-library/language-manipulation-detection">
                  <Button className="comic-button flex-1 bg-[#ff9500] text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    MANIPULATION GUIDE
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
