"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, ExternalLink, RotateCcw, Brain, Eye } from "lucide-react"
import Link from "next/link"

const imageComparisons = [
  {
    id: 1,
    images: [
      { url: "/placeholder.svg?height=300&width=300", isAI: true, label: "IMAGE A" },
      { url: "/placeholder.svg?height=300&width=300", isAI: false, label: "IMAGE B" },
    ],
    correctAnswer: 0,
    aiTips: [
      "AI-generated portraits often have unnatural eye details",
      "Hair texture may be too perfect or have unrealistic flow",
      "Skin texture might be too smooth, lacking real pores and imperfections",
      "Background may contain illogical elements or distortions",
    ],
    explanation: "Image A is AI-generated. Notice the asymmetrical eyes and unnatural hair texture.",
  },
  {
    id: 2,
    images: [
      { url: "/placeholder.svg?height=300&width=300", isAI: false, label: "IMAGE A" },
      { url: "/placeholder.svg?height=300&width=300", isAI: true, label: "IMAGE B" },
    ],
    correctAnswer: 1,
    aiTips: [
      "AI-generated landscapes may have physics violations",
      "Lighting effects may not match real light source direction",
      "Details may show blurring or repetitive patterns",
      "Overall composition may be too 'perfect', lacking real photo randomness",
    ],
    explanation: "Image B is AI-generated. The lighting effects and physical details are unrealistic.",
  },
]

export default function AIDetectionPage() {
  const [currentComparison, setCurrentComparison] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const comparison = imageComparisons[currentComparison]

  const handleImageSelect = (index: number) => {
    setSelectedImage(index)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentComparison < imageComparisons.length - 1) {
      setCurrentComparison((prev) => prev + 1)
      setSelectedImage(null)
      setShowResult(false)
    }
  }

  const handleRestart = () => {
    setCurrentComparison(0)
    setSelectedImage(null)
    setShowResult(false)
  }

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="AI DETECTION LAB" subtitle="Identify AI-generated images" backUrl="/spot-the-fake" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="comic-box bg-white p-3">
                <h2 className="comic-text text-2xl font-black">
                  ROUND {currentComparison + 1} / {imageComparisons.length}
                </h2>
              </div>
              <div className="comic-tag-accent">SPOT THE AI</div>
            </div>
            <div className="w-full bg-black h-4 border-2 border-black">
              <div
                className="bg-[#3a66ff] h-full transition-all duration-300"
                style={{ width: `${((currentComparison + 1) / imageComparisons.length) * 100}%` }}
              />
            </div>
          </div>

          {!showResult ? (
            <div className="comic-box bg-white p-6">
              <h3 className="comic-text text-xl font-black mb-6 text-center">WHICH IMAGE IS AI-GENERATED?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {comparison.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative border-3 border-black cursor-pointer transition-all ${
                      selectedImage === index ? "bg-[#3a66ff] p-2" : "hover:bg-gray-100 p-2"
                    }`}
                    onClick={() => handleImageSelect(index)}
                  >
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.label}
                      className="w-full h-64 object-cover border-2 border-black"
                    />
                    <div
                      className={`absolute bottom-2 left-2 right-2 p-3 border-2 border-black ${
                        selectedImage === index ? "bg-white" : "bg-black text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="comic-text font-black">{image.label}</span>
                        {selectedImage === index && (
                          <div className="w-6 h-6 bg-[#3a66ff] border-2 border-black flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={selectedImage === null}
                className="comic-button w-full bg-black text-white text-lg py-3"
              >
                SUBMIT ANSWER
              </Button>
            </div>
          ) : (
            <div className="comic-box bg-white p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {selectedImage === comparison.correctAnswer ? (
                    <CheckCircle className="w-8 h-8 text-[#00c16e]" />
                  ) : (
                    <XCircle className="w-8 h-8 text-[#ff3a3a]" />
                  )}
                  <h3 className="comic-text text-2xl font-black">
                    {selectedImage === comparison.correctAnswer ? "CORRECT!" : "WRONG ANSWER"}
                  </h3>
                </div>

                <div className="comic-box-accent bg-[#3a66ff] text-white p-4 mb-4">
                  <p className="text-xl font-black">
                    CORRECT ANSWER: {comparison.images[comparison.correctAnswer].label} IS AI-GENERATED
                  </p>
                </div>

                <p className="text-lg font-bold text-gray-700 mb-6">{comparison.explanation}</p>
              </div>

              <div className="mb-6">
                <h4 className="comic-text text-lg font-black mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-2" />
                  AI DETECTION TECHNIQUES:
                </h4>
                <div className="space-y-3">
                  {comparison.aiTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-[#3a66ff] bg-opacity-20 border-2 border-black"
                    >
                      <Eye className="w-6 h-6 text-[#3a66ff] mt-0.5" />
                      <span className="font-bold text-gray-800">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {currentComparison < imageComparisons.length - 1 ? (
                  <Button onClick={handleNext} className="comic-button flex-1 bg-black text-white">
                    NEXT COMPARISON
                  </Button>
                ) : (
                  <Button onClick={handleRestart} className="comic-button flex-1 bg-black text-white">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    TRY AGAIN
                  </Button>
                )}
                <Link href="/tool-library/ai-image-detection">
                  <Button className="comic-button flex-1 bg-[#3a66ff] text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    AI DETECTION GUIDE
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
