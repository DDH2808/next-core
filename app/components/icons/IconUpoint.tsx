import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconUpoint(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 24 24"
          {...props}
        >
          <path fill="#fff" d="M0 0h24v24H0z" />
          <g fill="#667991" fillRule="evenodd" clipRule="evenodd">
            <path d="M17.508 16.558a20 20 0 0 0 2.063-1.81c.957-.976 1.4-1.796 1.43-2.609-.03-.813-.473-1.632-1.43-2.609-.493-.502-1.048-1-1.65-1.485v5.828q-.002 1.522-.413 2.685M14.574 5.77c-2.08-1.195-4.328-2.128-6.356-2.552v10.256c0 2.472 1.068 3.72 3.178 3.746 2.11.024 3.178-1.249 3.178-3.746z" />
            <path d="M4.943 3.14c-2.59 1.066-2.59 16.937 0 18.004.289.114.652.168 1.074.168 1.49 0 3.233-.413 5.009-1.1-3.99-.116-6.185-2.167-6.185-6.336V4.425c0-.543.268-1.077.676-1.425a2.4 2.4 0 0 0-.574.14" />
          </g>
          <mask
            id="prefix__b"
            width={12}
            height={13}
            x={3}
            y={3}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <path
              fill="url(#prefix__a)"
              fillRule="evenodd"
              d="M14.405 13.858a8.9 8.9 0 0 1-5.494 2.011c-.382-.61-.547-1.427-.547-2.396V3.411c2.082.463 4.194 1.392 6.05 2.45v7.612q0 .197-.009.385m-9.67 1.047a9 9 0 0 1-1.547-.997 40 40 0 0 1 .083-4.875c.075-.92.185-1.847.362-2.753.147-.748.576-2.673 1.365-2.997q.036-.016.074-.028c-.24.337-.385.748-.385 1.167v9.45q0 .54.048 1.033"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#prefix__b)">
            <path
              fill="#667991"
              fillRule="evenodd"
              d="M14.405 13.858a8.9 8.9 0 0 1-5.494 2.011c-.382-.61-.547-1.427-.547-2.396V3.411c2.082.463 4.194 1.392 6.05 2.45v7.612q0 .197-.009.385m-9.67 1.047a9 9 0 0 1-1.547-.997 40 40 0 0 1 .083-4.875c.075-.92.185-1.847.362-2.753.147-.748.576-2.673 1.365-2.997q.036-.016.074-.028c-.24.337-.385.748-.385 1.167v9.45q0 .54.048 1.033"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <linearGradient
              id="prefix__a"
              x1={8.734}
              x2={13.67}
              y1={9.73}
              y2={20.428}
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset={1} stopColor="#fff" />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconUpoint;
