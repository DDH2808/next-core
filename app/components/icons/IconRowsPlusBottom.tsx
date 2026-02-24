import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconRowsPlusBottom(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M19.5 11.25h-15a.75.75 0 0 0-.75.75v2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75M19.5 4.5h-15a.75.75 0 0 0-.75.75V7.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75M9.75 20.25h4.5M12 18v4.5" />
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

export default IconRowsPlusBottom;
