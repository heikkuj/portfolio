import React from "react";

export default function ProgressBar({ level }) {

  return (
    <div className='flex mt-1 bg-primary-3 rounded-full h-[15px] lg:h-[20px] overflow-hidden w-[80%] border-2'>
    <div className="bg-primary-1" style={{ width: level }} />
  </div>
  )
}