import './blogItem.scss';

const BlogItem = ({blog}) => {
    return ( 
        <div className="blog-item">
            <div className="blog-item__media">
                <p className="blog-item__tag">{blog.tag}</p>
                <img src={blog.img} alt="" className="blog-item__img" />
            </div>

            <div className="blog-item__main">
                <div className="blog-item__info">
                    <img src={blog.authorImg} alt="author" className="blog-item__info-img" />
                    <div className="blog-item__info-inner">
                        <p className="blog-item__info-text">{blog.author}</p>
                        <p className="blog-item__info-text">{blog.date}</p>
                        <p className="blog-item__info-text">{blog.time}</p>
                        <p className="blog-item__info-text">{blog.comments} comments</p>
                    </div>
                    
                </div>

                <h5 className="blog-item__title item__title">{blog.name}</h5>
                <p className="blog-item__descr">{blog.descr}</p>

                <a href={blog.link} className="blog-item__link">Read More</a>
            </div>

           
        </div>
     );
}
 
export default BlogItem;
