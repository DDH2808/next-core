import { IconCalendar } from '@/components/icons';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { CSSProperties, ReactNode } from 'react';

import { EDateTimeFormat } from '@/types/common';
import './index.scss';

export interface BaseDateRangePickerProps {
  defaultValue?: [dayjs.Dayjs | null, dayjs.Dayjs | null];
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
  placeholder?: [string, string];
  format?: string;
  displayFormat?: string;
  showTime?: boolean;
  onChange?: RangePickerProps['onChange'];
  disabledDate?: RangePickerProps['disabledDate'];
  className?: string;
  disabled?: boolean;
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  separatorIcon?: ReactNode;
  allowClear?: boolean;
  onBlur?: () => void;
  allowEmpty?: RangePickerProps['allowEmpty'];
}

/**
 * @example
 * ```tsx
 * <BaseDateRangePicker
 *   prefixIcon={<IconClipboardText />}
 *   defaultValue={[dayjs('01/01/2025', 'DD/MM/YYYY'), dayjs('05/01/2025', 'DD/MM/YYYY')]}
 *   minDate={dayjs('01/01/2025', 'DD/MM/YYYY')}
 *   maxDate={dayjs('10/01/2025', 'DD/MM/YYYY')}
 *   showTime
 *   placeholder={['Custom start', 'Custom end']}
 *   className="w-fit"
 *   onChange={(dates, dateStrings) => {
 *     console.log('Selected dates:', { dates, dateStrings });
 *   }}
 * />
 * ```
 */
function BaseDateRangePicker(props: BaseDateRangePickerProps) {
  const {
    defaultValue = [null, null],
    showTime = false,
    format,
    displayFormat,
    placeholder,
    onChange,
    className,
    disabled,
    minDate,
    maxDate,
    suffixIcon = <IconCalendar />,
    prefixIcon,
    allowClear,
    separatorIcon = '-',
    onBlur,
    disabledDate,
    allowEmpty,
  } = props;

  const defaultFormat = showTime
    ? EDateTimeFormat.DATETIME
    : EDateTimeFormat.DATE;
  const finalDisplayFormat = displayFormat || format || defaultFormat;
  const dataFormat = format || defaultFormat;

  const handleChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
    if (onChange) {
      if (dates && dates[0] && dates[1]) {
        const convertedDateStrings: [string, string] = [
          dates[0].format(dataFormat),
          dates[1].format(dataFormat),
        ];
        onChange(dates, convertedDateStrings);
      } else {
        onChange(dates, dateStrings);
      }
    }
  };

  return (
    <DatePicker.RangePicker
      allowEmpty={allowEmpty}
      allowClear={allowClear}
      minDate={minDate}
      maxDate={maxDate}
      defaultValue={defaultValue}
      disabled={disabled}
      placeholder={placeholder}
      showTime={showTime}
      format={finalDisplayFormat}
      disabledDate={disabledDate}
      onChange={handleChange}
      onBlur={onBlur}
      className={clsx(
        'BaseDateRangePicker h-10 !rounded-[5px] !pl-[15px] !pr-[12px] !text-base !border-iron-200',
        showTime && 'BaseDateRangePicker-showTime',
        className,
      )}
      suffixIcon={suffixIcon}
      prefix={prefixIcon}
      separator={separatorIcon}
      style={
        {
          '--sizeCh': `${finalDisplayFormat.length}ch`,
          '--sizePx': `${finalDisplayFormat.length + 2}px`,
        } as CSSProperties
      }
    />
  );
}

export default BaseDateRangePicker;
