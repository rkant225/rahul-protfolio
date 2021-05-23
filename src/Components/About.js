import React, { useEffect, useState } from 'react'
import profilePic from '../Assets/rahul.png'
import Resume from '../Assets/Resume.pdf'

const About = () => {

    const [displayMoreText, setDisplayMoreText] = useState(false);
    const $ = window.$; // JQuery

    useEffect(()=>{
        $('#extra-about-text').slideUp()
    }, [])


    const handleHideAndDisplayExtraDetail=()=>{
        setDisplayMoreText(!displayMoreText);
        if(displayMoreText){
            $('#extra-about-text').slideUp()
        } else{
            $('#extra-about-text').slideDown()
        }
    }
    return (
        <>
            <a name="ABOUT"></a>

            <div className="about-section-container">
                
                <div className="about-me-section-header">About Me</div>

                <div className="about-container">
                    <div className="profile-pic-container">
                        <img className="profile-pic" src={profilePic} alt="Profile picture"/>
                    </div>
                    <div className="about-text">
                        <div className="i-am-header-under-about">I am Rahul and I'm a <span className="typing-2"></span></div>
                            I have total 3.1 years of experience in IT/Software industry. My area of expertise is React JS, which is frontend library developed and maintained by Facebook, and I have 1.5 years of experience in React JS. Worked with UI technologies like HTML5, JavaScript, CSS. Hands on experience in Redux (state management). Apart from this I have good hands on experience in Python and Python based Machine Learning model building to solve business problems. 

                            <div id="extra-about-text" className="about-text" style={{width : '100%'}}>
                                <br/>
                                I have completed my Masters and Bachlors in Electronics and Communication Engineering (ECE). I loved working on electronics projects mostly programming the Arduino and Raspberry-Pi boards. I have created number of projects during my graduation, few of them are Line following robot, Visitor counter, System to controll home applinces wirelessly using Wi-Fi, Wi-Fi controlled Robo Car and many more.
                                <br/>
                                <br/>
                                After my graduation I got placed in Cognizant Technology Solutions and started my career in field of IT in Dec-2017. Here my first project was based on .Net MVC and we used React JS as a view for our application. From here only I got intrest in front-end Technology and started exploring this field much deeper. After 2 years this project was over and I was mapped to new project and basicly it was a Web-Application testing project. In this project I came to know about Selenium Framework which is used to automate the web-app testing with predefined test-cases.
                                <br/>
                                <br/>
                                After 2.4 years I got oppurtinity to work in Infosys Ltd. as React JS developer, And I joined Infy in Jun-2020. Here my first project was based on React JS. My responsibility was to designe responsive UI with React JS and Material UI and API interigation. This project went live in Nov-2020 and it's in production now. After this project I was mapped to new React based project and currently I am working on it and learning new stuff along the way.
                                <br/>
                                <br/>
                                Apart from my professional work, I'm learning new tech-stacks such as Node JS, Express JS, Mongo DB, Python and created few projects based on it.
                            </div>

                        <div className="btn-more-less" onClick={()=>{handleHideAndDisplayExtraDetail()}}>{displayMoreText ? 'Less' : 'More'}</div>

                        <br/>

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