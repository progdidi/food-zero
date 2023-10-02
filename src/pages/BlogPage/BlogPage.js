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
                                    blog={blog}
                                    key={blog.id}
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