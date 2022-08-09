import React from 'react';
import Link from "next/Link";

const CardItem = ({text, theme}) => {
    return (
        <Link href="/">
        <a className={`position-relative ${theme === "red" ? "red-item" : "blue-item"}`}>
            <div className="border-right-style"></div>
            <div className={` card-item`}>
                <span className="list-text">{text}</span>
            </div>
            <div className="border-left-style"></div>
        </a>
        </Link>
    );
};

export default CardItem;
