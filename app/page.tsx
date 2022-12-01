"use client"

import type { NextPage } from 'next'
import Api from '../provider/http/api';
import { use } from 'react';
import HomePage from "../components/homePage"

import './../styles/globals.css';

async function handleVote() {
  return await Api.get('http://localhost:3000//api/teste', {a:'a'}, {cache: 'force-cache'})
}
async function url() {
  return await Api.absoluteUrl()
}


const Home: NextPage = (query) => {
  console.log(query)

  // const data:any = use(handleVote())
  // const a:any = use(url())

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <HomePage />
      </div>
      
    </>
  )
}

export default Home
