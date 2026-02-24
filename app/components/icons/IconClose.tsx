import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconClose(allProps: IconWrapperProps): React.ReactElement {
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
            fill="#FF2D55"
            d="M21 6.289 18.211 3.5 12 9.838 5.789 3.5 3 6.289 9.338 12.5 3 18.711 5.789 21.5 12 15.162l6.211 6.338L21 18.711 14.662 12.5z"
            opacity={0.2}
          />
          <path
            stroke="#FF2D55"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 6.289 18.211 3.5 12 9.838 5.789 3.5 3 6.289 9.338 12.5 3 18.711 5.789 21.5 12 15.162l6.211 6.338L21 18.711 14.662 12.5z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconClose;
