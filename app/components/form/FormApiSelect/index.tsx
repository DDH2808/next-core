import BaseApiSelect from '@/components/base/BaseApiSelect';
import {
  IApiSelectProps,
  IBaseSelectProps,
  TSelectValueDefault,
} from '@/components/base/types/select';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

type FormApiSelectProps<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
> = BaseFormFieldProps &
  IApiSelectProps<TValue, TMultiple> & {
    onAfterChange?: IBaseSelectProps<TValue, TMultiple>['onChange'];
  };

function FormApiSelect<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
>(props: FormApiSelectProps<TValue, TMultiple>) {
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
            <BaseApiSelect<TValue, TMultiple>
              defaultValue={value}
              {...rest}
              onChange={(value, option) => {
                onChange(value);
                setValue(name, value);
                onAfterChange?.(value, option);
              }}
              onBlur={onBlur}
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

export default FormApiSelect;
