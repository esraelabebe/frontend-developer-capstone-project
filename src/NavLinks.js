import './Header.css';
import { Link } from 'react-router-dom';

const NavLinks = () =>{
    return (
        <header className="NavLinks">
              <nav>
                <ul className="nav-bar">
                    <li> <Link to="/" className="link"> HOME </Link> </li>
                    <li> <a href="#about"  className="link"> ABOUT </a> </li>
                    <li> <a href="#specials"  className="link"> MENU </a> </li>
                    <li> <Link to="/reservations" className="link"> RESERVATIONS </Link> </li>
                    <li> <Link href="" className="link"> ORDER ONLINE </Link> </li>
                    <li> <Link href="url" className="link"> LOG IN </Link> </li>
                </ul>
              </nav>
        </header>
   );
};
export default NavLinks;