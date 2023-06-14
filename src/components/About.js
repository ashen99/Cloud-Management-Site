import React from 'react';

const About = () => {
    return (
        <>
            <div className="container pt-5 pb-5">
                <div className="row text-center align-items-center pt-5">
                    <h1 className="fw-bolder display-6">Trusted by developers across the world</h1>
                    <p className="fs-5 fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco</p>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-1 pt-4 g-3">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <span style={{color: "#4540e1"}} className="fw-bold display-4">100%</span>
                                <p className="fw-light fs-5">Completion</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <span style={{color: "#4540e1"}} className="fw-bold display-4">24/7</span>
                                <p className="fw-light fs-5">Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <span style={{color: "#4540e1"}} className="fw-bold display-4">100k</span>
                                <p className="fw-light fs-5">Transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;