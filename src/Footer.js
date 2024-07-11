function Footer(props) {
    
    return (
        <footer>
            <img src={logo} alt="Logo" />;
            <nav>
                <p>Doormat Navigation</p>
            <ul>
                <li> <a href="url"> Home </a> </li>
                <li> <a href="url"> About </a> </li>
                <li> <a href="url"> Menu </a> </li>
                <li> <a href="url"> Reservations </a> </li>
                <li> <a href="url"> Order Online </a> </li>
                <li> <a href="url"> Login </a> </li>
            </ul> 
            </nav>
            <nav>
                <p>Contact</p>
            <ul>
                <li> <a href="url"> Address </a> </li>
                <li> <a href="url"> Phone Number </a> </li>
                <li> <a href="url"> email </a> </li>
            </ul> 
            </nav>
            <nav>
                <p>Scial Media Links</p>
            <ul>
                <li> <a href="url"> Address </a> </li>
                <li> <a href="url"> Phone Number </a> </li>
                <li> <a href="url"> email </a> </li>
            </ul> 
            </nav>
        </footer>
    );
};

export default Footer;