import React from 'react'
import './Main.css'
import Photo from './Photo.png'; 

const Main = () => {
    const zareef = `const Srabon = {
        pronouns: "He" | "Him",
        code: ["Javascript", "Python"],
        askMeAbout: ["Web App Dev"],
        technologies: {
            backEnd: {
                js: ["Node"]
            },
            frontEnd: ["ReactJs", "HTML", "CSS: TailwindCSS"],
            
            databases: [],
            misc: []
        },
        smallAchievements: ["Alien Shooter game"],
        currentFocus: ["MERN Stack", "DSA"],
        InterestingFact: "Srabon is the Best"
    };`;
    
  return (
    <div className="container">
        <div className="left-section">
            <div className="skill-section">
                <h2>Skills:</h2>
                <p>
                <pre className='code'>{zareef}</pre>
                </p>
            </div>
            
        </div>
        <div className="right-section">

        <img src={Photo} alt="My Photo" />
        <div className="info">
        <h3>Sheikh Srabon Ahmed</h3>
        <h4>Brac University | CSE | Web developer</h4>
        <h5>srabonahmed2002@gmail.com</h5>
        </div>
        
            
        </div>
    </div>
  )
}

export default Main
