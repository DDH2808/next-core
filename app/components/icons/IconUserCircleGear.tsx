import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconUserCircleGear(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M18.75 6.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18.75 3.75V2.625M17.45 4.5l-.973-.562M17.45 6l-.973.563M18.75 6.75v1.125M20.05 6l.973.563M20.05 4.5l.973-.562M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" />
            <path d="M5.981 18.69a6.75 6.75 0 0 1 12.038 0" />
            <path d="M20.875 10.5A8.992 8.992 0 1 1 13.5 3.125" />
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

export default IconUserCircleGear;
