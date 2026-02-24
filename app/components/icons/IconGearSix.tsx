import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconGearSix(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" />
            <path d="M12.192 19.323h-.375L8.813 21a9.8 9.8 0 0 1-3.198-1.8l-.012-3.375a5 5 0 0 1-.187-.32l-2.988-1.701a9.3 9.3 0 0 1 0-3.606l2.985-1.697q.092-.162.188-.32l.015-3.374A9.8 9.8 0 0 1 8.813 3l3 1.677h.374l3-1.677a9.8 9.8 0 0 1 3.198 1.8l.012 3.375q.1.156.187.32l2.986 1.7a9.3 9.3 0 0 1 0 3.606l-2.985 1.697q-.091.162-.187.32l-.015 3.374A9.8 9.8 0 0 1 15.188 21z" />
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

export default IconGearSix;
