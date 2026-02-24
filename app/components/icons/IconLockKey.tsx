import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconLockKey(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M19.5 8.25h-15a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75M8.25 8.25v-3a3.75 3.75 0 0 1 7.5 0v3" />
            <path d="M12 15a1.875 1.875 0 1 0 0-3.75A1.875 1.875 0 0 0 12 15M12 15v2.25" />
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

export default IconLockKey;
