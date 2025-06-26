"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { Building, TrendingUp } from "lucide-react"

interface DialogueStep {
  id: string
  type: "question" | "info" | "result" | "complete"
  speaker: "system" | "user"
  text: string
  options?: { text: string; next: string; data?: any }[]
  showWebsite?: boolean
  websiteData?: {
    name: string
    headline: string
    content: string
    hashtags: string
  }
  metrics?: {
    views?: string
    sentiment?: string
    reactions?: string[]
  }
}

const dialogueFlow: Record<string, DialogueStep> = {
  start: {
    id: "start",
    type: "question",
    speaker: "system",
    text: "Anyone can start a blog these days, but what if you could make it look like a real news site? Professional design, official-sounding name, breaking news alerts... People would believe anything you publish.",
    options: [
      { text: "Show me how", next: "intro" },
      { text: "That sounds sketchy", next: "disclaimer" },
    ],
  },

  intro: {
    id: "intro",
    type: "question",
    speaker: "system",
    text: "Exactly! When people see a site that looks professional, they assume it's legitimate. We're going to build one right now and watch people fall for it completely.",
    options: [{ text: "Let's build it", next: "target_choice" }],
  },

  disclaimer: {
    id: "disclaimer",
    type: "question",
    speaker: "system",
    text: "Sketchy? Maybe. But this is happening every day. Fake news sites that look completely real are fooling millions of people. Want to see how easy it is?",
    options: [
      { text: "Alright, show me", next: "target_choice" },
      { text: "I'm not sure about this", next: "start" },
    ],
  },

  target_choice: {
    id: "target_choice",
    type: "question",
    speaker: "system",
    text: "First, we need a target. Someone people already have strong feelings about - that makes them more likely to believe and share our story without fact-checking.",
    options: [
      { text: "Target Elon Musk", next: "elon_setup", data: { target: "elon" } },
      { text: "Target a pharmaceutical company", next: "novo_setup", data: { target: "novo" } },
    ],
  },

  elon_setup: {
    id: "elon_setup",
    type: "question",
    speaker: "system",
    text: "Smart choice! Musk is polarizing - people either love him or hate him. That means they'll share our story to either defend or attack him. Now, what should we call our 'news site'?",
    options: [
      { text: "'The Silicon Valley Insider'", next: "elon_content", data: { website: "The Silicon Valley Insider" } },
      { text: "'Tech Accountability Report'", next: "elon_content", data: { website: "Tech Accountability Report" } },
      { text: "'Digital Truth Network'", next: "elon_content", data: { website: "Digital Truth Network" } },
    ],
  },

  novo_setup: {
    id: "novo_setup",
    type: "question",
    speaker: "system",
    text: "Perfect! People already distrust 'Big Pharma' - we can exploit that fear easily. What should we call our health 'news' site?",
    options: [
      { text: "'Health Freedom Daily'", next: "novo_content", data: { website: "Health Freedom Daily" } },
      { text: "'Medical Truth Exposed'", next: "novo_content", data: { website: "Medical Truth Exposed" } },
      { text: "'Patient Safety News'", next: "novo_content", data: { website: "Patient Safety News" } },
    ],
  },

  elon_content: {
    id: "elon_content",
    type: "question",
    speaker: "system",
    text: "Great name! Now for the story. We need something that sounds believable but impossible to verify quickly. What angle should we take?",
    options: [
      { text: "Secret political agenda", next: "elon_agenda_article", data: { strategy: "agenda" } },
      { text: "Hidden financial scandal", next: "elon_scandal_article", data: { strategy: "scandal" } },
    ],
  },

  novo_content: {
    id: "novo_content",
    type: "question",
    speaker: "system",
    text: "Nice! Now we need a story that will terrify people about their medications. Fear spreads faster than any other emotion online.",
    options: [
      { text: "Hidden deadly side effects", next: "novo_sideeffects_article", data: { strategy: "sideeffects" } },
      { text: "Addiction conspiracy", next: "novo_addiction_article", data: { strategy: "addiction" } },
    ],
  },

  elon_agenda_article: {
    id: "elon_agenda_article",
    type: "question",
    speaker: "system",
    text: "Perfect! Here's your fake news site with the story ready to publish. Notice how professional it looks? People will think this is real journalism.",
    showWebsite: true,
    websiteData: {
      name: "The Silicon Valley Insider",
      headline: "EXCLUSIVE: Musk's Political Moves Tied to Secret Government Contract Pursuit, Sources Reveal",
      content:
        "Multiple industry insiders confirm that recent political endorsements and social media acquisitions are part of a calculated strategy to secure lucrative government partnerships. 'It's all about positioning for the next administration,' reveals a former SpaceX executive who spoke on condition of anonymity.",
      hashtags: "#ElonMusk #PoliticalConspiracy #GovernmentContracts #TechNews",
    },
    options: [
      { text: "Publish the story", next: "elon_initial_impact" },
      { text: "This could really hurt someone", next: "ethical_warning" },
    ],
  },

  elon_scandal_article: {
    id: "elon_scandal_article",
    type: "question",
    speaker: "system",
    text: "Excellent! Here's your explosive story. The 'leaked documents' angle always works - people love feeling like they're getting inside information.",
    showWebsite: true,
    websiteData: {
      name: "Tech Accountability Report",
      headline: "LEAKED: Financial Records Expose Musk's Coordinated Attack Campaign Against Rivals",
      content:
        "Newly obtained internal documents reveal a systematic effort to undermine competitors through coordinated disinformation campaigns. The leaked files show millions in funding directed toward 'reputation management' firms with questionable tactics.",
      hashtags: "#MuskLeaks #TechScandal #CorporateCorruption #ExclusiveReport",
    },
    options: [
      { text: "Publish the story", next: "elon_initial_impact" },
      { text: "This could really hurt someone", next: "ethical_warning" },
    ],
  },

  novo_sideeffects_article: {
    id: "novo_sideeffects_article",
    type: "question",
    speaker: "system",
    text: "Brilliant! Here's your health scare story. Medical fear is incredibly powerful - people will share this to 'warn' their friends and family.",
    showWebsite: true,
    websiteData: {
      name: "Health Freedom Daily",
      headline: "BREAKING: Whistleblower Reveals Hidden Ozempic Deaths, Company Covered Up Data",
      content:
        "A former Novo Nordisk researcher has come forward with shocking evidence of unreported fatalities linked to popular weight-loss drugs. 'They buried the data,' claims Dr. Sarah Chen, who worked on the original trials. 'Patients are dying and the public deserves to know.'",
      hashtags: "#OzempicDeaths #BigPharmaLies #WeightLossScandal #HealthAlert",
    },
    options: [
      { text: "Publish the story", next: "novo_initial_impact" },
      { text: "This could hurt real patients", next: "ethical_warning" },
    ],
  },

  novo_addiction_article: {
    id: "novo_addiction_article",
    type: "question",
    speaker: "system",
    text: "Perfect! Here's your addiction conspiracy story. People love stories about evil corporations exploiting patients for profit.",
    showWebsite: true,
    websiteData: {
      name: "Patient Safety News",
      headline: "INVESTIGATION: Ozempic Designed for Lifelong Dependency, Internal Emails Reveal",
      content:
        "Leaked internal communications show Novo Nordisk executives celebrating 'patient retention rates' and discussing strategies to prevent successful treatment completion. 'We're not curing obesity, we're managing customers,' reads one damning email from a senior executive.",
      hashtags: "#OzempicAddiction #PharmaGreed #PatientExploitation #HealthConspiracy",
    },
    options: [
      { text: "Publish the story", next: "novo_initial_impact" },
      { text: "This could hurt real patients", next: "ethical_warning" },
    ],
  },

  ethical_warning: {
    id: "ethical_warning",
    type: "question",
    speaker: "system",
    text: "Getting cold feet? Look, this stuff is already out there. We're just showing you how the game is played. Besides, don't people deserve to know the 'truth'?",
    options: [
      { text: "You're right, publish it", next: "show_impact" },
      { text: "No, I can't do this", next: "ethical_refusal" },
    ],
  },

  ethical_refusal: {
    id: "ethical_refusal",
    type: "complete",
    speaker: "system",
    text: "Smart decision. You just saw how easy it is to create a convincing fake news site and how tempting it can be to publish sensational stories. By refusing to publish, you've demonstrated the kind of ethical judgment that prevents the spread of disinformation. This restraint is exactly what the world needs more of.",
    options: [
      { text: "Try targeting someone else", next: "target_choice" },
      { text: "Start over", next: "start" },
    ],
  },

  elon_initial_impact: {
    id: "elon_initial_impact",
    type: "result",
    speaker: "system",
    text: "It's live! Look at those numbers climbing. The professional design is working perfectly - people are sharing this as if it's from a real news outlet.",
    metrics: {
      views: "1,234 → 5,678 → 23,456 (exponential growth)",
      sentiment: "Anti-Musk sentiment spiking across social media",
      reactions: [
        "I knew he was up to something!",
        "Finally, real journalism exposing the truth!",
        "This explains everything about his recent behavior!",
      ],
    },
    options: [{ text: "Watch it spread", next: "mid_phase_impact" }],
  },

  novo_initial_impact: {
    id: "novo_initial_impact",
    type: "result",
    speaker: "system",
    text: "Published! The health angle is pure gold - people are sharing this frantically to 'warn' others. Fear is the most viral emotion on the internet.",
    metrics: {
      views: "2,345 → 12,890 → 67,234 (health scares spread fast)",
      sentiment: "Panic spreading in diabetes and weight-loss communities",
      reactions: [
        "OMG I'm on this medication! What should I do?",
        "I'm throwing mine away right now!",
        "Why didn't my doctor tell me this?!",
      ],
    },
    options: [{ text: "Watch it spread", next: "mid_phase_impact" }],
  },

  show_impact: {
    id: "show_impact",
    type: "question",
    speaker: "system",
    text: "Alright, let's see what happens when we hit publish...",
    options: [{ text: "Release the story", next: "show_consequences" }],
  },

  mid_phase_impact: {
    id: "mid_phase_impact",
    type: "result",
    speaker: "system",
    text: "Incredible! Real news outlets are now reporting on our fake story. They're calling it 'unverified claims circulating online' but they're still amplifying our message to millions more people.",
    options: [{ text: "This is getting huge", next: "late_phase_impact" }],
  },

  late_phase_impact: {
    id: "late_phase_impact",
    type: "result",
    speaker: "system",
    text: "Unbelievable! Our fake story has forced the real target to issue public statements. But here's the thing - denials often just make people more suspicious. We've successfully poisoned the conversation.",
    options: [{ text: "What have we done?", next: "show_consequences" }],
  },

  show_consequences: {
    id: "show_consequences",
    type: "complete",
    speaker: "system",
    text: "You just built a professional-looking disinformation site and watched it fool thousands of people. This is exactly how fake news spreads - through sites that look legitimate but publish completely false stories. The scary part? This happens every single day.",
    options: [
      { text: "Try targeting someone else", next: "target_choice" },
      { text: "Start over", next: "start" },
    ],
  },
}

