import { useScroll } from './ScrollContext';

function Footer() {

    const { scrollToAbout, scrollToMenu, scrollToHome } = useScroll();

    return (
        <footer className="Footer">
            <img className="FooterImg" src="/restaurant.jpg"></img>
            <div className="Doormat">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li onClick={scrollToHome}><a href="#">Home</a></li>
                    <li onClick={scrollToAbout}><a href="#">About</a></li>
                    <li onClick={scrollToMenu}><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>            
            </div>
            <div className="Contact">
                <h4>Contact</h4>
                <address>Adress</address>
                <p>phone Number</p>
                <p>email</p>
            </div>         
            <div className="SocialMediaLinks">
                <h4>Social Media Links</h4>
                <address>Adress</address>
                <p>phone number</p>
                <p>email</p>
            </div>
            
            
        </footer>
    )
}

export default Footer;