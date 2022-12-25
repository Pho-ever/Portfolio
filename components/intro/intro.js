import { constant } from "../constant/constant"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';



const Intro = () => {

  return ( <>
      <div className="home-page">
          <h3>Hello! <br /> I am {constant.name}</h3>
          <p>{constant.intro}</p>

          <div className="more-details">
            <button className="explore">
              <Link href="/project"><a>Explore</a></Link>
            </button>
          </div>
          
      </div>
  </> 
  );
}
 
export default Intro;