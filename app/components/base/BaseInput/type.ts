import { InputNumberProps, InputProps } from 'antd';
import React, { ChangeEvent, CSSProperties, ReactNode } from 'react';

export type BaseInputType = 'text' | 'password' | 'number';

export interface BaseInputBaseProps {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  allowClear?: boolean;
  prefixIcon?: (style: CSSProperties) => ReactNode;
  suffixIcon?: (style: CSSProperties) => ReactNode;
  maxLength?: number;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>, name?: string) => void;
  onAfterBlur?: BaseInputProps['onBlur'];
  onClick?: InputProps['onClick'];
  onKeyDown?: InputProps['onKeyDown'];
}

export const baseIconStyle: CSSProperties = {
  fontSize: '16px',
  width: '16px',
  color: 'var(--color-iron-500)',
};

export type BaseInputTextValueType = string | undefined;
export interface BaseInputTextProps extends BaseInputBaseProps {
  type: 'text';
  value?: BaseInputTextValueType;
  defaultValue?: BaseInputTextValueType;
  onChange?: (
    value: BaseInputTextValueType,
    event?: ChangeEvent<HTMLInputElement>,
  ) => void;
}

export type BaseInputNumberValueType = number | undefined;
export interface BaseInputNumberProps extends BaseInputBaseProps {
  type?: 'number';
  value?: BaseInputNumberValueType;
  defaultValue?: BaseInputNumberValueType;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  formatter?: InputNumberProps['formatter'];
  parser?: InputNumberProps['parser'];
  showSpinner?: boolean;
  allowDecimal?: boolean;
  onChange?: (
    value: BaseInputNumberValueType,
    event?: ChangeEvent<HTMLInputElement>,
  ) => void;
}

export type BaseInputPasswordValueType = string | undefined;
export interface BaseInputPasswordProps extends BaseInputBaseProps {
  type: 'password';
  value?: BaseInputPasswordValueType;
  defaultValue?: BaseInputPasswordValueType;
  visibilityToggle?: boolean;
  onChange?: (
    value: BaseInputPasswordValueType,
    event?: ChangeEvent<HTMLInputElement>,
  ) => void;
}

export type BaseInputProps =
  | BaseInputTextProps
  | BaseInputNumberProps
  | BaseInputPasswordProps;
