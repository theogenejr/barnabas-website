import React from "react"

function Modal({ children, onClose }) {
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
    </svg>
  )

  return (
    <div className="model-scrollbar fixed flex items-center pt-12 pb-8 rounded-3xl justify-center top-[70px] left-4 right-4 bottom-2 bg-white z-50">
      <div className="w-full h-full box-border px-4 overflow-y-scroll">
        {children}
        <button
          className={`absolute top-2 right-8 font-black cursor-pointer uppercase text-black w-7 h-7 transition-all`}
          onClick={onClose}
        >
          {closeIcon}
        </button>
      </div>
    </div>
  )
}

export default Modal
