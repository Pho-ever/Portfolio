import Link from 'next/link';


const Dropdown = () => {
  return ( 
    <>
      <div className="dropdown-menu-active">
            <p><Link href="/"><a 
            >Home</a></Link>
            </p>
              
            <p><Link href="/resume"><a
            >Resume</a></Link>
            </p>

            <p><Link href="/project" ><a
              >Projects</a></Link>
            </p>

            <p><Link href="/contact" ><a
              >Contact</a></Link>
            </p>
        </div>
    </>
  );
}

export default Dropdown;