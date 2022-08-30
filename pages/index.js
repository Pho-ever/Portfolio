import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { constant } from '../components/constant/constant'
import { resume } from '../components/resume/resume'
import Projects from '../components/projects/projects'




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
            <p>Here is a link containing my <Link href="/"><a onClick={() => handleToggleTab(1)}>Resume</a></Link></p>
            <p>Projects I have worked on <Link href="/" ><a onClick={() => handleToggleTab(2)}>Projects</a></Link></p>
            <p>And a few side projects <Link href="/" ><a onClick={() => handleToggleTab(3)}>Side projects</a></Link></p>
          </div>
        </div>

        <Projects />
        {/* <div>{resume}</div> */}
      </div>

    </>
  )
}
