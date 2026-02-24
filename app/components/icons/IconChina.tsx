import React from 'react';
import { IconWrapper } from '../base/IconWrapper';
import { IconWrapperProps } from '../base/IconWrapper/types';

function IconChina(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fill="#D80027"
              d="M13.826 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z"
            />
            <path
              fill="#FFDA44"
              d="m6 3 .944 3.056H10L7.528 7.944 8.472 11 6 9.111 3.528 11l.944-3.056L2 6.056h3.056zM11.986 1.08l-.036 1.2 1.084.37-1.107.37-.035 1.2-.648-.97-1.107.37.706-.97-.648-.97 1.085.37zM14.045 4.07l.685.985 1.092-.347-.669.956.685.985-1.098-.394-.669.955-.01-1.199-1.098-.394 1.092-.347zM14.16 8.04l.605 1.035 1.116-.26-.743.9.605 1.036-1.063-.48-.743.9.085-1.196-1.063-.48 1.116-.26zM12.15 11.149l-.177 1.186 1.032.497-1.142.236-.179 1.186-.528-1.04-1.142.235.816-.879-.528-1.04 1.033.497z"
            />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h36v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconChina;
