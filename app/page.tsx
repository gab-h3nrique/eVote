'use client'

import { useEffect, useState } from 'react';
import Api from '../provider/http/api';
import './../styles/globals.css';
import ContentComponent from './ContentComponent';

export default function HomePage() {

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">

        <ContentComponent/>

      </div>
    </>
  )
  
}
