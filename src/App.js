import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import BookingPage from './BookingPage';
import {Routes, Route,} from 'react-router-dom';


function App() {
  return (
     <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
     </>
  );
}

export default App;
