import "./Header.css";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

function MobileNavigation() {
  const [showMenu, setShowMenu] = useState(false);
  const onHideMenu = () => setShowMenu(false);

  const Hamburger = (
    <SlMenu
      className="HamburgerMenu"
      size="27px"
      color="rgb(73, 94, 87)"
      onClick={() => setShowMenu(true)}
    />
  );

  const Close = (
    <IoCloseCircle
      className="HamburgerMenu"
      size="30px"
      color="rgb(73, 94, 87)"
      onClick={onHideMenu}
    />
  );

  return (
    <header className="MobileNavigation">
      <Link to="/">
        <img className="logo" src="./Assets/logo.png" alt="Logo" />
      </Link>
      {showMenu ? Close : Hamburger}
      {showMenu && (
        <nav className="NavLinks">
          <ul className="nav-bar mobile-nav">
            <li>
              <Link to="/" className="link" onClick={onHideMenu}>
                HOME
              </Link>
            </li>
            <li>
              <a href="#about" className="link" onClick={onHideMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#specials" className="link" onClick={onHideMenu}>
                MENU
              </a>
            </li>
            <li>
              <Link to="/reservations" className="link" onClick={onHideMenu}>
                RESERVATIONS
              </Link>
            </li>
            <li>
              <Link href="" className="link" onClick={onHideMenu}>
                ORDER ONLINE
              </Link>
            </li>
            <li>
              <Link href="url" className="link" onClick={onHideMenu}>
                LOG IN
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MobileNavigation;
