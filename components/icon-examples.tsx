"use client"

// 导入您想要的新图标
import {
  Target,
  Brain,
  Gamepad2,
  BookOpen,
  Shield,
  Zap,
  Eye,
  Search,
  AlertTriangle,
  MessageSquare,
  Users,
  FileText,
  Lightbulb,
  Crosshair,
  Radar,
  Telescope,
  Microscope,
  ScanLine,
  Focus,
} from "lucide-react"

// 图标替换示例
const iconReplacements = {
  // Spot the Fake 模块可选图标
  spotTheFake: [
    { icon: Target, name: "Target (当前)" },
    { icon: Crosshair, name: "Crosshair" },
    { icon: Eye, name: "Eye" },
    { icon: Search, name: "Search" },
    { icon: Radar, name: "Radar" },
    { icon: Focus, name: "Focus" },
  ],

  // AI Detection Lab 可选图标
  aiDetection: [
    { icon: Brain, name: "Brain (当前)" },
    { icon: Zap, name: "Zap" },
    { icon: Microscope, name: "Microscope" },
    { icon: ScanLine, name: "ScanLine" },
    { icon: Telescope, name: "Telescope" },
  ],

  // Scenario Game 可选图标
  scenarioGame: [
    { icon: Gamepad2, name: "Gamepad2 (当前)" },
    { icon: MessageSquare, name: "MessageSquare" },
    { icon: Users, name: "Users" },
    { icon: AlertTriangle, name: "AlertTriangle" },
  ],

  // Tool Library 可选图标
  toolLibrary: [
    { icon: BookOpen, name: "BookOpen (当前)" },
    { icon: Shield, name: "Shield" },
    { icon: Lightbulb, name: "Lightbulb" },
    { icon: FileText, name: "FileText" },
  ],
}

export default function IconExamples() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-slate-800">可用图标选项</h2>

      {Object.entries(iconReplacements).map(([category, icons]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 capitalize">
            {category.replace(/([A-Z])/g, " $1").trim()}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {icons.map(({ icon: IconComponent, name }, index) => (
              <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:bg-slate-50">
                <IconComponent className="w-8 h-8 text-slate-600 mb-2" />
                <span className="text-xs text-slate-500 text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
