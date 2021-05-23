import React from 'react'
import {ReactComponent as Intro_QR} from '../Assets/intro_QR.svg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-text-content">
                <div className="text-1">
                    Hello, My name is
                </div>
                <div className="text-2">Rahul Singh</div>
                <div className="text-3">And I'm a <span>Developer</span></div>
                <a href="#ABOUT">
                    <div className="btn-know-more">Know more</div>
                </a>
            </div>

            {/* <div className="svg-intro-image">
                <img src={Intro_QR}  alt="intro-qr-code"/>
            </div> */}
            <div className="intro-qr-code-container">
                <Intro_QR className="intro-qr-code"/>
            </div>

            <div title="Top" className="btn-scroll-top" onClick={()=>{window.scrollTo(0,0)}}>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Home;