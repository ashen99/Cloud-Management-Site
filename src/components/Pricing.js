import React from 'react';

const Pricing = () => {
    return (
        <div style={{backgroundColor: "#060523"}}>
            <div className="container">
                <div className="row text-center text-white align-items-center pt-5 pb-5">
                    <p className="fw-light fs-4">PRICING</p>
                    <h1 className="fs-1 fw-bold">The right place for your research.</h1>
                    <p className="pt-4 fs-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card w-100">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                {/*<a className="btn btn-primary">Go somewhere</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card w-100">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                {/*<a className="btn btn-primary">Go somewhere</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;