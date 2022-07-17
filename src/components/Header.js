import logo from "../images/logo.svg";
import menu from "../images/menu.svg";

const Header = () => {
    return (
        <header className="header">
            <button aria-label="toggle navigation">
                <span className="menu--toggle--span"></span>
                <span className="menu--toggle--span"></span>
            </button>
            <img src={logo} alt="Sketch's logo" className="logo"/>
            <nav className="header--nav">
                <a href="#" className="sign-in--link">Sign In</a>
            </nav>
        </header>
    )
}

export default Header;