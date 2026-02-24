import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconDown(allProps: IconWrapperProps): React.ReactElement {
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
            fill="#667991"
            d="M7.841 9h8.318c.748 0 1.122.93.594 1.473l-4.159 4.274a.82.82 0 0 1-1.185 0l-4.162-4.274C6.719 9.93 7.093 9 7.84 9"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconDown;
