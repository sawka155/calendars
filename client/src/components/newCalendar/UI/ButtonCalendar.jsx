import React from 'react'

const ButtonCalendar = ({ children, ...props }) => {
  return (
    <button {...props} className="ButtonCalendar">
      {children}
    </button>
  )
}

export default ButtonCalendar