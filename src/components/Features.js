import webAppMobileSmall from "../images/mobile/webapp-image@4xS.avif";
import webAppMobileLarge from "../images/mobile/webapp-image@4xL.avif";
import macAppMobileSmall from "../images/mobile/macapp-image@4xS.avif";
import macAppMobileLarge from "../images/mobile/macapp-image@4xL.avif";
import iphoneAppMobileSmall from "../images/mobile/iphoneapp-image@4xS.avif";
import iphoneAppMobileLarge from "../images/mobile/iphoneapp-image@4xL.avif";
import webAppDesktop from "../images/desktop/webapp-image@4x.avif";
import macAppDesktop from "../images/desktop/macapp-image@4x.avif";
import iphoneAppDesktop from "../images/desktop/iphoneapp-image@4x.avif";

const Features = () => {
    return (
        <section className="features--container">
            <div className="mac--container">
                <img src={macAppMobileSmall} alt="" className="mac--small"/>
                <img src={macAppMobileLarge} alt="" className="mac--large"/>
                <img src={macAppDesktop} alt="" className="mac--desktop"/>
                <div className="text--wrapper">
                    <p className="for">FOR EDITORS</p>
                    <h2>Design on your Mac</h2>
                    <p className="desc">Design, prototype, and illustrate in a truly native macOS app, online or offline. Work in private or collaborate with others, in real time.</p>
                    <a href="https://www.sketch.com/downloads/mac/" className="blackened--link">Download for macOS</a>
                    <div className="links--container">
                        <a href="https://www.sketch.com/updates/">Browse old versions</a>
                        <a href="https://www.sketch.com/beta/">Download Beta</a>
                    </div>
                </div>
            </div>
            <div className="browser--container">
                <img src={webAppMobileSmall} alt="" className="web--small"/>
                <img src={webAppMobileLarge} alt="" className="web--large"/>
                <img src={webAppDesktop} alt="" className="web--desktop"/>
                <div className="text--wrapper">
                    <p className="for">FOR EVERYONE</p>
                    <h2>Explore in your browser</h2>
                    <p className="desc">Browse documents, inspect designs, export assets, discuss feedback, manage users, and invite guests - on any computer, in any browser.</p>
                    <a href="https://www.sketch.com/c" className="blackened--link">Open the web app</a>
                </div>
            </div>
            <div className="iphone--container">
                <img src={iphoneAppMobileSmall} alt="" className="iphone--small"/>
                <img src={iphoneAppMobileLarge} alt="" className="iphone--large"/>
                <img src={iphoneAppDesktop} alt="" className="iphone--desktop"/>
                <div className="text--wrapper">
                    <p className="for">FOR EVERYONE</p>
                    <h2>Preview on iPhone</h2>
                    <p className="desc">View your documents on the go, play prototypes on a real device, and mirror designs as you edit them on your Mac.</p>
                    <a href="https://apps.apple.com/app/sketch-view-and-mirror/id1609224699" className="blackened--link">Download on the App Store</a>
                    <p className="iphone--desc">Our iPhone app works exclusively with Workspace documents.</p>
                </div>
            </div>
        </section>
    )
}

export default Features;