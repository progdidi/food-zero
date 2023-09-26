import './categoryItem.scss';

import arrow from './arrow.svg';

const CategoryItem = ({category, img}) => {
    return ( 
        <div className="category-item">
            <a href="" className="category-item__link item__title">{category}
            <img src={arrow} alt="link" className="category-item__link-img" />
            </a>
            <img src={img} alt="" className="category-item__img" />
        </div>
     );
}
 
export default CategoryItem;