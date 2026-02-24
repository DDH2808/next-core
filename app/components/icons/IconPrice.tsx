import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconPrice(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 6.75v1.5M12 15.75v1.5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
            <path d="M9.75 15.75h3.375a1.875 1.875 0 1 0 0-3.75h-2.25a1.875 1.875 0 1 1 0-3.75h3.375" />
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

export default IconPrice;
