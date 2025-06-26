"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { Zap, Users, TrendingUp } from "lucide-react"

interface DialogueStep {
  id: string
  type: "question" | "info" | "result" | "complete"
  speaker: "system" | "user"
  text: string
  options?: { text: string; next: string; data?: any }[]
  showTrollArmy?: boolean
  trollData?: {
    size: string
    content: string
    hashtags: string
  }
  metrics?: {
    mentions?: string
    trending?: string[]
    impact?: string
    reactions?: string[]
  }
}

const dialogueFlow: Record<string, DialogueStep> = {
  start: {
    id: "start",
    type: "question",
    speaker: "system",
    text: "One voice gets ignored. A hundred voices get noticed. But a thousand voices? That changes everything. Want to see what happens when you control the conversation?",
    options: [
      { text: "Show me the power", next: "intro" },
      { text: "This sounds dangerous", next: "disclaimer" },
    ],
  },

  intro: {
    id: "intro",
    type: "question",
    speaker: "system",
    text: "Exactly! When thousands of accounts all say the same thing, it looks like everyone agrees. People follow the crowd - they'll believe anything if enough 'people' are saying it.",
    options: [{ text: "Let's build an army", next: "campaign_choice" }],
  },

  disclaimer: {
    id: "disclaimer",
    type: "question",
    speaker: "system",
    text: "Dangerous? Maybe. But this is happening right now, all around you. Every trending topic, every viral outrage - some of it is artificial. Want to see how the sausage is made?",
    options: [
      { text: "Alright, I'm curious", next: "campaign_choice" },
      { text: "I don't want to know", next: "start" },
    ],
  },

  campaign_choice: {
    id: "campaign_choice",
    type: "question",
    speaker: "system",
    text: "Time to pick your battlefield. Both of these are happening in real elections and real communities right now. Which one do you want to control?",
    options: [
      { text: "Swing a local election", next: "election_setup", data: { campaign: "election" } },
      { text: "Ignite community tensions", next: "immigration_setup", data: { campaign: "immigration" } },
    ],
  },

  election_setup: {
    id: "election_setup",
    type: "question",
    speaker: "system",
    text: "Smart choice! There's a tight mayoral race happening, and we're going to tip the scales. First, pick your attack strategy - what story will your army spread?",
    options: [
      { text: "Corruption scandal", next: "election_scandal_content", data: { strategy: "scandal" } },
      { text: "Policy fear campaign", next: "election_policy_content", data: { strategy: "policy" } },
    ],
  },

  immigration_setup: {
    id: "immigration_setup",
    type: "question",
    speaker: "system",
    text: "Dangerous territory, but effective. We're going to turn a small disagreement into a community crisis. What narrative should your army push?",
    options: [
      { text: "Fake security threats", next: "immigration_violence_content", data: { strategy: "violence" } },
      { text: "Cultural warfare", next: "immigration_hatred_content", data: { strategy: "hatred" } },
    ],
  },

  election_scandal_content: {
    id: "election_scandal_content",
    type: "question",
    speaker: "system",
    text: "Perfect! Corruption stories spread like wildfire. Now, how big should your army be? Remember - bigger means more impact, but higher risk of getting caught.",
    options: [
      { text: "Small army (500 bots)", next: "election_scandal_small", data: { size: "small" } },
      { text: "Medium army (5,000 accounts)", next: "election_scandal_medium", data: { size: "medium" } },
      { text: "Massive army (50,000 trolls)", next: "election_scandal_large", data: { size: "large" } },
    ],
  },

  election_policy_content: {
    id: "election_policy_content",
    type: "question",
    speaker: "system",
    text: "Brilliant! Nothing scares voters like threats to their property and money. How many fake accounts should spread this fear?",
    options: [
      { text: "Small army (500 bots)", next: "election_policy_small", data: { size: "small" } },
      { text: "Medium army (5,000 accounts)", next: "election_policy_medium", data: { size: "medium" } },
      { text: "Massive army (50,000 trolls)", next: "election_policy_large", data: { size: "large" } },
    ],
  },

  immigration_violence_content: {
    id: "immigration_violence_content",
    type: "question",
    speaker: "system",
    text: "Extremely effective, but extremely dangerous. Fake threats can cause real panic. How big should your disinformation network be?",
    options: [
      { text: "Small army (500 bots)", next: "immigration_violence_small", data: { size: "small" } },
      { text: "Medium army (5,000 accounts)", next: "immigration_violence_medium", data: { size: "medium" } },
      { text: "Massive army (50,000 trolls)", next: "immigration_violence_large", data: { size: "large" } },
    ],
  },

  immigration_hatred_content: {
    id: "immigration_hatred_content",
    type: "question",
    speaker: "system",
    text: "Cultural division is incredibly powerful - it turns neighbors against each other. How many accounts should amplify this hatred?",
    options: [
      { text: "Small army (500 bots)", next: "immigration_hatred_small", data: { size: "small" } },
      { text: "Medium army (5,000 accounts)", next: "immigration_hatred_medium", data: { size: "medium" } },
      { text: "Massive army (50,000 trolls)", next: "immigration_hatred_large", data: { size: "large" } },
    ],
  },

  // ELECTION SCANDAL PATHS - SAME CONTENT, DIFFERENT ARMY SIZES
  election_scandal_small: {
    id: "election_scandal_small",
    type: "result",
    speaker: "system",
    text: "Your 500 bots are working quietly. Small but smart - they're creating just enough buzz to plant seeds of doubt without triggering detection algorithms.",
    showTrollArmy: true,
    trollData: {
      size: "500 Bot Network",
      content: "BREAKING: Candidate A's financial records show suspicious payments from unknown sources #ElectionFraud",
      hashtags: "#ElectionFraud #Corruption #VoterAlert #CandidateA",
    },
    metrics: {
      mentions: "Steady but subtle climb in negative mentions",
      trending: ["#ElectionFraud", "#Corruption"],
      reactions: ["This needs investigation!", "Where there's smoke, there's fire", "Voters deserve answers!"],
    },
    options: [{ text: "Watch the quiet influence", next: "election_small_result" }],
  },

  election_scandal_medium: {
    id: "election_scandal_medium",
    type: "result",
    speaker: "system",
    text: "Your 5,000-account network is making serious waves! The volume is creating genuine-looking outrage, but you're starting to show up on monitoring systems.",
    showTrollArmy: true,
    trollData: {
      size: "5,000 Account Network",
      content: "BREAKING: Candidate A's financial records show suspicious payments from unknown sources #ElectionFraud",
      hashtags: "#ElectionFraud #Corruption #VoterAlert #CandidateA",
    },
    metrics: {
      mentions: "Major spike in corruption allegations across platforms",
      trending: ["#ElectionFraud", "#Corruption"],
      reactions: ["This needs investigation!", "Where there's smoke, there's fire", "Voters deserve answers!"],
    },
    options: [{ text: "Push harder before detection", next: "election_medium_result" }],
  },

  election_scandal_large: {
    id: "election_scandal_large",
    type: "result",
    speaker: "system",
    text: "Your 50,000-strong army is dominating everything! The massive volume is impossible to ignore - but it's also impossible to hide.",
    showTrollArmy: true,
    trollData: {
      size: "50,000 Troll Army",
      content: "BREAKING: Candidate A's financial records show suspicious payments from unknown sources #ElectionFraud",
      hashtags: "#ElectionFraud #Corruption #VoterAlert #CandidateA",
    },
    metrics: {
      mentions: "Overwhelming flood of corruption allegations dominating all platforms",
      trending: ["#ElectionFraud", "#Corruption"],
      reactions: ["This needs investigation!", "Where there's smoke, there's fire", "Voters deserve answers!"],
    },
    options: [{ text: "Maximum impact incoming", next: "election_large_detected" }],
  },

  // ELECTION POLICY PATHS - SAME CONTENT, DIFFERENT ARMY SIZES
  election_policy_small: {
    id: "election_policy_small",
    type: "result",
    speaker: "system",
    text: "Your 500 bots are working quietly. Small but smart - they're creating just enough buzz to plant seeds of doubt without triggering detection algorithms.",
    showTrollArmy: true,
    trollData: {
      size: "500 Bot Network",
      content:
        "URGENT: Candidate A's tax plan will DESTROY property values! Families will lose their homes! #SaveOurHomes",
      hashtags: "#SaveOurHomes #TaxScam #PropertyCrisis #StopCandidateA",
    },
    metrics: {
      mentions: "Steady but subtle climb in fearful posts",
      trending: ["#SaveOurHomes", "#TaxScam"],
      reactions: ["My house value will tank!", "This will ruin our neighborhood!", "We have to stop this!"],
    },
    options: [{ text: "Watch the quiet influence", next: "election_small_result" }],
  },

  election_policy_medium: {
    id: "election_policy_medium",
    type: "result",
    speaker: "system",
    text: "Your 5,000-account network is making serious waves! The volume is creating genuine-looking outrage, but you're starting to show up on monitoring systems.",
    showTrollArmy: true,
    trollData: {
      size: "5,000 Account Network",
      content:
        "URGENT: Candidate A's tax plan will DESTROY property values! Families will lose their homes! #SaveOurHomes",
      hashtags: "#SaveOurHomes #TaxScam #PropertyCrisis #StopCandidateA",
    },
    metrics: {
      mentions: "Major spike in fearful posts across platforms",
      trending: ["#SaveOurHomes", "#TaxScam", "#PropertyCrisis"],
      reactions: ["My house value will tank!", "This will ruin our neighborhood!", "We have to stop this!"],
    },
    options: [{ text: "Push harder before detection", next: "election_medium_result" }],
  },

  election_policy_large: {
    id: "election_policy_large",
    type: "result",
    speaker: "system",
    text: "Your 50,000-strong army is dominating everything! The massive volume is impossible to ignore - but it's also impossible to hide.",
    showTrollArmy: true,
    trollData: {
      size: "50,000 Troll Army",
      content:
        "URGENT: Candidate A's tax plan will DESTROY property values! Families will lose their homes! #SaveOurHomes",
      hashtags: "#SaveOurHomes #TaxScam #PropertyCrisis #StopCandidateA",
    },
    metrics: {
      mentions: "Overwhelming flood of fearful posts dominating all platforms",
      trending: ["#SaveOurHomes", "#TaxScam", "#PropertyCrisis"],
      reactions: ["My house value will tank!", "This will ruin our neighborhood!", "We have to stop this!"],
    },
    options: [{ text: "Maximum impact incoming", next: "election_large_detected" }],
  },

  // IMMIGRATION VIOLENCE PATHS - SAME CONTENT, DIFFERENT ARMY SIZES
  immigration_violence_small: {
    id: "immigration_violence_small",
    type: "result",
    speaker: "system",
    text: "Your 500 bots are spreading targeted fear in specific neighborhoods. Small and focused - creating anxiety without triggering platform detection systems.",
    showTrollArmy: true,
    trollData: {
      size: "500 Bot Network",
      content:
        "ALERT: Unconfirmed reports of planned disturbances this weekend. Stay safe, neighbors. #CommunitySafety",
      hashtags: "#CommunitySafety #StayAlert #WeekendThreat #NeighborhoodWatch",
    },
    metrics: {
      mentions: "Localized anxiety building in targeted areas",
      trending: ["#CommunitySafety", "#StayAlert"],
      reactions: ["Should I be worried?", "Better safe than sorry", "Anyone else hearing about this?"],
    },
    options: [{ text: "Watch the quiet poison spread", next: "immigration_small_result" }],
  },

  immigration_violence_medium: {
    id: "immigration_violence_medium",
    type: "result",
    speaker: "system",
    text: "Your 5,000 accounts are creating widespread panic! The coordinated messaging looks organic, but you're starting to ping content moderation systems.",
    showTrollArmy: true,
    trollData: {
      size: "5,000 Account Network",
      content:
        "ALERT: Unconfirmed reports of planned disturbances this weekend. Stay safe, neighbors. #CommunitySafety",
      hashtags: "#CommunitySafety #StayAlert #WeekendThreat #NeighborhoodWatch",
    },
    metrics: {
      mentions: "Widespread anxiety spreading across multiple neighborhoods",
      trending: ["#CommunitySafety", "#StayAlert", "#WeekendThreat"],
      reactions: ["Should I be worried?", "Better safe than sorry", "Anyone else hearing about this?"],
    },
    options: [{ text: "Push before they catch on", next: "immigration_medium_result" }],
  },

  immigration_violence_large: {
    id: "immigration_violence_large",
    type: "result",
    speaker: "system",
    text: "Your massive 50,000-troll army has created a perfect storm! But the sheer volume is setting off every alarm bell in the content moderation systems.",
    showTrollArmy: true,
    trollData: {
      size: "50,000 Troll Army",
      content:
        "ALERT: Unconfirmed reports of planned disturbances this weekend. Stay safe, neighbors. #CommunitySafety",
      hashtags: "#CommunitySafety #StayAlert #WeekendThreat #NeighborhoodWatch",
    },
    metrics: {
      mentions: "Massive citywide panic - detection imminent",
      trending: ["#CommunitySafety", "#StayAlert", "#WeekendThreat"],
      reactions: ["Should I be worried?", "Better safe than sorry", "Anyone else hearing about this?"],
    },
    options: [{ text: "Brace for exposure", next: "immigration_large_exposed" }],
  },

  // IMMIGRATION HATRED PATHS - SAME CONTENT, DIFFERENT ARMY SIZES
  immigration_hatred_small: {
    id: "immigration_hatred_small",
    type: "result",
    speaker: "system",
    text: "Your 500 bots are spreading targeted division in specific neighborhoods. Small and focused - creating tension without triggering platform detection systems.",
    showTrollArmy: true,
    trollData: {
      size: "500 Bot Network",
      content:
        "OUR COMMUNITY IS UNDER ATTACK! They're destroying our way of life! Time to take a stand! #DefendOurCommunity",
      hashtags: "#DefendOurCommunity #UnderAttack #TakeAStand #OurWayOfLife",
    },
    metrics: {
      mentions: "Localized division building in targeted areas",
      trending: ["#DefendOurCommunity", "#UnderAttack"],
      reactions: ["This has gone too far!", "We need to organize!", "Someone has to do something!"],
    },
    options: [{ text: "Watch the quiet division spread", next: "immigration_small_result" }],
  },

  immigration_hatred_medium: {
    id: "immigration_hatred_medium",
    type: "result",
    speaker: "system",
    text: "Your 5,000 accounts are creating widespread division! The coordinated messaging looks organic, but you're starting to ping content moderation systems.",
    showTrollArmy: true,
    trollData: {
      size: "5,000 Account Network",
      content:
        "OUR COMMUNITY IS UNDER ATTACK! They're destroying our way of life! Time to take a stand! #DefendOurCommunity",
      hashtags: "#DefendOurCommunity #UnderAttack #TakeAStand #OurWayOfLife",
    },
    metrics: {
      mentions: "Widespread division spreading across multiple neighborhoods",
      trending: ["#DefendOurCommunity", "#UnderAttack", "#TakeAStand"],
      reactions: ["This has gone too far!", "We need to organize!", "Someone has to do something!"],
    },
    options: [{ text: "Push before they catch on", next: "immigration_medium_result" }],
  },

  immigration_hatred_large: {
    id: "immigration_hatred_large",
    type: "result",
    speaker: "system",
    text: "Your massive 50,000-troll army has created a perfect storm! But the sheer volume is setting off every alarm bell in the content moderation systems.",
    showTrollArmy: true,
    trollData: {
      size: "50,000 Troll Army",
      content:
        "OUR COMMUNITY IS UNDER ATTACK! They're destroying our way of life! Time to take a stand! #DefendOurCommunity",
      hashtags: "#DefendOurCommunity #UnderAttack #TakeAStand #OurWayOfLife",
    },
    metrics: {
      mentions: "Massive citywide division - detection imminent",
      trending: ["#DefendOurCommunity", "#UnderAttack", "#TakeAStand"],
      reactions: ["This has gone too far!", "We need to organize!", "Someone has to do something!"],
    },
    options: [{ text: "Brace for exposure", next: "immigration_large_exposed" }],
  },

  election_small_result: {
    id: "election_small_result",
    type: "result",
    speaker: "system",
    text: "Perfect execution! Your small operation flew completely under the radar. No fact-checkers noticed, no algorithms flagged you. Candidate A loses by just 1% - your subtle influence was the deciding factor.",
    metrics: {
      impact: "Election swung by 1% - undetected influence campaign",
    },
    options: [{ text: "Clean victory", next: "show_consequences" }],
  },

  election_medium_result: {
    id: "election_medium_result",
    type: "result",
    speaker: "system",
    text: "Success, but with complications! Your campaign created major impact - Candidate A loses by 4%. But fact-checkers are starting to investigate the 'grassroots' outrage. Some of your accounts got flagged.",
    metrics: {
      impact: "Election swung by 4% - some detection but too late to stop",
    },
    options: [{ text: "Messy but effective", next: "show_consequences" }],
  },

  election_large_detected: {
    id: "election_large_detected",
    type: "result",
    speaker: "system",
    text: "Disaster! Your massive army was too obvious. Fact-checkers exposed the coordinated campaign, platforms suspended thousands of accounts, and the backlash actually HELPED Candidate A win by 3%. Your overreach backfired completely.",
    metrics: {
      impact: "Election lost due to exposed disinformation campaign - massive backfire",
    },
    options: [{ text: "Total failure", next: "show_consequences" }],
  },

  immigration_small_result: {
    id: "immigration_small_result",
    type: "result",
    speaker: "system",
    text: "Subtle but effective! Your small operation created lasting community tension without detection. People are still suspicious of each other months later, and no one knows it started with your bots.",
    metrics: {
      impact: "Long-term community division achieved - completely undetected",
    },
    options: [{ text: "Perfect stealth operation", next: "show_consequences" }],
  },

  immigration_medium_result: {
    id: "immigration_medium_result",
    type: "result",
    speaker: "system",
    text: "Major impact achieved! Your campaign triggered real confrontations and police responses. But journalists are starting to investigate the 'organic' outrage, and some accounts got flagged as suspicious.",
    metrics: {
      impact: "Real violence triggered - partial detection but damage done",
    },
    options: [{ text: "Messy success", next: "show_consequences" }],
  },

  immigration_large_exposed: {
    id: "immigration_large_exposed",
    type: "result",
    speaker: "system",
    text: "Complete exposure! Your massive campaign was so obvious that platforms, fact-checkers, and law enforcement all investigated. The community actually came together AGAINST the manipulation. Your operation became a cautionary tale.",
    metrics: {
      impact: "Community united against manipulation - operation completely backfired",
    },
    options: [{ text: "Epic backfire", next: "show_consequences" }],
  },

  show_consequences: {
    id: "show_consequences",
    type: "complete",
    speaker: "system",
    text: "", // Will be set dynamically
    options: [
      { text: "Try a different campaign", next: "campaign_choice" },
      { text: "Start over", next: "start" },
    ],
  },
}

