import Nav from "./Nav.jsx";
import './styles/experience.css';

const Experience = () => {

    console.log("Experience");

    return (
        <div className="experience">

            <Nav/>
            <div className="experience-content">
                <h1>Work Experience</h1>

                <div className='experience-section'>
                   <div className='experience-header'>
                       <h2>Algorithm & Data Teaching Assistant</h2>
                       <h4>
                           Khoury College of Computer Science
                       </h4>
                       <span>I am currently helping TA Nor</span>
                    </div>

                </div>
            </div>


        </div>
    )

}

export default Experience;