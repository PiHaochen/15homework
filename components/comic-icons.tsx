// 漫画风格自定义图标组件

interface IconProps {
  className?: string
}

export const ComicTargetIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 外圈 */}
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
    {/* 中圈 */}
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="5" />
    {/* 内圈 */}
    <circle cx="50" cy="50" r="15" fill="currentColor" />
    {/* 十字准星 */}
    <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="4" />
    <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="4" />
    <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="4" />
    <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" strokeWidth="4" />
  </svg>
)

export const ComicBrainIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 大脑轮廓 */}
    <path
      d="M25 35 C15 25, 15 15, 25 15 C35 5, 65 5, 75 15 C85 15, 85 25, 75 35 C85 45, 85 65, 75 75 C65 85, 35 85, 25 75 C15 65, 15 45, 25 35 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="3"
    />
    {/* 大脑纹理 */}
    <path
      d="M30 25 Q40 30, 35 40 Q45 35, 50 45 Q60 40, 65 50 Q70 45, 75 55"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M25 45 Q35 50, 30 60 Q40 55, 45 65 Q55 60, 60 70"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* 电路风格装饰 */}
    <circle cx="40" cy="30" r="3" fill="white" />
    <circle cx="60" cy="40" r="3" fill="white" />
    <circle cx="45" cy="60" r="3" fill="white" />
  </svg>
)

export const ComicGamepadIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 手柄主体 */}
    <rect x="20" y="35" width="60" height="30" rx="15" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    {/* 左侧把手 */}
    <rect x="10" y="25" width="20" height="50" rx="10" fill="currentColor" />
    {/* 右侧把手 */}
    <rect x="70" y="25" width="20" height="50" rx="10" fill="currentColor" />
    {/* 方向键 */}
    <rect x="25" y="45" width="8" height="3" fill="white" />
    <rect x="27.5" y="42.5" width="3" height="8" fill="white" />
    {/* 按钮 */}
    <circle cx="65" cy="42" r="3" fill="white" />
    <circle cx="72" cy="48" r="3" fill="white" />
    <circle cx="58" cy="48" r="3" fill="white" />
    <circle cx="65" cy="54" r="3" fill="white" />
    {/* 装饰线条 */}
    <line x1="40" y1="40" x2="40" y2="60" stroke="white" strokeWidth="2" />
    <line x1="45" y1="40" x2="45" y2="60" stroke="white" strokeWidth="2" />
  </svg>
)

export const ComicBookIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 书本封面 */}
    <rect x="20" y="15" width="50" height="70" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    {/* 书脊 */}
    <rect x="15" y="15" width="10" height="70" fill="currentColor" />
    {/* 页面 */}
    <rect x="25" y="20" width="40" height="60" fill="white" stroke="currentColor" strokeWidth="2" />
    {/* 文字线条 */}
    <line x1="30" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="40" x2="55" y2="40" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="60" x2="50" y2="60" stroke="currentColor" strokeWidth="2" />
    {/* 书签 */}
    <rect x="60" y="15" width="5" height="25" fill="#ff3a3a" />
    <polygon points="60,40 65,40 62.5,45" fill="#ff3a3a" />
    {/* 装饰星星 */}
    <polygon points="35,65 37,70 42,70 38,73 40,78 35,75 30,78 32,73 28,70 33,70" fill="currentColor" />
  </svg>
)

export const ComicSearchIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 放大镜镜面 */}
    <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="6" />
    {/* 放大镜把手 */}
    <line x1="60" y1="60" x2="85" y2="85" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    {/* 镜面内的十字 */}
    <line x1="30" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="3" />
    <line x1="40" y1="30" x2="40" y2="50" stroke="currentColor" strokeWidth="3" />
    {/* 反光效果 */}
    <circle cx="35" cy="35" r="5" fill="white" opacity="0.7" />
    {/* 装饰闪光 */}
    <polygon points="70,20 72,25 77,25 73,28 75,33 70,30 65,33 67,28 63,25 68,25" fill="currentColor" />
  </svg>
)

export const ComicEyeIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 眼睛外轮廓 */}
    <ellipse cx="50" cy="50" rx="40" ry="25" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    {/* 眼白 */}
    <ellipse cx="50" cy="50" rx="35" ry="20" fill="white" />
    {/* 瞳孔 */}
    <circle cx="50" cy="50" r="12" fill="currentColor" />
    {/* 瞳孔反光 */}
    <circle cx="47" cy="47" r="4" fill="white" />
    {/* 眼睫毛 */}
    <line x1="20" y1="35" x2="15" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="30" x2="28" y2="25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="70" y1="30" x2="72" y2="25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="80" y1="35" x2="85" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* 装饰闪光 */}
    <polygon points="25,60 27,65 32,65 28,68 30,73 25,70 20,73 22,68 18,65 23,65" fill="currentColor" />
  </svg>
)

