import React from "react";

export default function ProgressBar({ level }) {

  return (
    <div className='flex mt-1 bg-primary-3 rounded-full h-[10px] overflow-hidden w-[50%] md:w-[30%] lg:w-[30%]'>
    <div className="bg-primary-1" style={{ width: level }} />
  </div>
  )
}