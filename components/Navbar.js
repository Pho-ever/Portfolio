import { useState } from 'react';
import Link from 'next/link';
import { constant } from './constant/constant';


const Navbar = () => {
  const [menu, setMenu] = useState(false)


  const handleHamburger = () => {
    setMenu(!menu);
    // menu ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden";
}


  return ( 
  <>
          <div className="header-wrapper">
                <p>Logo</p>
                <button 
                  className={menu ? "menu-btn-active" : "menu-btn"}
                  onClick={handleHamburger}
                >
                  <div className="btn-line-1"></div>
                  <div className="btn-line-2"></div>
                </button>
          </div>

              <div className={menu ? "dropdown-menu-active" : "dropdown-menu"}>
                <p><Link href="/">
                  <a 
                  
                      >Home</a></Link>
                </p>
                <p><Link href="/resume"
                ><a 
                
                    >Resume</a></Link>
                </p>

                <p><Link href="/project"
                ><a 
                
                  >Projects</a></Link>
                </p>

                <p><Link href="/contact" ><a 
                      
                    >Contact</a></Link>
                </p>
            </div>

  </>
  );
}
 
export default Navbar;