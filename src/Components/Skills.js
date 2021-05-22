import React from 'react'

const Skills = () => {
    return (
        <>
            <a name="SKILLS" ></a>
            <div className="skills-container">
                <div className="my-skills-header">My Skills</div>

                <div className="my-skills-left-right-container">
                    <div className="my-skills-description-container">
                        <div className="my-skills-description-header">My creative skills <span>and experience.</span></div>
                        <div className="my-skills-description-text">
                            <p>I have completed my Masters and Bachlors in Electronics and Communication Engineering (ECE). I loved working on electronics projects mostly programming the Arduino and Raspberry-Pi boards. I have created number of projects during my graduation, few of them are Line following robot, Visitor counter, System to controll home applinces wirelessly using Wi-Fi, Wi-Fi controlled Robo Car and many more.</p>
                            <p>After my graduation I got placed in Cognizant Technology Solutions and started my career in field of IT in Dec-2017. Here my first project was based on .Net MVC and we used React JS as a view for our application. From here only I got intrest in front-end Technology and started exploring this field much deeper. After 2 years this project was over and I was mapped to new project and basicly it was a Web-Application testing project. In this project I came to know about Selenium Framework which is used to automate the web-app testing with predefined test-cases.</p>
                            <p>After 2.4 years I got oppurtinity to work in Infosys Ltd. as React JS developer, And I joined Infy in Jun-2020. Here my first project was based on React JS. My responsibility was to designe responsive UI with React JS and Material UI and API interigation. This project went live in Nov-2020 and it's in production now. After this project I was mapped to new React based project and currently I am working on it and learning new stuff along the way.</p>
                            <p>Apart from my professional work, I started learning new tech-stacks such as Node JS, Express JS, Mongo DB, Python and created few projects based on it.</p>
                        </div>
                    </div>
                    <div className="my-skills-percentage-container">
                        <div className="technologies">
                            <span>HTML</span>
                            <span>40%</span>
                            <span className="bar" style={{'--percentage' : '40%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>CSS</span>
                            <span>35%</span>
                            <span className="bar" style={{'--percentage' : '35%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>React JS</span>
                            <span>67%</span>
                            <span className="bar" style={{'--percentage' : '67%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Redux-Form</span>
                            <span>23%</span>
                            <span className="bar" style={{'--percentage' : '23%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Asynchronous JS</span>
                            <span>87%</span>
                            <span className="bar" style={{'--percentage' : '87%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Node JS</span>
                            <span>18%</span>
                            <span className="bar" style={{'--percentage' : '18%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Mongo DB</span>
                            <span>34%</span>
                            <span className="bar" style={{'--percentage' : '34%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Python</span>
                            <span>46%</span>
                            <span className="bar" style={{'--percentage' : '46%'}}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;