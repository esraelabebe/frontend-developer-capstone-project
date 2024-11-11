import "./HeroSection.css";
import { Link } from "react-router-dom";
function Homepage(props) {
  return (
    <>
      <main>
        <article id="one">
          <div id="restaurant-columns">
            <div className="restaurant">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur.plat integer dolor mauris
                sed rhoncus interdum id. Metus interdum arcu lorem consequat
                fauc. Auctor aliquet commodo urna. Pellentesque nullam etiam
                quis magna.
              </p>
              <Link to="/reservations" className="link">
                <button type="submit" className="table-button">
                  Reserve a Table
                </button>
              </Link>
            </div>
            <img src="./Assets/restauranfood.png" alt="Restaurant Food" />
          </div>
        </article>
      </main>
    </>
  );
}

export default Homepage;
