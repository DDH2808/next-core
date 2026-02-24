import InfoTooltip from '@/components/common/InfoTooltip';
import ErrorMessage from '@/components/form/ErrorMessage';
import { BaseFormFieldProps } from '@/components/form/type';
import clsx from 'clsx';
import { ReactElement } from 'react';

interface FormFieldProps extends BaseFormFieldProps {
  errorMessage?: string;
  children: ReactElement;
  className?: string;
}

function FormField(props: FormFieldProps) {
  const {
    label,
    required,
    errorMessage,
    tooltipContent,
    className,
    children,
    name,
  } = props;

  return (
    <div
      className={clsx(
        `FormField FormField-${name}`,
        'flex flex-col text-sm gap-1',
        className,
      )}
    >
      {label && (
        <div className="flex flex-wrap gap-1 text-inherit">
          <span className="text-iron-700">{label}</span>
          {required && (
            <span className="!text-ruby-red-600 font-medium text-base">*</span>
          )}
          {tooltipContent && (
            <div className="flex items-center justify-center pb-1">
              <InfoTooltip content={tooltipContent} />
            </div>
          )}
        </div>
      )}
      {children}
      <ErrorMessage message={errorMessage} />
    </div>
  );
}

export default FormField;
