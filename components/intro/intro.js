import { constant } from "../constant/constant"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';


const Intro = () => {

  return ( <>
      <div className="home-page">
          <h3>Hello! I am <br/> {constant.name}</h3>
          <p>{constant.intro}</p>

          <div className="more-details">
          <Link href="/project">
            <button className="explore">
              <a>Explore</a>
            </button>
          </Link>
          </div>
          
      </div>
  </> 
  );
}
 
export default Intro;