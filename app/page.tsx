// "use client"

import './../styles/globals.css';
import type { NextPage } from 'next'
import Api from '../provider/http/api';
import { use } from 'react';



async function handleVote() {
  return await Api.get('http://localhost:3000//api/teste', {a:'a'}, {cache: 'force-cache'})
}
async function url() {
  return await Api.absoluteUrl()
}


const Home: NextPage = (query) => {
  console.log(query)

  const data:any = use(handleVote())
  const a:any = use(url())

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
      <div>
          {data?.message}
      </div>
      </div>
    </>
  )
}

export default Home
