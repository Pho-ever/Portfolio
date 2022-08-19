import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'



export default function Home() {
  const [dropdown, setIsDropdown] = useState(false)

  const handleDropdown = () => {
    setIsDropdown(!dropdown)
  }
  return (
    <>
      <div className="landing-container">
        <div className="info-container">
          <h3>Hello! <br /> I'm Forever Oluwayomi</h3>
          <p>
            I'm a junior front-end developer with over a year of IT experince in design implementations and development of software applications,
            I specialize in writing reusable ReactJS and NextJs code to build responsive web applications using a  mobile-first approach. I have experinece working and cooperating with teams made up of diverse spectrum of individuals while applying Agile methodologies.
          </p>
          <div className="details">
            <p>Here is a link containing my <Link href="/"><a>Resume</a></Link></p>
            <p>Projects I have worked on <Link href="/" ><a onClick={handleDropdown}>Projects</a></Link></p>
            <p>And a few side projects <Link href="/" ><a>Side projects</a></Link></p>
          </div>
        </div>

        <div className="resume">
          <div className="resume-header">
            <h3>Oluwayomi Forever</h3>
            <div className="resume-contacts">
              <Link href="/"><a>oluwayomiforever@gmail.com</a></Link>
              <Link href="/"><a>+2347053258406</a></Link>
            </div>
          </div>
          <div className="section">
            <p className="section-title">PROFILE</p>
            <p className="section-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, sit distinctio nostrum nulla similique corrupti totam corporis ducimus perferendis exercitationem earum hic aspernatur. Quas, minima odit. Laboriosam pariatur est obcaecati?</p>
          </div>
          <div className="section">
            <p className="section-title">SKILLS</p>
            <div className="section-body grid">
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
            </div>
          </div>
          <div className="section">
            <p className="section-title">EXPERIENCE</p>
            <div className="section-body experience">
              <div className="experince-title">INTERN - Frontend Developer, <Link href="/"><a>Codematic Technology</a></Link>
              </div>
              <div>
                <p>- Implemented landing pages and websites from conception to deployment while optimizing and maintaining them.</p>
                <p> - Standardized all output using a fresh, mobile-first strategy and responsive methodology </p>
                <p> - Teamed up with the product team to put new feature advancements into practice while maintaining branding guidelines. </p>
                <p> - Kept track of user stories during daily stand-ups and retrospectives.</p>
                <p> - Front-end technical solutions were implemented to satisfy product specifications for building new websites.</p>
                <p> - Received design requirements, peer programs, and test applications while working in an agile, collaborative setting. </p>
                <p> - Received mentoring from experienced developers and consistently implemented their advice.</p>
              </div>
            </div>
          </div>
        </div>

        {/* {dropdown && <div className="projects">
          <h3 className="project-header">PROJECTS</h3>
          <div>
            <div className="title">
              <h5>Pura Vida -</h5>
              <Link href="/"><a>www.pura-vida.web.app</a></Link>
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum tempore numquam, assumenda labore non facere! Modi deleniti nam eos animi. Perferendis, maxime facilis? Rerum beatae vitae alias et facilis, nihil ratione magni tempore. Molestiae aperiam veniam tenetur nam quos dolores, quisquam itaque id, obcaecati voluptate nulla, eum temporibus rem.</p>
          </div>

          <div>
            <h5 className="title">The Apocalypse</h5>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum tempore numquam, assumenda labore non facere! Modi deleniti nam eos animi. Perferendis, maxime facilis? Rerum beatae vitae alias et facilis, nihil ratione magni tempore. Molestiae aperiam veniam tenetur nam quos dolores, quisquam itaque id, obcaecati voluptate nulla, eum temporibus rem.</p>
          </div>
          <div>
            <h5 className="title">Parentyn</h5>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum tempore numquam, assumenda labore non facere! Modi deleniti nam eos animi. Perferendis, maxime facilis? Rerum beatae vitae alias et facilis, nihil ratione magni tempore. Molestiae aperiam veniam tenetur nam quos dolores, quisquam itaque id, obcaecati voluptate nulla, eum temporibus rem.</p>
          </div>

          <div>
            <h5 className="title">Nuno</h5>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum tempore numquam, assumenda labore non facere! Modi deleniti nam eos animi. Perferendis, maxime facilis? Rerum beatae vitae alias et facilis, nihil ratione magni tempore. Molestiae aperiam veniam tenetur nam quos dolores, quisquam itaque id, obcaecati voluptate nulla, eum temporibus rem.</p>
          </div>
        </div>} */}


      </div>

    </>
  )
}
