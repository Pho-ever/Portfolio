import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { constant } from '../components/constant/constant'
import Projects from '../components/projects/projects'
import Resume from '../components/resume/resume'
import Sideprojects from '../components/sideprojects/sideprojects'
import Contact from '../components/contact/contact'
import Intro from '../components/intro/intro'
import Navbar from "../components/Navbar"


export default function Home() {
  const [toggleTab, setToggleTab] = useState(0)
  const [toggleSideTab, setToggleSideTab] = useState(0)
  const [menu, setMenu] = useState(false)

  const handleToggleTab = (index) => {
    setToggleTab(index)
    setMenu(false)
  }


  const handleHamburger = () => {
    setMenu(!menu)
}

  return (
    <>
      <div className="landing-container">

        {/* <div className="header-wrapper">
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
            <p><Link href="/"><a>Home</a></Link>
            </p>
              
            <p><Link href="/resume"><a>Resume</a></Link>
            </p>

            <p><Link href="/project" ><a>Projects</a></Link>
            </p>

            <p><Link href="/" ><a>Contact</a></Link>
            </p>

        </div> */}

        <Navbar/>

        <div className={menu ? "display-none" : "info-container"}>
          <h3>Hello <br/> I am {constant.name}</h3>
          <p>{constant.intro}</p>

          <div className="details">
            <p>-----<Link href="/"><a onClick={() => handleToggleTab(0)}
              className={toggleTab === 0 ? "active-tab" : "tab"}>Resume</a></Link></p>

            <p>------<Link href="/" ><a onClick={() => handleToggleTab(1)}
              className={toggleTab === 1 ? "active-tab" : "tab"}
            >Projects</a></Link></p>

            <p>--------<Link href="/" ><a onClick={() => handleToggleTab(2)}
              className={toggleTab === 2 ? "active-tab" : "tab"}
            >Contact</a></Link></p>

          </div>
        </div>


        <div className="display-none">
          <div className={toggleTab === 0 ? "active" : "disabled"}><Resume /></div>
          <div className={toggleTab === 1 ? "active" : "disabled"}><Projects /></div>
          <div className={toggleTab === 2 ? "active" : "disabled"}><Contact /></div>
          <div className={toggleTab === 3 ? "active" : "disabled"}><Intro /></div>
        </div>

        
      </div>
    </>
  )
}
