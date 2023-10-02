//components
import PagePromo from "../../components/PagePromo/PagePromo";
import ReservationSection from "../../components/ReservationSection/ReservationSection";

//images
import banner from './images/banner.png';
import about1 from './images/about1.png';
import manager from './images/manager.png';
import chef from './images/chef.png';
import play from './images/play.svg';

import process1 from './images/process1.png';
import process2 from './images/process2.png';
import process3 from './images/process3.png';

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

            <section className="video">
                <div className="container">
                    <div className="video__inner">
                        <h3 className="video__title section__title">It looks delicious</h3>
                        <p className="video__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <button className="video-btn"> <img src={play} alt="play" className="video-btn__img" /></button>
                    </div>
                </div>
            </section> 

            <section className="process">
                <div className="container">
                    <h3 className="process__title section__title">Sophisticated Process</h3>
                    <div className="process__item first">
                        <img src={process1} alt="" className="process__item-img" />
                        <div className="process__item-info">
                            <h4 className="process__item-title">01.Slice</h4>
                            <p className="process__item-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. </p>
                        </div>                       
                    </div>

                    <div className="process__item-group">
                        <div className="process__item second">
                            <img src={process2} alt="" className="process__item-img" />
                            <div className="process__item-info">
                                <h4 className="process__item-title">02.Pickled</h4>
                                <p className="process__item-descr">Lorem iricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. </p>
                            </div>                       
                        </div>

                        <div className="process__item third">
                            <img src={process3} alt="" className="process__item-img" />
                            <div className="process__item-info">
                                <h4 className="process__item-title">03.Bake</h4>
                                <p className="process__item-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purusc nam etiam. </p>
                            </div>                       
                        </div>
                    </div>

                    
                </div>
            </section>

            <ReservationSection/>
        </>
     );
}
 
export default AboutPage;