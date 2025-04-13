import React from 'react'

export default function ContainerR({children, title}) {
  return (
    <div className="flex flex-col mt-2 p-4 w-[85vw] h-auto justify-self-start bg-primary-2 rounded-r-lg">

        <h1 className="font-semibold text-lg text-white place-self-start">{title}</h1>
        {children}
    </div>
  )
}
