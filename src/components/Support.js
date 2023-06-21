import React from "react";

import {BiRightArrowAlt, BiChip} from "react-icons/bi";
import {BsTelephone} from "react-icons/bs";
import {MdOutlineSupport} from "react-icons/md";

const Support = () => {
    const support = [
        {
            id: 1,
            title: "Sales",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            icon: <BsTelephone style={{fontSize: "1.7rem", color: "white"}}/>,
        },
        {
            id: 2,
            title: "Technical Support",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <MdOutlineSupport style={{fontSize: "1.7rem", color: "white"}}/>,
        },
        {
            id: 3,
            title: "Media Inquiries",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <BiChip style={{fontSize: "1.7rem", color: "white"}}/>,
        },
    ];

    return (
        <div name="support" style={{backgroundColor: "#010B48", opacity: "86%"}}>
            <div className="container">
                <div className="row text-center align-items-center pt-5 text-white pb-5">
                    <p className="fw-light fs-4">SUPPORT</p>
                    <h1 className="fs-2 fw-bold">Finding the right team</h1>
                    <p className="pt-4 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4 pb-5">
                    {support.map(({id, title, description, icon}) => (
                        <div className="col align-self-center gy-5" key={id}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <div
                                        className="p-3 text-center rounded"
                                        style={{
                                            backgroundColor: "blue",
                                            // width: "10%",
                                            minWidth: "1rem",
                                            maxWidth: "4rem",
                                            position: "relative",
                                            bottom: "2rem"
                                        }}
                                    >
                                        {icon}
                                    </div>
                                    <p className="fw-bolder fs-5">{title}</p>
                                    <p className="fs-5">{description}</p>
                                </div>
                                <div className="card-footer text-body-secondary">
                                    <span style={{color: "#4540e1"}}>
                                    Contact us{" "}
                                        <BiRightArrowAlt style={{fontSize: "1.5rem"}}/>{" "}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Support;
