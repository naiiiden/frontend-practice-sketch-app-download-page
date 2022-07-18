import { useState } from "react";
import logo from "../images/logo.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";

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
                    <li><span>Product</span> <Arrow/></li>
                    <li><span>Learn</span> <Arrow/></li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><span>Support</span> <Arrow/></li>
                    <li><a href="#">Get started for free</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;