import React from 'react'

export default function ContainerR({children, title}) {
  return (
    <div className="flex flex-col mt-2 p-4 w-[85vw] h-auto justify-self-end bg-primary-2 rounded-l-lg">

        <h1 className="font-semibold text-lg uppercase tracking-wider text-white place-self-start underline decoration-2 decoration-solid underline-offset-5">{title}</h1>
        <div className='text-right'>
          {/* <div className='my-2 place-self-start w-[40%] md:w-[30%] lg:w-[30%] border-1 border-bg-amber-800' /> */}
        {children}
        </div>
    </div>
  )
}
