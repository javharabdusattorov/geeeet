import './Footer.css';

// Import images
import coffeerosters from '../../assets/img/coffeerosters.png';

function Footer() {
    return (<> 
        <footer className="footer__one">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <a href="#">
                        <img className="footer__one-img" src={coffeerosters} alt="" />
                    </a>
                </div>
                <div className="col-lg-5  col-12">
                    <ul className="footer__one-ul d-flex">
                        <li><a className="footer__one-link" href="#">Home</a></li>
                        <li><a className="footer__one-link" href="#">about us</a></li>
                        <li><a className="footer__one-link" href="#">create your plan</a></li>
                    </ul>
                </div>
                <div className="col-4 ">
                    <div className="row justify-content-end">
                        <div className="col-lg-2 col-md-2 col-4">
                            <i className="fab fa-facebook-square footer-icon"></i>
                        </div>
                        <div className="col-lg-2 col-md-2 col-4">
                            <i className="fab fa-twitter footer-icon"></i>
                        </div>
                        <div className="col-lg-2 col-md-2 col-4">
                            <i className="fab fa-instagram footer-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    </>)
}
 
export default Footer;