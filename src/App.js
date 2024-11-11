import "./App.css";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Footer from "./Footer";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";

function App() {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
