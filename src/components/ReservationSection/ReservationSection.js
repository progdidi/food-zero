import './reservationSection.scss';

const ReservationSection = () => {

    const reservDate = new Date();
    const year = reservDate.getFullYear();
    const month = reservDate.getMonth() + 1;
    const day = reservDate.getDate();

    return ( 
        <section className="reservation">
            <div className="container">
                <h3 className="reservation__title section__title">Make a Reservation</h3>
                <p className="reservation__descr">Get in touch with restaurant</p>

                <form id='reservation' action="" className="reservation__form">
                    <div className="reservation__form-info">
                        <input id='date' type="date" className="reservation__form-input" defaultValue={`${year}-${month}-${day}`} />

                        <select id="time" form="reservation" className="reservation__form-input">
                            <option value="11">11:00 am</option>
                            <option value="12">12:00 pm</option>
                            <option value="13">1:00 pm</option>
                            <option value="14">2:00 pm</option>
                            <option value="15">3:00 pm</option>
                            <option value="16">4:00 pm</option>
                            <option value="17">5:00 pm</option>
                            <option value="18">6:00 pm</option>
                            <option value="19">7:00 pm</option>
                            <option value="20">8:00 pm</option>
                        </select>

                        <select id="people" form="reservation" className="reservation__form-input">
                            <option value="2">2 person</option>
                            <option value="3">3 person</option>
                            <option value="4">4 person</option>
                            <option value="more">more</option>
                        </select>

                    </div>
                    
                    <button type="submit" className="reservation__form-btn">Book Now</button>
                </form>
            </div>
        </section>
     );
}
 
export default ReservationSection;