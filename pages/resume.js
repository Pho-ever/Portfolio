import Resume from "../components/resume/resume";
import { useState } from 'react';
import Link from 'next/link';
import Dropdown from "../components/dropdown";



const ResumePage = () => {
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

      {menu ? <Dropdown /> : null}
      {menu ? null : <Resume/>}
      {menu ? 
      null : 
      <div className="buttons">
            <Link href="/"><button><a>Home</a></button></Link>
            <Link href="/project"><button><a>project</a></button></Link>
        </div>
        }
          
    </div>
  </> 
  );
}
 
export default ResumePage;