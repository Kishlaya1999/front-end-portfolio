import React from "react";

const SectionDivider = ({ variant = "primary" }) => {
  return (
    <div className={`section-divider section-divider--${variant}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
};

export default SectionDivider;
