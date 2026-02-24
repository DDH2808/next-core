import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconInfo(allProps: IconWrapperProps): React.ReactElement {
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
          <g clipPath="url(#prefix__a)">
            <path
              fill="#8595AB"
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
              opacity={0.2}
            />
            <path
              stroke="#8595AB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.25 11.25A.75.75 0 0 1 12 12v3.75a.75.75 0 0 0 .75.75"
            />
            <path
              stroke="#8595AB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
            />
            <path
              fill="#8595AB"
              d="M11.625 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"
            />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconInfo;
