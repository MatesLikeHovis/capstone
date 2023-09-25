function Footer() {
    return (
        <footer className="Footer">
            <img className="FooterImg" src="/restaurant.jpg"></img>
            <div className="Doormat">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
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