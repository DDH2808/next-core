import BaseSelect from '@/components/base/BaseSelect';
import {
  IBaseSelectProps,
  TSelectValueDefault,
} from '@/components/base/types/select';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

export type FormSelectProps<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
> = BaseFormFieldProps &
  IBaseSelectProps<TValue, TMultiple> & {
    onAfterChange?: IBaseSelectProps<TValue, TMultiple>['onChange'];
    onAfterBlur?: () => void;
  };

function FormSelect<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
>(props: FormSelectProps<TValue, TMultiple>) {
  const { name, className, onAfterChange, onAfterBlur, ...rest } = props;
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
            <BaseSelect
              defaultValue={value}
              {...rest}
              onChange={(value, options) => {
                onChange(value);
                setValue(name, value);
                onAfterChange?.(value, options);
              }}
              onBlur={() => {
                onBlur();
                onAfterBlur?.();
              }}
              className={clsx(
                errorMessage && 'border-ruby-red-600!',
                className,
              )}
              isError={!!errorMessage}
            />
          </FormField>
        );
      }}
    />
  );
}

export default FormSelect;
