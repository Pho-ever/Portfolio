import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { constant } from '../components/constant/constant'
import Projects from '../components/projects/projects'
import Resume from '../components/resume/resume'
import Sideprojects from '../components/sideprojects/sideprojects'
import Contact from '../components/contact/contact'
import Intro from '../components/intro/intro'


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
    
  // const body = document.querySelector("body");
  //   if (menu === true) {
  //     // Disable scroll
  //     body.style.overflow = "hidden";
  // } else {
  //     // Enable scroll
  //     body.style.overflow = "auto";
  // }
}

  return (
    <>
      <div className="landing-container">
        <div className="info-container">
          <h3>Hello! <br /> I'm {constant.name}</h3>
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

        <div className="header-wrapper">
          <p>icon</p>
          <button 
          className={menu ? "menu-btn-active" : "menu-btn"}
          onClick={handleHamburger}
          >
            <div className="btn-line-1"></div>
            <div className="btn-line-2"></div>
          </button>
        </div>

        <div className={menu ? "dropdown-menu-active" : "dropdown-menu"}>

        <p><Link href="/"><a 
        onClick={ () => handleToggleTab(3)}
              // className={toggleTab === 0 ? "active-drop" : "tab"}
              >Home</a></Link>
          </p>
          
          <p><Link href="/"><a onClick={ () => handleToggleTab(0)}
              // className={toggleTab === 0 ? "active-drop" : "tab"}
              >Resume</a></Link>
          </p>

          <p><Link href="/" ><a onClick={() => handleToggleTab(1)}
              // className={toggleTab === 1 ? "active-tab" : "tab"}
            >Projects</a></Link>
            </p>

            <p><Link href="/" ><a onClick={() => handleToggleTab(2)}
              // className={toggleTab === 2 ? "active-tab" : "tab"}
            >Contact</a></Link></p>
        </div>


        <div  className={menu ? "display-none" : ""}>
          <div className={toggleTab === 0 ? "active" : "disabled"}><Resume /></div>
          <div className={toggleTab === 1 ? "active" : "disabled"}><Projects /></div>
          <div className={toggleTab === 2 ? "active" : "disabled"}><Contact /></div>
          <div className={toggleTab === 3 ? "active" : "disabled"}><Intro /></div>
        </div>


        <div 
        className={menu ? "display-none" : "buttons"}>
          <button>hey</button>
          <button>hey</button>
        </div>
      </div>
    </>
  )
}
