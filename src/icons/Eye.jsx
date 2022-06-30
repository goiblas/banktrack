import React from "react";

function Icon({ color = "#4021C8" }) {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <g stroke={color} strokeWidth="2" transform="translate(-844 -505)">
          <g transform="translate(475 222)">
            <g transform="translate(76 252)">
              <g transform="translate(294 32)">
                <path d="M0 8s4-8 11-8 11 8 11 8-4 8-11 8S0 8 0 8z"></path>
                <circle cx="11" cy="8" r="3"></circle>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
