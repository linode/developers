import React from "react";

const Footer = () => (
  <div className="footer-links container mx-auto max-w-md">
    <div className="flex flex-wrap -mx-2">
      <div className="w-full sm:w-1/3 px-2 text-center">
        &copy; {new Date().getFullYear()} Linode, LLC
      </div>
      <div className="w-full sm:w-1/3 px-2 text-center">
        <a href="https://www.linode.com/security" target="_blank">
          Security
        </a>
      </div>
      <div className="w-full sm:w-1/3 px-2 text-center">
        <a href="https://www.linode.com/compliance" target="_blank">
          Standards &amp; Compliance
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
