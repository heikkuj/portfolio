import React from "react";

export function ProgNovice({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-3 my-3 place-items-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-accent-1 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[100%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2 border-progress-border'>
            <div className="w-[25%] border-r-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-x-1 border-progress-border" />
            <div className="w-[25%] border-x-1 border-progress-border" />
            <div className="w-[25%] border-l-1 border-progress-border" />
        </div>
        <p className="m-1 text-sm">Nybegynner</p>
    </div>
  )
}

export function ProgIntermediate({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-3 my-3 place-items-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-accent-1 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[100%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2 border-progress-border'>
            <div className="w-[25%] border-r-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-x-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-x-1 border-progress-border" />
            <div className="w-[25%] border-l-1 border-progress-border" />
        </div>
        <p className="m-1 text-sm">Viderekommen</p>
    </div>
  )
}

export function ProgAdvanced({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-3 my-3 place-items-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-accent-1 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[100%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2 border-progress-border'>
            <div className="w-[25%] border-r-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-r-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-r-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-l-1 border-progress-border" />
        </div>
        <p className="m-1 text-sm">Avansert</p>
    </div>
  )
}

export function ProgPro({ title }) {
  return (
    <div className="flex flex-col font-semibold mx-3 my-3 place-items-center text-center">
        <h2>{title}</h2>

        <div className='flex mt-1 bg-accent-1 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[100%] max-w-[400px] lg:max-w-[700px] md:max-w-[700px] border-2 border-progress-border'>
            <div className="w-[25%] border-r-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-x-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-x-1 bg-primary-1 border-progress-border" />
            <div className="w-[25%] border-x-1 bg-primary-1 border-progress-border" />
        </div>
        <p className="m-1 text-sm">Ekspert</p>
    </div>
  )
}