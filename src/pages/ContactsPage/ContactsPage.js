//components
import PagePromo from "../../components/PagePromo/PagePromo";
import ReservationSection from "../../components/ReservationSection/ReservationSection";
import OpenTime from "../../components/OpenTime/OpenTime";

//images
import banner from './images/banner.png';
import contacts1 from './images/contacts1.png';
import contacts2 from './images/contacts2.png';
import reservBg from './images/reservBg.svg';

import './contactsPage.scss';

const ContactsPage = () => {
    return ( 
        <>
            <PagePromo title="Get in Touch" descr="The freshest ingredients for you every day" bgImage={banner} more={<OpenTime/>}
            />

            
            
            <div className="contacts">
                <div className="container">
                    <div className="contacts__item">
                        <img src={contacts1} alt="" className="contacts__item-img" />
                        <div className="contacts__item-info">
                            <p className="contacts__item-text">We can be contacted via <br /> email <a href="mail:info@foodzero.com" className="contacts__item-link">info@foodzero.com </a> <br/>
                            or telephone on <a href="tel:86852346000" className="contacts__item-link">+86 852 346 000</a>
                            </p>
                        </div>
                        
                    </div>
                    <div className="contacts__item"> 
                        <div className="contacts__item-info">
                            <p className="contacts__item-text">We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                            <button className="contacts__item-btn main-btn">View in maps</button>
                        </div>                       
                       
                        <img src={contacts2} alt="" className="contacts__item-img" />
                    </div>
                </div>
            </div>

            <ReservationSection/>
        </>
     );
}
 
export default ContactsPage;