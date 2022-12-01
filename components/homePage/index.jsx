import { useEffect, useState } from "react";
import CompleteCard from "../scoreboard";
import {FaVuejs, FaAngular, FaReact} from "react-icons/fa"
import Card from "../card";

const HomePage = () => {

const stackData = [
  { 
   title: "Vuejs", 
   img: FaVuejs,
   id: 1 
 },
  {
    title: "React",
    img: FaReact,
    id: 2
  },
  {
    title: "Angular",
    img: FaAngular,
    id: 3
  },
];

return (
    <>
      <Card stackData={stackData}/>
    </>)

}

export default HomePage