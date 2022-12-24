import Resume from "../components/resume/resume"
import Navbar from "../components/Navbar"

const ResumePage = () => {
  return ( 
  <>
    <div className="landing-container">
      <Navbar/>
      <Resume/>
        <div className="buttons">
            <button>Home</button>
            <button>Projects</button>
        </div>
    </div>
  </> 
  );
}
 
export default ResumePage;