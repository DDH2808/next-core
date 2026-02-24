import BaseInput from '@/components/base/BaseInput';
import { BaseInputProps } from '@/components/base/BaseInput/type';
import FormField from '@/components/form/FormField';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';

type FormInputProps = BaseFormFieldProps & BaseInputProps;

function FormInput(props: FormInputProps) {
  const { name, className, onAfterBlur, ...rest } = props;
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
            <BaseInput
              value={value}
              onChange={(value: string | number | undefined, event) => {
                onChange(event);
                setValue(name, value);
              }}
              onBlur={event => {
                onBlur();

                const inputValue = event?.target?.value;

                if (
                  rest?.type === 'number' &&
                  typeof rest?.parser === 'function'
                ) {
                  const parsedValue =
                    inputValue === '' ? null : rest.parser(inputValue);

                  setValue(name, parsedValue, { shouldValidate: true });

                  onAfterBlur?.(
                    {
                      ...event,
                      target: {
                        ...event.target,
                        value: parsedValue === null ? '' : String(parsedValue),
                      },
                    },
                    name,
                  );
                } else {
                  onAfterBlur?.(
                    {
                      ...event,
                      target: { ...event.target, value: inputValue },
                    },
                    name,
                  );
                }
              }}
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

export default FormInput;
