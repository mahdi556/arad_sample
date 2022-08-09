import React from 'react';
import Link from "next/Link";

const Advertising = ({theme, link, title, content}) => {
    return (
        <div className={`d-block advertising-wrapper ${theme}`}>
            <Link href={link} className="d-block">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9 ad-information d-flex justify-content-center flex-column">
                        <h3 className="title">{title}</h3>
                        <p className="content">{content}</p>
                        <div className="image">
                        <img className="image" src="/assets/images/Group10756.svg" alt="link"/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Advertising;
