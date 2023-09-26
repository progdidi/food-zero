import './menuItem.scss';

const MenuItem = ({price, dish, descr}) => {
    return ( 
        <>
            <div className="menuItem">
                <p className="menuItem__price">${price}</p>
                <h6 className="menuItem__name">{dish}</h6>
                <p className="menuItem__descr">{descr}</p>
            </div>
        </>
     );
}
 
export default MenuItem;