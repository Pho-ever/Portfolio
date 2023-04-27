import { constant } from "../constant/constant"
import Link from 'next/link'
import Image from 'next/image';


export default function Resume() {
    return (
        <div className="resume">
            <div className="resume-header">
                <div className="resume-name">
                    <h3>{constant.name}</h3>
                        <div>
                            <Link href="https://drive.google.com/file/d/18_hc-id67mcSPCfgMJlBvl2P9u10IBeV/view?usp=share_link">
                                <a target="_blank">
                                    <Image src='/download.png' width="20%" height="20%" alt="download"/>
                                </a>
                            </Link>
                            <Link href="https://drive.google.com/file/d/18_hc-id67mcSPCfgMJlBvl2P9u10IBeV/view?usp=share_link">
                                <a target="_blank" className="download" >Download</a>
                            </Link>
                        </div>
                </div>
                {/* <div className="resume-contacts">
                    <p>{constant.profession}</p>
                </div> */}
            </div>

            <div className="section">
                <p className="section-title">PROFILE</p>
                <p className="section-body">{constant.profile_1}</p>
                <br/>
                <p className="section-body">{constant.profile_2}</p>
                <br/>
                <p className="section-body">{constant.profile_3}</p>
            </div>
            <div className="section">
                <p className="section-title">SKILLS</p>
                <div className="section-body">
                    <div className="skills">
                        {constant.skills.map((skill, idx) => (
                            <p key={`skill-${idx}`} >
                                <span className="bold-text">{skill.title}: </span>{' '}
                                {skill.body}
                            </p>
                        ))}
                    </div>
                </div>
            </div>


            <div className="section">
                <p className="section-title">EXPERIENCE</p>
                <div className="section-body experience">
                    <div className="exp-container">
                        {constant.workExperiences.map((experience, idx) => (
                            <section className="experience" key={idx}>
                                <p className="experince-title">
                                    <p>
                                    {experience.company} - {experience.role}
                                    </p>
                                    <p>
                                        {experience.startDate} - {experience.endDate ? experience.endDate : 'Current'}
                                    </p>
                                </p>
                                <article className="description">
                                    {experience.achievements.map((achievement, i) => (
                                        <div 
                                        key={`achievement-${i}`}
                                        className="description-item"
                                        >
                                            <div> → </div>
                                            <p>
                                                {achievement}
                                            </p>
                                        </div>
                                    ))}
                                </article>
                            </section>
                        ))}
                    </div>
                </div>
            </div>


            <div className="section">
                <p className="section-title"> EDUCATION </p>
                <div className="section-body">
                    <div>
                        {constant.education.map((edu, idx) => (
                            <div className="education"
                                    key={idx}>
                                <p>{edu.school}</p>
                                <p>{edu.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )


}