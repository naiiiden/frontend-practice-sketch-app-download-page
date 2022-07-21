import { ReactComponent as SideArrow } from "../images/side_arrow.svg";

const Footer = () => {
    return (
        <footer>
            <nav className="footer--nav">
                <ul className="footer--nav--ul">
                    <li><h3>Product</h3></li>
                    <li><a href="https://www.sketch.com/design/">Design</a></li>
                    <li><a href="https://www.sketch.com/collaborate/">Collaborate</a></li>
                    <li><a href="https://www.sketch.com/prototype/">Prototype</a></li>
                    <li><a href="https://www.sketch.com/handoff/">Developer Handoff</a></li>
                    <li><a href="https://www.sketch.com/workspaces/">Workspaces</a></li>
                    <li><a href="https://www.sketch.com/apps/">Apps <span className="number--span">3</span></a></li>
                    <li><a href="https://www.sketch.com/extensions/">Extensions</a></li>
                    <li><a href="https://www.sketch.com/updates/">Updates</a></li>
                    <li><a href="https://www.sketch.com/pricing/">Pricing</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h3>Why Sketch <span className="new--span">NEW</span></h3></li>
                    <li><a href="https://www.sketch.com/vs/figma/">Sketch vs. Figma</a></li>
                    <li><a href="https://www.sketch.com/vs/xd/">Sketch vs. Adobe XD</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h3>Learn</h3></li>
                    <li><a href="https://www.sketch.com/blog/">Blog</a></li>
                    <li><a href="https://www.sketch.com/courses/sketch-101/">Course: Sketch 101</a></li>
                    <li><a href="https://www.sketch.com/docs/">Documentation</a></li>
                    <li><a href="https://www.sketch.com/community/">Events & Meetups</a></li>
                    <li><a href="https://www.sketch.com/labs/">Research Labs</a></li>
                    <li><a href="https://developer.sketch.com/?_ga=2.202130969.902580692.1658032638-738430831.1655528579">Developer Platform <SideArrow className="side--arrow"/></a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h3>Support</h3></li>
                    <li><a href="https://www.sketch.com/support/">Help Center</a></li>
                    <li><a href="https://www.sketch.com/support/contact/">Contact Us</a></li>
                    <li><a href="https://www.sketch.com/license/">Manage License</a></li>
                    <li><a href="https://status.sketch.com/?_ga=2.202130969.902580692.1658032638-738430831.1655528579">Service Status <SideArrow className="side--arrow"/></a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h3>Company</h3></li>
                    <li><a href="https://www.sketch.com/about-us/">About Us</a></li>
                    <li><a href="https://www.sketch.com/careers/">Careers <span className="number--span">13</span></a></li>
                    <li><a href="https://www.sketch.com/legal/">Terms & Policies</a></li>
                    <li><a href="https://www.sketch.com/apps/#">Cookie Preferences</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;