// BaseInputText.tsx
import { Input } from 'antd';
import clsx from 'clsx';

import {
  baseIconStyle,
  BaseInputTextProps,
} from '@/components/base/BaseInput/type';

import '../index.scss';

function BaseInputText(props: BaseInputTextProps & { baseClassName?: string }) {
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
    baseClassName,
    onBlur,
    onClick,
    onKeyDown,
  } = props;

  const baseClasses = clsx(baseClassName, 'BaseInput-text', className);

  const handleChange: BaseInputTextProps['onChange'] = (newValue, e) => {
    onChange?.(newValue, e);
  };

  return (
    <Input
      defaultValue={defaultValue}
      className={baseClasses}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      allowClear={allowClear}
      maxLength={maxLength}
      onChange={e => handleChange(e.target.value, e)}
      prefix={prefixIcon && prefixIcon({ ...baseIconStyle, marginRight: 8 })}
      suffix={suffixIcon && suffixIcon({ ...baseIconStyle, marginLeft: 8 })}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  );
}

BaseInputText.displayName = 'BaseInputText';

export default BaseInputText;
