//components
import PagePromo from "../../components/PagePromo/PagePromo";
import ReservationSection from "../../components/ReservationSection/ReservationSection";

//images
import banner from './images/banner.png';
import about1 from './images/about1.png';
import manager from './images/manager.png';
import chef from './images/chef.png';

import './aboutPage.scss';

const AboutPage = () => {
    return ( 
        <>
            <PagePromo title="Who We Are" descr="The most important thing for us is to give you the comfortable dining experience" bgImage={banner}/>

            <section className="about-us">
                <div className="container">
                    <div className="about-us__story">
                        <div className="about-us__story-info">
                            <h3 className="about-us__story-title section__title">Our Story</h3>
                            <p className="about-us__story-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
                        </div>
                        <img src={about1} alt="" className="about-us__story-img" />
                    </div>

                    <div className="about-us__staff">
                        <div className="about-us__staff-info">
                            <h4 className="about-us__staff-title">Restuarant Manager</h4>
                            <p className="about-us__staff-name">Carson Hugn</p>
                            <img src={manager} alt="" className="about-us__staff-img" />
                        </div>
                        <p className="about-us__staff-about">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. 
                        </p>
                    </div>

                    <div className="about-us__staff">
                        <p className="about-us__staff-about">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. 
                        </p>
                        <div className="about-us__staff-info">
                            <h4 className="about-us__staff-title">Executive Chef</h4>
                            <p className="about-us__staff-name">Jane Cooper</p>
                            <img src={chef} alt="" className="about-us__staff-img" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default AboutPage;