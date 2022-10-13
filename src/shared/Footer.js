import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links" style={{ height: '84px' }}>
                                <h4>Information:</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <Link to="/"><a>Home</a></Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="/contact" ><a>Get in touch</a></Link></li>
                                    <li><i className="bx bx-chevron-right" /> <a >Terms of service</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4 /><br />
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <Link to="/about"><a >About Us</a></Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="/career" ><a >We are hiring!</a></Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="/faq"><a >FAQs</a></Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Follow us on:</h4>
                                <div className="social-links mt-3">
                                    <a href="https://twitter.com/itiseasyin" className="twitter"><i className="bx bxl-twitter" /></a>
                                    <a href="https://www.facebook.com/Itiseasyin-102072129132595/" className="facebook"><i className="bx bxl-facebook" /></a>
                                    <a href="https://www.instagram.com/p/CcDfR_qP_vW/?utm_source=ig_web_copy_link" className="instagram"><i className="bx bxl-instagram" /></a>
                                    <a href="https://www.linkedin.com/company/itiseasy-in/" className="linkedin"><i className="bi-linkedin" /></a>
                                    <a href="https://www.kooapp.com/profile/itiseasy.in" className="google-plus"><i className="bi-chat-fill" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-4">
                    <div className="copyright">
                        All Rights Reserved. Copyright © <strong><span>SKN Technologies (OPC) Pvt Ltd</span></strong>.
                    </div>
                    <div className="credits">
                        Designed &amp; Developed by <a href="https://soradisdigital.com/" target="_blank">Soradis Digital</a>
                    </div>
                </div>
            </footer>{/* End Footer */}
        </>
    );
}

export default Footer;