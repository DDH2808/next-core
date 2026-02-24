import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconProhibit(allProps: IconWrapperProps): React.ReactElement {
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
              d="M18.364 18.364 5.636 5.636"
            />
            <path
              stroke="#8595AB"
              strokeMiterlimit={10}
              strokeWidth={1.5}
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
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

export default IconProhibit;
