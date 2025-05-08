import React from "react";

export function ProgNovice({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-2 my-3 place-items-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-primary-3 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[80%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2'>
            <div className="w-[25%] border-r-1 bg-primary-1" />
            <div className="w-[25%] border-x-1 " />
            <div className="w-[25%] border-x-1" />
            <div className="w-[25%] border-l-1" />
        </div>
    </div>
  )
}

export function ProgIntermediate({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-2 my-3 place-items-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-primary-3 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[80%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2'>
            <div className="w-[25%] border-r-1 bg-primary-1" />
            <div className="w-[25%] border-x-1 bg-primary-1" />
            <div className="w-[25%] border-x-1" />
            <div className="w-[25%] border-l-1" />
        </div>
    </div>
  )
}

export function ProgAdvanced({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-2 my-3 place-items-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-primary-3 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[80%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2'>
            <div className="w-[25%] border-r-1 bg-primary-1" />
            <div className="w-[25%] border-r-1 bg-primary-1" />
            <div className="w-[25%] border-r-1 bg-primary-1" />
            <div className="w-[25%] border-l-1" />
        </div>
    </div>
  )
}

export function ProgPro({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-2 my-3 place-items-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-primary-3 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[80%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2'>
            <div className="w-[25%] border-r-1 bg-primary-1" />
            <div className="w-[25%] border-x-1 bg-primary-1" />
            <div className="w-[25%] border-x-1 bg-primary-1" />
            <div className="w-[25%] border-x-1 bg-primary-1" />
        </div>
    </div>
  )
}