export const ComicCameraIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 相机主体 */}
    <rect x="15" y="35" width="70" height="45" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    {/* 相机顶部 */}
    <rect x="25" y="25" width="50" height="15" rx="3" fill="currentColor" />
    {/* 镜头 */}
    <circle cx="50" cy="57" r="15" fill="white" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="57" r="10" fill="currentColor" />
    <circle cx="50" cy="57" r="5" fill="white" />
    {/* 闪光灯 */}
    <rect x="65" y="28" width="8" height="6" rx="2" fill="white" />
    {/* 取景器 */}
    <rect x="35" y="28" width="8" height="4" rx="1" fill="white" />
    {/* 快门按钮 */}
    <circle cx="75" cy="32" r="3" fill="white" />
    {/* 装饰线条 */}
    <line x1="20" y1="45" x2="30" y2="45" stroke="white" strokeWidth="2" />
    <line x1="20" y1="50" x2="25" y2="50" stroke="white" strokeWidth="2" />
    {/* 闪光效果 */}
    <polygon points="85,45 87,50 92,50 88,53 90,58 85,55 80,58 82,53 78,50 83,50" fill="currentColor" />
  </svg>
)

export const ComicUsersIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 第一个人 */}
    <circle cx="35" cy="30" r="12" fill="currentColor" />
    <rect x="25" y="45" width="20" height="25" rx="5" fill="currentColor" />
    {/* 第二个人 */}
    <circle cx="65" cy="35" r="12" fill="currentColor" />
    <rect x="55" y="50" width="20" height="25" rx="5" fill="currentColor" />
    {/* 装饰元素 */}
    <rect x="30" y="50" width="6" height="3" fill="white" />
    <rect x="60" y="55" width="6" height="3" fill="white" />
    {/* 连接线 */}
    <line x1="47" y1="40" x2="53" y2="45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* 装饰星星 */}
    <polygon points="15,60 17,65 22,65 18,68 20,73 15,70 10,73 12,68 8,65 13,65" fill="currentColor" />
    <polygon points="85,25 87,30 92,30 88,33 90,38 85,35 80,38 82,33 78,30 83,30" fill="currentColor" />
  </svg>
)

export const ComicFileIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 文件主体 */}
    <rect x="25" y="15" width="45" height="70" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    {/* 文件折角 */}
    <polygon points="70,15 70,30 85,30" fill="white" stroke="currentColor" strokeWidth="3" />
    {/* 文件内容 */}
    <rect x="30" y="25" width="35" height="55" fill="white" />
    {/* 文字行 */}
    <line x1="35" y1="35" x2="60" y2="35" stroke="currentColor" strokeWidth="2" />
    <line x1="35" y1="45" x2="55" y2="45" stroke="currentColor" strokeWidth="2" />
    <line x1="35" y1="55" x2="60" y2="55" stroke="currentColor" strokeWidth="2" />
    <line x1="35" y1="65" x2="50" y2="65" stroke="currentColor" strokeWidth="2" />
    {/* 重要标记 */}
    <circle cx="55" cy="70" r="3" fill="#ff3a3a" />
    <rect x="53" y="67" width="4" height="2" fill="white" />
    {/* 装饰元素 */}
    <polygon points="15,40 17,45 22,45 18,48 20,53 15,50 10,53 12,48 8,45 13,45" fill="currentColor" />
  </svg>
)

export const ComicArrowLeftIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 箭头主体 */}
    <polygon points="40,20 20,50 40,80 45,75 30,50 45,25" fill="currentColor" />
    {/* 箭头尾部 */}
    <rect x="35" y="45" width="45" height="10" fill="currentColor" />
    {/* 装饰线条 */}
    <line x1="50" y1="40" x2="75" y2="40" stroke="white" strokeWidth="2" />
    <line x1="50" y1="60" x2="75" y2="60" stroke="white" strokeWidth="2" />
    {/* 动感线条 */}
    <line x1="85" y1="35" x2="90" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="85" y1="45" x2="95" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="85" y1="55" x2="95" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="85" y1="65" x2="90" y2="70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const ComicPlayIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 播放按钮外圈 */}
    <circle cx="50" cy="50" r="40" fill="currentColor" stroke="currentColor" strokeWidth="4" />
    {/* 播放三角形 */}
    <polygon points="40,30 40,70 75,50" fill="white" />
    {/* 装饰线条 */}
    <line x1="45" y1="40" x2="45" y2="60" stroke="currentColor" strokeWidth="2" />
    <line x1="50" y1="45" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
    {/* 动感效果 */}
    <path d="M80 35 Q85 40, 80 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M80 55 Q85 60, 80 65" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M85 45 Q90 50, 85 55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const ComicChevronRightIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    {/* 箭头 */}
    <polygon points="30,20 70,50 30,80 25,75 60,50 25,25" fill="currentColor" />
    {/* 动感线条 */}
    <line x1="75" y1="35" x2="85" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="75" y1="65" x2="85" y2="70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
)
