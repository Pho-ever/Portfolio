import Projects from "../components/projects/projects"
import Navbar from "../components/Navbar"

const Projectpage = () => {
  return ( 
  <>
  <div className="landing-container">
    <Navbar/>
    <Projects/>

    <div className="buttons">
            <button >Home</button>
            <button>Projects</button>
        </div>
  </div>
    
  </> 
  );
}
 
export default Projectpage;