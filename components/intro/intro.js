import { constant } from "../constant/constant"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
// import Projects from '../components/projects/projects'





const Intro = () => {

  // const handleExplore = () => {
    
  // }

  // const [toggleTab, setToggleTab] = useState(0)


  return ( <>
      <div className="home-page">
          <h3>Hello! <br /> I am {constant.name}</h3>
          <p>{constant.intro}</p>
          <button className="explore" >Explore</button>
      </div>
          
  </> 
  );
}
 
export default Intro;