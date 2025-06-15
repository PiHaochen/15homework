"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { RotateCcw, ExternalLink } from "lucide-react"
import Link from "next/link"

const fakeNewsExamples = [
  {
    id: 1,
    content:
      "Confirmed: Olena Zelenska just dropped nearly €4.5 million on a custom Bugatti in Paris. The invoice shows it all — her name, exact model, even €500,000 in add-ons. She'll get the car in 2026, but Ukrainians are still waiting for aid.\n\nHere's the Parisian dealer, the car, and the receipt. Make this go viral. The truth is right here.",
    image: "/images/fake-news-spotting-image1.png",
    isFake: true,
    correctExplanation:
      "This is fake. It shows a blurry invoice and claims a high-profile scandal without verifiable sources. No trusted media confirmed the purchase, and image evidence alone can be fabricated or misattributed.",
    wrongExplanation:
      'This story is fake. Even if the invoice looks real, this post gives no credible source or confirmation. Be cautious with viral stories using unverified "documents" to spark outrage.',
    source: "https://www.bbc.com/news/articles/c72ver6172do",
  },
  {
    id: 2,
    content:
      "BREAKING: NASA insider leaks that Earth will go completely dark for 15 days this November due to a rare planetary alignment blocking the sun.\n\nGlobal blackout. Zero sunlight. Scientists are 'concerned'. Share this before they delete it.\n\n— reads a viral Facebook post shared over 300,000 times.",
    isFake: true,
    correctExplanation:
      'This is fake. It uses vague, dramatic phrases like "completely dark" and "NASA insider" — but gives no date, no named source, and no scientific explanation.\nIt relies on fear, urgency ("share before they delete it"), and pseudo-authority (claiming a NASA leak without evidence).',
    wrongExplanation:
      "It sounds real because it mentions NASA and uses science-like terms like \"planetary alignment.\" But there's no source, no date, and the claim is physically impossible.\nWatch out for posts that use big claims + no proof + urgency — that's how viral hoaxes work.",
    source: "https://www.snopes.com/fact-check/15-days-darkness-november/",
  },
  {
    id: 3,
    content:
      'EU AI Act Enters into Force, Sets Global Precedent in AI Governance\n\nThe European Union\'s Artificial Intelligence Act was published in the Official Journal on 12 July 2024 and entered into force on 1 August 2024. It classifies AI systems into four risk levels—unacceptable, high, limited, and minimal—and prohibits those that pose "unacceptable risk," such as AI used for social scoring or manipulative behavioral targeting.\n\nMost obligations will become applicable starting 2 August 2026, except for specific early provisions. The Act also applies extraterritorially to providers and deployers of AI systems whose outputs are used within the EU.',
    isFake: false,
    correctExplanation:
      "This post gives specific dates, policy details, and names the official source (EU Official Journal).\nReal policy reports often explain how laws work, who they affect, and when they apply — all of which this post does clearly.",
    wrongExplanation:
      "It might sound too detailed or technical, but that's often a sign of real policy coverage.\nPosts that include exact legal terms, structured timelines, and verifiable facts — like here — are strong indicators of trustworthy information.",
    source: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
  },
  {
    id: 4,
    content:
      "What's really going on in LA?\n\nLast night around 2 a.m., at least three unmarked DHS buses pulled into a closed-off zone behind Union Station. No logos, no plates. People saw men in black gear with no ID unloading crates marked 'signal containment' — and five security cameras went dark in the area within 10 minutes.\n\nLocal press? Silent. National media? Pretending it didn't happen. They say this is about immigration raids. But when did immigration enforcement require jammers and blackout zones? Wake up. Something deeper is happening here.\n\n— reads a viral X post shared over 500,000 times.",
    isFake: true,
    correctExplanation:
      'This is fake. It gives no names, no photos, no sources — just anonymous "sightings" and loaded questions like "when did raids need jammers?"\nIt mimics real reports with time + place, but offers zero verifiable proof — just a dramatic story meant to spark fear.',
    wrongExplanation:
      'It sounds real because it gives specific times, gear, and locations, but there\'s no evidence, just vague claims and conspiracy cues like "wake up" and "media is silent." Posts like this often try to sound convincing by adding lots of mysterious details and making you distrust the media. If there\'s no source or evidence, that\'s a red flag.',
    source: "https://www.latimes.com/california/story/2025-06-08/national-guard-arrives-l-a-immigration-raids",
  },
  {
    id: 5,
    content:
      "The U.S. Food and Drug Administration has approved Casgevy and Lyfgenia as the first gene based therapies for sickle cell disease in patients aged 12 and older.\n\nCasgevy is the first treatment to use CRISPR/Cas9 gene editing to modify patients' own stem cells, aiming to reduce painful vaso occlusive crises. In clinical trials, 93.5% of Casgevy recipients and 88% of Lyfgenia recipients experienced 12 months or more without severe episodes.\n\nMedia outlets have described the approval as a \"breakthrough progress\" in precision medicine, highlighting the therapies' potential to change treatment for inherited blood disorders.",
    isFake: false,
    correctExplanation:
      "This story gives clear statistics, specific drug names, and directly cites the FDA's approval — all strong signs of reliability.\nTrusted health news usually includes exact data, official sources, and neutral scientific language, just like this one.",
    wrongExplanation:
      'It might seem fake because it mentions new gene-editing tech like CRISPR or uses terms like "breakthrough."\nBut real stories often use those words alongside real data and credible sources — here, the FDA is named, and clinical trial results are included. That\'s what makes it trustworthy.',
    source:
      "https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease",
  },
  {
    id: 6,
    content:
      "Add a pinch of borax to your water every day — it flushes all the COVID vaccine toxins out of your system, clears heavy metals, and completely gets rid of joint pain within a week. It's a natural anti-inflammatory and detox that Big Pharma doesn't want you to know about. Everyone I know is doing this — my sister's migraines are gone, my coworker sleeps better, and I haven't felt this good in years. This stuff works, and people are finally waking up.\n\n— reads a viral Twitter post with over 2 million views.",
    isFake: true,
    correctExplanation:
      'This post uses miracle-cure buzzwords ("flush toxins," "Big Pharma") and anecdotes instead of evidence.\nClaims like this often sound personal and urgent, but there\'s no science, no sources, and borax isn\'t approved for human consumption.',
    wrongExplanation:
      'It sounds real because it uses emotional stories and health promises — but there\'s no real evidence.\nFake health posts often list dramatic benefits, blame a "hidden enemy" like Big Pharma, and skip scientific proof. Be careful with advice that spreads fast but cites no sources.',
    source: "https://www.rupahealth.com/post/drinking-borax-why-you-should-never-follow-this-viral-trend",
  },
]

