import { IconCheck, IconDown, IconX } from '@/components/icons';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Select, SelectProps, Spin } from 'antd';
import clsx from 'clsx';
import React, { CSSProperties, useCallback, useEffect, useState } from 'react';

import BaseInput from '@/components/base/BaseInput';
import { BaseInputTextValueType } from '@/components/base/BaseInput/type';
import useDebounce from '@/hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import './index.scss';
import {
  IApiSelectProps,
  InferSelectOption,
  InferSelectValue,
  ISelectOption,
  TSelectValueDefault,
} from '../types/select';

const baseIconStyle: CSSProperties = {
  height: 20,
  width: 20,
  fontSize: 20,
  color: 'var(--color-iron-500)',
};

/**
 * BaseApiSelect Component with lazy loading and search functionality using React Query
 * @note initialPage is 0
 * @example
 * ```tsx
 * <BaseApiSelect<CreateSegmentRequest, string>
 *   multiple={false}
 *   name="id"
 *   placeholder="Select..."
 *   defaultOptions={[{ label: 'DEFAULT 1', value: 'DEFAULT_1' }]}
 *   allowClear
 *   queryKey={QUERY_KEYS.SEGMENTS}
 *   apiFn={async ({ page, pageSize, keyword }) => {
 *     return SegmentApi.getSegments({
 *       page: page,
 *       size: pageSize,
 *       query: keyword,
 *     }).then(response => {
 *       const { data, metaData } = response;
 *       const { totalItems } = metaData;
 *       return {
 *         data: data,
 *         total: totalItems,
 *         hasMore: data
 *           ? (page + 1) * pageSize < totalItems
 *           : false,
 *       };
 *     });
 *   }}
 *   transformOption={item => {
 *     return {
 *       label: item?.name ?? '',
 *       value: item?.id ?? '',
 *     };
 *   }}
 * />
 * ```
 */

function BaseApiSelect<
  TValue extends TSelectValueDefault,
  TMultiple extends boolean,
>({
  apiFn,
  defaultValue,
  placeholder,
  prefixIcon,
  suffixIcon,
  onChange,
  className,
  disabled,
  multiple,
  maxLength,
  onBlur,
  onError,
  transformOption,
  searchDebounceTime = 600,
  pageSize = 10,
  loadingText,
  emptyText,
  queryKey,
  searchPlaceholder,
  allowClear,
  isError,
  defaultOptions = [],
}: IApiSelectProps<TValue, TMultiple>) {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState<BaseInputTextValueType>('');
  const debouncedSearchValue = useDebounce(searchValue, searchDebounceTime);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: [queryKey, debouncedSearchValue],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await apiFn({
        page: pageParam,
        pageSize,
        keyword: debouncedSearchValue,
      });
      return response;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (typeof lastPage.hasMore === 'boolean') {
        return lastPage.hasMore ? allPages.length : undefined;
      }

      const currentPage = allPages.length - 1;
      const totalPages = Math.ceil(lastPage.total / pageSize);

      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
  });

  useEffect(() => {
    if (error) {
      onError?.(error);
    }
  }, [error, onError]);

  const options: ISelectOption<TValue>[] = React.useMemo(() => {
    const apiOptions = data?.pages
      ? data.pages
          .flatMap(page => page.data)
          .map(transformOption)
          .filter(Boolean)
      : [];

    const mergedOptions = [...defaultOptions];
    const defaultValues = new Set(defaultOptions.map(opt => opt.value));

    apiOptions.forEach(apiOption => {
      if (!defaultValues.has(apiOption.value)) {
        mergedOptions.push(apiOption);
      }
    });

    return mergedOptions;
  }, [data, transformOption, defaultOptions]);

  const handleSearch = useCallback((value: BaseInputTextValueType) => {
    setSearchValue(value);
  }, []);

  const handlePopupScroll: SelectProps['onPopupScroll'] = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const { target } = e;
      const element = target as HTMLDivElement;

      if (
        element.scrollTop + element.offsetHeight >= element.scrollHeight - 10 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
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
        <span
          className={clsx('text-blue-main-800', disabled && 'text-iron-800')}
        >
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
      allowClear={allowClear}
      onClear={() => handleSearch('')}
      showSearch={false}
      mode={multiple ? 'multiple' : undefined}
      disabled={disabled}
      filterOption={false}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(newValue, option) => {
        onChange?.(newValue, option as InferSelectOption<TValue, TMultiple>);
      }}
      onBlur={onBlur}
      onPopupScroll={handlePopupScroll}
      options={options}
      loading={isLoading}
      className={clsx(
        'BaseApiSelect rounded-[5px]! min-h-10 min-w-30 text-base!',
        isError && 'BaseApiSelect--error',
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
      notFoundContent={isLoading ? loadingText : emptyText}
      popupRender={menu => (
        <div>
          {/* Custom search input */}
          <div className="sticky top-0 z-10 border-b border-iron-100 p-3">
            <BaseInput
              type="text"
              placeholder={
                searchPlaceholder || t('form.select_search_placeholder')
              }
              value={searchValue}
              onChange={value => handleSearch(value)}
              onClick={e => e.stopPropagation()}
              onKeyDown={e => e.stopPropagation()}
            />
          </div>
          {menu}
          {!isLoading && options.length === 0 && debouncedSearchValue && (
            <div className="p-4 text-center text-gray-500 text-sm">
              {emptyText || t('form.select_empty_data')}
            </div>
          )}
          {/* Loading indicator */}
          {(isLoading || isFetchingNextPage) && (
            <div className="flex justify-center items-center py-4 border-t border-iron-100 bg-iron-50">
              <Spin size="small" />
              <span className="ml-2 text-sm text-gray-600">
                {loadingText || t('form.select_loading_data')}
              </span>
            </div>
          )}
        </div>
      )}
      {...(multiple && {
        maxTagCount: 'responsive',
        maxCount: maxLength,
        tagRender: tagRender,
      })}
    />
  );
}

export default BaseApiSelect;
