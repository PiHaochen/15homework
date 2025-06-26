"use client"

import { useState } from "react"
import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { Share, MessageCircle, EyeOff, Search, RotateCcw } from "lucide-react"

const scenarios = [
  {
    id: 1,
    title: "SOCIAL MEDIA VIRAL MESSAGE",
    content:
      "You see a message on social media: 'URGENT NOTICE! A certain brand of milk has been detected with harmful substances. Please stop drinking immediately and share to warn others!'",
    options: [
      {
        id: "share",
        text: "Share immediately",
        icon: Share,
        personality: "EMOTIONAL_AMPLIFIER",
        description: "You're easily triggered by urgent information and tend to spread quickly to protect others",
      },
      {
        id: "comment",
        text: "Ask for source",
        icon: MessageCircle,
        personality: "CALM_INVESTIGATOR",
        description: "You prefer to understand more information and background before spreading",
      },
      {
        id: "ignore",
        text: "Ignore it",
        icon: EyeOff,
        personality: "AVOIDANT_OBSERVER",
        description: "You tend to avoid getting involved in potential controversies or uncertain information",
      },
      {
        id: "verify",
        text: "Verify first",
        icon: Search,
        personality: "ACTION_ANALYST",
        description: "You habitually verify through multiple sources to ensure information accuracy",
      },
    ],
  },
  {
    id: 2,
    title: "WORKPLACE GROUP CHAT LEAK",
    content:
      "Someone in your work group sends: 'Inside info - company will have major layoffs next month. Everyone should prepare resumes! This info is absolutely reliable!'",
    options: [
      {
        id: "share",
        text: "Tell other colleagues",
        icon: Share,
        personality: "EMOTIONAL_AMPLIFIER",
        description: "You believe this important information should be known by more people",
      },
      {
        id: "comment",
        text: "Ask for source",
        icon: MessageCircle,
        personality: "CALM_INVESTIGATOR",
        description: "You want to understand the specific source and credibility of the message",
      },
      {
        id: "ignore",
        text: "Pretend not to see",
        icon: EyeOff,
        personality: "AVOIDANT_OBSERVER",
        description: "You don't want to participate in discussions that might cause panic",
      },
      {
        id: "verify",
        text: "Check through official channels",
        icon: Search,
        personality: "ACTION_ANALYST",
        description: "You will verify message authenticity through HR or management",
      },
    ],
  },
  {
    id: 3,
    title: "ELECTION TAMPERING CLAIM",
    content:
      "Your friend texts: 'My cousin at the polling center says the final vote count was tampered with. The actual winner is different from what the news says. Share this ASAP!'",
    options: [
      {
        id: "share",
        text: "Share on social media immediately",
        icon: Share,
        personality: "EMOTIONAL_AMPLIFIER",
        description: "You feel urgent about exposing potential election fraud and want to spread the word quickly",
      },
      {
        id: "comment",
        text: "Ask for evidence or where they heard it from",
        icon: MessageCircle,
        personality: "CALM_INVESTIGATOR",
        description: "You want to understand the source and get more details before taking action",
      },
      {
        id: "ignore",
        text: "Don't respond or engage",
        icon: EyeOff,
        personality: "AVOIDANT_OBSERVER",
        description: "You prefer to stay out of politically charged situations that could be controversial",
      },
      {
        id: "verify",
        text: "Cross-check with official election commission or news outlets",
        icon: Search,
        personality: "ACTION_ANALYST",
        description: "You systematically verify through official sources before believing or sharing",
      },
    ],
  },
  {
    id: 4,
    title: "VIRAL DEEPFAKE VIDEO",
    content:
      "You see a viral video of a famous actor making shocking political statements. It looks real, but some people say it's AI-generated.",
    options: [
      {
        id: "share",
        text: "Forward to group chats: 'OMG look at this!'",
        icon: Share,
        personality: "EMOTIONAL_AMPLIFIER",
        description: "You're excited by the shocking content and want to share the drama with others",
      },
      {
        id: "comment",
        text: "Comment asking, 'Is this real? Any source?'",
        icon: MessageCircle,
        personality: "CALM_INVESTIGATOR",
        description: "You're curious but cautious, seeking community input before deciding what to believe",
      },
      {
        id: "ignore",
        text: "Just keep scrolling",
        icon: EyeOff,
        personality: "AVOIDANT_OBSERVER",
        description: "You avoid engaging with potentially fake or controversial content",
      },
      {
        id: "verify",
        text: "Use reverse video tools or fact-checking sites",
        icon: Search,
        personality: "ACTION_ANALYST",
        description: "You actively use tools and resources to verify the authenticity of suspicious content",
      },
    ],
  },
  {
    id: 5,
    title: "SUSPICIOUS GIVEAWAY SCAM",
    content:
      "On Instagram you see: 'Apple is secretly giving away 1,000 iPhones to random users to test a new model. Just click the link and enter your info!'",
    options: [
      {
        id: "share",
        text: "Tag friends: 'Let's try!'",
        icon: Share,
        personality: "EMOTIONAL_AMPLIFIER",
        description: "You're excited by the opportunity and want to include friends in the potential benefit",
      },
      {
        id: "comment",
        text: "Comment: 'Anyone know if this is legit?'",
        icon: MessageCircle,
        personality: "CALM_INVESTIGATOR",
        description: "You're interested but seek community validation before participating",
      },
      {
        id: "ignore",
        text: "Scroll past, seems fake",
        icon: EyeOff,
        personality: "AVOIDANT_OBSERVER",
        description: "Your instincts tell you it's suspicious, so you avoid engagement entirely",
      },
      {
        id: "verify",
        text: "Google for scam alerts or check Apple's official page",
        icon: Search,
        personality: "ACTION_ANALYST",
        description: "You proactively research to confirm whether this is a legitimate offer or scam",
      },
    ],
  },
  {
    id: 6,
    title: "NEIGHBORHOOD SAFETY ALERT",
    content:
      "A Facebook post says: 'Three people were mugged in our neighborhood last night. Police are hiding it from the public. Don't go out after dark!'",
    options: [
      {
        id: "share",
        text: "Share in local group: 'Be careful everyone!'",
        icon: Share,
        personality: "EMOTIONAL_AMPLIFIER",
        description: "You prioritize community safety and want to warn others about potential danger",
      },
      {
        id: "comment",
        text: "Ask the poster if they saw it themselves or where it came from",
        icon: MessageCircle,
        personality: "CALM_INVESTIGATOR",
        description: "You want to understand the source and reliability of the safety information",
      },
      {
        id: "ignore",
        text: "Don't reply or act, probably just talk",
        icon: EyeOff,
        personality: "AVOIDANT_OBSERVER",
        description: "You're skeptical of unverified neighborhood rumors and prefer not to spread them",
      },
      {
        id: "verify",
        text: "Search police department updates or news reports",
        icon: Search,
        personality: "ACTION_ANALYST",
        description: "You check official sources to confirm whether the safety threat is real",
      },
    ],
  },
  {
    id: 7,
    title: "CLIMATE EMERGENCY CLAIM",
    content:
      "A message is circulating: 'New UN report says we have 6 months to avoid total climate collapse. Stop driving and share this now or you're part of the problem.'",
    options: [
      {
        id: "share",
        text: "Post it with urgent hashtags",
        icon: Share,
        personality: "EMOTIONAL_AMPLIFIER",
        description: "You feel compelled to spread urgent environmental warnings to save the planet",
      },
      {
        id: "comment",
        text: "Look for the original UN report",
        icon: MessageCircle,
        personality: "CALM_INVESTIGATOR",
        description: "You want to find and read the actual source document before reacting",
      },
      {
        id: "ignore",
        text: "Ignore, this stuff is always exaggerated",
        icon: EyeOff,
        personality: "AVOIDANT_OBSERVER",
        description: "You're skeptical of alarmist environmental claims and prefer to avoid the drama",
      },
      {
        id: "verify",
        text: "Search trustworthy environmental websites for clarification",
        icon: Search,
        personality: "ACTION_ANALYST",
        description: "You systematically check reliable environmental sources to verify the claim",
      },
    ],
  },
]

