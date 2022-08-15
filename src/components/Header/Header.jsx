import './Header.css';
import '../../bootstrap.css';

// Import images
import coffee from '../../assets/img/combined-shape-2.png';
import coffeeroasters from '../../assets/img/coffeeroasters-black.png';

function Header() {
    return (<> 
        <header>
            <div className="header">
                <div className="header__menu">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <img src={coffee} alt=""/>
                                    <img className="ms-2" src={coffeeroasters} alt="" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fas fa-times menu__icon">
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="header__nav-link" href="#">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="header__nav-link" href="about.html">ABOUT US</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="header__nav-link" href="create.html">Create your plan</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>)
}
  
export default Header