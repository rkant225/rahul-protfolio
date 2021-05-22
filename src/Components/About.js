import React from 'react'
import profilePic from '../Assets/rahul.png'
import Resume from '../Assets/Resume.pdf'

const About = () => {
    return (
        <>
            <a name="ABOUT"></a>

            <div>
                
                <div className="about-me-section-header">About Me</div>

                <div className="about-container">
                    <div className="profile-pic-container">
                        <img className="profile-pic" src={profilePic} alt="Profile picture"/>
                    </div>
                    <div className="about-text">
                        <div className="i-am-header-under-about">I am Rahul and I'm a <span>Developer</span></div>
                        I have total 3.1 years of experience in IT/Software industry. My area of expertise is React JS, which is frontend library developed and maintained by Facebook, and I have 1.5 years of experience in React JS. Worked with UI technologies like HTML5, JavaScript, CSS. Hands on experience in Redux (state management). Apart from this I have good hands on experience in Python and Python based Machine Learning model building to solve business problems. 
                        <a href={Resume} download>
                            <div className="btn-download-cv">Download CV</div>
                        </a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default About;