import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconLaos(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 36 24"
          {...props}
        >
          <g clipPath="url(#prefix__a)">
            <path fill="#0052B4" d="M0 0h36v24H0z" />
            <path fill="#D80027" d="M0 .007h36v6.365H0zm0 17.628h36V24H0z" />
            <path
              fill="#fff"
              d="M18 16.625a4.625 4.625 0 1 0 0-9.25 4.625 4.625 0 0 0 0 9.25"
            />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <rect width={36} height={24} fill="#fff" rx={4} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconLaos;
