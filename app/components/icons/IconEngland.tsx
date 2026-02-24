import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconEngland(allProps: IconWrapperProps): React.ReactElement {
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
            <path fill="#fff" d="M0 0h36v24H0z" />
            <path
              fill="#D80027"
              d="M20.25 0h-4.5v9.75H0v4.5h15.75V24h4.5v-9.75H36v-4.5H20.25z"
            />
            <path
              fill="#0052B4"
              d="M27.688 16.174 36 20.792v-4.618zm-5.775 0L36 24v-2.213l-10.103-5.613zM32.248 24l-10.335-5.742V24z"
            />
            <path fill="#fff" d="M21.913 16.174 36 24v-2.213l-10.103-5.613z" />
            <path
              fill="#D80027"
              d="M21.913 16.174 36 24v-2.213l-10.103-5.613z"
            />
            <path
              fill="#0052B4"
              d="M6.352 16.174 0 19.703v-3.53zm7.735.995v6.83H1.792z"
            />
            <path fill="#D80027" d="M10.103 16.174 0 21.787V24l14.087-7.826z" />
            <path
              fill="#0052B4"
              d="M8.312 7.826 0 3.208v4.618zm5.775 0L0 0v2.213l10.103 5.613zM3.752 0l10.335 5.742V0z"
            />
            <path fill="#fff" d="M14.087 7.826 0 0v2.213l10.103 5.613z" />
            <path fill="#D80027" d="M14.087 7.826 0 0v2.213l10.103 5.613z" />
            <path
              fill="#0052B4"
              d="M29.648 7.826 36 4.297v3.529zm-7.735-.995V0h12.295z"
            />
            <path fill="#D80027" d="M25.897 7.826 36 2.213V0L21.913 7.826z" />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <rect width={36} height={24} fill="#fff" rx={4} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconEngland;
