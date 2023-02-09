import React from 'react'

function Button({bg,onClick,icon,btnName}) {
  return (
    <button className={`px-4 rounded-md flex items-center gap-1 ${bg}`} onClick={onClick}>{icon}{btnName}</button>
  )
}

export default Button