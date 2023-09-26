import './footer.scss';
import SocialList from '../SocialList/SocialList';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-top__inner">
                        <a href="#" className="footer-top__logo">Food Zero.</a>

                        <div className="footer-top__contacts">
                            <h6 className="footer__title">Contact</h6>

                            <div className="footer-top__contacts-links">
                                <a href="tel:86852346000" className="footer-top__contacts-link">+86 852 346 000</a>
                                <a href="mail:info@foodzero.com" className="footer-top__contacts-link">info@foodzero.com</a>
                            </div>
                                    

                            <p className="footer-top__contacts-text">1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                        </div>

                        <div className="footer-top__newsletter">
                            <h6 className="footer__title">Never Miss a Recipe</h6>
                            
                            <form action="#" className="newsletter__form">
                                <label htmlFor="" className="newsletter__form-label">
                                    <input type="text" className="newsletter__form-input" placeholder='Email Address'/>
                                    Join our subscribers and get best recipe delivered each week!
                                </label>
                                <button className="newsletter__form-btn">Subscribe</button>
                            </form>
                            

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-policy">
                <div className="container">
                    <div className="footer-policy__inner">
                        <p className="footer-policy__text">© 2020 Zero Inc. All rights Reserved</p>
                        <SocialList/>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;