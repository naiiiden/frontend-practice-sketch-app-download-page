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
                <ul className={`header--nav--ul ${openMenu ? "show" : ""}`}>
                    <li>Product</li>
                    <li>Learn</li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li>Support</li>
                    <li><a href="#">Get started for free</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;