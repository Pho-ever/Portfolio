import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="landing-container">
        <div>
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
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam, architecto deleniti asperiores ipsa nisi. Id deleniti odit sint obcaecati, nihil maxime doloremque, quaerat odio, reprehenderit iure assumenda provident expedita?
          </p>
        </div>
      </div>
      <footer>
        Oluwayomi Forever
      </footer>
    </>
  )
}
