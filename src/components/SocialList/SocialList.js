import twitter from './images/twitter.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import youtube from './images/youtube.svg';

import './socialList.scss'


const SocialList = () => {
    return ( 
        <ul className="social__list">
            <li className="social__list-item">
                <a href="#" className="social__list-link">
                <img src={instagram} alt="instagram" className="social__list-img" /></a>
            </li>

            <li className="social__list-item">
                <a href="#" className="social__list-link">
                <img src={twitter} alt="twitter" className="social__list-img" /></a>
            </li>

            <li className="social__list-item">
                <a href="#" className="social__list-link">
                <img src={facebook} alt="facebook" className="social__list-img" /></a>
            </li>

            <li className="social__list-item">
                <a href="#" className="social__list-link">
                <img src={youtube} alt="youtube" className="social__list-img" /></a>
            </li>

        </ul>
     );
}
 
export default SocialList;