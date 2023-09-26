import './reviewsItem.scss';

const ReviewsItem = ({text, author, authorImg, authorField}) => {
    return ( 
        <div className="review-item">

            <p className="review-item__text item__title">"{text}"</p>
            <div className="review-item__info">
                <img src={authorImg} alt="" className="review-item__img" />
                <div className="review-item__author">
                    <p className="review-item__author-name">{author}</p>
                    <p className="review-item__author-field">{authorField}</p>
                </div>
            </div>

        </div>
     );
}
 
export default ReviewsItem;