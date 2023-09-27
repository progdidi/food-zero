//components
import PagePromo from "../../components/PagePromo/PagePromo";
import ReservationSection from "../../components/ReservationSection/ReservationSection";

import { menuItems } from '../../helpers/menu';
import MenuItem from '../../components/MenuItem/MenuItem';

//images
import banner from './images/banner.png';
import starters from './images/start.png';
import mains from './images/main.png';
import drinks from './images/drink.png';

import './menuPage.scss';

const MenuPage = () => {
    return ( 
        <>
            <PagePromo title="View Our New Menu" descr="The freshest ingredients for you every day" bgImage={banner}/>

            <div className="new-menu">
                <div className="container">
                    {/* starters */}
                    <div className="new-menu__section">
                        <h3 className="new-menu__section-title section__title">Starters</h3>
                        <p className="new-menu__section-descr">This is a section of your menu. Give your section a brief description</p>
                        <div className="new-menu__section-inner">
                            <img src={starters} alt="img" className="new-menu__section-img" />
                            <div className="new-menu__items">
                            {menuItems.map((dish) => {
                                if(dish.category === "starters") {
                                    return (
                                        <MenuItem
                                            key={dish.id}
                                            dish={dish.dish}
                                            descr={dish.descr} 
                                            price={dish.price}
                                        />
                                    ) 
                                }
                                                        
                            })}
                            </div>
                        </div>
                    </div>

                    {/* mains */}
                    <div className="new-menu__section">
                        <h3 className="new-menu__section-title section__title">Mains</h3>
                        <p className="new-menu__section-descr">This is a section of your menu. Give your section a brief description</p>
                        <div className="new-menu__section-inner">
                            <img src={mains} alt="img" className="new-menu__section-img" />
                            <div className="new-menu__items">
                                {menuItems.map((dish) => {
                                    if(dish.category === "mains") {
                                        return (
                                            <MenuItem
                                                key={dish.id}
                                                dish={dish.dish}
                                                descr={dish.descr} 
                                                price={dish.price}
                                            />
                                        ) 
                                    }
                                                            
                                })}
                            </div>
                        </div>
                    </div>

                    {/* drinks */}
                    <div className="new-menu__section">
                        <h3 className="new-menu__section-title section__title">Pastries & Drinks</h3>
                        <p className="new-menu__section-descr">This is a section of your menu. Give your section a brief description</p>
                        <div className="new-menu__section-inner">
                            <img src={drinks} alt="image" className="new-menu__section-img" />
                            <div className="new-menu__items">
                                {menuItems.map((dish) => {
                                    if(dish.category === "drinks") {
                                        console.log(dish.category)
                                        return (
                                            <MenuItem
                                                key={dish.id}
                                                dish={dish.dish}
                                                descr={dish.descr} 
                                                price={dish.price}
                                            />
                                        ) 
                                    } else {
                                        return '';
                                    }
                                                            
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ReservationSection/>
        </>
     );
}
 
export default MenuPage;