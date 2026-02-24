import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconArrow1Left(allProps: IconWrapperProps): React.ReactElement {
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
          <path
            stroke="#667991"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m14 7-5 5 5 5"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconArrow1Left;
