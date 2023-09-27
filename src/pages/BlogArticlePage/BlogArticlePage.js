//components
import PagePromo from "../../components/PagePromo/PagePromo";

import banner from './images/banner.png';
import art1 from './images/art1.png';
import art2 from './images/art2.png';
import avatar from './images/avatar.png';

import './blogArticlePage.scss';

const BlogArticlePage = () => {
    return ( 
        <>
            <PagePromo title="Three Ideas for Cooking Goat Meat at Home" bgImage={banner}/>

            <div className="blog-article">
                <div className="container">
                    <div className="blog-article__content">
                        <p className="blog-article__text main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi veniam optio eius ducimus temporibus qui, molestias ut. Culpa ea quos minus dolor modi! Id ex harum suscipit pariatur ratione.</p>

                        <div className="blog-article__media">
                            <img src={art1} alt="" className="blog-article__img" />
                            <img src={art2} alt="" className="blog-article__img" />
                        </div>

                        <p className="blog-article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam voluptate vel magnam corporis est odit, aliquam suscipit doloribus repudiandae repellat saepe sunt dolores ipsa dolor beatae officiis hic perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, nihil asperiores quam dicta, impedit natus eligendi labore tempore nisi doloribus quisquam illo commodi illum. Consequatur earum vitae fugiat itaque placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio ipsam repellat at dignissimos neque, velit incidunt quam, itaque consequatur libero, accusantium perferendis modi eum culpa eius iure aliquid doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque soluta, incidunt aliquid impedit voluptas eos dicta ducimus reprehenderit cum cumque magni voluptatem suscipit ea natus architecto eius totam! Reiciendis. </p>


                        <quote className="blog-article__quote">
                            <p className="blog-article__quote-text">
                                lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos soluta perspiciatis eius nesciunt ea! Voluptates accusamus eum, asperiores sequi obcaecati, amet minima eos sit, officia dolore qui rerum doloremque! licabo id aut reiciendis earum cum, illum fuga expedita voluptates dolore alias sed consequuntur!
                            </p>
                            
                        </quote>

                        <p className="blog-article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae dolores recusandae officia, iure reprehenderit commodi, est perspiciatis voluptates similique ipsum voluptatem? Molestiae porro, consequuntur in vel temporibus quia non? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ducimus mollitia pariatur nihil voluptatum doloremque accusantium error dicta. At placeat eos deserunt neque quos repellat numquam culpa blanditiis dolorum assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium ratione suscipit culpa nulla aliquid, repellendus quibusdam a dolor cum atque similique voluptas. Placeat quo ex perspiciatis, ullam aperiam exercitationem. </p>

                    </div>

                    <div className="blog-article__tags">
                        Tags: <button className="blog-article__tag tag">Design</button>
                            <button className="blog-article__tag tag">Photography</button>
                            <button className="blog-article__tag tag">Images</button>
                            <button className="blog-article__tag tag">Video</button>
                            <button className="blog-article__tag tag">Design</button>
                            <button className="blog-article__tag tag">Design</button>
                    </div>

                    <div className="blog-article__author">
                        <img src={avatar} alt="" className="blog-article__author-img" />
                        <div className="blog-article__author-info">
                            <h6 className="blog-article__author-name">Julie Christie</h6>
                            <p className="blog-article__author-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error at molestiae ea, reprehenderit praesentium eos accusamus quas quia debitis sit, voluptas laboriosam! Minus suscipit aliquid porro cum. Expedita, cupiditate.</p>
                        </div>
                    </div>
                    
                </div>
            </div>   

            <div className="related">
                <div className="container">
                    related
                    <div className="related__inner">

                    </div>
                </div>
            </div>   

            <div className="comments">
                <div className="container">
                    comments
                    <div className="comments__items">

                    </div>

                    <form action="" className="comments__form"></form>
                </div>
            </div>  

            

        
        </>
     );
}
 
export default BlogArticlePage;