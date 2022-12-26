import Link from 'next/link'
import Image from 'next/image';
import { constant } from "../constant/constant"




export default function Projects() {
    return (
        <div className="projects">
            <h3 className="project-header">PROJECTS</h3>
                <div className="project-container">

                        {constant.projects.map((project, idx) => (
                        <div className="projects-box" key={idx}>
                            <div>
                                <p className="title">{project.title}</p>
                                <p className="subtitle">{project.subtitle}</p>
                            </div>
                            <div className="frameworks">
                                <p>{project.frameworks}</p>
                                <div className="more-details">
                                    <Link href={project.live}><a target="_blank"><Image src="/icons/eyes.svg" width="15%" height="15%" alt="live"/>Live</a></Link>
                                    {project.code ?  <Link href={project.code}><a target="_blank"><Image src="/icons/git.png" width="20%" height="20%" alt="code"/>Code</a></Link> : null}
                                </div>
                                
                            </div>
                        </div>
                        ))}
                </div>
        </div>
    )

}