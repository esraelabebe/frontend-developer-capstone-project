import "./CustomersSay.css";

function CustomersSay(props) {
  return (
    <>
      <article id="testimonials">
        <h1>Testimonials</h1>
        <div id="testimonial">
          <section>
            <div className="rating">
              <img src="./Assets/amirreza.png" alt="User" />
              <div className="stars">
                <h2>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h2>
                <h2>Amirreza</h2>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Iaculis proin id tortor.
            </p>
          </section>
          <section>
            <div className="rating">
              <img src="./Assets/luca.png" alt="User" />
              <div className="stars">
                <h2>⭐️ ⭐️ ⭐️ ⭐️</h2>
                <h2>Luca</h2>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Iaculis proin id tortor.
            </p>
          </section>
          <section>
            <div className="rating">
              <img src="./Assets/nolan.png" alt="User" />
              <div className="stars">
                <h2>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h2>
                <h2>Diana</h2>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Iaculis proin id tortor.
            </p>
          </section>
          <section>
            <div className="rating">
              <img src="./Assets/anna.png" alt="User" />
              <div className="stars">
                <h2>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h2>
                <h2>Anna</h2>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Iaculis proin id tortor.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}

export default CustomersSay;
