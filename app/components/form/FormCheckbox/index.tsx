import BaseCheckbox, {
  BaseCheckboxProps,
} from '@/components/base/BaseCheckbox';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

type FormCheckboxProps = BaseFormFieldProps & BaseCheckboxProps;

function FormCheckbox(props: FormCheckboxProps) {
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
            <BaseCheckbox
              defaultChecked={value}
              onChange={(value, e) => {
                onChange(e);
                setValue(name, value);
              }}
              onBlur={onBlur}
              {...rest}
              className={clsx(errorMessage && '!text-ruby-red-600', className)}
            />
          </FormField>
        );
      }}
    />
  );
}

export default FormCheckbox;
