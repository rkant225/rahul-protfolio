import React, { useState } from 'react'
import ThemeSelectorModal from './ThemeSelectorModal';

const NavBar = () => {

    const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false);

    const handleHamburgerMenuClick = ()=>{
        console.log('lala')
        const menuItemsContainer = document.getElementsByClassName("main-navigation-list")[0];
        menuItemsContainer.classList.toggle("active");

        const hamBurgerButton = document.getElementsByClassName("fa-bars")[0];
        hamBurgerButton.classList.toggle("active");
    }

    const handleThemeButtonClick = ()=>{
        handleHamburgerMenuClick();
        setIsThemeSelectorOpen(true);
    }

    return (
        <nav className="main-navigation">

            <a href="#">
                <div className="home-logo">Portfo<span>lio.</span></div>
            </a>

            <ul className="main-navigation-list">

                <a href="#">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>Home</li>
                </a>

                <a href="#ABOUT">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>About</li>
                </a>

                <a href="#PROJECTS">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>Projects</li>
                </a>

                <a href="#SKILLS">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>Skills</li>
                </a>

                <a href="#PEERS">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>My Peers</li>
                </a>

                <a href="#CONTACT">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>Contact</li>
                </a>

                <div style={{borderRight : '2px solid white', margin : '1rem'}}></div>

                {/* <li className="main-navigation-list-item" onClick={handleThemeButtonClick}>Theme</li> */}
                <li style={{textAlign : 'center', border : '1.5px solid white', borderRadius : '50%', padding : '.6rem', cursor : 'pointer'}} className="" onClick={handleThemeButtonClick}>
                    <i className="fa fa-sun-o"></i>/
                    <i className="fa fa-moon-o"></i>
                    <br/>
                    <span style={{fontSize : '.8rem'}}>Theme</span>
                </li>

            </ul>

            <i className="fa fa-bars" aria-hidden="true" onClick={handleHamburgerMenuClick}></i>

            {isThemeSelectorOpen && <ThemeSelectorModal onClose={()=>{setIsThemeSelectorOpen(false)}}/>}
        </nav>
    )
}

export default NavBar;