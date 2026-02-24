import BaseInput from '@/components/base/BaseInput';
import { BaseInputTextProps } from '@/components/base/BaseInput/type';
import { IconMagnifyingGlass } from '@/components/icons';
import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

interface BaseSearchInputProps extends Omit<
  BaseInputTextProps,
  'type' | 'onChange'
> {
  debounceTime?: number;
  onChange?: (debouncedValue?: string) => void;
}

/**
 *
 * @example
 * ```tsx
 * <BaseSearchInput
 *   placeholder="Enter search text..."
 *   allowClear
 *   debounceTime={500}
 *   onDebouncedChange={(value, event) => {
 *     console.log('Debounced value', value);
 *   }}
 * />
 * ```
 */

function BaseSearchInput(props: BaseSearchInputProps) {
  const {
    debounceTime = 500,
    defaultValue,
    onChange,
    suffixIcon,
    ...rest
  } = props;
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const debouncedValue = useDebounce(currentValue, debounceTime);

  useEffect(() => {
    if (debouncedValue === undefined) return;
    onChange?.(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <BaseInput
      {...rest}
      value={currentValue}
      type="text"
      onChange={value => setCurrentValue(value)}
      suffixIcon={
        suffixIcon ||
        (style => (
          <IconMagnifyingGlass style={{ color: style.color, fontSize: 22 }} />
        ))
      }
    />
  );
}

export default BaseSearchInput;
