import React from "react";

const LockIcon = ({ size = 24, color = "currentColor", ...rest }) => (
    <svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
        {...rest}
    >
        <path
            fill={color}
            d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"
        ></path>
    </svg>
);

export default LockIcon;
