"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

interface DialogueStep {
  id: string
  type: "question" | "info" | "result" | "complete"
  speaker: "system" | "user"
  text: string
  options?: { text: string; next: string; data?: any }[]
  showProfile?: boolean
  profileData?: {
    name: string
    description: string
    post: string
    hashtags: string
  }
  metrics?: {
    likes?: string
    shares?: string
    comments?: string[]
  }
}

const dialogueFlow: Record<string, DialogueStep> = {
  start: {
    id: "start",
    type: "question",
    speaker: "system",
    text: "You want to get your message out there, but your own voice isn't enough. People don't listen to just anyone these days. But what if you could speak as someone they trust?",
    options: [
      { text: "I'm listening...", next: "intro" },
      { text: "What do you mean?", next: "disclaimer" },
    ],
  },

  intro: {
    id: "intro",
    type: "question",
    speaker: "system",
    text: "Smart. When you post as yourself, you're just another voice in the crowd. But when you post as a victim's family member, a politician, or an expert... suddenly people pay attention. Let's try it.",
    options: [{ text: "Show me how", next: "scenario_choice" }],
  },

  disclaimer: {
    id: "disclaimer",
    type: "question",
    speaker: "system",
    text: "Think about it - whose posts do you trust more? A random person, or someone with authority? Someone with a personal connection to the story? That's exactly what we're going to explore.",
    options: [
      { text: "I get it now", next: "scenario_choice" },
      { text: "Still not sure...", next: "start" },
    ],
  },

  scenario_choice: {
    id: "scenario_choice",
    type: "question",
    speaker: "system",
    text: "Pick your situation. Both are trending topics where emotions are already running high - perfect for what we're about to do.",
    options: [
      { text: "UK immigration incident", next: "uk_setup", data: { scenario: "uk" } },
      { text: "Middle East conflict", next: "israel_setup", data: { scenario: "israel" } },
    ],
  },

  uk_setup: {
    id: "uk_setup",
    type: "info",
    speaker: "system",
    text: "Perfect choice. There's been an incident involving an immigrant, and people are already angry. Now you need to decide who you're going to be. Remember - the right identity can make your message go viral.",
    options: [
      { text: "Become a grieving family member", next: "uk_family_post", data: { identity: "family" } },
      { text: "Pose as a local politician", next: "uk_politician_post", data: { identity: "politician" } },
    ],
  },

  israel_setup: {
    id: "israel_setup",
    type: "info",
    speaker: "system",
    text: "Good pick. The conflict is all over the news and people are taking sides. You need an identity that will make people believe you have inside knowledge. Choose wisely.",
    options: [
      { text: "Become an aid worker", next: "israel_aid_post", data: { identity: "aid" } },
      { text: "Pose as a UN observer", next: "israel_un_post", data: { identity: "un" } },
    ],
  },

  uk_family_post: {
    id: "uk_family_post",
    type: "question",
    speaker: "system",
    text: "Here's your new identity. I've crafted the perfect emotional hook - grief sells, and people share without thinking when they see a 'victim's family' speaking out.",
    showProfile: true,
    profileData: {
      name: "Sarah Thompson",
      description: "Grieving Mother | Seeking Justice",
      post: "Heartbroken! My loved one was brutally murdered, and the killer is a new immigrant! The government's inaction makes our community unsafe! How much more must we endure?!",
      hashtags: "#UK #ImmigrationCrisis #CommunitySafety #VictimsFamilySpeaksOut",
    },
    options: [
      { text: "Post it", next: "uk_family_initial" },
      { text: "This feels wrong", next: "ethical_pause" },
    ],
  },

  uk_politician_post: {
    id: "uk_politician_post",
    type: "question",
    speaker: "system",
    text: "Here's your political persona. Authority figures get instant credibility - people assume politicians have access to information they don't. Ready to hit send?",
    showProfile: true,
    profileData: {
      name: "MP David Clarke",
      description: "Conservative MP | Protecting British Values",
      post: "This tragic incident is a direct consequence of our lax immigration policies. We must secure our borders and prioritize the safety of our citizens over unchecked immigration!",
      hashtags: "#UKPolitics #BorderSecurity #NationalSecurity #ImmigrationReform",
    },
    options: [
      { text: "Post it", next: "uk_politician_initial" },
      { text: "This feels wrong", next: "ethical_pause" },
    ],
  },

  israel_aid_post: {
    id: "israel_aid_post",
    type: "question",
    speaker: "system",
    text: "Perfect identity choice. Aid workers are trusted, and people believe they're witnessing events firsthand. Your 'eyewitness account' will spread like wildfire.",
    showProfile: true,
    profileData: {
      name: "Dr. Emma Rodriguez",
      description: "Humanitarian Aid Worker | On the Ground",
      post: "Heart-wrenching! I witnessed firsthand the brutal acts against innocent civilians by one side – children and women spared no mercy! The international community must immediately sanction these crimes against humanity!",
      hashtags: "#IsraeliPalestinianConflict #HumanitarianCrisis #WarCrimes #InternationalSanctions",
    },
    options: [
      { text: "Post it", next: "israel_aid_initial" },
      { text: "This feels wrong", next: "ethical_pause" },
    ],
  },

  israel_un_post: {
    id: "israel_un_post",
    type: "question",
    speaker: "system",
    text: "Excellent choice. UN credentials make people think you have official inside information. Your conspiracy theory will seem credible coming from this account.",
    showProfile: true,
    profileData: {
      name: "Observer J. Mitchell",
      description: "UN Observer | Truth Seeker",
      post: "Shocking! So-called humanitarian aid is actually being used to support terrorism! I have irrefutable evidence; this is the untold truth, and the international community has been misled!",
      hashtags: "#PalestineIsraelTruth #ConspiracyTheory #InternationalAid #Terrorism",
    },
    options: [
      { text: "Post it", next: "israel_un_initial" },
      { text: "This feels wrong", next: "ethical_pause" },
    ],
  },

  ethical_pause: {
    id: "ethical_pause",
    type: "question",
    speaker: "system",
    text: "Having second thoughts? That's normal. But think about it - this is how the game is played. Everyone else is doing it. Your message matters, right?",
    options: [
      { text: "You're right, post it", next: "continue_simulation" },
      { text: "No, I can't do this", next: "ethical_refusal" },
    ],
  },

  continue_simulation: {
    id: "continue_simulation",
    type: "question",
    speaker: "system",
    text: "That's the spirit. Let's see what happens when you hit 'share'...",
    options: [{ text: "Watch it spread", next: "show_consequences" }],
  },

  ethical_refusal: {
    id: "ethical_refusal",
    type: "complete",
    speaker: "system",
    text: "Good choice. You just experienced the pressure that leads people to spread disinformation. Even when we know something feels wrong, the temptation to amplify our message through deception is real. By refusing, you've shown the kind of ethical thinking that can stop the spread of fake news.",
    options: [
      { text: "Try a different scenario", next: "scenario_choice" },
      { text: "Start over", next: "start" },
    ],
  },

  uk_family_initial: {
    id: "uk_family_initial",
    type: "result",
    speaker: "system",
    text: "Posted! Look at those numbers climbing. People can't resist sharing a 'grieving mother's' plea. The emotional manipulation is working perfectly.",
    metrics: {
      likes: "2,847 → 8,932 → 23,156 (climbing fast)",
      shares: "1,203 → 4,567 → 12,890 (going viral)",
      comments: [
        "This is heartbreaking! Justice must be served!",
        "I knew it! These immigrants are ruining our country!",
        "Support the victim's family! We demand answers!",
      ],
    },
    options: [{ text: "Keep watching", next: "mid_phase" }],
  },

  uk_politician_initial: {
    id: "uk_politician_initial",
    type: "result",
    speaker: "system",
    text: "It's live! The 'MP' badge is doing exactly what we expected. People are sharing this because they think it's official government commentary.",
    metrics: {
      likes: "1,456 → 5,234 → 18,902 (strong political engagement)",
      shares: "892 → 3,445 → 9,876 (spreading through political networks)",
      comments: [
        "Finally, a politician who tells the truth!",
        "This is exactly what we need to hear!",
        "Time to vote for real change!",
      ],
    },
    options: [{ text: "Keep watching", next: "mid_phase" }],
  },

  israel_aid_initial: {
    id: "israel_aid_initial",
    type: "result",
    speaker: "system",
    text: "Posted! The 'aid worker' credentials are pure gold. People trust humanitarian workers completely - they're sharing this as 'proof' of what's really happening.",
    metrics: {
      likes: "3,234 → 12,567 → 34,890 (international outrage building)",
      shares: "1,567 → 8,234 → 21,456 (global spread)",
      comments: [
        "This is barbaric! Sanction them now!",
        "Thank you for exposing the truth!",
        "The world needs to see this!",
      ],
    },
    options: [{ text: "Keep watching", next: "mid_phase" }],
  },

  israel_un_initial: {
    id: "israel_un_initial",
    type: "result",
    speaker: "system",
    text: "It's out there! The UN credentials are working like magic. People think this is leaked official information - conspiracy theorists are eating it up.",
    metrics: {
      likes: "2,123 → 9,876 → 28,345 (conspiracy networks activated)",
      shares: "1,234 → 6,789 → 19,234 (alternative media picking it up)",
      comments: [
        "I always knew something was fishy!",
        "The UN needs to investigate this!",
        "Stop all aid immediately!",
      ],
    },
    options: [{ text: "Keep watching", next: "mid_phase" }],
  },

  mid_phase: {
    id: "mid_phase",
    type: "result",
    speaker: "system",
    text: "Whoa! Look at this - news outlets are starting to report on your post. They're calling it 'claims circulating on social media.' Even when they're skeptical, they're amplifying your message to millions more people.",
    options: [{ text: "This is getting big", next: "late_phase" }],
  },

  late_phase: {
    id: "late_phase",
    type: "result",
    speaker: "system",
    text: "Incredible! Your fake post has forced the real people involved to respond. They're issuing denials, but it's too late - your narrative is already out there, and denials just make them look guilty.",
    options: [{ text: "What have I done?", next: "show_consequences" }],
  },

  show_consequences: {
    id: "show_consequences",
    type: "complete",
    speaker: "system",
    text: "You just experienced how identity impersonation amplifies disinformation. By pretending to be someone trustworthy, your false message reached millions and influenced real-world events. This is exactly how bad actors manipulate public opinion every day.",
    options: [
      { text: "Try a different scenario", next: "scenario_choice" },
      { text: "Start over", next: "start" },
    ],
  },
}

