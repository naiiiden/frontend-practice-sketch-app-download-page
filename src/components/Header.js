import { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="header">
            <button aria-label="toggle navigation" onClick={() => setOpenMenu(!openMenu)}>
                <span className={`menu--toggle--span ${openMenu ? "open" : ""}`}></span>
                <span className={`menu--toggle--span ${openMenu ? "open" : ""}`}></span>
            </button>
            <img src={logo} alt="Sketch's logo" className="logo"/>
            <nav className="header--nav">
                <a href="#" className="sign-in--link">Sign In</a>
            </nav>
        </header>
    )
}

export default Header;