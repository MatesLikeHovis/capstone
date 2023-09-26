import { useScroll } from './ScrollContext';

function Nav() {


  


    const { scrollToAbout, scrollToMenu } = useScroll();

    return (
        <nav className="Nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li onClick={scrollToAbout}><a href="#">About</a></li>
                <li onClick={scrollToMenu}><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;