const personalityProfiles = {
  EMOTIONAL_AMPLIFIER: {
    title: "EMOTIONAL AMPLIFIER",
    description:
      "You react quickly to urgent information and prioritize spreading important messages to protect others. While your intentions are good, you may sometimes share unverified information in your eagerness to help.",
    color: "bg-[#ff3a3a]",
    advice:
      "Try pausing for a moment before sharing. Ask yourself: 'Do I have enough information to verify this claim?' Your caring nature is valuable, but adding verification will make your warnings more credible.",
  },
  CALM_INVESTIGATOR: {
    title: "CALM INVESTIGATOR",
    description:
      "You prefer to understand context and seek additional information before taking action. You value community input and like to gather multiple perspectives before forming opinions.",
    color: "bg-[#ff9500]",
    advice:
      "Your balanced approach is excellent! Consider developing skills in source verification and fact-checking to complement your natural curiosity and community-oriented thinking.",
  },
  AVOIDANT_OBSERVER: {
    title: "AVOIDANT OBSERVER",
    description:
      "You tend to stay out of potentially controversial situations and are naturally skeptical of dramatic claims. You prefer to avoid spreading unverified information.",
    color: "bg-[#3a66ff]",
    advice:
      "Your skepticism is a valuable defense against misinformation! Consider occasionally engaging constructively - your critical thinking could help others avoid falling for false claims.",
  },
  ACTION_ANALYST: {
    title: "ACTION ANALYST",
    description:
      "You systematically verify information through official sources and fact-checking before believing or sharing. You have strong critical thinking skills and prefer evidence-based decision making.",
    color: "bg-[#00c16e]",
    advice:
      "Excellent! You're already practicing strong media literacy. Consider sharing your verification methods with others to help build a more informed community around you.",
  },
}

