import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconLink(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="m13.254 6.064 1.032-1.031a4.372 4.372 0 1 1 6.182 6.181L18.182 13.5l-.97.97a4.37 4.37 0 0 1-6.187-.005 4.36 4.36 0 0 1-1.275-3.21" />
            <path d="m10.746 17.936-1.032 1.032a4.373 4.373 0 0 1-7.462-3.095 4.37 4.37 0 0 1 1.28-3.087L6.789 9.53a4.37 4.37 0 0 1 6.181 0 4.35 4.35 0 0 1 1.281 3.213" />
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

export default IconLink;
