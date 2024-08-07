import HeroSection from "./HeroSection";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago"
import "./HomePage.css";

function HomePage() {
    return(
        <>
        <HeroSection />
        <div class="page-sections">
          <Specials />
          <CustomersSay />
          <Chicago />
        </div>
        </>
    );
};

export default HomePage;