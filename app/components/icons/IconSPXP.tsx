import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconSPXP(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#667991">
            <path d="M16.159 10.5H7.84c-.748 0-1.122-.93-.594-1.473l4.159-4.274a.82.82 0 0 1 1.185 0l4.162 4.274c.528.543.154 1.473-.594 1.473M7.841 13.5h8.318c.748 0 1.122.93.594 1.473l-4.159 4.274a.82.82 0 0 1-1.185 0l-4.162-4.274c-.528-.543-.154-1.473.594-1.473" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconSPXP;
