import BaseDatePicker, {
  BaseDatePickerProps,
} from '@/components/base/BaseDatePicker';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import { convertDateStringToDayjs } from '@/utils/dateHelper';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

type FormDatePickerProps = BaseFormFieldProps & BaseDatePickerProps;

function FormDatePicker(props: FormDatePickerProps) {
  const { name, className, ...rest } = props;
  const { control, setValue } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value, onBlur, onChange } = field;
        const errorMessage = fieldState.error?.message;
        // prepared safety defaultValue
        const convertedDefaultValue =
          value && typeof value === 'string'
            ? convertDateStringToDayjs(value)
            : null;

        return (
          <FormField {...props} errorMessage={errorMessage}>
            <BaseDatePicker
              defaultValue={convertedDefaultValue!}
              onChange={(_, dateString) => {
                onChange();
                setValue(name, dateString);
              }}
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

export default FormDatePicker;
