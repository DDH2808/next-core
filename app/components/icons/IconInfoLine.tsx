import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconInfoLine(allProps: IconWrapperProps): React.ReactElement {
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
              stroke="#667991"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.25 11.25A.75.75 0 0 1 12 12v3.75a.75.75 0 0 0 .75.75"
            />
            <path
              fill="#667991"
              d="M11.625 8.813a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875"
            />
            <path
              stroke="#667991"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
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

export default IconInfoLine;
