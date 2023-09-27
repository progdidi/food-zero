//components
import PagePromo from "../../components/PagePromo/PagePromo";
import { blogItems } from '../../helpers/blogItems/blogItems';
import BlogItem from '../../components/BlogItem/BlogItem';

import banner from './images/banner.png';

import './blogPage.scss';

const BlogPage = () => {
    return ( 
        <>
            <PagePromo title="Blog" bgImage={banner}/>

            <div className="blog">
                <div className="container">
                    <div className="blog__inner">
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

                    <div className="blog__btn load-btn">Load more</div>
                </div>
            </div>
        </>
     );
}
 
export default BlogPage;