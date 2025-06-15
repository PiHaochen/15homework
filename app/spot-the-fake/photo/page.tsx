"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, RotateCcw, Search, ImageIcon } from "lucide-react"
import Link from "next/link"

const photoExamples = [
  {
    id: 1,
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Photo circulating on social media claiming 'severe flooding in local area'",
    isReal: false,
    verificationSteps: [
      "Reverse image search: Use Google Image Search",
      "Check image metadata: shooting time and location",
      "Analyze image details: lighting and shadows reasonable",
      "Verify news sources: official reports available",
    ],
    explanation:
      "This image is actually from a 2018 flood in another region, incorrectly used to describe recent events.",
    redFlags: [
      "Blurry image quality, possibly forwarded multiple times",
      "Lacks specific time and location info",
      "No credible news source support",
    ],
  },
  {
    id: 2,
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Photo claiming to be from 'celebrity private party'",
    isReal: true,
    verificationSteps: [
      "Check publishing source: from official account",
      "Compare other reports: multiple media coverage",
      "Analyze image quality: original photo quality",
      "Check timeline: matches person's schedule",
    ],
    explanation: "This photo is authentic, from official social media account with multiple credible media reports.",
    redFlags: [],
  },
]

export default function PhotoChallengePage() {
  const [currentExample, setCurrentExample] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [showResult, setShowResult] = useState(false)

  const example = photoExamples[currentExample]

  const handleAnswerSelect = (isReal: boolean) => {
    setSelectedAnswer(isReal)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentExample < photoExamples.length - 1) {
      setCurrentExample((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleRestart = () => {
    setCurrentExample(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="PHOTO CHALLENGE" subtitle="Identify suspicious images" backUrl="/spot-the-fake" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="comic-box bg-white p-3">
                <h2 className="comic-text text-2xl font-black">
                  IMAGE {currentExample + 1} / {photoExamples.length}
                </h2>
              </div>
              <div className="comic-tag-accent">REAL OR FAKE?</div>
            </div>
            <div className="w-full bg-black h-4 border-2 border-black">
              <div
                className="bg-[#00c16e] h-full transition-all duration-300"
                style={{ width: `${((currentExample + 1) / photoExamples.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="comic-box bg-white p-6 mb-6">
            <div className="text-center mb-4">
              <img
                src={example.imageUrl || "/placeholder.svg"}
                alt="Challenge image"
                className="w-full max-w-2xl mx-auto border-3 border-black"
              />
            </div>
            <p className="text-center text-lg font-bold text-gray-700">{example.description}</p>
          </div>

          {!showResult ? (
            <div className="comic-box bg-white p-6">
              <h3 className="comic-text text-xl font-black mb-6 text-center">IS THIS IMAGE REAL OR FAKE?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div
                  className={`p-6 border-3 border-black cursor-pointer transition-all text-center ${
                    selectedAnswer === true ? "bg-[#00c16e] text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelect(true)}
                >
                  <CheckCircle
                    className={`w-16 h-16 mx-auto mb-4 ${selectedAnswer === true ? "text-white" : "text-gray-400"}`}
                  />
                  <h4 className="comic-text text-lg font-black mb-2">REAL</h4>
                  <p className="font-bold">This image is authentic</p>
                </div>
                <div
                  className={`p-6 border-3 border-black cursor-pointer transition-all text-center ${
                    selectedAnswer === false ? "bg-[#ff3a3a] text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelect(false)}
                >
                  <XCircle
                    className={`w-16 h-16 mx-auto mb-4 ${selectedAnswer === false ? "text-white" : "text-gray-400"}`}
                  />
                  <h4 className="comic-text text-lg font-black mb-2">FAKE</h4>
                  <p className="font-bold">This image is fake</p>
                </div>
              </div>
              <Button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="comic-button w-full bg-black text-white text-lg py-3"
              >
                SUBMIT ANSWER
              </Button>
            </div>
          ) : (
            <div className="comic-box bg-white p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {selectedAnswer === example.isReal ? (
                    <CheckCircle className="w-8 h-8 text-[#00c16e]" />
                  ) : (
                    <XCircle className="w-8 h-8 text-[#ff3a3a]" />
                  )}
                  <h3 className="comic-text text-2xl font-black">
                    {selectedAnswer === example.isReal ? "CORRECT!" : "WRONG ANSWER"}
                  </h3>
                </div>

                <div className="comic-box-accent bg-[#3a66ff] text-white p-4 mb-4">
                  <p className="text-xl font-black">CORRECT ANSWER: {example.isReal ? "REAL" : "FAKE"}</p>
                </div>

                <p className="text-lg font-bold text-gray-700 mb-6">{example.explanation}</p>
              </div>

              <div className="mb-6">
                <h4 className="comic-text text-lg font-black mb-4 flex items-center">
                  <Search className="w-6 h-6 mr-2" />
                  VERIFICATION STEPS:
                </h4>
                <div className="space-y-3">
                  {example.verificationSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-[#3a66ff] bg-opacity-20 border-2 border-black"
                    >
                      <div className="w-8 h-8 bg-[#3a66ff] text-white border-2 border-black flex items-center justify-center text-sm font-black">
                        {index + 1}
                      </div>
                      <span className="font-bold text-gray-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {example.redFlags.length > 0 && (
                <div className="mb-6">
                  <h4 className="comic-text text-lg font-black mb-4 flex items-center">
                    <XCircle className="w-6 h-6 mr-2 text-[#ff3a3a]" />
                    WARNING SIGNS:
                  </h4>
                  <div className="space-y-2">
                    {example.redFlags.map((flag, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-[#ff3a3a] bg-opacity-20 border-2 border-black"
                      >
                        <div className="w-3 h-3 bg-[#ff3a3a] mt-2" />
                        <span className="font-bold text-gray-800">{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {currentExample < photoExamples.length - 1 ? (
                  <Button onClick={handleNext} className="comic-button flex-1 bg-black text-white">
                    NEXT IMAGE
                  </Button>
                ) : (
                  <Button onClick={handleRestart} className="comic-button flex-1 bg-black text-white">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    TRY AGAIN
                  </Button>
                )}
                <Link href="/tool-library/image-detection">
                  <Button className="comic-button flex-1 bg-[#00c16e] text-white">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    IMAGE DETECTION GUIDE
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
