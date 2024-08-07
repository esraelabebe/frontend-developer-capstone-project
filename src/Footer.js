import './Footer.css';

function Footer(props) {
    
    return (
        <footer>
            <img src="./Assets/footerlogo.png" alt="User"/>
            <div class="contact">
                <div>
                    <p>Doormat<br /> Navigation</p>
                <ul>
                    <li> <a href="url"> Home </a> </li>
                    <li> <a href="url"> About </a> </li>
                    <li> <a href="url"> Menu </a> </li>
                    <li> <a href="url"> Reservations </a> </li>
                    <li> <a href="url"> Order Online </a> </li>
                    <li> <a href="url"> Login </a> </li>
                </ul> 
                </div>
                <div>
                    <p>Contact</p>
                <ul>
                    <li> <a href="url"> Address </a> </li>
                    <li> <a href="url"> Phone Number </a> </li>
                    <li> <a href="url"> email </a> </li>
                </ul> 
                </div>
                <div>
                    <p>Scial Media Links</p>
                <ul>
                    <li> <a href="url"> Address </a> </li>
                    <li> <a href="url"> Phone Number </a> </li>
                    <li> <a href="url"> email </a> </li>
                </ul> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;