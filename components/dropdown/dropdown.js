import Link from 'next/link'


const Dropdown = () => {
  return ( 
    <>
      <p><Link href="/"><a 
          onClick={ () => handleToggleTab(3)}
                >Home</a></Link>
            </p>
          
          <p><Link href="/"><a onClick={ () => handleToggleTab(0)}
              >Resume</a></Link>
          </p>

          <p><Link href="/" ><a onClick={() => handleToggleTab(1)}
            >Projects</a></Link>
            </p>

            <p><Link href="/" ><a onClick={() => handleToggleTab(2)}
            >Contact</a></Link></p>
    </>
   );
}
 
export default Dropdown;