import './portfolioItem.scss';

const PortfolioItem = ({img, dish, category}) => {
    return ( 
        <div className="portfolio-item">
            <img src={img} alt="" className="portfolio-item__img" />
            <div className="portfolio-item__info">
                <h4 className="portfolio-item__title item__title">{dish}</h4>
                <p className="portfolio-item__category">{category}</p>
            </div>
            
        </div>
     );
}
 
export default PortfolioItem;