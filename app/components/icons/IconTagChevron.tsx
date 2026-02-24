import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconTagChevron(allProps: IconWrapperProps): React.ReactElement {
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
              d="M3 18.75h14.599a.75.75 0 0 0 .623-.334L22.5 12l-4.278-6.416a.75.75 0 0 0-.623-.334H3L7.5 12z"
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

export default IconTagChevron;
