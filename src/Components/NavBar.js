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

                <a href="#">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>About</li>
                </a>

                <a href="#">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>Projects</li>
                </a>

                <a href="#">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>Skils</li>
                </a>

                <a href="#">
                    <li className="main-navigation-list-item" onClick={handleHamburgerMenuClick}>Contact</li>
                </a>

                <li className="main-navigation-list-item" onClick={handleThemeButtonClick}>Theme</li>

            </ul>

            <i class="fa fa-bars" aria-hidden="true" onClick={handleHamburgerMenuClick}></i>

            {isThemeSelectorOpen && <ThemeSelectorModal onClose={()=>{setIsThemeSelectorOpen(false)}}/>}
        </nav>
    )
}

export default NavBar;