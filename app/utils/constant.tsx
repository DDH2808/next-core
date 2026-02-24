import { valueType } from 'antd/es/statistic/utils';

export const removeDiacritics = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

export function formatToCurrency(
  number: number,
  currency: 'VND' | 'LAK' | 'KIP' | 'UPOINT',
  separator: '.' | ',' | '-' = ',',
) {
  const validNumber = Number(number) || 0;

  const locales = {
    VND: '₫',
    LAK: '₭',
    KIP: 'KIP',
    UPOINT: 'point',
  };

  // Separate integer and decimal parts if any
  const [integerPart, decimalPart] = validNumber.toFixed(0).split('.');

  // Reverse, divide into 3 groups of numbers, then connect them with the separator
  const formattedInteger = integerPart
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)!
    .join(separator)
    .split('')
    .reverse()
    .join('');

  return {
    formattedAmount: formattedInteger + (decimalPart ? `.${decimalPart}` : ''),
    unit: locales[currency],
  };
}

export const keyRegex = /^[A-Za-z0-9_]+$/;

export const parserInputNumber = (value?: string) => {
  if (!value || value.trim() === '') {
    return null as unknown as valueType;
  }
  const numericString = value.replace(/[^\d-]/g, '');
  return (numericString === ''
    ? null
    : Number(numericString)) as unknown as valueType;
};
