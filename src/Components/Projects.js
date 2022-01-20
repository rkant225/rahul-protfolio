import React from 'react'
import profilePic from '../Assets/profile-pic-two.jpeg'

const Projects = () => {
    return (
        <>
        <a name="PROJECTS"></a>
        <div className="project-section">
            

            <div className="projects-section-header">My Projects</div>

            <div className="projects-container">

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-border-all" aria-hidden="true"></i>
                    </div>
                    
                    <div className="project-name">
                        Tic-Tac-Toe
                    </div>
                    <div className="project-description">
                        This is a simple React JS based project which I created recently to learn basic CSS and CSS Animations. It covers props, state and event-handling.
                    </div>
                    <a href="https://rkant225.github.io/tic-tac-toe-react/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-syringe" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Covid-19 Vaccination
                    </div>
                    <div className="project-description">
                        This application demonstrate the concept of useEffect and useState React hooks. It fetches data from open API provided by indian Govt.
                    </div>
                    <a href="https://rkant225.github.io/covid-vaccine-avalibility/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-dog" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Animations
                    </div>
                    <div className="project-description">
                        This is pure HTML and CSS based prohect and I have used React JS to implementing Routing and wraper of html and css. As of now there are 5-6 animations in this App.
                    </div>
                    <a href="https://rkant225.github.io/animations/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-map-marked-alt" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        PlaceBook
                    </div>
                    <div className="project-description">
                        This is another React based application which demonstrate different concepts such as Redux, Routing, Axiox, JWT Authorization, login, Material-UI, Modal. 
                    </div>
                    <a href="https://place-book-frontend.herokuapp.com/" target="_blank" rel="noreferrer"> 
                        <div className="btn-view-project">View</div>
                    </a>
                </div>


                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-server" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        PlaceBook(API)
                    </div>
                    <div className="project-description">
                        This is a backend server for my <a href="https://place-book-frontend.herokuapp.com/">PlaceBook App</a>. It includes different cool tech such as Node JS, Express JS, Multer, Cors, Middlewares, Routing, JWT token.
                    </div>
                    <a href="https://place-book-backend.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Feedback Cllection App
                    </div>
                    <div className="project-description">
                        This is basic react based app that has oOath-2 based login system using Google. It's backend is created by me using Node JS, Routing, Passport JS, SendGrid.
                    </div>
                    <a href="https://sheltered-tundra-24258.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-disease" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Covid-19 tracker(india)
                    </div>
                    <div className="project-description">
                        This App demonstrate the concept of fetching data asynchronously from third party server or any endpoint. API returns the data of India.
                    </div>
                    <a href="https://rkant225.github.io/COVID_19_tracker_india" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-viruses" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Covid-19 tracker(world)
                    </div>
                    <div className="project-description">
                    This App demonstrate the concept of fetching data asynchronously from third party server or any endpoint. API returns the data of World.
                    </div>
                    <a href="https://rkant225.github.io/COVID_19_tracker_WorldWide/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-utensils" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Restaurant
                    </div>
                    <div className="project-description">
                        This is a simple HTML and CSS based static page. It demonstrate the basic concepts of CSS and HTML. It helped me to learn basic CSS.
                    </div>
                    <a href="https://rkant225.github.io/sample_restaurant/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-sign-in-alt" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Redux JS
                    </div>
                    <div className="project-description">
                        This is the App which I have created when I started lerning React. This App impliments the Redux from scratch. (store, reducer, action, dispatcher)
                    </div>
                    <a href="https://rkant225.github.io/Redux_implementation_from_scratch/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-users-cog" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Manage Customer
                    </div>
                    <div className="project-description">
                        I have created this App to manage the customer for my own shop. I have created frontend as well as backend for this app. React JS, Node JS, Material-UI.
                    </div>
                    <a href="http://customer-mgmt-sys-frontend.herokuapp.com/customer" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>
                
                <div className="project">
                    <div className="project-icon">
                        <i class="fa fa-cat"></i>
                    </div>
                    <div className="project-name">
                        Tom & Jerry
                    </div>
                    <div className="project-description">
                        This is a simple game which I have built using React JS, CSS and Javascript. I got inspiration to build this app from Chrom's Dino-T-Rex game.
                    </div>
                    <a href="https://rkant225.github.io/tom-and-jerry/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i class="fa fa-clock"></i>
                    </div>
                    <div className="project-name">
                        Clock
                    </div>
                    <div className="project-description">
                        I have created this App to using CSS, HTML and React JS. This app displays the current time in both Analog and Digital clock. It uses the concept of degree rotation.
                    </div>
                    <a href="https://rkant225.github.io/clock/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i class="fa fa-shuttle-van"></i>
                    </div>
                    <div className="project-name">
                        Vehicle Bidding
                    </div>
                    <div className="project-description">
                        I have created this App to using CSS, HTML and React JS. This app enables user to bid their vehicle for booking. I have used Formik to validate form.
                    </div>
                    <a href="https://vahak-vehicle-bidding-app.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i class="fa fa-whatsapp"></i>
                    </div>
                    <div className="project-name">
                        Whatsapp Group Chact
                    </div>
                    <div className="project-description">
                        I have created this App to using CSS, HTML and React JS. This app enables user to Chat with there friends in group. App is based on socket.io
                    </div>
                    <a href="https://my-whatsapp-app-chatty.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i class="fa fa-atom"></i>
                    </div>
                    <div className="project-name">
                        React-Redux Setup
                    </div>
                    <div className="project-description">
                        I have created this App to setup React with Redux. This app contains the Store, Action, Reducer and Connect method.
                    </div>
                    <a href="https://rkant225.github.io/react_redux_setup/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i class="fa fa-braille"></i>
                    </div>
                    <div className="project-name">
                        Star Patterns
                    </div>
                    <div className="project-description">
                        I have created this app to learn the implementation of start patterns with help of 2 nested for-loop.
                    </div>
                    <a href="https://rkant225.github.io/star_patterns/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i class="fa fa-users-cog"></i>
                    </div>
                    <div className="project-name">
                        Admin Portal
                    </div>
                    <div className="project-description">
                        This is a react JS base application. I have used Reacr Router V6 to implement routing in this application.
                    </div>
                    <a href="https://rkant225.github.io/admin_portal_app/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Projects;