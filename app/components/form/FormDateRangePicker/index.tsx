import BaseDateRangePicker, {
  BaseDateRangePickerProps,
} from '@/components/base/BaseDateRangePicker';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import { convertDateStringToDayjs } from '@/utils/dateHelper';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';

type FormDateRangePickerProps = BaseFormFieldProps &
  BaseDateRangePickerProps & {
    onAfterChange?: BaseDateRangePickerProps['onChange'];
  };

function FormDateRangePicker(props: FormDateRangePickerProps) {
  const { name, className, onAfterChange, allowEmpty, format, ...rest } = props;
  const { control, setValue } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value, onBlur, onChange } = field;
        const errorMessage = fieldState.error?.message;

        const safeValues = value &&
          Array.isArray(value) && [
            convertDateStringToDayjs(value[0]),
            convertDateStringToDayjs(value[1]),
          ];

        return (
          <FormField {...props} errorMessage={errorMessage}>
            <BaseDateRangePicker
              defaultValue={safeValues}
              onChange={(dates, dateStrings) => {
                onChange();
                const convertedDateStrings =
                  format && dates
                    ? ([
                        dates[0] ? dayjs(dates[0]).format(format) : '',
                        dates[1] ? dayjs(dates[1]).format(format) : '',
                      ] as [string, string])
                    : dateStrings;
                setValue(name, convertedDateStrings);
                onAfterChange?.(dates, convertedDateStrings);
              }}
              format={format}
              allowEmpty={allowEmpty}
              onBlur={onBlur}
              {...rest}
              className={clsx(
                errorMessage && '!border-ruby-red-600',
                className,
              )}
            />
          </FormField>
        );
      }}
    />
  );
}

export default FormDateRangePicker;
