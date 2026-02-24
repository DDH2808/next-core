import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconExcel(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 33 32"
          {...props}
        >
          <path
            fill="#185C37"
            d="M20.193 15.35 8.778 13.4v14.409a1.16 1.16 0 0 0 .36.843 1.23 1.23 0 0 0 .87.348h19.697a1.26 1.26 0 0 0 .872-.347 1.2 1.2 0 0 0 .36-.844V22.5z"
          />
          <path
            fill="#21A366"
            d="M20.193 3H10.008a1.26 1.26 0 0 0-.87.348 1.159 1.159 0 0 0-.36.843V9.5L20.193 16l6.044 1.95 4.7-1.95V9.5z"
          />
          <path fill="#107C41" d="M8.778 9.5h11.415V16H8.778z" />
          <path
            fill="#000"
            d="M16.948 8.2h-8.17v16.25h8.17c.325-.002.637-.127.867-.35s.361-.525.364-.841V9.391a1.18 1.18 0 0 0-.364-.84 1.26 1.26 0 0 0-.867-.351"
            opacity={0.1}
          />
          <path
            fill="#000"
            d="M16.276 8.85H8.778V25.1h7.498c.326-.002.637-.128.868-.35.23-.223.361-.525.364-.841V10.041a1.18 1.18 0 0 0-.364-.84 1.26 1.26 0 0 0-.868-.351"
            opacity={0.2}
          />
          <path
            fill="#000"
            d="M16.276 8.85H8.778V23.8h7.498c.326-.002.637-.128.868-.35.23-.223.361-.525.364-.841V10.041a1.18 1.18 0 0 0-.364-.84 1.26 1.26 0 0 0-.868-.351"
            opacity={0.2}
          />
          <path
            fill="#000"
            d="M15.605 8.85H8.778V23.8h6.827c.325-.002.637-.128.868-.35.23-.223.36-.525.363-.841V10.041a1.18 1.18 0 0 0-.363-.84 1.26 1.26 0 0 0-.868-.351"
            opacity={0.2}
          />
          <path
            fill="url(#prefix__a)"
            d="M3.294 8.85h12.31c.327 0 .64.125.87.348.232.224.362.527.362.843v11.918c0 .316-.13.62-.361.843a1.25 1.25 0 0 1-.87.348H3.294a1.26 1.26 0 0 1-.871-.348 1.158 1.158 0 0 1-.36-.843V10.041a1.16 1.16 0 0 1 .36-.844 1.23 1.23 0 0 1 .87-.347"
          />
          <path
            fill="#fff"
            d="m5.878 19.873 2.59-3.884-2.372-3.862H8L9.295 14.6c.12.234.206.408.245.524h.018a9 9 0 0 1 .268-.546l1.384-2.447h1.753l-2.433 3.84 2.495 3.905h-1.866l-1.495-2.711a2.4 2.4 0 0 1-.176-.365h-.025q-.066.184-.173.351l-1.54 2.722z"
          />
          <path
            fill="#33C481"
            d="M29.706 3h-9.513v6.5h10.744V4.191a1.16 1.16 0 0 0-.36-.844 1.23 1.23 0 0 0-.87-.347"
          />
          <path fill="#107C41" d="M20.193 16h10.744v6.5H20.194z" />
          <defs>
            <linearGradient
              id="prefix__a"
              x1={4.634}
              x2={13.827}
              y1={7.914}
              y2={24.331}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18884F" />
              <stop offset={0.5} stopColor="#117E43" />
              <stop offset={1} stopColor="#0B6631" />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconExcel;
