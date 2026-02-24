import { zodResolver } from '@hookform/resolvers/zod';
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useEffect,
  useImperativeHandle,
} from 'react';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  FormState,
  Path,
  Resolver,
  useForm,
  UseFormGetValues,
  UseFormReset,
  UseFormResetField,
  UseFormReturn,
  UseFormSetError,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';
import { ZodObject } from 'zod';

interface FormChildrenProps<T extends FieldValues> {
  handleSubmit: () => void;
  setError: UseFormSetError<T>;
  setField: UseFormSetValue<T>;
  setValue: UseFormSetValue<T>;
  getValues: UseFormGetValues<T>;
  reset: UseFormReset<T>;
  resetField: UseFormResetField<T>;
  trigger: UseFormTrigger<T>;
  formState: FormState<T>;
}

interface FormProps<T extends FieldValues> {
  defaultValues?: DefaultValues<T>;
  resolver?: ZodObject<T>;
  defaultFocus?: Path<T>;
  onSubmit: (values: T, formState?: FormState<T>) => void;
  children: (options: FormChildrenProps<T>) => ReactElement;
}

function FormInner<T extends FieldValues>(
  props: FormProps<T>,
  ref: ForwardedRef<UseFormReturn<T>>,
) {
  const { defaultFocus, resolver, defaultValues, onSubmit, children } = props;

  const methods = useForm<T>({
    defaultValues,
    resolver: resolver
      ? (zodResolver(resolver) as unknown as Resolver<T>)
      : undefined,
    mode: 'all',
  });

  const { formState } = methods;

  useEffect(() => {
    if (defaultFocus) methods.setFocus(defaultFocus);
  }, [defaultFocus, methods]);

  useImperativeHandle(ref, () => methods, [methods]);

  return (
    <FormProvider {...methods}>
      {children({
        handleSubmit: methods.handleSubmit(data => onSubmit(data, formState)),
        setError: methods.setError,
        setField: methods.setValue,
        setValue: methods.setValue,
        getValues: methods.getValues,
        reset: methods.reset,
        resetField: methods.resetField,
        trigger: methods.trigger,
        formState,
      })}
    </FormProvider>
  );
}

export default forwardRef(FormInner) as <T extends FieldValues>(
  props: FormProps<T> & { ref?: ForwardedRef<UseFormReturn<T>> },
) => ReactElement;
