import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconCheck(allProps: IconWrapperProps): React.ReactElement {
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
              strokeWidth={2}
              d="M3.75 13.5 9 18.75l12-12"
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

export default IconCheck;
