import './blogItem.scss';

const BlogItem = ({name, tag, date, time, comments, author, authorImg, descr, img, link}) => {
    return ( 
        <div className="blog-item">
            <div className="blog-item__media">
                <p className="blog-item__tag">{tag}</p>
                <img src={img} alt="" className="blog-item__img" />
            </div>

            <div className="blog-item__main">
                <div className="blog-item__info">
                    <img src={authorImg} alt="author" className="blog-item__info-img" />
                    <p className="blog-item__info-text">{author}</p>
                    <p className="blog-item__info-text">{date}</p>
                    <p className="blog-item__info-text">{time}</p>
                    <p className="blog-item__info-text">{comments} comments</p>
                </div>

                <h5 className="blog-item__title item__title">{name}</h5>
                <p className="blog-item__descr">{descr}</p>

                <a href={link} className="blog-item__link">Read More</a>
            </div>

           
        </div>
     );
}
 
export default BlogItem;
