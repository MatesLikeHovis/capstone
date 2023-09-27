import Nav from './Nav';

function Header() {
    return (
        <header className="Header" id="Home">
            <img src="/Logo.svg" alt="Little Lemon logo"></img>
            <Nav></Nav>
        </header>
    )
}

export default Header;