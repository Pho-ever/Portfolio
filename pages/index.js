import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Resume from './resume'

export default function Home() {
  return (
    <>
      <div className="landing-container">
        <div className="info-container">
          <h3>Hello! <br /> I'm Forever Oluwayomi</h3>
          <p>
            I'm a front-end developer,
            I write reusable ReactJS and NextJs code and build responsive web applications with a mobile-first approach. I also have experinece working and cooperating with teams made up of diverse spectrum of individuals.
          </p>
          <div className="details">
            Here is my <a> resume</a> and a few <a>projects</a> i have worked on
          </div>
        </div>
      </div>

    </>
  )
}
