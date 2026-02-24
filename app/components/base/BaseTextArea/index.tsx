import TextArea from 'antd/es/input/TextArea';
import clsx from 'clsx';

import { ChangeEvent } from 'react';
import './index.scss';

export interface BaseTextAreaProps {
  value?: string;
  onChange?: (value?: string, e?: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  allowClear?: boolean;
  showCount?: boolean;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
  className?: string;
  allowResize?: boolean;
  autoResize?: {
    minRows?: number;
    maxRows?: number;
  };
  onBlur?: () => void;
}

/**
 *
 * ```
 * const [value, setValue] = useState<any>(undefined);
 * ...
 * ```
 * @example
 *<BaseTextArea
 *  placeholder="This is placeholder"
 *  autoResize={{ minRows: 1, maxRows: 6 }}
 *  showCount
 *  maxLength={100}
 *  value={area}
 *  onChange={value => {
 *    setArea(value);
 *  }}
 * />
 */

function BaseTextArea(props: BaseTextAreaProps) {
  const {
    disabled,
    placeholder,
    showCount,
    allowClear,
    value,
    onChange,
    defaultValue,
    maxLength,
    className,
    allowResize = true,
    autoResize,
    onBlur,
  } = props;

  return (
    <TextArea
      className={clsx(
        'BaseTextArea relative !p-[15px] !rounded-[5px] !border-iron-200 !text-base !text-iron-700 focus:!border-blue-400 focus-within:!border-blue-400',
        !allowResize && '!resize-none',
        showCount && 'mb-3.5',
        className,
      )}
      defaultValue={defaultValue}
      value={value || defaultValue}
      disabled={disabled}
      allowClear={allowClear}
      showCount={showCount}
      maxLength={maxLength}
      onChange={e => onChange?.(e.target.value, e)}
      placeholder={placeholder}
      autoSize={autoResize}
      onBlur={onBlur}
    />
  );
}

export default BaseTextArea;
