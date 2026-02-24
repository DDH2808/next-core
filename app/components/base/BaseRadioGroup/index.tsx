import { Radio } from 'antd';
import clsx from 'clsx';
import { MouseEvent, ReactNode, useState } from 'react';

import './index.scss';

export type BaseRadioGroupDirectionType = 'vertical' | 'horizontal';

export type RadioGroupOptionItem<T> = {
  label?: ReactNode;
  value: T;
  extraContent?: ReactNode;
  disabled?: boolean;
  className?: string;
};

export interface BaseRadioGroupProps<T> {
  onChange?: (
    value: T,
    e?: MouseEvent<HTMLElement, globalThis.MouseEvent>,
  ) => void;
  options: RadioGroupOptionItem<T>[];
  disabled?: boolean;
  direction?: BaseRadioGroupDirectionType;
  defaultValue?: T;
  className?: string;
  extraContentClassName?: string;
  showBlock?: boolean;
  onBlur?: () => void;
}

/**
 *
 * @example
 * ```tsx
 * <BaseRadioGroup<number>
 *   defaultValue={2}
 *   options={[
 *     { value: 1, label: 'Option A' },
 *     { value: 2, label: 'Option B' },
 *     { value: 3, label: 'Option C' },
 *   ]}
 *   onChange={(value) => {
 *     console.log('Selected', value);
 *   }}
 * />
 * ```
 */

function BaseRadioGroup<T>(props: BaseRadioGroupProps<T>) {
  const {
    onChange,
    options,
    disabled,
    direction = 'horizontal',
    className,
    defaultValue,
    extraContentClassName,
    showBlock,
    onBlur,
  } = props;
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const handleChange: BaseRadioGroupProps<T>['onChange'] = (value, e) => {
    if (disabled) return;
    setCurrentValue(value);
    onChange?.(value, e);
  };

  return (
    <div
      className={clsx(
        'BaseRadioGroup flex flex-wrap items-start gap-4 text-base text-iron-700',
        direction === 'vertical' && 'flex-col justify-start',
        className,
      )}
    >
      {options.map((option, index) => {
        const {
          label,
          value,
          extraContent,
          disabled: optionDisabled,
          className: optionClassName,
        } = option;
        const isChecked = currentValue === value;
        const isDisabled = optionDisabled || disabled;

        return (
          <div
            key={`BaseRadioGroup__option-${value}-${index}`}
            className={clsx(
              'BaseRadioGroup__option flex flex-col items-start transition-all duration-200',
              isDisabled && 'BaseRadioGroup__option-disabled',
              showBlock ? (direction === 'vertical' ? 'w-full' : 'flex-1') : '',
              showBlock && 'border-2 p-5 rounded-[10px]',
              isChecked
                ? isDisabled
                  ? 'border-iron-200'
                  : 'border-blue-main-600'
                : 'border-transparent',
              optionClassName,
            )}
          >
            <Radio
              value={value}
              checked={isChecked}
              onClick={e => handleChange(value, e)}
              disabled={disabled || optionDisabled}
              onBlur={onBlur}
            >
              <span className="text-inherit select-none">{label}</span>
            </Radio>
            {extraContent && (
              <div
                className={clsx(
                  'BaseRadioGroup__extraContent text-inherit text-left mt-2',
                  extraContentClassName,
                )}
              >
                {extraContent}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BaseRadioGroup;
