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
            I'm a junior front-end developer with over a year of IT experince in design implementations and development of software applications,
            I specialize in writing reusable ReactJS and NextJs code to build responsive web applications using a  mobile-first approach. I have experinece working and cooperating with teams made up of diverse spectrum of individuals while applying Agile methodologies.
          </p>
          <div className="details">
            <p>Here is a link containing my <Link href="/"><a>Resume</a></Link></p>
            <p>And also a few projects I have actively worked on over the past one year <Link href="/"><a>Projects</a></Link></p>
          </div>

          <div className="projects">
            <div>
              <h5 className="title">Pura Vida</h5>
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
          </div>
        </div>


      </div>

    </>
  )
}
