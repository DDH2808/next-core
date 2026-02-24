import { IconCalendar } from '@/components/icons';
import { TimePicker, TimePickerProps } from 'antd';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

import './index.scss';

export type BaseTimePickerFormatType = 'HH:mm:ss' | 'HH:mm';
export interface BaseTimePickerProps {
  defaultValue?: dayjs.Dayjs;
  className?: string;
  disabled?: boolean;
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  onChange?: TimePickerProps['onChange'];
  allowClear?: boolean;
  onBlur?: () => void;
  format?: BaseTimePickerFormatType;
  displayFormat?: BaseTimePickerFormatType;
  placeholder?: string;
}

/**
 *
 * ```
 * @example
 * <BaseTimePicker
 *   defaultValue={dayjs('12:33', EDateTimeFormat.TIME)}
 *   format="HH:mm"
 *   displayFormat="HH:mm:ss"
 *   onChange={(_, timeString) => {
 *     console.log(timeString);
 *   }}
 *   suffixIcon={<IconCalendar />}
 * />
 * ```
 */
function BaseTimePicker(props: BaseTimePickerProps) {
  const {
    defaultValue,
    className,
    disabled,
    suffixIcon = <IconCalendar />,
    prefixIcon,
    onChange,
    allowClear,
    onBlur,
    format = 'HH:mm',
    displayFormat = 'HH:mm',
    placeholder,
  } = props;

  const handleChange: TimePickerProps['onChange'] = (time, timeString) => {
    if (onChange) {
      if (time) {
        const convertedTimeString = time.format(format);
        onChange(time, convertedTimeString);
      } else {
        onChange(time, timeString);
      }
    }
  };

  return (
    <TimePicker
      size="large"
      defaultValue={defaultValue}
      format={displayFormat}
      disabled={disabled}
      className={clsx(
        'BaseTimePicker h-10 !px-[15px] !text-base !rounded-[5px]',
        className,
      )}
      allowClear={allowClear}
      onBlur={onBlur}
      suffixIcon={suffixIcon}
      prefix={prefixIcon}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default BaseTimePicker;