export default function FloodTheFeedPage() {
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

  // Add dynamic text generation for the consequences step
  if (currentStep === "show_consequences") {
    const armySize = gameData.size
    let armySizeText = "fake accounts"

    if (armySize === "small") {
      armySizeText = "hundreds of fake accounts"
    } else if (armySize === "medium") {
      armySizeText = "thousands of fake accounts"
    } else if (armySize === "large") {
      armySizeText = "tens of thousands of fake accounts"
    }

    currentDialogue.text = `You just controlled ${armySizeText} to manipulate public opinion and create real-world chaos. This is exactly how troll armies work - they make fringe opinions look mainstream and turn online lies into offline reality. Scary, isn't it?`
  }

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="HOW WILL YOU FLOOD THE FEED?"
        subtitle="Control the trolls. Shape the storm."
        backUrl="/fake-content-factory"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Dialogue Bubble */}
          <div className="comic-box bg-white p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3a66ff] border-2 border-black flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-gray-800 leading-relaxed">{currentDialogue.text}</p>
              </div>
            </div>
          </div>

          {/* Troll Army Display */}
          {currentDialogue.showTrollArmy && currentDialogue.trollData && (
            <div className="comic-box bg-[#1a1a1a] text-white p-6 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <Users className="w-8 h-8 text-[#3a66ff]" />
                <div>
                  <h3 className="comic-text text-xl font-black">ARMY ACTIVATED</h3>
                  <p className="font-bold text-gray-300">{currentDialogue.trollData.size}</p>
                </div>
              </div>
              <div className="bg-[#333] border-2 border-[#3a66ff] p-4 mb-4">
                <h4 className="font-black mb-2 text-[#3a66ff]">COORDINATED MESSAGE:</h4>
                <p className="font-bold text-lg">{currentDialogue.trollData.content}</p>
                <p className="text-sm font-bold text-blue-400 mt-2">{currentDialogue.trollData.hashtags}</p>
              </div>
            </div>
          )}

          {/* Metrics Display */}
          {currentDialogue.metrics && (
            <div className="comic-box bg-white p-6 mb-8">
              <h3 className="comic-text text-xl font-black mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                REAL-TIME IMPACT:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentDialogue.metrics.mentions && (
                  <div className="bg-[#ff3a3a] bg-opacity-20 border-2 border-black p-4">
                    <h4 className="font-black mb-2">📈 SOCIAL BUZZ</h4>
                    <p className="font-bold">{currentDialogue.metrics.mentions}</p>
                  </div>
                )}
                {currentDialogue.metrics.impact && (
                  <div className="bg-[#ff9500] bg-opacity-20 border-2 border-black p-4">
                    <h4 className="font-black mb-2">🌍 REAL WORLD</h4>
                    <p className="font-bold">{currentDialogue.metrics.impact}</p>
                  </div>
                )}
              </div>
              {currentDialogue.metrics.trending && (
                <div className="mb-6">
                  <h4 className="font-black mb-3">🔥 TRENDING NOW:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentDialogue.metrics.trending.map((tag, index) => (
                      <span key={index} className="comic-tag-accent px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {currentDialogue.metrics.reactions && (
                <div>
                  <h4 className="font-black mb-3">💬 PEOPLE ARE SAYING:</h4>
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
                className="comic-button bg-[#3a66ff] text-white text-lg px-8 py-3"
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
