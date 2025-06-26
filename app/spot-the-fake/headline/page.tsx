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
      "Biden addresses bipartisan infrastructure bill in Ohio",
      "Senate advances voting rights legislation amid debate",
      'Biden caught on hot mic: "I rigged the election" – full video',
      "White House releases report on climate resilience funding",
    ],
    correctAnswer: 2,
    explanation:
      'This headline uses false accusations and "hot mic" framing to suggest authenticity without any source validation.',
    manipulationTechniques: [
      '"Hot mic" framing: Suggests authenticity without source validation',
      "False accusation: Implies electoral fraud with no evidence",
      "Shock tactic: Aimed to provoke emotional outrage and virality",
    ],
  },
  {
    id: 2,
    headlines: [
      "US Treasury releases economic forecast",
      "Stocks up slightly after Fed statement",
      'White House insider reveals: "Everything is collapsing – prepare now!"',
      "IMF updates global growth projections",
    ],
    correctAnswer: 2,
    explanation:
      "This headline uses anonymous sourcing and apocalyptic framing to create exaggerated fear and urgency.",
    manipulationTechniques: [
      'Anonymous sourcing: Uses vague attribution ("insider") to bypass accountability',
      'Apocalyptic framing: "Everything is collapsing" creates exaggerated fear',
      'Urgency pressure: "Prepare now!" demands immediate action and emotional reaction',
      "False authority tone: Sounds like a credible leak, but lacks any verifiable source",
    ],
  },
  {
    id: 3,
    headlines: [
      "UN calls for immediate ceasefire in Gaza",
      "Off-Screen Reality? Child Shown as Victim Later Seen Standing and Smiling",
      "IDF confirms airstrike on Hamas tunnel system",
      "Netanyahu meets US Secretary of State in Tel Aviv",
    ],
    correctAnswer: 1,
    explanation:
      "This headline uses dehumanization tactics and selective framing to delegitimize suffering and undermine empathy.",
    manipulationTechniques: [
      "Dehumanization tactic: Portrays the child as a performer rather than a victim, aiming to delegitimize their suffering and undermine public empathy",
      "Selective framing: Uses a brief, out-of-context clip to imply staging, while ignoring the broader context or aftermath of the incident",
    ],
  },
  {
    id: 4,
    headlines: [
      "CDC updates flu shot recommendations",
      "Health experts warn of rising RSV cases",
      "The vaccine killed my baby – what they're not telling you!",
      "Pediatricians urge early vaccination for kids",
    ],
    correctAnswer: 2,
    explanation:
      "This headline uses personal emotional appeal and conspiratorial accusations without any verification or sources.",
    manipulationTechniques: [
      "Personal emotional appeal: Uses tragedy to provoke fear and empathy",
      'Conspiratorial accusation: "They\'re not telling you" implies intentional secrecy',
      "Zero verification: No source, study, or authority supports the claim",
      'Loaded language: "Killed" is a powerful accusation against vaccines',
    ],
  },
  {
    id: 5,
    headlines: [
      "IAEA warns of nuclear safety risks near Zaporizhzhia",
      "Ukrainian forces reclaim villages near Kherson",
      "Russia begins military withdrawal from northern front",
      "Russia finds secret US biolabs in Ukraine, Pentagon confirms",
    ],
    correctAnswer: 3,
    explanation:
      "This headline revives conspiracy narratives and uses false attribution to justify military aggression.",
    manipulationTechniques: [
      "Conspiracy repackaging: Revives Cold War-era bioweapon narratives",
      'Fear-based escalation: "Biolabs" used to justify military aggression',
      "False attribution: Borrows legitimacy from the Pentagon",
    ],
  },
  {
    id: 6,
    headlines: [
      "Full Fact publishes 2023 transparency report",
      "Reuters updates correction policy",
      "Fact-checkers are secretly funded by global elites to silence you",
      "Journalism nonprofit launches bias monitoring project",
    ],
    correctAnswer: 2,
    explanation: "This headline constructs conspiracy theories about fact-checkers and exploits anti-media bias.",
    manipulationTechniques: [
      "Conspiracy theory construction: Accuses fact-checkers of hidden agendas",
      'Vague villainization: "Global elites" is an undefined scapegoat',
      'Victim framing: "To silence you" implies suppression of free speech',
      "Anti-media bias exploitation: Plays on existing distrust in journalism",
    ],
  },
  {
    id: 7,
    headlines: [
      "Zuckerberg testifies before US Senate",
      "Meta announces new child safety policy",
      "Facebook is listening to your thoughts, whistleblower reveals",
      "Scientific Report: Online privacy concerns growing",
    ],
    correctAnswer: 2,
    explanation:
      "This headline claims impossible technological abilities and uses anonymous sources to exploit surveillance fears.",
    manipulationTechniques: [
      "Sci-fi distortion: Claims an impossible technological ability",
      'Anonymous source: "Whistleblower" is undefined and unverifiable',
      "Fear of surveillance: Exploits valid concerns to justify irrational claims",
    ],
  },
  {
    id: 8,
    headlines: [
      "France expands language support programs in schools",
      "Interior Minister defends secularism in education policy",
      "Paris announces new birth registration system update",
      "France moves to restrict Muslim baby names under new civil code change",
    ],
    correctAnswer: 3,
    explanation:
      "This headline uses bureaucratic framing and fear amplification to spark alarm about cultural discrimination.",
    manipulationTechniques: [
      'Bureaucratic framing: Phrases like "civil code change" evoke government authority, creating a false sense of credibility',
      "Fear amplification: Designed to spark alarm about state-driven cultural erasure and discrimination",
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
