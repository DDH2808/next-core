import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconCurrencyKip(allProps: IconWrapperProps): React.ReactElement {
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
            d="M5 12h14M8.5 4v16m8.167 0c0-2.122-.86-4.157-2.392-5.657A8.25 8.25 0 0 0 8.5 12a8.25 8.25 0 0 0 5.775-2.343A7.92 7.92 0 0 0 16.667 4"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconCurrencyKip;
