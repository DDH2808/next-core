import * as React from 'react';
import { IconWrapperProps } from './types';

export function IconWrapper({
  icon,
  color: colorProp,
  size: sizeProp,
  autoSize,
  ...restProps
}: { icon: React.ReactNode } & IconWrapperProps): React.ReactElement {
  const color = colorProp || 'currentColor';
  const size = sizeProp ? `${sizeProp}px` : autoSize ? '1em' : '16px';
  return (
    <span
      role="img"
      aria-hidden="true"
      style={{
        color: color,
        width: size,
        height: size,
        display: 'inline-flex',
        fontSize: 'inherit',
      }}
      {...restProps}
    >
      {icon}
    </span>
  );
}
