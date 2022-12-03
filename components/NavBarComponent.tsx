'use client'

import React, { useEffect, useState } from 'react';
import GearIcon from './icons/GearIcon';
import HomeIcon from './icons/HomeIcon';

export default function NavBarComponent() {
  
 

  return (
    <>
        <article className="flex flex-col gap-5 bg-indigo-100 border-b-[2px] border-white">

        <section className="flex justify-between items-center p-3">

            <button className={`bg-blue-600 p-2 flex justify-between items-center gap-3 rounded-lg hover:scale-105 duration-100`}>
                <HomeIcon className={`h-5 w-5  fill-white`}/>
                <p className={`font-bold text-white text-sm`}>Home</p>
            </button>

            <section className="flex">

            <p className={`font-bold text-blue-500 text-2xl`}>e</p>
            <p className={`font-bold text-slate-500 text-2xl`}>Vote</p>

            </section>

            <button className={`bg-blue-600 p-2 flex justify-between items-center gap-3 rounded-lg hover:scale-105 duration-100`}>
                <GearIcon className={`h-5 w-5  fill-white`}/>
                <p className={`font-bold text-white text-sm`}>Settings</p>
            </button>

            </section>

        </article>
    </>
  )
  
}


