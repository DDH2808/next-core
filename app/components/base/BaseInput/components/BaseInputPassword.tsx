// BaseInputPassword.tsx
import { Input } from 'antd';
import clsx from 'clsx';

import {
  baseIconStyle,
  BaseInputPasswordProps,
} from '@/components/base/BaseInput/type';

import '../index.scss';

function BaseInputPassword(
  props: BaseInputPasswordProps & { baseClassName?: string },
) {
  const {
    disabled,
    className,
    placeholder,
    onChange,
    value,
    defaultValue,
    allowClear,
    prefixIcon,
    suffixIcon,
    maxLength,
    visibilityToggle = true,
    baseClassName,
    onBlur,
    onClick,
    onKeyDown,
  } = props;

  const baseClasses = clsx(baseClassName, 'BaseInput-password', className);

  const handleChange: BaseInputPasswordProps['onChange'] = (newValue, e) => {
    onChange?.(newValue, e);
  };

  return (
    <Input.Password
      className={baseClasses}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      allowClear={allowClear}
      maxLength={maxLength}
      onChange={e => handleChange(e.target.value, e)}
      visibilityToggle={visibilityToggle}
      prefix={prefixIcon && prefixIcon({ ...baseIconStyle, marginRight: 8 })}
      suffix={suffixIcon && suffixIcon({ ...baseIconStyle, marginLeft: 8 })}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  );
}

BaseInputPassword.displayName = 'BaseInputPassword';

export default BaseInputPassword;
