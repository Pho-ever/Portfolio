import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { constant } from '../components/constant/constant';
import Projects from '../components/projects/projects';
import Resume from '../components/resume/resume';
import Contact from '../components/contact/contact';
import Intro from '../components/intro/intro';
import Dropdown from "../components/dropdown"


export default function Home() {
  const [toggleTab, setToggleTab] = useState(1)
  const [toggleSideTab, setToggleSideTab] = useState(1)
  const [menu, setMenu] = useState(false)

  const handleToggleTab = (index) => {
    setToggleTab(index)
  }


  const handleHamburger = () => {
    setMenu(!menu)
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

        <div className={menu ? "display-none" : "info-container"}>
            <Intro />
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
        </div>

        
      </div>
    </>
  )
}
