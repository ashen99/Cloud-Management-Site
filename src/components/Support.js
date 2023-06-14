import React from 'react';

import support from "../assets/support.jpg";


const Support = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${support})`,
                backgroundSize: "100% 150vh",
                height: "fit-content",
                backgroundRepeat: "no-repeat"

            }}>
                <div className="container pt-5 pb-5" style={{color: "white"}}>
                    <div className="row text-center align-items-center pt-5">
                        <div className="col">
                            <h1 className="fw-bolder display-6">Trusted by developers across the world</h1>
                            <p className="fs-5 fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                                exercitation ullamco</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <span style={{color: "#4540e1"}} className="fw-bold display-4">100k</span>
                                <p className="fw-light fs-5">Transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;