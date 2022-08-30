import { constant } from "../constant/constant"
import Link from 'next/link'

export default function Resume() {
    return (
        <div className="resume">
            <div className="resume-header">
                <h3>{constant.name}</h3>
                <div className="resume-contacts">
                    <Link href="/"><a>{constant.email}</a></Link>
                    <Link href="/"><a>{constant.phone}</a></Link>
                </div>
            </div>
            <div className="section">
                <p className="section-title">PROFILE</p>
                <p className="section-body">{constant.profile}</p>
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

                    <div className="exp_container">
                        {constant.workExperiences.map((experience, idx) => (
                            <section className="experience" key={idx}>
                                <p className="experince-title">
                                    {experience.company} - {experience.role}
                                    <span>
                                        {experience.startDate} - {experience.endDate ? experience.endDate : 'CURRENT'}
                                    </span>
                                </p>
                                <article className="description">
                                    {experience.achievements.map((achievement, i) => (
                                        <p key={`achievement-${i}`}>
                                            {/* <span>&#8594;</span> */}
                                            {achievement}
                                        </p>
                                    ))}
                                </article>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )


}