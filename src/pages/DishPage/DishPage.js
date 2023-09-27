import PagePromo from "../../components/PagePromo/PagePromo";

//images
import banner from './images/banner.png';
import dish1 from './images/dish1.png';
import dish2 from './images/dish2.png';
import dish3 from './images/dish3.png';
import divider from './images/divider.svg';

import './dishPage.scss';

const DishPage = () => {
    return ( 
        <>
            <PagePromo title="Deep Sea Snow White Cod Fillet" bgImage={banner}/>

            <section className="dish-article">
                <div className="container">
                    <div className="dish-article__main">
                        <div className="dish-article__item">
                            <img src={dish1} alt="dish" className="dish-article__item-img" />
                            <div className="dish-article__info">
                                <h5 className="dish-article__subtitle item__title">Melt in Your Mouth</h5>
                                <p className="dish-article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                            </div>
                        </div>
                        <div className="dish-article__item">
                            <img src={dish2} alt="dish" className="dish-article__item-img" />
                            <div className="dish-article__info">
                                <h5 className="dish-article__subtitle item__title">The Best Taste</h5>
                                <p className="dish-article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                            </div>
                        </div>
                        <div className="dish-article__item">
                            <img src={dish3} alt="dish" className="dish-article__item-img" />
                            <div className="dish-article__info">
                                <h5 className="dish-article__subtitle item__title">Cooking Suggestions</h5>
                                <p className="dish-article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>

            <div className="dish-article__links">
                <div className="container">
                    <div className="dish-article__links-inner">
                        <a href="" className="dish-article__link">
                            <p className="dish-article__link-text">previous  Page</p>
                            <h6 className="dish-article__link-name">Strip Steak With Rosemary Butter</h6>
                        </a>

                        <img src={divider} alt="" className="dish-article__links-divider" />

                        <a href="" className="dish-article__link">
                            <p className="dish-article__link-text">Next page</p>
                            <h6 className="dish-article__link-name">Option of natural wine available</h6>
                        </a>
                    </div>
                </div>
                
            </div>

        </>
     );
}
 
export default DishPage;