import React from 'react';

import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitch} from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{backgroundColor: "#060523"}} className="mt-5">
            <div className="container">
                <div className="row text-white pt-5 pb-5">
                    <div className="col">
                        <p className="fw-bold text-uppercase">Solutions</p>
                        <p className="text-capitalize">Marketing</p>
                        <p className="text-capitalize">analytics</p>
                        <p className="text-capitalize">commerce</p>
                        <p className="text-capitalize">data</p>
                        <p className="text-capitalize">cloud</p>
                    </div>
                    <div className="col">
                        <p className="fw-bold text-uppercase">support</p>
                        <p className="text-capitalize">pricing</p>
                        <p className="text-capitalize">documentation</p>
                        <p className="text-capitalize">guides</p>
                        <p className="text-capitalize">API status</p>
                    </div>
                    <div className="col">
                        <p className="fw-bold text-uppercase">Company</p>
                        <p className="text-capitalize">about</p>
                        <p className="text-capitalize">blog</p>
                        <p className="text-capitalize">careers</p>
                        <p className="text-capitalize">press</p>
                        <p className="text-capitalize">partners</p>
                    </div>
                    <div className="col">
                        <p className="fw-bold text-uppercase">legal</p>
                        <p className="text-capitalize">clain</p>
                        <p className="text-capitalize">private</p>
                        <p className="text-capitalize">policies</p>
                        <p className="text-capitalize">terms</p>
                    </div>
                    <div className="col">
                        <p className="fw-bold text-uppercase"
                           style={{width: "16rem"}}>subscribe to our newsletter</p>
                        <p>The laters news, articles and resources sent to your inbox weekly.</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter your Email"
                                   aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="row text-secondary">
                    <hr/>
                    <div className="col">
                        <div className="d-flex mb-3">
                            <div className="me-auto p-2">2022 Workflow, LLC. All right reserved.</div>
                            <div className="p-2" role='button'><FaFacebook style={{fontSize: "1.3rem",}}/></div>
                            <div className="p-2" role='button'><FaInstagram style={{fontSize: "1.3rem",}}/></div>
                            <div className="p-2" role='button'><FaTwitter style={{fontSize: "1.3rem",}}/></div>
                            <div className="p-2" role='button'><FaTwitch style={{fontSize: "1.3rem",}}/></div>
                            <div className="p-2" role='button'><FaGithub style={{fontSize: "1.3rem",}}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;