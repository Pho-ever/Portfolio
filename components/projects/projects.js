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
                                    <Link href={project.live}><a><Image src="/icons/eyes.svg" width="15%" height="15%" alt="live"/>Live</a></Link>
                                    <Link href=
                                    "#"><a>Project Description</a></Link>
                                </div>
                                
                            </div>
                        </div>
                        ))}
                </div>
        </div>
    )

}