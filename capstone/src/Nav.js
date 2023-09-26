function Nav() {

    const aboutRef = useRef(null)
    const menuRef = useRef(null)
    


    const scrollToAbout = () => {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const scrollToMenu = () => {
        if (menuRef.current) {
          menuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      

    return (
        <nav className="Nav">
            <ul>
                <li><a>Home</a></li>
                <li onClick={scrollToAbout}><a>About</a></li>
                <li><a>Menu</a></li>
                <li onClick={scrollToMenu}><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;