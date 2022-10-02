import { useState } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as SideArrow } from "../images/side_arrow.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openLearn, setOpenLearn] = useState(false);
    const [openSupport, setOpenSupport] = useState(false);

    openMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";

    return (
        <>
        <div className={`${openProduct || openLearn || openSupport ? "click--outside" : ""}`} onClick={() => (setOpenProduct(false), setOpenLearn(false), setOpenSupport(false))}></div>
        <header className="header">
            <button aria-label="toggle navigation" onClick={() => (setOpenMenu(!openMenu), setOpenProduct(false), setOpenLearn(false), setOpenSupport(false))}>
                <span className={`menu--toggle--span ${openMenu ? "open" : ""}`}></span>
                <span className={`menu--toggle--span ${openMenu ? "open" : ""}`}></span>
            </button>
            <a href="https://www.sketch.com/home/" className="logo--link" aria-label="Homepage"><Logo className="logo"/></a>
            <a href="https://www.sketch.com/signin/" className="sign-in--link desktop--invisible">Sign In</a>
            <nav className="header--nav" aria-label="Header">
                <ul className={`header--nav--ul ${openMenu ? "show" : ""}`}>
                    <li onClick={() => (setOpenProduct(!openProduct), setOpenLearn(false), setOpenSupport(false))} className={`dropdown--button ${openProduct ? "active" : ""}`}><span>Product</span> <Arrow className={`arrow ${openProduct ? "rotate" : ""}`}/>
                        <ul className={`dropdown ${openProduct ? "show" : ""}`}>
                            <li><a href="https://www.sketch.com/design/">Design</a></li>
                            <li><a href="https://www.sketch.com/collaborate/">Collaborate</a></li>
                            <li><a href="https://www.sketch.com/prototype/">Prototype</a></li>
                            <li className="bottom--border"><a href="https://www.sketch.com/workspaces/">Workspaces</a></li>
                            <li><a href="https://www.sketch.com/extensions/">Extensions</a></li>
                            <li><a href="https://www.sketch.com/updates/">Updates</a></li>
                        </ul>
                    </li>
                    <li onClick={() => (setOpenLearn(!openLearn), setOpenProduct(false), setOpenSupport(false))} className={`dropdown--button ${openLearn ? "active" : ""}`}><span>Learn</span> <Arrow className={`arrow ${openLearn ? "rotate" : ""}`}/>
                        <ul className={`dropdown ${openLearn ? "show" : ""}`}>
                            <li><a href="https://www.sketch.com/blog/">Blog</a></li>
                            <li><a href="https://www.sketch.com/courses/sketch-101/">Course: Sketch 101</a></li>
                            <li><a href="https://www.sketch.com/docs/">Documentation</a></li>
                            <li className="bottom--border"><a href="https://www.sketch.com/community/" className="events">Events & Meetups <span>1</span></a></li>
                            <li><a href="https://www.sketch.com/newsletter/">Newsletter</a></li>
                            <li><a href="https://www.sketch.com/labs/">Research Labs</a></li>
                        </ul>
                    </li>
                    <li><a href="https://www.sketch.com/apps/">Apps</a></li>
                    <li className="pricing--li"><a href="https://www.sketch.com/pricing/">Pricing</a></li>
                    <li onClick={() => (setOpenSupport(!openSupport), setOpenLearn(false), setOpenProduct(false))} className={`dropdown--button support--li ${openSupport ? "active" : ""}`}><span>Support</span> <Arrow className={`arrow ${openSupport ? "rotate" : ""}`}/>
                        <ul className={`dropdown ${openSupport ? "show" : ""}`}>
                            <li><a href="https://www.sketch.com/support/">Help Center</a></li>
                            <li><a href="https://www.sketch.com/support/contact/">Contact Us</a></li>
                            <li><a href="https://status.sketch.com/?_ga=2.230960919.902580692.1658032638-738430831.1655528579" className="status">Service Status <SideArrow className="side--arrow"/></a></li>
                        </ul>
                    </li>
                    <div className="separator"></div>
                    <li className="mobile--invisible"><a href="https://www.sketch.com/signin/" className="sign-in--link">Sign In</a></li>
                    <li><a href="https://www.sketch.com/signup/" className="get--started">Get started for free</a></li>
                </ul>
            </nav>
            <div className={`overlay ${openMenu ? "overlay--open" : ""}`}></div>
        </header>
        </>
    )
}

export default Header;