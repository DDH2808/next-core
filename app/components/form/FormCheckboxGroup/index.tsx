import BaseCheckboxGroup, {
  BaseCheckboxGroupProps,
} from '@/components/base/BaseCheckboxGroup';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

type FormCheckboxGroupProps<T> = BaseFormFieldProps & BaseCheckboxGroupProps<T>;

function FormCheckboxGroup<T>(props: FormCheckboxGroupProps<T>) {
  const { name, className, ...rest } = props;
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
            <BaseCheckboxGroup<T>
              defaultValue={value}
              onChange={value => {
                onChange();
                setValue(name, value);
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

export default FormCheckboxGroup;
