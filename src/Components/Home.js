import React from 'react'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-text-content">
                <div className="text-1">
                    Hello, My name is
                </div>
                <div className="text-2">Rahul Singh</div>
                <div className="text-3">And I'm a <span>Developer</span></div>
                <a href="#">
                    <div className="btn-know-more">Know more</div>
                </a>
            </div>
        </div>
    )
}

export default Home;