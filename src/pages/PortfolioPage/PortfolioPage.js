//components
import PagePromo from "../../components/PagePromo/PagePromo";
import { menuItems } from "../../helpers/menu/menu";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

import banner from './banner.png'
import './portfolioPage.scss';

const PortfolioPage = () => {
    return ( 
        <>
            <PagePromo title="Portfolio - Grids" bgImage={banner}/>

            <section className="portfolio">
                <div className="container">
                    <div className="portfolio__inner">
                        <div className="portfolio__cats">
                            <button className="portfolio__cats-btn">All</button>
                            <button className="portfolio__cats-btn">Starter</button>
                            <button className="portfolio__cats-btn">Launch</button>
                            <button className="portfolio__cats-btn">Dinner</button>
                            <button className="portfolio__cats-btn">Drinks</button>
                            <button className="portfolio__cats-btn">Sweets</button>
                            <button className="portfolio__cats-btn">Fruits</button>
                        </div>

                        <div className="portfolio__items">
                            {menuItems.map((dish) => {
                                if(dish.category === "portfolio") {
                                    return (
                                        <PortfolioItem
                                            key={dish.id}
                                            dish={dish.dish}
                                            img={dish.img} 
                                            category={dish.category}
                                        />
                                    ) 
                                }
                                                        
                            })}
                        </div>  

                        <button className="portfolio__btn load-btn">Load more</button>
                    </div>

                                      

                    
                </div>
            </section>
        </>
     );
}
 
export default PortfolioPage;
