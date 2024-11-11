import "./BookingForm.css";
import React, { useEffect, useRef } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  let formikRef = useRef(null);

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.focus();
    }
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div id="online-reservation">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userEmail: "",
          phoneNumber: "",
          bookingDate: "",
          bookTime: "",
          bookingAdults: "",
          bookingChildren: "",
          seatings: "",
          occasions: "",
          requests: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          userEmail: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          bookingDate: Yup.string()
            .test("isFutureDate", "Select date in future", (value, context) => {
              const selectedDate = new Date(value);
              const today = new Date();
              return selectedDate > today;
            })
            .required("Required"),
          bookTime: Yup.string().required("Required"),
          requests: Yup.string().max(200, "Must be 200 characters or less"),
          seatings: Yup.string().required("Required"),
          bookingAdults: Yup.number()
            .min(1, "Must be greater than zero")
            .max(20, "Must not be more than 20")
            .required("Required"),
          phoneNumber: Yup.string().matches(
            phoneRegExp,
            "Phone number is not valid"
          ),
          bookingChildren: Yup.number()
            .max(20, "Must not be more than 20")
            .min(0, "Must not be less than zero")
            .required("Required"),
        })}
        onSubmit={(values) => {
          submitForm(values);
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <h1 className="booking">Make Your Reservation</h1>
            <div className="input-fields">
              <div className="first-column">
                <div className="inputs">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="formElement"
                    type="input"
                    ref={formikRef}
                    id="firstName"
                    name="firstName"
                    aria-invalid={
                      formik.touched.firstName && formik.errors.firstName
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.firstName && formik.errors.firstName
                        ? "firstName-error"
                        : null
                    }
                    aria-required="true"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div id="firstName-error" className="error-massage">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="inputs">
                  <label htmlFor="userEmail">Email Address</label>
                  <input
                    className="formElement"
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    aria-invalid={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "userEmail-error"
                        : null
                    }
                    aria-required="true"
                    onChange={formik.handleChange}
                    value={formik.values.userEmail}
                  />
                  {formik.touched.userEmail && formik.errors.userEmail ? (
                    <div id="userEmail-error" className="error-massage">
                      {formik.errors.userEmail}
                    </div>
                  ) : null}
                </div>
                <div className="inputs">
                  <label htmlFor="bookingDate">Booking Date</label>
                  <input
                    className="formElement"
                    type="date"
                    id="bookingDate"
                    name="bookingDate"
                    aria-invalid={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "bookingDate-error"
                        : null
                    }
                    aria-required="true"
                    value={formik.values.bookingDate}
                    onChange={(e) => {
                      dispatch({ type: "date_changed", date: e.target.value });
                      formik.handleChange(e);
                    }}
                  />
                  {formik.touched.bookingDate && formik.errors.bookingDate ? (
                    <div id="bookingDate-error" className="error-massage">
                      {formik.errors.bookingDate}
                    </div>
                  ) : null}
                </div>
                <div className="inputs">
                  <label htmlFor="bookingAdults">Number of Adults</label>
                  <input
                    className="formElement"
                    type="number"
                    id="bookingAdults"
                    name="bookingAdults"
                    aria-invalid={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "bookingAdults-error"
                        : null
                    }
                    aria-required="true"
                    onChange={formik.handleChange}
                    value={formik.values.bookingAdults}
                  />
                  {formik.touched.bookingAdults &&
                  formik.errors.bookingAdults ? (
                    <div id="bookingAdults-error" className="error-massage">
                      {formik.errors.bookingAdults}
                    </div>
                  ) : null}
                </div>
                <fieldset>
                  <legend>Seatings:</legend>
                  <div id="seatings">
                    <div className="seatingsOption">
                      <Field
                        type="radio"
                        id="outside"
                        name="seatings"
                        value="outside"
                      />
                      <label htmlFor="outside">Outside</label>
                    </div>
                    <div className="seatingsOption">
                      <Field
                        type="radio"
                        id="inside"
                        name="seatings"
                        value="inside"
                      />
                      <label htmlFor="inside">Inside</label>
                    </div>
                  </div>
                  <div id="seatingsError">
                    {formik.touched.seatings && formik.errors.seatings ? (
                      <div className="error-massage">
                        {formik.errors.seatings}
                      </div>
                    ) : null}
                  </div>
                </fieldset>
              </div>
              <div className="second-column">
                <div className="inputs">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="formElement"
                    type="text"
                    id="lastName"
                    name="lastName"
                    aria-invalid={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "lastName-error"
                        : null
                    }
                    aria-required="true"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div id="lastName-error" className="error-massage">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
                <div className="inputs">
                  <label htmlFor="phoneNumber">Phone Number (optional)</label>
                  <input
                    className="formElement"
                    type="input"
                    id="phoneNumber"
                    name="phoneNumber"
                    aria-invalid={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "phoneNumber-error"
                        : null
                    }
                    aria-required="true"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div id="phoneNumber-error" className="error-massage">
                      {formik.errors.phoneNumber}
                    </div>
                  ) : null}
                </div>
                <div className="inputs">
                  <label htmlFor="bookTime">Booking Time</label>
                  <select
                    className="formElement"
                    id="bookTime"
                    name="bookTime"
                    aria-invalid={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "bookTime-error"
                        : null
                    }
                    aria-required="true"
                    value={formik.values.bookTime}
                    onChange={formik.handleChange}
                  >
                    {availableTimes.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                  {formik.touched.bookTime && formik.errors.bookTime ? (
                    <div id="bookTime-error" className="error-massage">
                      {formik.errors.bookTime}
                    </div>
                  ) : null}
                </div>
                <div className="inputs">
                  <label htmlFor="bookingChildren">Number of Children</label>
                  <input
                    className="formElement"
                    type="number"
                    id="bookingChildren"
                    name="bookingChildren"
                    aria-invalid={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "true"
                        : null
                    }
                    aria-describedby={
                      formik.touched.userEmail && formik.errors.userEmail
                        ? "bookingChildren-error"
                        : null
                    }
                    aria-required="true"
                    onChange={formik.handleChange}
                    value={formik.values.bookingChildren}
                  />
                  {formik.touched.bookingChildren &&
                  formik.errors.bookingChildren ? (
                    <div id="bookingChildren-error" className="error-massage">
                      {formik.errors.bookingChildren}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div>
                    <label htmlFor="occasions">(optional)</label>
                  </div>
                  <select
                    className="formElement"
                    name="occasions"
                    id="occasions"
                    onChange={formik.handleChange}
                    value={formik.values.occasions}
                  >
                    <option value="occasions">🥂 Occasions </option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="requestsFormGroup">
              <label htmlFor="requests">Special Requests (optional)</label>
              <textarea
                name="requests"
                id="requests"
                rows="14"
                cols="10"
                wrap="soft"
                aria-invalid={
                  formik.touched.userEmail && formik.errors.userEmail
                    ? "true"
                    : null
                }
                aria-describedby={
                  formik.touched.userEmail && formik.errors.userEmail
                    ? "requests-error"
                    : null
                }
                aria-required="true"
                onChange={formik.handleChange}
                value={formik.values.requests}
              ></textarea>
              {formik.touched.requests && formik.errors.requests ? (
                <div id="requests-error" className="error-massage">
                  {formik.errors.requests}
                </div>
              ) : null}
            </div>
            <div id="submitButton">
              <button type="submit" className="book-now">
                BOOK NOW
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default BookingForm;
