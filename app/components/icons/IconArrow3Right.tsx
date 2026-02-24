import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconArrow3Right(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12.53 5.47a.75.75 0 1 0-1.06 1.06L16.94 12l-5.47 5.47-.052.056a.75.75 0 0 0 1.056 1.056l.056-.052 6-6a.75.75 0 0 0 0-1.06zm-4 2a.75.75 0 1 0-1.06 1.06L10.94 12l-3.47 3.47-.052.056a.75.75 0 0 0 1.056 1.056l.056-.052 4-4a.75.75 0 0 0 0-1.06z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconArrow3Right;
