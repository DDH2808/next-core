import { Checkbox, CheckboxChangeEvent, CheckboxProps } from 'antd';
import clsx from 'clsx';

import './index.scss';

export interface BaseCheckboxProps {
  defaultChecked?: boolean;
  title?: string;
  className?: string;
  onChange?: (checked: boolean, e: CheckboxChangeEvent) => void;
  disabled?: boolean;
  onBlur?: () => void;
}

function BaseCheckbox(props: BaseCheckboxProps) {
  const { onChange, defaultChecked, title, className, disabled, onBlur } =
    props;

  const handleChange: CheckboxProps['onChange'] = e => {
    const isChecked = e.target.checked;
    onChange?.(isChecked, e);
  };

  return (
    <Checkbox
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={handleChange}
      className={clsx(
        'BaseCheckbox !text-base !text-iron-700',
        disabled && 'opacity-75',
        className,
      )}
      onBlur={onBlur}
    >
      {title}
    </Checkbox>
  );
}

export default BaseCheckbox;
