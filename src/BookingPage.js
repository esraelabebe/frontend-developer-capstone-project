import "./BookingPage.css";
import Main from "./Main";

function BookingPage(props) {
  
  return (
    <div className="wrapper">
      <img id="overlay" src="./Assets/restaurant.png" alt="restaurant image" />
      <div id="booking-page">
        <Main />
        <div id="hours">
          <h2>working hours:</h2>
          <p>Monday - Friday of 5:00 PM to 10:00 PM</p>
          <p>Saturday - Sunday of 5:00 PM to 11:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
