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
                <img src={macAppMobileSmall}/>
                <div className="text--wrapper">
                    <p>FOR EDITORS</p>
                    <h2>Design on your Mac</h2>
                    <p>Design, prototype, and illustrate in a truly native macOS app, online or offline. Work in private or collaborate with others, in real time.</p>
                    <a href="#" className="blackened--link">Download for macOS</a>
                    <div className="links--container">
                        <a href="#">Browse old versions</a>
                        <a href="#">Download Beta</a>
                    </div>
                </div>
            </div>
            <div className="browser--container">
                <img src={webAppMobileSmall}/>
                <div className="text--wraper">
                    <p>FOR EVERYONE</p>
                    <h2>Explore in your browser</h2>
                    <p>Browse documents, inspect designs, export assets, discuss feedback, manage users, and invite guests - on any computer, in any browser.</p>
                    <a href="#" className="blackened--link">Open the web app</a>
                </div>
            </div>
            <div className="iphone--container">
                <img src={iphoneAppMobileSmall}/>
                <div className="text--wrapper">
                    <p>FOR EVERYONE</p>
                    <h2>Preview on iPhone</h2>
                    <p>View your documents on the go, play prototypes on a real device, and mirror designs as you edit them on your Mac.</p>
                    <a href="#" className="blackened--link">Download on the App Store</a>
                    <p>Our iPhone app works exclusively with Workspace documents.</p>
                </div>
            </div>
        </section>
    )
}

export default Features;