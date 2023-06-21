import React from "react";
import {FcCheckmark} from "react-icons/fc";

const Platform = () => {
    const platforms = [
        {
            id: 1,
            title: "Notification",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            id: 2,
            title: "Notification",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }, {
            id: 3,
            title: "Notification",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            id: 4,
            title: "Notification",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },

    ]

    return (
        <div className="container pb-4">
            <div name="platform" className="row text-center align-items-center pt-5 pb-5">
                <h1 className="fs-1 fw-bold">All-In-One Platform</h1>
                <p className="pt-4 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
            </div>
            <div className="row pb-4">
                {platforms.map(({id, title, description}) => (
                    <div className="col d-flex" key={id}>
                        <div className="pe-2">
                            <FcCheckmark style={{fontSize: "1.5rem"}}/>
                        </div>
                        <div>
                            <p className="fw-bold fs-4">{title}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row pb-5">
                {platforms.map(({id, title, description}) => (
                    <div className="col d-flex" key={id}>
                        <div className="pe-2">
                            <FcCheckmark style={{fontSize: "1.5rem"}}/>
                        </div>
                        <div>
                            <p className="fw-bold fs-4">{title}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Platform;
