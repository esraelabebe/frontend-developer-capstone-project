import "./BookingPage.css";

function BookingPage(props) {
  return (
    <div className="wrapper">
      <img  id="overlay" src="./Assets/restaurant.png" alt="restaurant image"/>
      <div id="online-reservation">
        <form>
          <h1 class="booking">Make Your Reservation</h1>
          <div class="input-fields">
            <div class="first-colomn">
              <div class="inputs">
                <label htmlFor="first_name">First Name</label>
                <input type="input" id="first_name" name="first_name" />
              </div>
              <div class="inputs">
                <label htmlFor="user_email">Email Address</label>
                <input type="email" id="user_email" name="user_email" />
              </div>
              <div class="inputs">
                <label htmlFor="booking-date">Booking Date</label>
                <input type="input" id="booking_date" name="booking-date" />
              </div>
              <div class="inputs">
                <label htmlFor="booking_adults">Number of Adults</label>
                <input type="input" id="booking_adults" name="booking_adults" />
              </div>
              <fieldset>
                <legend>Seatings:</legend>
                <div>
                  <input
                    type="radio"
                    id="outside"
                    name="seatings"
                    value="outside"
                  />
                  <label htmlFor="outside">Outside</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="inside"
                    name="seatings"
                    value="inside"
                  />
                  <label htmlFor="outside">Inside</label>
                </div>
              </fieldset>
            </div>
            <div class="second-colomn">
              <div class="inputs">
                <label htmlFor="last_name">Last Name</label>
                <input type="input" id="last_name" name="last_name" />
              </div>
              <div class="inputs">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="input" id="phone_number" name="phone_number" />
              </div>
              <div class="inputs">
                <label htmlFor="booking-date">Booking Time</label>
                <input type="input" id="booking_time" name="booking-time" />
              </div>
              <div class="inputs">
                <label htmlFor="booking_adults">Number of Children</label>
                <input
                  type="input"
                  id="booking_children"
                  name="booking_children"
                />
              </div>
              <div>
                <select name="occasions" id="occasions">
                  <option value="birthday">🥂  Occasions </option>
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
            </div>
          </div>
          <div class="requests">
            <label htmlFor="requests">Special Requests (optional) </label>
            <input type="text" id="requests" name="requests" />
          </div>
          <button class="book-now">BOOK NOW</button>
        </form>
        <div id="hours">
          <h2>working hours:</h2>
          <p>Monday - Friday of 9:00 AM to 5:00 PM</p>
          <p>Saturday of 10:AM to 5:00PM</p>
        </div>
      </div>
    </div>
    
  );
}

export default BookingPage;
