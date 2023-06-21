import React from 'react';

import heroImg from '../assets/cyber-bg.png'
import {RiUploadCloudFill} from 'react-icons/ri';
import {FaDatabase, FaServer} from 'react-icons/fa';
import {HiPaperAirplane} from 'react-icons/hi';

const Hero = () => {
    return (
        <div name="home" style={{backgroundColor: "#F4F5F6"}}>
            <div className="container pt-5">
                <div className="row row-cols-md-2 row-cols-sm-1 align-items-center pt-5">
                    <div className="col">
                        <p className="fs-5 fw-bold">Unique Sequencing & Production</p>
                        <h1 className="fw-bolder display-1">Cloud Management</h1>
                        <p className="fs-5 fw-bold">This is our tech brand.</p>
                        <div className="d-grid gap-2 col-6">
                            <button className="btn btn-primary" type="button">Get Started</button>
                        </div>
                    </div>
                    <div className="pt-5">
                        <img className="img-fluid" src={heroImg} alt="cyber-img"/>
                    </div>
                </div>
                <div className="row text-center mt-5 d-flex justify-content-center pb-5">
                    <div className="card text-center shadow" style={{width: "50rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Data services</h5>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 pt-3 gy-3">
                                <div className="col">
                                    <FaDatabase style={{fontSize: "2rem"}}/>
                                    <p>App Security</p>
                                </div>
                                <div className="col">
                                    <FaServer style={{fontSize: "2rem"}}/>
                                    <p>Dashboard Design</p>
                                </div>
                                <div className="col">
                                    <RiUploadCloudFill style={{fontSize: "2rem"}}/>
                                    <p>Cloud Data</p>
                                </div>
                                <div className="col">
                                    <HiPaperAirplane style={{fontSize: "2rem"}}/>
                                    <p>API Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;