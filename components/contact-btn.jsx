import React from 'react';
import Link from 'next/link';

export default function ContactBtn() {
  return (
    <div className='flex justify-center my-2'>
        <Link href='mailto:heikku.jen@outlook.com'>
        <button 
        className='px-2 py-4 w-[30vw] max-w-[300px] font-semibold text-white bg-black rounded-lg'>Kontakt meg</button>
        </Link>
    </div>
  )
}
