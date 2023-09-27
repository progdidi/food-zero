import './pagePromo.scss';

const PagePromo = ({title, bgImage, descr}) => {
    return ( 
        <section className="page-promo" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container">
                <div className="page-promo__inner">
                    <h2 className="page-promo__title">{title}</h2>
                    <p className="page-promo__descr">{descr}</p>
                </div>
            </div>
        </section>
     );
}
 
export default PagePromo;