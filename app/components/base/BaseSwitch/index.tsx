import { Switch } from 'antd';
import clsx from 'clsx';
import { KeyboardEvent, MouseEvent, ReactNode } from 'react';

import './index.scss';

export type BaseSwitchLabelPosition = 'start' | 'end';

export interface BaseSwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  title?: ReactNode;
  loading?: boolean;
  className?: string;
  titlePosition?: BaseSwitchLabelPosition;
  onChange?: (
    checked: boolean,
    e?:
      | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      | KeyboardEvent<HTMLButtonElement>,
  ) => void;
  onBlur?: () => void;
}

/**
 *
 * @example
 * ```tsx
 * <BaseSwitch
 *   defaultChecked
 *   onChange={checked => {
 *     console.log('checked', checked);
 *   }}
 *   title="Hello label"
 *   titlePosition="start"
 * />
 * ```
 *
 */
function BaseSwitch(props: BaseSwitchProps) {
  const {
    title,
    disabled,
    defaultChecked,
    loading,
    className,
    titlePosition = 'end',
    onChange,
    onBlur,
  } = props;

  return (
    <div
      className={clsx(
        'flex items-center gap-2.5 text-iron-700 text-base',
        titlePosition === 'start' ? 'flex-row-reverse' : 'flex-row',
        className,
      )}
      onBlur={onBlur}
    >
      <Switch
        disabled={disabled}
        defaultChecked={defaultChecked}
        loading={loading}
        className="BaseSwitch !h-6 !min-w-[50px]"
        onChange={(checked, e) => onChange?.(checked, e)}
      />
      {title && <span>{title}</span>}
    </div>
  );
}

export default BaseSwitch;
