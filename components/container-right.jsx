import React from 'react'

export default function ContainerR({children, title}) {
  return (
    <div className="flex flex-col mt-2 p-4 w-[85vw] h-auto justify-self-end bg-primary-2 rounded-l-lg">

        <h1 className="font-semibold text-lg text-white place-self-end">{title}</h1>
        <div className='text-right'>
        <div className='my-2 place-self-end h-[1px] w-[50%] bg-amber-800' />
        {children}
        </div>
    </div>
  )
}
