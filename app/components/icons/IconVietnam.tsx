import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconVietnam(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fill="#D80027"
              d="M13.826 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z"
            />
            <path
              fill="#FFDA44"
              d="m18 5.059 1.593 4.904h5.157l-4.172 3.03 1.594 4.905L18 14.867l-4.172 3.03 1.594-4.903-4.172-3.031h5.157z"
            />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h36v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconVietnam;
