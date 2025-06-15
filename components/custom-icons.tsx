// 自定义 SVG 图标组件
export const CustomTargetIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

export const CustomBrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a3 3 0 0 0-3 3 4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a4 4 0 0 0-4-4 3 3 0 0 0-3-3z" />
    <path d="M12 9v4" />
    <path d="M10 11h4" />
  </svg>
)

// 使用示例
export default function CustomIconExample() {
  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">自定义图标示例</h3>
      <div className="flex space-x-4">
        <CustomTargetIcon className="w-8 h-8 text-red-500" />
        <CustomBrainIcon className="w-8 h-8 text-blue-500" />
      </div>
    </div>
  )
}
