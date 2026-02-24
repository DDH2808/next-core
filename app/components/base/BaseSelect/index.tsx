import { IconCheck, IconDown, IconX } from '@/components/icons';
import { Select, SelectProps } from 'antd';
import clsx from 'clsx';
import React, { CSSProperties, useCallback, useMemo, useState } from 'react';

import BaseInput from '@/components/base/BaseInput';
import { BaseInputTextValueType } from '@/components/base/BaseInput/type';
import { removeDiacritics } from '@/utils/constant';
import { DefaultOptionType } from 'antd/es/select';
import { useTranslation } from 'react-i18next';
import './index.scss';
import {
  IBaseSelectProps,
  InferSelectOption,
  InferSelectValue,
  TSelectValueDefault,
} from '../types/select';

const baseIconStyle: CSSProperties = {
  height: 20,
  width: 20,
  fontSize: 20,
  color: 'var(--color-iron-500)',
};

/**
 *
 * @example
 * Basic usage
 * ```tsx
 * <BaseSelect
 *    disabled
 *    multiple={false}
 *    className="w-full"
 *    placeholder="Select a something to do something"
 *    options={[
 *      { value: 'Ava Swift', label: 'Ava Swift' },
 *      { value: 'Cole Reed', label: 'Cole Reed' },
 *      { value: 'Mia Blake', label: 'Mia Blake' },
 *      { value: 'Elle Blair', label: 'Elle Blair', disabled: true },
 *    ]}
 *    onChange={value => {
 *      console.log(`selected:`, value);
 *    }}
 * />
 * ```
 *
 * @example
 * With custom search
 * ```tsx
 * <BaseSelect
 *   allowSearch
 *   multiple={false}
 *   searchPlaceholder="Tìm kiếm..."
 *   className="w-full"
 *   placeholder="Select a something to do something"
 *   options={[
 *     { value: 'Ava Swift', label: 'Ava Swift' },
 *     { value: 'Cole Reed', label: 'Cole Reed' },
 *     { value: 'Mia Blake', label: 'Mia Blake' },
 *     { value: 'Elle Blair', label: 'Elle Blair', disabled: true },
 *   ]}
 *   onChange={value => {
 *     console.log(`selected:`, value);
 *   }}
 * />
 * ```
 *
 * @example
 * Multiple selection
 * ```tsx
 * <BaseSelect
 *   multiple={true}
 *   allowSearch
 *   searchPlaceholder="Search users..."
 *   defaultValue={['default-value']}
 *   className="w-full"
 *   maxLength={2}
 *   placeholder="Select a something to do something"
 *   options={[
 *     { value: 'Ava Swift', label: 'Ava Swift' },
 *     { value: 'Cole Reed', label: 'Cole Reed' },
 *     { value: 'Mia Blake', label: 'Mia Blake' },
 *   ]}
 *   onChange={(value, option) => {
 *     console.log(`selected:`, value, option);
 *   }}
 * />
 * ```
 */

function BaseSelect<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
>({
  defaultValue,
  options,
  placeholder,
  prefixIcon,
  suffixIcon,
  onChange,
  allowClear,
  className,
  disabled,
  multiple,
  maxLength,
  allowSearch = false,
  emptyText,
  searchPlaceholder,
  onBlur,
  isError,
}: IBaseSelectProps<TValue, TMultiple>) {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState<BaseInputTextValueType>('');

  const filteredOptions = useMemo(() => {
    if (!allowSearch || !searchValue) return options;

    const searchLower = searchValue.toString().toLowerCase();
    const searchNormalized = removeDiacritics(searchLower);

    return options.filter(option => {
      const labelString =
        typeof option.label === 'string'
          ? option.label
          : option.label?.toString() || '';
      const valueString = option.value?.toString() || '';

      // Original text matching
      const labelLower = labelString.toLowerCase();
      const valueLower = valueString.toLowerCase();

      // Normalized text (without diacritics) matching
      const labelNormalized = removeDiacritics(labelLower);
      const valueNormalized = removeDiacritics(valueLower);

      return (
        labelLower.includes(searchLower) ||
        valueLower.includes(searchLower) ||
        labelNormalized.includes(searchNormalized) ||
        valueNormalized.includes(searchNormalized)
      );
    });
  }, [options, searchValue, allowSearch]);

  const handleSearch = useCallback((value: BaseInputTextValueType) => {
    setSearchValue(value);
  }, []);

  const handleDropdownVisibleChange = useCallback(
    (open: boolean) => {
      if (!open && allowSearch) {
        setSearchValue('');
      }
    },
    [allowSearch],
  );

  const tagRender: SelectProps['tagRender'] = props => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <p
        className={clsx(
          'flex items-center gap-0.5 px-2 pr-1.5 py-0.5 rounded-[5px] border border-blue-main-600 bg-blue-main-50 text-sm group',
          disabled && 'border-iron-200 bg-iron-50',
        )}
        onMouseDown={onPreventMouseDown}
      >
        <span className={clsx('text-blue-800', disabled && 'text-iron-800')}>
          {label}
        </span>
        {closable && (
          <IconX
            className="flex justify-center items-center text-iron-500! group-hover:text-iron-800! duration-200 transition-all cursor-pointer"
            onClick={onClose}
          />
        )}
      </p>
    );
  };

  return (
    <Select<InferSelectValue<TValue, TMultiple>>
      showSearch={false}
      mode={multiple ? 'multiple' : undefined}
      disabled={disabled}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(newValue, option) => {
        onChange?.(newValue, option as InferSelectOption<TValue, TMultiple>);
      }}
      onBlur={onBlur}
      onOpenChange={handleDropdownVisibleChange}
      options={filteredOptions as DefaultOptionType[]}
      allowClear={allowClear}
      className={clsx(
        'BaseSelect rounded-[5px]! min-h-10 min-w-30 text-base!',
        isError && 'BaseSelect--error',
        className,
      )}
      prefix={prefixIcon ? prefixIcon(baseIconStyle) : null}
      suffixIcon={
        suffixIcon ? (
          suffixIcon(baseIconStyle)
        ) : (
          <IconDown style={baseIconStyle} />
        )
      }
      menuItemSelectedIcon={
        <IconCheck
          size={20}
          className="flex items-center justify-center text-xl! text-blue-main-700!"
        />
      }
      popupRender={
        allowSearch
          ? menu => (
              <div>
                {allowSearch && (
                  <div className="sticky top-0 z-10 bg-white border-b border-iron-100 p-3">
                    <BaseInput
                      type="text"
                      placeholder={
                        searchPlaceholder || t('form.select_search_placeholder')
                      }
                      value={searchValue}
                      onChange={value => handleSearch(value)}
                      onClick={e => e.stopPropagation()}
                      onKeyDown={e => e.stopPropagation()}
                      className="w-full"
                    />
                  </div>
                )}
                {menu}
                {allowSearch && filteredOptions.length === 0 && searchValue && (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    {emptyText || t('form.select_empty_data')}
                  </div>
                )}
              </div>
            )
          : undefined
      }
      {...(multiple && {
        maxTagCount: 'responsive',
        maxCount: maxLength,
        tagRender: tagRender,
      })}
    />
  );
}

export default BaseSelect;
