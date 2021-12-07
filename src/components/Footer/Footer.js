import './Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container-fluid">
                    <div className="border1">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <img className="logo-words" src="images/logo_words_light.png" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <ul className="lik">
                                    <li> <Link to="/">Home</Link></li>
                                    <li> <Link to="/products">Products</Link></li>
                                    <li> <Link to="/contacts">Contact us</Link></li>
                                </ul>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <ul className="sociel">
                                    <li> <Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li> <Link to="#"><i className="fa fa-instagram"></i></Link></li>
                                    <li> <Link to="#"><img src="icon/etsy_icon.png"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2019 All Right Reserved By <Link to="https://html.design/">Free html Templates</Link></p>
                </div>
            </div>

        </footer>
    );
}
export default Footer;