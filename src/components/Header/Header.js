import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import logo from './images/Logo.svg';
import './header.scss';

//components
import SocialList from '../SocialList/SocialList';

const Header = () => {

    //opening menu
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }


    //sticky menu
    const [stickMenu, setStickMenu] = useState('header');

    function fixingMenu() {
        if(window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setStickMenu('header fixed') : setStickMenu('header');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fixingMenu);
    })



    return ( 
        <>
        <header className={stickMenu}>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__inner">
                        <NavLink to="/" className="logo"><img src={logo} alt="logo" className="logo__img" /></NavLink>
                        <div className="menu">
                            <button className="menu__btn" onClick={toggleMenuOpen}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className={menuOpen ? "menu__info open" : "menu__info"}>
                                <button className="menu__info-close" onClick={toggleMenuOpen}>x</button>
                                <div className="menu__info-inner">
                                    <nav className="menu__nav">
                                        <ul className="menu__list"  onClick={toggleMenuOpen}>
                                            <li className="menu__list-item">
                                                <NavLink to="/" className="menu__list-link">Home</NavLink>
                                            </li>
                                            <li className="menu__list-item">
                                                <NavLink to="/menu" className="menu__list-link">Menu</NavLink>
                                            </li>
                                            <li className="menu__list-item">
                                                <NavLink to="/blog" className="menu__list-link">Blogs</NavLink>
                                            </li>
                                            <li className="menu__list-item">
                                                <NavLink to="/about" className="menu__list-link">About</NavLink>
                                            </li>
                                            <li className="menu__list-item">
                                                <NavLink to="/contacts" className="menu__list-link">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </nav>

                                    <div className="menu__contacts">
                                        <h6 className="menu__contacts-title">Contact</h6>

                                        <div className="menu__contacts-links">
                                            <a href="tel:86852346000" className="menu__contacts-link">+86 852 346 000</a>
                                            <a href="mail:info@foodzero.com" className="menu__contacts-link">info@foodzero.com</a>
                                        </div>
                                        

                                        <p className="menu__contacts-text">1959 Sepulveda Blvd. Culver City, CA, 90230</p>

                                        <div className="social">
                                            <SocialList/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="header__info">
                            <a href="tel:86852346000" className="header__info-link">+86 852 346 000</a>
                            <a href="" className="header__info-btn">Reservations</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
        </>
     );
}
 
export default Header;