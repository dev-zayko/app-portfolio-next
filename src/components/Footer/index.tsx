import React from "react";

const Footer = () => {
    return (
        <div className="text-center absolute inset-x-0 bottom-0">
            <h1 className="text-white">
                Zayko-Dev &copy; {new Date().getFullYear()}
            </h1>
        </div>
    );
};

export default Footer;
