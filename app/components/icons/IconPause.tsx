import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconPause(allProps: IconWrapperProps): React.ReactElement {
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
              d="M18.75 3.75H15a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h3.75a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75M9 3.75H5.25a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75H9a.75.75 0 0 0 .75-.75v-15A.75.75 0 0 0 9 3.75"
              opacity={0.2}
            />
            <path
              stroke="#8595AB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.75 3.75H15a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h3.75a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75M9 3.75H5.25a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75H9a.75.75 0 0 0 .75-.75v-15A.75.75 0 0 0 9 3.75"
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

export default IconPause;
