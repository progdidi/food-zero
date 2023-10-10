import './menuItem.scss';

const MenuItem = ({price, dish, descr}) => {
    return ( 
        <>
            <a href="" className="menuItem">
                <p className="menuItem__price">${price}</p>
                <h6 className="menuItem__name">{dish}</h6>
                <p className="menuItem__descr">{descr}</p>
            </a>
        </>
     );
}
 
export default MenuItem;