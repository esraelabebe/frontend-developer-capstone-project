import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <img  class="logo" src="./Assets/logo.png" alt="Logo"/>
              <nav>
                <ul class="nav-bar">
                    <li> <Link to="/" class="link"> HOME </Link> </li>
                    <li> <a href="#about"  class="link"> ABOUT </a> </li>
                    <li> <a href="#about"  class="link"> MENU </a> </li>
                    <li> <Link to="/reservations" class="link"> RESERVATIONS </Link> </li>
                    <li> <Link href="url" class="link"> ORDER ONLINE </Link> </li>
                    <li> <Link href="url" class="link"> LOG IN </Link> </li>
                </ul>
              </nav>
        </header>
          
   );

};


export default Header;
