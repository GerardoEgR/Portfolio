import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute bottom-full mb-2 w-32 p-2 text-sm text-slate-300 text-center border border-gray-950 bg-gray-800 rounded-lg shadow-lg">
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip