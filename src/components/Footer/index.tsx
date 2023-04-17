import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="text-center inset-x-0 bottom-0">
        <h1 className="text-white">
          Zayko-Dev &copy; {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
