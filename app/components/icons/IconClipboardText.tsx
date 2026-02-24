import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconClipboardText(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M9 14.25h6M9 11.25h6M15 3.75h3.75a.75.75 0 0 1 .75.75v15.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 .75-.75H9" />
            <path d="M8.25 6.75V6a3.75 3.75 0 0 1 7.5 0v.75z" />
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

export default IconClipboardText;
