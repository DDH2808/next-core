import { Checkbox } from 'antd';
import clsx from 'clsx';

import './index.scss';

export type BaseCheckboxGroupDirectionType = 'horizontal' | 'vertical';
export type BaseCheckboxGroupOptionItemType<T> = {
  label: string;
  value: T;
  disabled?: boolean;
  className?: string;
};

export interface BaseCheckboxGroupProps<T> {
  options: BaseCheckboxGroupOptionItemType<T>[];
  onChange?: (checkedValues: T[]) => void;
  className?: string;
  defaultValue?: T[];
  disabled?: boolean;
  onBlur?: () => void;
  direction?: BaseCheckboxGroupDirectionType;
}

/**
 *
 * @example
 * ```tsx
 * <BaseCheckboxGroup
 *   options={[
 *     { label: 'Apple', value: '1', className: 'label-1' },
 *     { label: 'Pear', value: '2', className: 'label-2' },
 *     {
 *        label: 'Orange',
 *        value: '3',
 *        disabled: false,
 *     },
 *   ]}
 *   onChange={values => {
 *     console.log('values', values);
 *   }}
 * />
 * ```
 *
 */
function BaseCheckboxGroup<T>(props: BaseCheckboxGroupProps<T>) {
  const {
    onChange,
    options,
    className,
    defaultValue,
    disabled,
    onBlur,
    direction = 'horizontal',
  } = props;

  return (
    <div onBlur={onBlur}>
      <Checkbox.Group
        disabled={disabled}
        defaultValue={defaultValue}
        className={clsx(
          'BaseCheckboxGroup gap-2 !text-base !text-iron-700',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          className,
        )}
        options={options}
        onChange={values => onChange?.(values)}
      />
    </div>
  );
}

export default BaseCheckboxGroup;
