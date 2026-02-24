import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconWarningCircle(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 16 16"
          {...props}
        >
          <g clipPath="url(#prefix__a)">
            <path
              fill="#FD3648"
              d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M7.5 5a.5.5 0 1 1 1 0v3.5a.5.5 0 1 1-1 0zm.5 6.5A.75.75 0 1 1 8 10a.75.75 0 0 1 0 1.5"
            />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconWarningCircle;
