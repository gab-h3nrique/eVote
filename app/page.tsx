'use client'

import './../styles/globals.css';
import Api from '../provider/http/api';
import { useState } from 'react';


async function handleVote() {
  const { result } = await Api.get('http://localhost:3000//api/teste', {id:1}, {cache: 'no-cache'})
  console.log('fetch: ', result)
  return result
}


export default function HomePage() {
  
  const [data, setData] = useState()

  async function click() {

    setData(await handleVote())
    console.log('data:', data)

  }
    return (
      <>
        <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">


          <button  onClick={()=>click()} className="p-3 rounded-lg bg-blue-600 text-white font-bold">click here</button>

          <div>{data && data}</div>


        </div>
      </>
    )
  
}
