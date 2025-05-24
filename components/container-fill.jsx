import React from 'react'

export default function ContainerFill({title, children}) {
  return (
    <div className="flex flex-col mt-2 p-4 md:px-10 w-full h-auto  bg-primary-3 shadow-lg shadow-neutral-200 items-center">

      <div className='my-2 py-1 w-[80%] lg:w-[60%] md:w-[60%]'>
        <h1 className="text-xl font-semibold text-black tracking-wider uppercase text-center">{title}</h1>
      </div>

      <div className='h-[1px] w-full border-1 border-black mt-1 mb-4' />

      {children}

  </div>
  )
}