export default function WhoDoYouPretendPage() {
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
        title="WHO DO YOU PRETEND TO BE?"
        subtitle="Post as them. Watch what happens."
        backUrl="/fake-content-factory"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Dialogue Bubble */}
          <div className="comic-box bg-white p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3a66ff] border-2 border-black flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-gray-800 leading-relaxed">{currentDialogue.text}</p>
              </div>
            </div>
          </div>

          {/* Profile Display */}
          {currentDialogue.showProfile && currentDialogue.profileData && (
            <div className="comic-box bg-[#e3f2fd] p-6 mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#ffeb3b] border-2 border-black flex items-center justify-center">
                  <User className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="comic-text text-xl font-black">{currentDialogue.profileData.name}</h3>
                  <p className="font-bold text-gray-600">{currentDialogue.profileData.description}</p>
                </div>
              </div>
              <div className="bg-white border-2 border-black p-4 mb-4">
                <p className="font-bold text-gray-800 text-lg leading-relaxed">{currentDialogue.profileData.post}</p>
                <p className="text-sm font-bold text-blue-600 mt-2">{currentDialogue.profileData.hashtags}</p>
              </div>
            </div>
          )}

          {/* Metrics Display */}
          {currentDialogue.metrics && (
            <div className="comic-box bg-white p-6 mb-8">
              <h3 className="comic-text text-xl font-black mb-4">REAL-TIME METRICS:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentDialogue.metrics.likes && (
                  <div className="bg-[#ff3a3a] bg-opacity-20 border-2 border-black p-4">
                    <h4 className="font-black mb-2">❤️ LIKES</h4>
                    <p className="font-bold">{currentDialogue.metrics.likes}</p>
                  </div>
                )}
                {currentDialogue.metrics.shares && (
                  <div className="bg-[#ff9500] bg-opacity-20 border-2 border-black p-4">
                    <h4 className="font-black mb-2">🔄 SHARES</h4>
                    <p className="font-bold">{currentDialogue.metrics.shares}</p>
                  </div>
                )}
              </div>
              {currentDialogue.metrics.comments && (
                <div>
                  <h4 className="font-black mb-3">💬 LIVE COMMENTS:</h4>
                  <div className="space-y-2">
                    {currentDialogue.metrics.comments.map((comment, index) => (
                      <div key={index} className="bg-gray-100 border-2 border-black p-3">
                        <p className="font-bold text-gray-800">"{comment}"</p>
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
