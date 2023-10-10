import './openTime.scss';

const OpenTime = () => {
    return ( 
        <div className="open-time">
                <div className="open-time__top">
                    <h6 className="open-time__title">Open Time</h6>
                    <p className="open-time__text">Sunday - Friday</p>
                </div>
                <div className="open-time__info">
                    <div className="open-time__text">Brunch <br /> 11:00–12:00</div>
                    <div className="open-time__text">Lunch <br /> 13:00–17:00</div>
                    <div className="open-time__text">Dinner <br /> 18:00–20:00</div>
                </div>
            </div>
     );
}
 
export default OpenTime;