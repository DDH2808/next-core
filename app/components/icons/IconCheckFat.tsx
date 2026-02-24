import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconCheckFat(allProps: IconWrapperProps): React.ReactElement {
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
              fill="#00CBDE"
              d="m9.75 13.822 9.22-9.103a.75.75 0 0 1 1.06 0l2.25 2.213a.75.75 0 0 1 0 1.061L10.244 20.031a.75.75 0 0 1-1.061 0l-6.713-6.75a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.062 0z"
              opacity={0.2}
            />
            <path
              stroke="#00CBDE"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9.75 13.822 9.22-9.103a.75.75 0 0 1 1.06 0l2.25 2.213a.75.75 0 0 1 0 1.061L10.244 20.031a.75.75 0 0 1-1.061 0l-6.713-6.75a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.062 0z"
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

export default IconCheckFat;
