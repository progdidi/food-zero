//components
import './mainPage.scss';

//images
import promo1 from './images/promo/promo.jpg';
import spices1 from './images/promo/spices1.png';
import spices2 from './images/promo/spices2.png';
import spices3 from './images/promo/spices3.png';
import promo2 from './images/promo/promo2.jpg';
import promo3 from './images/promo/promo3.jpg';

const MainPage = () => {
    return ( 
        <>

        <section className="promo">
            <div className="container">
                <div className="promo__inner">
                    <div className="promo__main">
                        <h1 className="promo__main-title">Healthy Eating <br /> is important <br /> part of lifestyle</h1>
                        <p className="promo__main-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                        <div className="promo__main-scroll">Scroll</div>
                    </div>
                    <div className="promo__media">
                        <img src={promo1} alt="image" className="promo__media-img" />
                        <div className="promo__media-spices">
                            <img src={spices1} alt="spices" className="spices-img" />
                            <img src={spices2} alt="spices" className="spices-img" />
                            <img src={spices3} alt="spices" className="spices-img" />
                        </div>
                    </div>
                </div>

                <div className="promo__info">
                    <div className="promo__info-column">
                        <img src={promo2} alt="promo" className="promo__info-img" />
                        <h4 className="promo__info-title">Start to plan your diet today</h4>
                        <p className="promo__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                    </div>
                    <div className="promo__info-column">
                        <p className="promo__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                        <img src={promo3} alt="promo" className="promo__info-img" />
                    </div>
                    

                    

                </div>
                
            </div>
        </section>
        </>
     );
}
 
export default MainPage;