export default function InfoPersonalityPage() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [userChoices, setUserChoices] = useState<string[]>([])
  const [gameComplete, setGameComplete] = useState(false)

  const scenario = scenarios[currentScenario]

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    if (selectedOption) {
      const selectedPersonality = scenario.options.find((opt) => opt.id === selectedOption)?.personality
      if (selectedPersonality) {
        setUserChoices([...userChoices, selectedPersonality])
      }
    }

    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((prev) => prev + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      setGameComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentScenario(0)
    setSelectedOption(null)
    setShowResult(false)
    setUserChoices([])
    setGameComplete(false)
  }

  const getFinalPersonality = () => {
    const counts = userChoices.reduce(
      (acc, choice) => {
        acc[choice] = (acc[choice] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const dominantPersonality = Object.entries(counts).reduce((a, b) => (counts[a[0]] > counts[b[0]] ? a : b))[0]

    return personalityProfiles[dominantPersonality as keyof typeof personalityProfiles]
  }

  const selectedPersonality = scenario.options.find((opt) => opt.id === selectedOption)

  if (gameComplete) {
    const finalPersonality = getFinalPersonality()
    const personalityCounts = userChoices.reduce(
      (acc, choice) => {
        acc[choice] = (acc[choice] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return (
      <div className="min-h-screen comic-bg">
        <GameHeader
          title="YOUR INFO PERSONALITY RESULTS"
          subtitle="Based on your 7 responses"
          backUrl="/scenario-game"
        />

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="comic-box bg-white p-8">
              <div className="text-center mb-8">
                <div
                  className={`inline-block px-8 py-6 border-3 border-black ${finalPersonality.color} bg-opacity-20 mb-6`}
                >
                  <h2 className="comic-text text-4xl font-black mb-4">{finalPersonality.title}</h2>
                  <p className="text-xl font-bold leading-relaxed">{finalPersonality.description}</p>
                </div>

                <div className="bg-[#00c16e] bg-opacity-20 border-2 border-black p-6 mb-6">
                  <h3 className="comic-text text-xl font-black mb-3">💡 PERSONALIZED ADVICE</h3>
                  <p className="font-bold text-gray-800 leading-relaxed">{finalPersonality.advice}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="comic-text text-2xl font-black mb-6 text-center">YOUR RESPONSE BREAKDOWN</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(personalityCounts).map(([personality, count]) => {
                    const profile = personalityProfiles[personality as keyof typeof personalityProfiles]
                    return (
                      <div key={personality} className={`p-4 border-2 border-black ${profile.color} bg-opacity-20`}>
                        <h4 className="font-black mb-2">{profile.title}</h4>
                        <p className="text-sm font-bold">
                          Selected {count} time{count !== 1 ? "s" : ""}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="text-center">
                <Button onClick={handleRestart} className="comic-button bg-black text-white text-lg px-8 py-3">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  TAKE TEST AGAIN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="WHAT'S YOUR INFO PERSONALITY?"
        subtitle="Discover how you process suspicious information"
        backUrl="/scenario-game"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="comic-box bg-white p-3">
                <h2 className="comic-text text-2xl font-black">
                  SCENARIO {currentScenario + 1} / {scenarios.length}
                </h2>
              </div>
              <div className="comic-tag-accent">CHOOSE YOUR REACTION</div>
            </div>
            <div className="w-full bg-black h-4 border-2 border-black">
              <div
                className="bg-[#00c16e] h-full transition-all duration-300"
                style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="comic-box bg-white p-6 mb-6">
            <h3 className="comic-text text-xl font-black mb-4">{scenario.title}</h3>
            <p className="text-lg font-bold text-gray-700 leading-relaxed">{scenario.content}</p>
          </div>

          {!showResult ? (
            <div className="comic-box bg-white p-6">
              <h3 className="comic-text text-xl font-black mb-6">HOW WOULD YOU REACT?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {scenario.options.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <div
                      key={option.id}
                      className={`p-4 border-3 border-black cursor-pointer transition-all ${
                        selectedOption === option.id ? "bg-[#00c16e] text-white" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent
                          className={`w-8 h-8 ${selectedOption === option.id ? "text-white" : "text-gray-500"}`}
                        />
                        <span className="font-black text-lg">{option.text}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="comic-button w-full bg-black text-white text-lg py-3"
              >
                SEE RESULTS
              </Button>
            </div>
          ) : (
            <div className="comic-box bg-white p-6">
              {selectedPersonality && (
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-[#00c16e] border-3 border-black flex items-center justify-center mx-auto mb-4">
                    <selectedPersonality.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="comic-text text-2xl font-black mb-4">
                    {selectedPersonality.personality.replace("_", " ")}
                  </h3>
                  <p className="text-lg font-bold text-gray-700 leading-relaxed">{selectedPersonality.description}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleNext} className="comic-button flex-1 bg-black text-white">
                  {currentScenario < scenarios.length - 1 ? "NEXT SCENARIO" : "VIEW FINAL RESULTS"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
