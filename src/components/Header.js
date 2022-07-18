import { useState } from "react";
import logo from "../images/logo.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openLearn, setOpenLearn] = useState(false);
    const [openSupport, setOpenSupport] = useState(false);

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
                    <li onClick={() => (setOpenProduct(!openProduct), setOpenLearn(false), setOpenSupport(false))} className={`dropdown--button ${openProduct ? "active" : ""}`}><span>Product</span> <Arrow className={`arrow ${openProduct ? "rotate" : ""}`}/>
                        <ul className={`dropdown ${openProduct ? "show" : ""}`}>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Collaborate</a></li>
                            <li><a href="#">Prototype</a></li>
                            <li><a href="#">Workspaces</a></li>
                            <li><a href="#">Extensions</a></li>
                            <li><a href="#">Updates</a></li>
                        </ul>
                    </li>
                    <li onClick={() => (setOpenLearn(!openLearn), setOpenProduct(false), setOpenSupport(false))} className={`dropdown--button ${openLearn ? "active" : ""}`}><span>Learn</span> <Arrow className="arrow"/>
                        <ul className={`dropdown ${openLearn ? "show" : ""}`}>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Course: Sketch 101</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Events & Meetups</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Research Labs</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li onClick={() => (setOpenSupport(!openSupport), setOpenLearn(false), setOpenProduct(false))} className={`dropdown--button ${openSupport ? "active" : ""}`}><span>Support</span> <Arrow className="arrow"/>
                        <ul className={`dropdown ${openSupport ? "show" : ""}`}>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Service Status</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className="get--started">Get started for free</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;