export default function FakeNewsSpottingPage() {
  const [currentExample, setCurrentExample] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [showResult, setShowResult] = useState(false)

  const example = fakeNewsExamples[currentExample]

  const handleAnswerSelect = (isReal: boolean) => {
    setSelectedAnswer(isReal)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentExample < fakeNewsExamples.length - 1) {
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

  const isCorrect = selectedAnswer === !example.isFake

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader title="FAKE NEWS SPOTTING" subtitle="Identify problems in fake news" backUrl="/spot-the-fake" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="comic-box bg-white p-3">
                <h2 className="comic-text text-2xl font-black">
                  CASE {currentExample + 1} / {fakeNewsExamples.length}
                </h2>
              </div>
            </div>
            <div className="w-full bg-black h-4 border-2 border-black">
              <div
                className="bg-[#ff3a3a] h-full transition-all duration-300"
                style={{ width: `${((currentExample + 1) / fakeNewsExamples.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="comic-box bg-white p-6 mb-6">
            <p className="text-lg font-bold text-gray-700 leading-relaxed whitespace-pre-line">{example.content}</p>
            {example.image && (
              <div className="mt-4">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt="News content"
                  className="w-full max-w-2xl mx-auto border-2 border-black"
                />
              </div>
            )}
          </div>

          {!showResult ? (
            <div className="comic-box bg-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div
                  className={`p-6 border-3 border-black cursor-pointer transition-all text-center ${
                    selectedAnswer === true ? "bg-[#00c16e] text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelect(true)}
                >
                  <div className="text-4xl mb-4">🟢</div>
                  <h4 className="comic-text text-xl font-black">Real</h4>
                </div>
                <div
                  className={`p-6 border-3 border-black cursor-pointer transition-all text-center ${
                    selectedAnswer === false ? "bg-[#ff3a3a] text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelect(false)}
                >
                  <div className="text-4xl mb-4">🔴</div>
                  <h4 className="comic-text text-xl font-black">Fake</h4>
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
                <div className="text-6xl mb-4">{isCorrect ? "✅" : "❌"}</div>
                <h3 className="comic-text text-3xl font-black mb-4">{isCorrect ? "Correct!" : "You are wrong."}</h3>
                <p className="text-lg font-bold text-gray-700 leading-relaxed whitespace-pre-line">
                  {isCorrect ? example.correctExplanation : example.wrongExplanation}
                </p>
              </div>

              <div className="mb-6 p-4 bg-gray-100 border-2 border-black">
                <h4 className="font-black mb-2">Sources of Inspiration:</h4>
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
                {currentExample < fakeNewsExamples.length - 1 ? (
                  <Button onClick={handleNext} className="comic-button flex-1 bg-black text-white">
                    NEXT CASE
                  </Button>
                ) : (
                  <Button onClick={handleRestart} className="comic-button flex-1 bg-black text-white">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    RESTART
                  </Button>
                )}
                <Link href="/tool-library/fake-news-detection">
                  <Button className="comic-button flex-1 bg-[#ff3a3a] text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    DETECTION GUIDE
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
