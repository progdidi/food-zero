import logo from './images/Logo.svg';
import './header.scss';

//components
import SocialList from '../SocialList/SocialList';

const Header = () => {
    return ( 
        <>
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__inner">
                        <a href="#" className="logo"><img src={logo} alt="logo" className="logo__img" /></a>
                        <div className="menu">
                            <button className="menu__btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className="menu__info">
                                <button className="menu__info-close">x</button>
                                <div className="menu__info-inner">
                                    <nav className="menu__nav">
                                        <ul className="menu__list">
                                            <li className="menu__list-item"><a href="#" className="menu__list-link">Home</a></li>
                                            <li className="menu__list-item"><a href="#" className="menu__list-link">Menu</a></li>
                                            <li className="menu__list-item"><a href="#" className="menu__list-link">Blogs</a></li>
                                            <li className="menu__list-item"><a href="#" className="menu__list-link">About</a></li>
                                            <li className="menu__list-item"><a href="#" className="menu__list-link">Contact</a></li>
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