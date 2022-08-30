import Link from 'next/link'



export default function Projects() {
    return (
        <div className="projects">
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
        </div>
    )

}