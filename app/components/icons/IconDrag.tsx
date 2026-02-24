import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconDrag(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 18 12"
          {...props}
        >
          <g fill="#667991">
            <circle cx={2} cy={2} r={2} />
            <circle cx={9} cy={2} r={2} />
            <circle cx={16} cy={2} r={2} />
            <circle cx={2} cy={10} r={2} />
            <circle cx={9} cy={10} r={2} />
            <circle cx={16} cy={10} r={2} />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconDrag;
