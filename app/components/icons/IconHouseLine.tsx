import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconHouseLine(allProps: IconWrapperProps): React.ReactElement {
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
          <g
            stroke="#667991"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#prefix__a)"
          >
            <path d="M1.5 20.25h21M14.25 20.25v-6h-4.5v6M3.75 10.94v9.31M20.25 20.25v-9.31M2.25 12.44l9.22-9.22a.75.75 0 0 1 1.06 0l9.22 9.22" />
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

export default IconHouseLine;
