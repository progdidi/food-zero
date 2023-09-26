import './benefitsItem.scss';

const BenefitsItem = ({img, name, descr}) => {
    return ( 
        <div className="benefits__item">
            <div className="benefits__item-media">
                <img src={img} alt="image" className="benefits__item-img" />
            </div>
            <h6 className="benefits__item-title">{name}</h6>
            <p className="benefits__item-descr">{descr}</p>
        </div>
     );
}
 
export default BenefitsItem;