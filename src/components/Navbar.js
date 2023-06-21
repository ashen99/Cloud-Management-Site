import React from "react";
import {Link} from "react-scroll";


const Navbar = () => {
    return (
        <div>
            <nav
                className="navbar fixed-top navbar-expand-md shadow"
                style={{backgroundColor: "#F4F5F6"}}
            >
                <div className="container-fluid">
          <span
              className="navbar-brand mb-0 h1"
              style={{fontSize: "30px", fontWeight: "700"}}
          >
            Brand.
          </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="home" smooth duration={500}>
                                    <a className="nav-link active" aria-current="page" href="/">
                                        Home
                                    </a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="about" smooth duration={500}>
                                    <a className="nav-link" href="/">
                                        About
                                    </a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="support" smooth duration={500}>
                                    <a className="nav-link" href="/">
                                        Support
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="platform" smooth duration={500}>
                                    <a className="nav-link" href="/">
                                        Platforms
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="pricing" smooth duration={500}>
                                    <a className="nav-link" href="/">
                                        Pricing
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button type="button" className="btn">Sign in</button>
                            <button className="btn btn-primary">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
