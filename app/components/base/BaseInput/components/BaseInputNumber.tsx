// BaseInputNumber.tsx
import { InputNumber } from 'antd';
import clsx from 'clsx';

import {
  baseIconStyle,
  BaseInputNumberProps,
  BaseInputNumberValueType,
} from '@/components/base/BaseInput/type';

import '../index.scss';

function BaseInputNumber(
  props: BaseInputNumberProps & { baseClassName?: string },
) {
  const {
    disabled,
    className,
    placeholder,
    onChange,
    value,
    defaultValue,
    prefixIcon,
    suffixIcon,
    maxLength,
    min,
    max,
    step,
    precision,
    formatter,
    parser,
    showSpinner = true,
    allowDecimal = false,
    baseClassName,
    onBlur,
    onClick,
    onKeyDown,
  } = props;

  const baseClasses = clsx(
    baseClassName,
    'BaseInput-number',
    !showSpinner && 'BaseInput-number--hideSpinner',
    className,
  );

  const handleChange: BaseInputNumberProps['onChange'] = newValue => {
    onChange?.(newValue);
  };

  const targetType = formatter ? 'text' : 'number';
  const _precision =
    typeof precision !== 'undefined' ? precision : allowDecimal ? undefined : 0;
  const _parser = parser
    ? parser
    : (value?: string) => {
        let parsed = value?.replace(/[^\d.-]/g, '') ?? '';
        if (!allowDecimal) {
          parsed = parsed.split('.')[0];
        }
        return parsed;
      };

  return (
    <InputNumber
      type={targetType}
      className={baseClasses}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      precision={_precision}
      formatter={formatter}
      parser={_parser}
      controls={showSpinner}
      prefix={prefixIcon && prefixIcon({ ...baseIconStyle, marginRight: 8 })}
      suffix={suffixIcon && suffixIcon({ ...baseIconStyle, marginLeft: 8 })}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onChange={value => {
        handleChange(value as BaseInputNumberValueType);
      }}
    />
  );
}

BaseInputNumber.displayName = 'BaseInputNumber';

export default BaseInputNumber;
