import React from 'react'

export default function ContainerFill({title, children}) {
  return (
    <div className="flex flex-col mt-2 p-4 w-full h-auto items-center bg-primary-3 shadow-lg shadow-neutral-400">
      <h1 className="text-lg text-primary-1">{title}</h1>
      <div className='my-2 h-[1px] w-[60%] bg-primary-1' />
      {children}
  </div>
  )
}
