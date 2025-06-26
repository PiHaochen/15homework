"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { Check, RotateCcw, AlertTriangle } from "lucide-react"
import Link from "next/link"

const bingoItems = [
  "My friend works at the hospital",
  "Just shared in the group",
  "I have inside information",
  "Truth experts dare not tell",
  "You've been brainwashed",
  "Mainstream media won't report this",
  "I saw it with my own eyes",
  "This is common sense",
  "Anyone who's done research knows",
  "Officials don't want you to know",
  "I've studied this for a long time",
  "Many examples around me",
  "Foreign countries proved this long ago",
  "Big data shows",
  "Science has proven",
  "Authoritative sources revealed",
]

const analysisResults = [
  {
    range: [0, 3],
    title: "RATIONAL GUARDIAN",
    description:
      "You have good critical thinking skills and can identify most fake expert tactics. Keep this rational attitude!",
    color: "text-[#00c16e]",
    bgColor: "bg-[#00c16e] bg-opacity-20 border-[#00c16e]",
  },
  {
    range: [4, 8],
    title: "CAUTIOUS OBSERVER",
    description:
      "You have some alertness to information but may occasionally be influenced by seemingly authoritative statements. Recommend focusing more on source credibility.",
    color: "text-[#ff9500]",
    bgColor: "bg-[#ff9500] bg-opacity-20 border-[#ff9500]",
  },
  {
    range: [9, 12],
    title: "EASILY INFLUENCED",
    description:
      "You may be easily convinced by fake expert tactics. Recommend learning more media literacy knowledge to improve information recognition ability.",
    color: "text-[#ff9500]",
    bgColor: "bg-[#ff9500] bg-opacity-20 border-[#ff9500]",
  },
  {
    range: [13, 16],
    title: "HIGH RISK GROUP",
    description:
      "You are very susceptible to fake expert tactics. Strongly recommend learning critical thinking and fact-checking skills to protect yourself from false information.",
    color: "text-[#ff3a3a]",
    bgColor: "bg-[#ff3a3a] bg-opacity-20 border-[#ff3a3a]",
  },
]

export default function PseudoExpertBingoPage() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())
  const [showResult, setShowResult] = useState(false)

  const handleItemToggle = (index: number) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index)
    } else {
      newCheckedItems.add(index)
    }
    setCheckedItems(newCheckedItems)
  }

  const handleShowResult = () => {
    setShowResult(true)
  }

  const handleRestart = () => {
    setCheckedItems(new Set())
    setShowResult(false)
  }

  const checkedCount = checkedItems.size
  const currentResult =
    analysisResults.find((result) => checkedCount >= result.range[0] && checkedCount <= result.range[1]) ||
    analysisResults[0]

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="PSEUDO-EXPERT BINGO" subtitle="Identify fake expert common tactics" backUrl="/scenario-game" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!showResult ? (
            <>
              <div className="comic-box bg-white p-6 mb-6">
                <h2 className="comic-text text-xl font-black mb-4 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-3 text-[#ff9500]" />
                  FAKE EXPERT TACTICS DETECTION GAME
                </h2>
                <p className="text-lg font-bold text-gray-700 leading-relaxed">
                  Below are common fake expert tactics. Please honestly check those statements you've heard and found
                  convincing. This test will help you understand your sensitivity to such tactics.
                </p>
              </div>

              <div className="comic-box bg-white p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {bingoItems.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 border-3 border-black cursor-pointer transition-all ${
                        checkedItems.has(index) ? "bg-[#3a66ff] text-white" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => handleItemToggle(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 border-2 border-black flex items-center justify-center ${
                            checkedItems.has(index) ? "bg-white" : "bg-white"
                          }`}
                        >
                          {checkedItems.has(index) && <Check className="w-5 h-5 text-black" />}
                        </div>
                        <span className="font-bold text-sm leading-tight">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="comic-box bg-white p-4 mb-4 inline-block">
                  <span className="comic-text text-lg font-black">
                    SELECTED: {checkedCount} / {bingoItems.length}
                  </span>
                </div>
                <br />
                <Button onClick={handleShowResult} className="comic-button bg-[#ff9500] text-white text-lg px-8 py-3">
                  VIEW ANALYSIS
                </Button>
              </div>
            </>
          ) : (
            <div className="comic-box bg-white p-6">
              <div className="text-center mb-6">
                <h2 className="comic-text text-4xl font-black mb-4">YOU CHECKED {checkedCount} ITEMS!</h2>
                <div className={`inline-block px-6 py-4 border-3 ${currentResult.bgColor}`}>
                  <h3 className={`comic-text text-2xl font-black ${currentResult.color}`}>{currentResult.title}</h3>
                </div>
              </div>

              <div className="bg-gray-100 border-2 border-black p-6 mb-6">
                <p className="text-lg font-bold text-gray-700 leading-relaxed text-center">
                  {currentResult.description}
                </p>
              </div>

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
                      Increases credibility by implying "inside information" or "expert opinions" that cannot actually
                      be verified.
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleRestart} className="comic-button flex-1 bg-black text-white">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  RESTART TEST
                </Button>
                <Link href="/tool-library/language-manipulation-detection">
                  <Button className="comic-button flex-1 bg-[#ff9500] text-white">LANGUAGE DETECTION GUIDE</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
