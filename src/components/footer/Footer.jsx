import React from "react";

import opneaiSVG from "../../assets/openai-white.svg";

const Footer = () => (
  <div className="footer p-4 bg-[#0D1117] text-primary-content footer-center">
    <span className="inline pr-2 text-lg">
      <img className="inline pr-2 w-14 h-14" src={opneaiSVG} alt="opneaiSVG" />
      Powered By Open AI
    </span>
  </div>
);

export default Footer;
