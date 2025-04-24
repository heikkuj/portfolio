import React from 'react';
import Link from 'next/link';

export default function ContactBtn() {
  return (
    <div className='flex justify-center my-2'>
        <Link href='mailto:heikku.jen@outlook.com'>
        <button 
        className='p-2 w-[30vw] max-w-[300px] font-semibold text-black bg-primary-3 rounded-lg border-1 border-primary-1'>Kontakt meg</button>
        </Link>
    </div>
  )
}
