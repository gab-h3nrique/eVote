'use client'

import { useEffect, useState } from 'react';
import Api from '../provider/http/api';
import './../styles/globals.css';
import Image from 'next/image'
import StarIcon from './StarIcon';
import StarSolidIcon from './StarSolidIcon';
import OptionsComponent from './OptionsComponent';

export default function ContentComponent() {
  
  const [vote, setVote] = useState<any>()

  async function handleVote() {

    const {vote} = await Api.get('/api/vote', {id:1},  {cache:'no-store'})
    setVote(vote)
    console.log(vote)
  }

  useEffect(()=>{

    handleVote()

  },[])

  return (
    <>
      <section className="flex gap-8">
        {
          vote && vote?.options.map(({id, title, count}:any)=>{
            return (
              <div key={id}>
                <OptionsComponent idVote={vote.id} id={id} name={title} count={count}/>
              </div>
            )
          })
        }
        
      </section>
    </>
  )
  
}


