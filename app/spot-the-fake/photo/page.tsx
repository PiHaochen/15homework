"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, RotateCcw, ImageIcon } from "lucide-react"
import Link from "next/link"

const photoExamples = [
  {
    id: 1,
    imageUrl: "/images/image1.png",
    description: "This is a photo claiming that South Korean leader Lee Jae-myung was absent from the G7 summit.",
    isReal: false,
    explanation:
      "This image is fake. It has been maliciously edited, and the mysterious bucket in the middle is the giveaway.",
    source: "https://factcheck.afp.com/doc.afp.com.62YD4KE",
  },
  {
    id: 2,
    imageUrl: "/images/image2.png",
    description: "This is a photo claiming to show the horrific aftermath of a flood disaster.",
    isReal: false,
    explanation:
      "This image is fake. It was created by collaging a photo of a street flooded by water and a photo of a great white shark.",
    source: "https://ijnet.org/en/story/5-strategies-identify-doctored-images",
  },
  {
    id: 3,
    imageUrl: "/images/image3.png",
    description: "This is a photo claiming that a black bear is chasing a cyclist on the road.",
    isReal: false,
    explanation: "This image is fake. It was created by editing a person into a picture that only contains bears.",
    source: "https://121clicks.com/inspirations/fake-viral-photoshopped-images-that-believed-real/",
  },
  {
    id: 4,
    imageUrl: "/images/image4.jpeg",
    description:
      "The headline of this image claims that the White House has requested a ban on filming illegal immigrants entering the country.",
    isReal: false,
    explanation:
      'This image is fake. The logo at the top of the page does not say "New York Post," but rather "New Fork Post." This is a misleading and satirical image.',
    source: "https://www.forbes.com/sites/mattnovak/2023/02/03/9-viral-photos-and-videos-that-are-actually-fake/",
  },
  {
    id: 5,
    imageUrl: "/images/image5.png",
    description: "This image claims that astronauts are smoking weed in a space capsule.",
    isReal: false,
    explanation:
      "This picture is fake. The bag originally contained Easter eggs, but someone photoshopped them into weed.",
    source: "https://121clicks.com/inspirations/fake-viral-photoshopped-images-that-believed-real/",
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

  const isCorrect = selectedAnswer === example.isReal

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
                  {isCorrect ? (
                    <CheckCircle className="w-8 h-8 text-[#00c16e]" />
                  ) : (
                    <XCircle className="w-8 h-8 text-[#ff3a3a]" />
                  )}
                  <h3 className="comic-text text-2xl font-black">{isCorrect ? "CORRECT!" : "WRONG ANSWER"}</h3>
                </div>

                <div className="comic-box-accent bg-[#3a66ff] text-white p-4 mb-4">
                  <p className="text-xl font-black">CORRECT ANSWER: {example.isReal ? "REAL" : "FAKE"}</p>
                </div>

                <p className="text-lg font-bold text-gray-700 mb-6">{example.explanation}</p>
              </div>

              <div className="mb-6 p-4 bg-gray-100 border-2 border-black">
                <h4 className="font-black mb-2">Source:</h4>
                <a
                  href={example.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:underline break-all"
                >
                  {example.source}
                </a>
              </div>

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
