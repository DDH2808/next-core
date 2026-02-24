import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconAddressBook(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.8 16.35a.75.75 0 0 0 1.05-.15 4.874 4.874 0 0 1 7.8 0 .75.75 0 1 0 1.2-.9 6.36 6.36 0 0 0-2.569-2.033 3.75 3.75 0 1 0-5.057 0A6.36 6.36 0 0 0 7.65 15.3a.75.75 0 0 0 .15 1.05m2.7-5.85a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m9-8.25H6a1.5 1.5 0 0 0-1.5 1.5V6H3a.75.75 0 0 0 0 1.5h1.5v3.75H3a.75.75 0 1 0 0 1.5h1.5v3.75H3A.75.75 0 1 0 3 18h1.5v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5m0 18H6V3.75h13.5z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconAddressBook;
