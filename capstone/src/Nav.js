import { useScroll } from './ScrollContext';
import {Link} from "react-router-dom";


function Nav() {


  


    const { scrollToAbout, scrollToMenu, scrollToHome } = useScroll();

    return (
        <nav className="Nav">
            <ul>
                <li><Link to="/Main">Home</Link></li>
                <li onClick={scrollToAbout}><a href="#">About</a></li>
                <li onClick={scrollToMenu}><a href="#">Menu</a></li>
                <li><Link to="/BookingPage">Reservations</Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;