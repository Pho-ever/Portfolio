import Projects from "../components/projects/projects"
import Dropdown from "../components/dropdown";
import { useState } from 'react';
import Link from 'next/link';



const Projectpage = () => {

  const [menu, setMenu] = useState(false)

  const handleHamburger = () => {
    setMenu(!menu);
}

  return ( 
  <>
          <div className="landing-container">
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
            {menu ? <Dropdown /> : false}
            {menu ? null : <Projects/>}
            {menu ? null : 
                      <div className="buttons">
                          <button><Link href="/resume"><a>Resume</a></Link></button>
                          <button><Link href="/contact"><a>Contact</a></Link></button>
                      </div>
        }
  </div>
    
  </> 
  );
}
 
export default Projectpage;