import "./Specials.css";

function Specials(props) {
  return (
    <>
      <article id="specials">
        <div className="title">
          <h1>This Weeks Specials!</h1>
          <button type="submit" id="menu-button">
            Online Menu
          </button>
        </div>
        <div id="dishes">
          <div className="section">
            <img src="./Assets/greeksalad.png" alt="greeksalad" />
            <div className="description">
              <div id="price">
                <h3>Greek Salad</h3>
                <h4>$12.99</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat donec luctus sed
                blandit rutrum laoreet vulputate. Venenatis.
              </p>
              <h4>Order a delivery</h4>
            </div>
          </div>
          <div className="section">
            <img src="./Assets/bruchetta.png" alt="bruchetta" />
            <div className="description">
              <div id="price">
                <h3>Bruchecta</h3>
                <h4>$5.99</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat donec luctus sed
                blandit rutrum laoreet vulputate. Venenatis.
              </p>
              <h4>Order a delivery</h4>
            </div>
          </div>
          <div className="section">
            <img src="./Assets/lemondessert.png" alt="lemondessert" />
            <div className="description">
              <div id="price">
                <h3>Lemon Desert</h3>
                <h4>$12.99</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat donec luctus sed
                blandit rutrum laoreet vulputate. Venenatis.
              </p>
              <h4>Order a delivery </h4>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
export default Specials;
