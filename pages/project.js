import Projects from "../components/projects/projects"
import Dropdown from "../components/dropdown";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'



const Projectpage = () => {

  const [menu, setMenu] = useState(false)

  const handleHamburger = () => {
    setMenu(!menu);
}

  return ( 
  <>
          <div className="landing-container">
            <div className="header-wrapper">
                {/* <Image src="/../public/icons/logo.png" width="40" height="130" alt="logo"/> */}
                <button 
                  className={menu ? "menu-btn-active" : "menu-btn"}
                  onClick={handleHamburger}
                >
                  <div className="btn-line-1"></div>
                  <div className="btn-line-2"></div>
                </button>
          </div>
            {menu ? <Dropdown /> : false}
            {menu ? null : <Projects/>}
            {menu ? null : 
                <div className="buttons">
                    <Link href="/resume"><button><a>Resume</a></button></Link>
                    <Link href="/contact"><button><a>Contact</a></button></Link>
                </div>
        }
  </div>
    
  </> 
  );
}
 
export default Projectpage;