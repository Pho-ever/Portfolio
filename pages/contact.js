import Contact from "../components/contact/contact";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Dropdown from "../components/dropdown";




const ContactPage = () => {
  const [menu, setMenu] = useState(false)

  const handleHamburger = () => {
    setMenu(!menu);
}


  return ( 
    <>
    <div className="landing-container">
        <div className="header-wrapper">
            <Image src="/../public/icons/logo.png" width="40" height="130" alt="logo"/>
            <button 
              className={menu ? "menu-btn-active" : "menu-btn"}
              onClick={handleHamburger}
            >
              <div className="btn-line-1"></div>
              <div className="btn-line-2"></div>
            </button>
        </div>

      {menu ? <Dropdown /> : null}
      {menu ? null : <Contact/>}
      {menu ? 
        null : 
          <div className="buttons">
            <Link href="/"><button><a>Home</a></button></Link>
          </div>
        }
      
    </div>
    </>
  );
}

export default ContactPage;