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
            I write reusable ReactJS and NextJs code and build responsive web applications with a mobile-first approach
          </p>

          <div className="details">
            <Link href="/">
              <a>Resume</a>
            </Link>
            <Link href="/">
              <a>Project</a>
            </Link>
            <Link href="/">
              <a>Contact</a>
            </Link>

          </div>

        </div>
        <div className="landing-children">
          <p>
            <Resume />
          </p>
        </div>
      </div>
      <footer>
        Oluwayomi Forever
      </footer>
    </>
  )
}
