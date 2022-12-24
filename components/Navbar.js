import { useState } from 'react'
import Link from 'next/link'
import { constant } from './constant/constant'


const Navbar = () => {
  const [menu, setMenu] = useState(false)


  const handleHamburger = () => {
    setMenu(!menu);
    // menu ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden";
    // menu ? document.body.style.overflow = "hidden" : null;

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
                <p><Link href="/"
                  onClick={() => setMenu(false)}>
                  <a 
                      >Home</a></Link>
                </p>
                  
                <p><Link href="/resume"
                  onClick={() => setMenu(false)}
                ><a 
                    >Resume</a></Link>
                </p>

                <p><Link href="/project"
                  onClick={() => setMenu(false)}
                ><a 
                      onClick={() => setMenu(false)}
                  >Projects</a></Link>
                </p>

                <p><Link href="/contact" ><a 
                      onClick={() => setMenu(false)}
                    >Contact</a></Link>
                </p>
            </div>

  </>
  );
}
 
export default Navbar;