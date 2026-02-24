import { ReactNode } from 'react';

export type BaseFormFieldProps = {
  name: string;
  label?: ReactNode;
  required?: boolean;
  tooltipContent?: string;
};
