import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Navbar() {
  return (
    <div>
        {/* Main nav */}
        <div className='flex p-2 justify-self-end w-[70vw] bg-primary-2 justify-evenly rounded-l-lg text-black font-semibold'>

            <Link href='/'>
            <div className='text-lg'>CV</div></Link>

            <Link href='/'>
            <div className='text-lg'>Prosjekter</div></Link>

            <Link target='_blank' href='mailto:heikkuamo@gmail.com'>
            <div className='text-lg'>Kontakt</div></Link>
        </div>

        {/* Socials */}
        <div className='flex p-2 justify-self-end w-[40vw] bg-primary-3 justify-evenly items-center text-2xl text-black rounded-l-lg'>
            <Link href='https://github.com/heikkuj' target='_blank'><GrGithub /></Link>
            <Link href='/' target='_blank'><IoLogoLinkedin /></Link>
            <Link href='https://hjdevblog.vercel.app/'><Image src={'/blog.png'} width={30} height={0} alt='' /></Link>
        </div>
    </div>
    
  )
}
