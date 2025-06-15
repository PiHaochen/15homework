import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FakeSpotter - Learn to spot fake. Play to get smarter.",
  description: "通过互动游戏和实战练习，提升你的媒体素养和批判性思维能力",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
