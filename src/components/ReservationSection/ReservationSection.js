import './reservationSection.scss';

const ReservationSection = () => {
    return ( 
        <section className="reservation">
            <div className="container">
                <h3 className="reservation__title section__title">Make a Reservation</h3>
                <p className="reservation__descr">Get in touch with restaurant</p>

                <form action="" className="reservation__form">
                    <div className="reservation__form-info">
                        <input type="date" className="reservation__form-input" />
                        <input type="text" className="reservation__form-input" />
                        <input type="text" className="reservation__form-input" />
                    </div>
                    
                    <button type="submit" className="reservation__form-btn">Book Now</button>
                </form>
            </div>
        </section>
     );
}
 
export default ReservationSection;