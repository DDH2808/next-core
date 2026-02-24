import BaseSwitch, { BaseSwitchProps } from '@/components/base/BaseSwitch';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

type FormSwitchProps = BaseFormFieldProps & BaseSwitchProps;

function FormSwitch(props: FormSwitchProps) {
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
            <BaseSwitch
              defaultChecked={value}
              onChange={(value, e) => {
                onChange(e);
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

export default FormSwitch;
