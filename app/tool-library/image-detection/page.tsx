"use client"

import { GameHeader } from "@/components/game-header"
import { Button } from "@/components/ui/button"
import { ExternalLink, Camera, Search, MapPin, Clock } from "lucide-react"
import { ComicCameraIcon } from "@/components/comic-icons"

const verificationSteps = [
  {
    title: "Caption vs. Content",
    description: "Read the caption first, then inspect the scene: season, uniforms, language on signs, license plates.",
    icon: Camera,
    color: "bg-[#3a66ff]",
  },
  {
    title: "Reverse-Image Routine",
    description: "Screenshot or copy the image → upload to Google Images, TinEye, or Yandex. Sort by 'oldest'.",
    icon: Search,
    color: "bg-[#ff9500]",
  },
  {
    title: "Timestamp & Metadata",
    description: "Real camera files often retain EXIF data. Compare 'first seen' dates on social platforms.",
    icon: Clock,
    color: "bg-[#00c16e]",
  },
  {
    title: "Geolocation & Weather Checks",
    description: "Zoom in on distinctive features. Use satellite view and verify weather conditions.",
    icon: MapPin,
    color: "bg-[#ff3a3a]",
  },
]

const resources = [
  {
    title: "Bellingcat – A Beginner's Guide to Social Media Verification",
    url: "https://www.bellingcat.com/resources/2021/11/01/a-beginners-guide-to-social-media-verification/",
    description: "Comprehensive guide to verifying social media content",
  },
  {
    title: "Poynter – Verifying Photos and Videos",
    url: "https://www.poynter.org/mediawise/is-this-legit-digital-media-literacy-101/verifying-photos-and-videos/",
    description: "Digital media literacy guide for photo and video verification",
  },
  {
    title: "First Draft – Visual Verification Guide (Photos)",
    url: "https://firstdraftnews.org/wp-content/uploads/2017/03/FDN_verificationguide_photos.pdf",
    description: "Professional photo verification guide PDF",
  },
  {
    title: "BBC Future – The SIFT Strategy",
    url: "https://www.bbc.com/future/article/20240509-the-sift-strategy-a-four-step-method-for-spotting-misinformation",
    description: "Four-step method for spotting misinformation",
  },
  {
    title: "Bellingcat Shadow Finder",
    url: "https://www.bellingcat.com/resources/2024/08/22/shadow-geolocate-geolocation-locate-image-tool-open-source-bellingcat-measure/",
    description: "Geolocate images via sun-angle analysis",
  },
  {
    title: "InVID / WeVerify Verification Plugin",
    url: "https://www.invid-project.eu/tools-and-services/invid-verification-plugin/",
    description: "Browser plugin for video and image verification",
  },
]

export default function ImageDetectionPage() {
  return (
    <div className="min-h-screen comic-bg">
      <GameHeader
        title="MISLEADING IMAGE DETECTION"
        subtitle="Verify images and detect visual misinformation"
        backUrl="/tool-library"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="comic-box bg-white p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#00c16e] border-3 border-black flex items-center justify-center">
                <ComicCameraIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="comic-text text-3xl font-black mb-2">MISLEADING IMAGE DETECTION GUIDE</h1>
                <p className="text-lg font-bold text-gray-700">
                  Master the techniques to verify images and detect visual misinformation
                </p>
              </div>
            </div>

            <div className="bg-[#00c16e] bg-opacity-20 border-2 border-black p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Camera className="w-6 h-6 text-[#00c16e] mt-1" />
                <div>
                  <h3 className="comic-text text-lg font-black mb-2">WHY IMAGE VERIFICATION MATTERS</h3>
                  <p className="font-bold text-gray-700">
                    Images are powerful tools for manipulation. A single out-of-context photo can spread false
                    narratives faster than text-based misinformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {verificationSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="comic-box bg-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${step.color} border-2 border-black flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="comic-text text-2xl font-black">{step.title}</h2>
                  </div>
                  <p className="font-bold text-gray-700 text-lg leading-relaxed">{step.description}</p>

                  {index === 0 && (
                    <div className="mt-6 space-y-4">
                      <div className="border-2 border-black p-4 bg-gray-50">
                        <h3 className="font-black mb-2">🔍 INSPECTION CHECKLIST</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Season and weather match the claim?</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Uniforms, signs, and license plates consistent?</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Would the image prove the claim without the caption?</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="mt-6 space-y-4">
                      <div className="border-2 border-black p-4 bg-gray-50">
                        <h3 className="font-black mb-2">🔄 REVERSE SEARCH PROCESS</h3>
                        <ol className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <span className="font-black">1.</span>
                            <span className="font-bold">Screenshot or copy the image</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-black">2.</span>
                            <span className="font-bold">Upload to Google Images, TinEye, or Yandex</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-black">3.</span>
                            <span className="font-bold">Sort results by "oldest" to find original source</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-black">4.</span>
                            <span className="font-bold">For videos, use InVID plugin to extract keyframes</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="mt-6 space-y-4">
                      <div className="border-2 border-black p-4 bg-gray-50">
                        <h3 className="font-black mb-2">📊 METADATA ANALYSIS</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Check EXIF data for date, device, and GPS information</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Compare "first seen" dates across platforms</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Look for sudden resurfacing of old content</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="mt-6 space-y-4">
                      <div className="border-2 border-black p-4 bg-gray-50">
                        <h3 className="font-black mb-2">🌍 GEOLOCATION TECHNIQUES</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Identify distinctive features: signs, skyline, mountains</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Use Google Maps/Earth for satellite verification</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Check shadow angles with Bellingcat Shadow Finder</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-bold">Verify weather conditions for the claimed time/place</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="comic-box bg-white p-8 mt-8">
            <h2 className="comic-text text-2xl font-black mb-6">CROPPING & COMPOSITION TRICKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-black p-4 bg-[#ff3a3a] bg-opacity-20">
                <h3 className="font-black mb-2">🖼️ TIGHT CROPS</h3>
                <p className="font-bold text-gray-700">
                  Look for tight crops that hide key context like police patches, protest banners, or brand logos.
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-[#ff9500] bg-opacity-20">
                <h3 className="font-black mb-2">👥 CROWD MANIPULATION</h3>
                <p className="font-bold text-gray-700">
                  High share counts don't equal authenticity. Viral reposts often revive old disaster photos.
                </p>
              </div>
            </div>
          </div>

          <div className="comic-box bg-white p-8 mt-8">
            <h2 className="comic-text text-2xl font-black mb-6">RESOURCES & REFERENCES</h2>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="border-2 border-black p-4 bg-gray-50">
                  <h3 className="font-black mb-2">{resource.title}</h3>
                  <p className="text-sm font-bold text-gray-700 mb-3">{resource.description}</p>
                  <Button
                    className="comic-button bg-[#3a66ff] text-white text-sm"
                    onClick={() => window.open(resource.url, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ACCESS RESOURCE
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
