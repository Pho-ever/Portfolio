import { constant } from "../constant/constant"
import Link from 'next/link'
import Image from 'next/image';

const Intro = () => {
  return ( <>
          <h3>Hello! <br /> I'm {constant.name}</h3>
          <p>{constant.intro}</p>
          <button>hey</button>
  </> 
  );
}
 
export default Intro;