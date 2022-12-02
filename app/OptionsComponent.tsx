'use client'

import Image from "next/image"
import { useState } from "react"
import Api from "../provider/http/api"
import Cookie from "../provider/storage/cookie"
import StarIcon from "./StarIcon"
import StarSolidIcon from "./StarSolidIcon"

export default function OptionsComponent({idVote, id, name, count}:any) {

    const [countOption, setCountOption] = useState<number>(count)

    async function handleUserVote(idOption:any) {
      const storage = await Cookie.get('vote')

      if(!storage) {
        
        await Cookie.set('vote', idOption, 360)
        const isStoraged = await Cookie.get('vote') && true
        
        if(!isStoraged) {await Cookie.expire('vote'); console.log('não foi possível votar'); return;}

        const { result } = await Api.post('/api/vote', { idVote, idOption })
        setCountOption(result.count)
        
      }
    }



    return (
        <div onClick={()=>handleUserVote(id)} className="p-5 h-32 flex gap-3 items-center justify-center bg-white rounded-2xl shadow-xl hover:scale-105 duration-200 cursor-pointer">
          <div className="flex">
            <Image src={`/${name == 'ReactJs' ? 'react' : name == 'VueJs' ? 'vue' :  name == 'Angular' ? 'angular' : null}.png`} alt="vue" width={100}height={100} />
          </div>
          <div className="flex flex-col justify-between">

            <p className={`font-bold text-slate-500 text-2xl`}>{name}</p>

            <div className="flex gap-2 items-center justify-center">
              <p className={`font-bold text-slate-500 text-lg`}>{countOption}</p>
              <StarSolidIcon className={`h-6 w-6  fill-yellow-400`}/>
            </div>

          </div>
        </div>
    )
}