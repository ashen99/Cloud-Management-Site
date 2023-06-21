import React from 'react';

import {FcCheckmark} from "react-icons/fc";

const Pricing = () => {
    const styles = {
        // backgroundColor: "#060523",
        background: "linear-gradient(to bottom, #060523 0%, #060523 70%, white 30%, white 100%)"
    }

    return (
        <div style={styles}>
            <div className="container pb-5">
                <div className="row text-center text-white align-items-center pt-5 pb-5">
                    <p className="fw-light fs-4">PRICING</p>
                    <h1 className="fs-1 fw-bold">The right place for your research.</h1>
                    <p className="pt-4 fs-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                {/* starting a new row */}
                <div className="row">
                    {/* starting a new column */}
                    <div className="col">
                        {/* bootstrap card */}
                        <div className="card shadow">
                            <div className="card-body">
                                <span style={{backgroundColor: "#454882"}}
                                      className="badge rounded-pill">STANDARD</span>
                                <p className="card-title display-4 fw-bold">$49<span
                                    className="fw-bold fs-5">/mo</span>
                                </p>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>Lorem ipsum dolor
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>Lorem ipsum dolor sit amet
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>Sed ut perspiciatis unde
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>At vero eos et accusamus
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                </div>
                                <a className="btn mt-3 p-2"
                                   style={{backgroundColor: "#060523", color: "white", width: "100%"}}>Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body">
                                <span style={{backgroundColor: "#454882"}}
                                      className="badge rounded-pill">ENTERPRISE</span>
                                <p className="card-title display-4 fw-bold">$89<span
                                    className="fw-bold fs-5">/mo</span>
                                </p>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>Lorem ipsum dolor
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>Lorem ipsum dolor sit amet
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>Sed ut perspiciatis unde
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>At vero eos et accusamus
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                    <p className="fw-bold"><FcCheckmark className="me-3"
                                                                        style={{
                                                                            fontSize: "1.4rem",
                                                                            fontWeight: "bold"
                                                                        }}/>dignissimos ducimus qui blanditiis
                                    </p>
                                </div>
                                <a className="btn mt-3 p-2"
                                   style={{backgroundColor: "#060523", color: "white", width: "100%"}}>Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;