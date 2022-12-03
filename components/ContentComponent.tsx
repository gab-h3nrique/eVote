'use client'

import React, { useEffect, useState } from 'react';
import Api from '../provider/http/api';
import './../styles/globals.css';
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
      <article className="flex flex-col gap-5">

        <section className="flex justify-center items-center p-3">

          <p className={`font-bold text-slate-500 text-2xl`}>{vote?.title}</p>

        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 select-none">
          {
            vote && vote?.options.map(({id, title, count}:any)=>{
              return (
                <React.Fragment key={id}>
                  <OptionsComponent idVote={vote.id} id={id} name={title} count={count}/>
                </React.Fragment>
              )
            })
          }
          
        </section>

      </article>
    </>
  )
  
}


