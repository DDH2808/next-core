import { IconCalendar } from '@/components/icons';
import { DatePicker, DatePickerProps } from 'antd';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

import { EDateTimeFormat } from '@/types/common';
import './index.scss';

export interface BaseDatePickerProps {
  defaultValue?: dayjs.Dayjs;
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
  placeholder?: string;
  format?: string;
  displayFormat?: string;
  showTime?: boolean;
  onChange?: DatePickerProps['onChange'];
  className?: string;
  disabled?: boolean;
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  onBlur?: () => void;
  allowClear?: boolean;
}

/**
 * @example
 * ```tsx
 * <BaseDatePicker
 *   showTime
 *   prefixIcon={<IconClipboardText />}
 *   defaultValue={dayjs('01/01/2025', 'DD/MM/YYYY')}
 *   minDate={dayjs('01/01/2025', 'DD/MM/YYYY')}
 *   maxDate={dayjs('05/01/2025', 'DD/MM/YYYY')}
 *   onChange={(date, dateString) => {
 *     console.log('Selected date', date, dateString);
 *   }}
 * />
 * ```
 */
function BaseDatePicker(props: BaseDatePickerProps) {
  const {
    defaultValue,
    minDate,
    maxDate,
    placeholder,
    format,
    displayFormat,
    showTime = false,
    onChange,
    className,
    disabled,
    suffixIcon = <IconCalendar />,
    prefixIcon,
    onBlur,
    allowClear,
  } = props;

  const defaultFormat = showTime
    ? EDateTimeFormat.DATETIME
    : EDateTimeFormat.DATE;
  const finalDisplayFormat = displayFormat || format || defaultFormat;
  const dataFormat = format || defaultFormat;

  const handleChange = (
    date: dayjs.Dayjs | null,
    dateString: string | null,
  ) => {
    if (onChange) {
      if (date) {
        const convertedDateString = date.format(dataFormat);
        onChange(date, convertedDateString);
      } else {
        onChange(date, dateString);
      }
    }
  };

  return (
    <DatePicker
      allowClear={allowClear}
      defaultValue={defaultValue}
      disabled={disabled}
      placeholder={placeholder}
      showTime={showTime}
      format={finalDisplayFormat}
      onChange={handleChange}
      className={clsx(
        'BaseDatePicker h-10 !rounded-[5px] !px-[15px] !text-base !border-iron-200 focus:!border-blue-main-500 focus-within:!border-blue-main-500',
        className,
      )}
      minDate={minDate}
      maxDate={maxDate}
      suffixIcon={suffixIcon}
      prefix={prefixIcon}
      onBlur={onBlur}
    />
  );
}

export default BaseDatePicker;
