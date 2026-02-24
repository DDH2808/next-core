import React, { CSSProperties, ReactNode } from 'react';

export type TSelectValueDefault = number | string;

export type InferSelectValue<
  TValue,
  TMultiple extends boolean,
> = TMultiple extends true ? TValue[] : TValue;

export interface ISelectOption<TValue> {
  disabled?: boolean;
  className?: string;
  title?: string;
  label?: React.ReactNode;
  value: TValue;
  children?: Omit<ISelectOption<TValue>, 'children'>[];
}

export type InferSelectOption<
  TValue,
  TMultiple extends boolean,
> = TMultiple extends true ? ISelectOption<TValue>[] : ISelectOption<TValue>;

export interface IBaseSelectProps<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
> {
  options: ISelectOption<TValue>[];
  className?: string;
  prefixIcon?: (style: CSSProperties) => ReactNode;
  suffixIcon?: (style: CSSProperties) => ReactNode;
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
  maxLength?: number;
  allowSearch?: boolean;
  onBlur?: () => void;
  emptyText?: ReactNode;
  loadingText?: ReactNode;
  searchPlaceholder?: string;
  isError?: boolean;
  multiple: TMultiple;
  defaultValue?: TMultiple extends true ? TValue[] : TValue;
  onChange?: (
    value: InferSelectValue<TValue, TMultiple>,
    option?: InferSelectOption<TValue, TMultiple>,
  ) => void;
}

interface ApiParams {
  page: number;
  pageSize: number;
  keyword?: string;
}

interface IRepsonseModel<T> {
  label: string;
  value: T;
}

interface ApiResponse<T> {
  data: IRepsonseModel<T>[];
  total: number;
  hasMore?: boolean;
}

export interface IApiSelectProps<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
> extends IBaseSelectProps<TValue, TMultiple> {
  apiFn: (params: ApiParams) => Promise<ApiResponse<TValue>>;
  onError?: (e: unknown) => void;
  transformOption: (item: IRepsonseModel<TValue>) => ISelectOption<TValue>;
  searchDebounceTime?: number;
  pageSize?: number;
  queryKey?: string;
  defaultOptions: ISelectOption<TValue>[];
}