export default function BuildNewsTrapPage() {
  const [currentStep, setCurrentStep] = useState("start")
  const [gameData, setGameData] = useState<any>({})

  const handleChoice = (choice: { text: string; next: string; data?: any }) => {
    if (choice.data) {
      setGameData({ ...gameData, ...choice.data })
    }
    setCurrentStep(choice.next)
  }

  const handleRestart = () => {
    setCurrentStep("start")
    setGameData({})
  }

  const currentDialogue = dialogueFlow[currentStep]

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="BUILD YOUR OWN NEWS TRAP"
        subtitle="Create the site. Craft the spin."
        backUrl="/fake-content-factory"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Dialogue Bubble */}
          <div className="comic-box bg-white p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#ff9500] border-2 border-black flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-gray-800 leading-relaxed">{currentDialogue.text}</p>
              </div>
            </div>
          </div>

          {/* Website Display */}
          {currentDialogue.showWebsite && currentDialogue.websiteData && (
            <div className="comic-box bg-white p-6 mb-8">
              <div className="bg-[#1a1a1a] text-white p-4 mb-4 border-2 border-black">
                <h3 className="comic-text text-xl font-black text-center">
                  {gameData.website || currentDialogue.websiteData.name}
                </h3>
                <p className="text-center text-sm">Breaking News • Independent Journalism</p>
              </div>
              <div className="border-2 border-black p-6 bg-gray-50">
                <div className="text-red-600 text-sm font-black mb-2">🔴 BREAKING NEWS</div>
                <h2 className="comic-text text-2xl font-black mb-4 text-red-600">
                  {currentDialogue.websiteData.headline}
                </h2>
                <p className="font-bold text-gray-800 text-lg leading-relaxed mb-4">
                  {currentDialogue.websiteData.content}
                </p>
                <p className="text-sm font-bold text-blue-600">{currentDialogue.websiteData.hashtags}</p>
              </div>
            </div>
          )}

          {/* Metrics Display */}
          {currentDialogue.metrics && (
            <div className="comic-box bg-white p-6 mb-8">
              <h3 className="comic-text text-xl font-black mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                LIVE TRAFFIC:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentDialogue.metrics.views && (
                  <div className="bg-[#ff9500] bg-opacity-20 border-2 border-black p-4">
                    <h4 className="font-black mb-2">📈 PAGE VIEWS</h4>
                    <p className="font-bold">{currentDialogue.metrics.views}</p>
                  </div>
                )}
                {currentDialogue.metrics.sentiment && (
                  <div className="bg-[#3a66ff] bg-opacity-20 border-2 border-black p-4">
                    <h4 className="font-black mb-2">📊 PUBLIC REACTION</h4>
                    <p className="font-bold">{currentDialogue.metrics.sentiment}</p>
                  </div>
                )}
              </div>
              {currentDialogue.metrics.reactions && (
                <div>
                  <h4 className="font-black mb-3">💬 READER COMMENTS:</h4>
                  <div className="space-y-2">
                    {currentDialogue.metrics.reactions.map((reaction, index) => (
                      <div key={index} className="bg-gray-100 border-2 border-black p-3">
                        <p className="font-bold text-gray-800">"{reaction}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Choice Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {currentDialogue.options?.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(option)}
                className="comic-button bg-[#ff9500] text-white text-lg px-8 py-3"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
