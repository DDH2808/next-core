import { Button } from 'antd';
import { ButtonColorType, ButtonVariantType } from 'antd/es/button';
import clsx from 'clsx';
import { CSSProperties, ReactNode, useMemo } from 'react';

import './index.scss';

export type BaseButtonType =
  | 'fill'
  | 'danger'
  | 'outline'
  | 'default'
  | 'text-primary'
  | 'text-danger'
  | 'text';

interface BaseIconButtonProps {
  icon: (style: CSSProperties) => ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  type?: BaseButtonType;
}

function BaseIconButton(props: BaseIconButtonProps) {
  const { icon, onClick, disabled, type = 'text', loading } = props;

  const baseStyles = useMemo(() => {
    // icon
    const iconStyle: CSSProperties = {
      height: 26,
      width: 26,
      fontSize: 26,
      color: 'white',
    };
    // button
    let baseBtnColor: ButtonColorType = 'primary';
    let baseBtnVariant: ButtonVariantType = 'solid';
    const baseBtnClass = [
      '!rounded-[5px] !px-[15px] min-w-10 w-fit !h-10 max-h-10 !text-base !gap-2.5 !font-medium',
    ];

    if (disabled) {
      baseBtnColor = 'default';
      baseBtnVariant = type.startsWith('text') ? 'text' : 'filled';
      baseBtnClass.push('grayscale-100 opacity-50 !cursor-not-allowed');
      baseBtnClass.push(
        type.startsWith('text')
          ? ''
          : '!text-iron-600 !border-iron-200 !bg-iron-200',
      );
      iconStyle.color = 'var(--color-iron-500)';
    } else {
      switch (type) {
        case 'fill':
          baseBtnClass.push('!text-white !border-none !bg-blue-main-700');
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
        case 'text-primary':
          baseBtnColor = 'primary';
          baseBtnVariant = 'text';
          baseBtnClass.push(
            '!text-blue-main-800 !border-blue-main-500 !bg-blue-main-50',
          );
          iconStyle.color = 'var(--color-blue-main-700)';
          break;
        case 'text-danger':
          baseBtnColor = 'danger';
          baseBtnVariant = 'text';
          baseBtnClass.push('!text-ruby-red-800');
          iconStyle.color = 'var(--color-ruby-red-500)';
          break;
        case 'text':
          baseBtnColor = 'default';
          baseBtnVariant = 'text';
          baseBtnClass.push('!text-iron-700 !border-iron-200 !bg-shade-0');
          iconStyle.color = 'var(--color-iron-400)';
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
      loading={loading}
      size="large"
      color={baseStyles.baseBtnColor}
      variant={baseStyles.baseBtnVariant}
      className={clsx('BaseIconButton h-10 w-10', baseStyles.baseBtnClass)}
      icon={icon(baseStyles.iconStyle)}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

export default BaseIconButton;
