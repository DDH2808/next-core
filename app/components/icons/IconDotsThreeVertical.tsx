import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconDotsThreeVertical(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#667991" clipPath="url(#prefix__a)">
            <path d="M12 14.375a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 20.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
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

export default IconDotsThreeVertical;
