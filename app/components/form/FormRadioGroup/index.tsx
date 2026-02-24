import BaseRadioGroup, {
  BaseRadioGroupProps,
} from '@/components/base/BaseRadioGroup';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

type FormRadioGroupProps<T> = BaseFormFieldProps &
  BaseRadioGroupProps<T> & {
    onAfterChange?: BaseRadioGroupProps<T>['onChange'];
  };

function FormRadioGroup<T>(props: FormRadioGroupProps<T>) {
  const { name, className, onAfterChange, ...rest } = props;
  const { control, setValue } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value, onBlur, onChange } = field;
        const errorMessage = fieldState.error?.message;

        return (
          <FormField {...props} errorMessage={errorMessage}>
            <BaseRadioGroup
              defaultValue={value}
              onChange={(value: T, e) => {
                onChange(e);
                setValue(name, value);
                onAfterChange?.(value, e);
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

export default FormRadioGroup;
