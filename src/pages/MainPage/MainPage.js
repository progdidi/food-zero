//components
import { menuItems } from '../../helpers/menu';
import MenuItem from '../../components/MenuItem/MenuItem';

import { benefits } from '../../helpers/benefits/benefits';
import BenefitsItem from '../../components/BenefitsItem/BenefitsItem';

import { blogItems } from '../../helpers/blogItems/blogItems';
import BlogItem from '../../components/BlogItem/BlogItem';

import { categories } from '../../helpers/categories/categories';
import CategoryItem from '../../components/CategoryItem/CategoryItem';


//images
import promo1 from './images/promo/promo.jpg';
import spices1 from './images/promo/spices1.png';
import spices2 from './images/promo/spices2.png';
import spices3 from './images/promo/spices3.png';
import promo2 from './images/promo/promo2.jpg';
import promo3 from './images/promo/promo3.jpg';

//style
import './mainPage.scss';

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

        <section className="our-menu">
            <div className="container">
                <h3 className="our-menu__title section__title">Our Menu</h3>
                <p className="our-menu__descr">This is a section of your menu. Give your section a brief description</p>
                <div className="our-menu__info">
                    {menuItems.map((dish) => {
                        return (
                            <MenuItem
                                key={dish.id}
                                dish={dish.dish}
                                descr={dish.descr} 
                                price={dish.price}
                            />
                        )                            
                    })}
                </div>
            </div>
        </section>

        <section className="ecxellent">
            <div className="container">
                <div className="ecxellent__inner">
                    <h3 className="ecxellent__title section__title">Excellent cook</h3>
                    <p className="ecxellent__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
                </div>
                
            </div>
        </section>

        <div className="benefits">
            <div className="container">
                <div className="benefits__inner">
                    {benefits.map((benefit) => {
                        return (
                            <BenefitsItem
                                key={benefit.id}
                                name={benefit.name}
                                descr={benefit.descr} 
                                img={benefit.img}
                            />
                        )                            
                    })}
                </div>
            </div>
        </div>

        <div className="blog-preview">
            <div className="container">
                <div className="blog-preview__inner">
                    {blogItems.map((blog) => {
                        return (
                            <BlogItem
                                key={blog.id}
                                name={blog.name}
                                descr={blog.descr} 
                                img={blog.img}
                                tag={blog.tag}
                                date={blog.date}
                                time={blog.time}
                                comments={blog.comments}
                                author={blog.author}
                                authorImg={blog.authorImg}
                                link={blog.link}
                            />
                        )                            
                    })}
                </div>
            </div>
        </div>

        <section className="reservation">
            <div className="container">
                <h3 className="reservation__title section__title">Make a Reservation</h3>
                <p className="reservation__descr">Get in touch with restaurant</p>

                <form action="" className="reservation__form">
                    <div className="reservation__form-info">
                        <input type="date" className="reservation__form-input" />
                        <input type="text" className="reservation__form-input" />
                        <input type="text" className="reservation__form-input" />
                    </div>
                    
                    <button type="submit" className="reservation__form-btn">Book Now</button>
                </form>
            </div>
        </section>

        <section className="categories">
            <div className="container">
                <h3 className="categories__title section__title">Calories Energy Balance</h3>
                <p className="categories__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className="categories__inner">
                    {categories.map((category) => {
                        return (
                            <CategoryItem
                                key={category.id}
                                category={category.category}
                                img={category.categoryImg}
                                link={category.link}
                            />
                        )                            
                    })}
                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;