import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};

export function updateTimes(state, action) {
  if (action.type === "date_changed") {
    const selectedDate = new Date(action.date);
    const timeAvailable = fetchAPI(selectedDate);
    return timeAvailable;
  }
  return state;
}

export const initializeTimes = () => {
  const date  = new Date();
  return  fetchAPI(date);
};

function Main(props) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  function submitForm (formData) {
    const submitted =  submitAPI(formData);
    if(submitted) {
      navigate("/confirmed-booking");
    }
  }
  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />;
}
export default Main;
