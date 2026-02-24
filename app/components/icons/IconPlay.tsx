import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconPlay(allProps: IconWrapperProps): React.ReactElement {
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
              d="M6.75 3.739V20.26a.75.75 0 0 0 1.14.627l13.507-8.26a.732.732 0 0 0 0-1.255L7.889 3.112a.75.75 0 0 0-1.139.627"
              opacity={0.2}
            />
            <path
              stroke="#8595AB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6.75 3.739V20.26a.75.75 0 0 0 1.14.627l13.507-8.26a.732.732 0 0 0 0-1.255L7.889 3.112a.75.75 0 0 0-1.139.627"
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

export default IconPlay;
