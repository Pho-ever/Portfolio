import { constant } from "../constant/constant"

export function resume() {
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
}