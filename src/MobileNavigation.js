import './Header.css';
import { Link } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

function MobileNavigation(props) {
    const [click, setClick] = useState(false);

    const Hamburger = <SlMenu className="HamburgerMenu"
        size="30px" color="rgb(73, 94, 87)"
        onClick={() => setClick(!click)}/>

    const Close = <IoCloseCircle className="HamburgerMenu"
        size="40px" color="rgb(73, 94, 87)"
        onClick={() => setClick(!click)} />


    return (
        <header className="MobileNavigation">
            <img  className="logo" src="./Assets/logo.png" alt="Logo"/>
            { click ? Close : Hamburger}
            {click &&  <nav className="NavLinks">
                <ul className="nav-bar">
                    <li> <Link to="/" className="link"> HOME </Link> </li>
                    <li> <a href="#about"  className="link"> ABOUT </a> </li>
                    <li> <a href="#specials"  className="link"> MENU </a> </li>
                    <li> <Link to="/reservations" className="link"> RESERVATIONS </Link> </li>
                    <li> <Link href="" className="link"> ORDER ONLINE </Link> </li>
                    <li> <Link href="url" className="link"> LOG IN </Link> </li>
                </ul>
              </nav>}
        </header>
   );
};


export default MobileNavigation;