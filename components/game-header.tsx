import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ComicArrowLeftIcon, ComicTargetIcon } from "@/components/comic-icons"

interface GameHeaderProps {
  title: string
  subtitle?: string
  backUrl?: string
}

export function GameHeader({ title, subtitle, backUrl = "/" }: GameHeaderProps) {
  return (
    <header className="comic-header py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={backUrl}>
              <Button className="comic-button bg-black text-white">
                <ComicArrowLeftIcon className="w-4 h-4 mr-2" />
                BACK
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#ff3a3a] flex items-center justify-center border-2 border-black">
                <ComicTargetIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="comic-text text-xl">{title}</h1>
                {subtitle && <p className="text-sm text-gray-600 font-bold">{subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
