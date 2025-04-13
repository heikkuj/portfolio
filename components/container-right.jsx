import React from 'react'

export default function ContainerR({children, title}) {
  return (
    <div className="flex flex-col mt-2 p-4 w-[85vw] h-auto justify-self-end bg-primary-2 rounded-l-lg">

        <h1 className="font-semibold text-lg text-white place-self-end">{title}</h1>
        <div className='text-right'>
        {children}
        </div>
    </div>
  )
}
