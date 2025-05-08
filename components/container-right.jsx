import React from 'react'

export default function ContainerR({children, title}) {
  return (
    <div className="flex flex-col mt-2 p-4 pb-6 w-[85vw] h-auto justify-self-end bg-primary-2 rounded-l-lg">

        <h1 className="font-semibold text-lg uppercase tracking-wider text-white text-center">{title}</h1>

        <div className='h-[1px] w-full border-white border-1 mt-1 mb-4' />

        <div className='text-right'>
        {children}
        </div>
    </div>
  )
}
