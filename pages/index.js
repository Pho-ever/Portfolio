import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { constant } from '../components/constant/constant'
import Projects from '../components/projects/projects'
import Resume from '../components/resume/resume'
import Sideprojects from '../components/sideprojects/sideprojects'

export default function Home() {
  const [toggleTab, setToggleTab] = useState(1)

  const handleToggleTab = (index) => {
    setToggleTab(index)
  }
  return (
    <>
      <div className="landing-container">
        <div className="info-container">
          <h3>Hello! <br /> I'm {constant.name}</h3>
          <p>{constant.intro}</p>
          <div className="details">

            <p>-----<Link href="/"><a onClick={() => handleToggleTab(1)}
              className={toggleTab === 1 ? "active-tab" : "tab"}>Resume</a></Link></p>

            <p>------<Link href="/" ><a onClick={() => handleToggleTab(2)}
              className={toggleTab === 2 ? "active-tab" : "tab"}
            >Projects</a></Link></p>

            <p>--------<Link href="/" ><a onClick={() => handleToggleTab(3)}
              className={toggleTab === 3 ? "active-tab" : "tab"}
            >Side projects</a></Link></p>

            {/* <p><Link href="/" ><a onClick={() => handleToggleTab(3)}
              className={toggleTab === 4 ? "active-tab" : "tab"}
            >Contact</a></Link></p> */}
          </div>
        </div>

        <div className={toggleTab === 1 ? "active" : "disabled"}><Resume /></div>
        <div className={toggleTab === 2 ? "active" : "disabled"}><Projects /></div>
        <div className={toggleTab === 3 ? "active" : "disabled"}><Sideprojects /></div>
        {/* <div className={toggleTab === 4 ? "active" : "disabled"}><Sideprojects /></div> */}


      </div>

    </>
  )
}
