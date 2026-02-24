'use client';
import { Button } from 'antd';
import {
  ButtonColorType,
  ButtonProps,
  ButtonVariantType,
} from 'antd/es/button';
import clsx from 'clsx';
import { CSSProperties, ReactElement, ReactNode, useMemo } from 'react';

import './index.scss';

export type BaseButtonType =
  | 'gradient'
  | 'fill'
  | 'danger'
  | 'outline'
  | 'default'
  | 'disable'
  | 'text';
export interface BaseButtonProps {
  className?: string;
  children?: string | ReactElement | ReactElement[];
  disabled?: boolean;
  loading?: boolean;
  type?: BaseButtonType;
  suffixIcon?: (style: CSSProperties) => ReactNode;
  prefixIcon?: (style: CSSProperties) => ReactNode;
  onClick?: ButtonProps['onClick'];
}

/**
 * @example
 * ```tsx
 * <BaseButton
 *   loading
 *   type="disable"
 *   disabled
 *   prefixIcon={(style) => <IconPlus style={style} />}
 *   suffixIcon={(style) => <IconPlus style={style} />}
 * >
 *   Clicked
 * </BaseButton>
 * ```
 */
function BaseButton(props: BaseButtonProps) {
  const {
    className,
    children,
    disabled,
    loading,
    onClick,
    type = 'fill',
    suffixIcon,
    prefixIcon,
  } = props;

  const baseStyles = useMemo(() => {
    // icon
    const iconStyle: CSSProperties = {
      height: 20,
      width: 20,
      fontSize: 20,
      color: 'white',
    };
    // button
    let baseBtnColor: ButtonColorType = 'primary';
    let baseBtnVariant: ButtonVariantType = 'solid';
    const baseBtnClass = [
      'BaseButton min-w-10 w-fit !h-10 max-h-10 !text-base !gap-2.5 !font-medium',
    ];

    if (type === 'disable' || disabled) {
      baseBtnColor = 'default';
      baseBtnVariant = 'filled';
      baseBtnClass.push(
        '!text-blue-iron-600 !border-iron-200 !bg-blue-iron-200',
      );
      iconStyle.color = 'var(--color-blue-iron-500)';
    } else {
      switch (type) {
        case 'fill':
          baseBtnClass.push('!text-white !border-none !bg-blue-main-700');
          break;
        case 'gradient':
          baseBtnClass.push(
            '!text-white !border-none !bg-[linear-gradient(270deg,_#00BBD4_0%,_#0F36DB_100%)]',
          );
          break;
        case 'danger':
          baseBtnColor = 'danger';
          baseBtnClass.push('!text-white !border-none !bg-ruby-red-500');
          break;
        case 'default':
          baseBtnColor = 'default';
          baseBtnVariant = 'outlined';
          baseBtnClass.push('!text-iron-700 !border-iron-200 !bg-shade-0');
          iconStyle.color = 'var(--color-iron-500)';
          break;
        case 'outline':
          baseBtnColor = 'primary';
          baseBtnVariant = 'outlined';
          baseBtnClass.push(
            '!text-blue-main-800 !border-blue-main-500 !bg-blue-main-50',
          );
          iconStyle.color = 'var(--color-blue-main-700)';
          break;
        case 'text':
          baseBtnColor = 'primary';
          baseBtnVariant = 'text';
          baseBtnClass.push('!text-blue-main-800');
          iconStyle.color = 'var(--color-blue-main-700)';
          break;
        default:
          baseBtnClass.push('!text-white !border-none !bg-blue-main-700');
          break;
      }
    }

    return { baseBtnColor, baseBtnVariant, baseBtnClass, iconStyle };
  }, [type, disabled]);

  return (
    <Button
      color={baseStyles.baseBtnColor}
      variant={baseStyles.baseBtnVariant}
      className={clsx(...baseStyles.baseBtnClass, className)}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
    >
      {!loading && prefixIcon && prefixIcon(baseStyles.iconStyle)}
      {children}
      {suffixIcon && suffixIcon(baseStyles.iconStyle)}
    </Button>
  );
}

export default BaseButton;
