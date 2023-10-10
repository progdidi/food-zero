import './pagePromo.scss';

const PagePromo = ({title, bgImage, descr, more}) => {
    return ( 
        <section className="page-promo" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="container">
                <div className="page-promo__inner">
                    <h2 className="page-promo__title" style={{ maxWidth: '60%' }}>{title}</h2>
                    <p className="page-promo__descr" style={{ maxWidth: '60%' }}>{descr}</p>
                    <div className="page-promo__more">{more}</div>
                </div>
            </div>
        </section>
     );
}
 
export default PagePromo;