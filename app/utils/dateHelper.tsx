'use client';

import { EDateTimeFormat } from '@/types/common';
import dayjs from 'dayjs';

export const isValidDateFormat = (
  dateString: string,
  format: EDateTimeFormat,
) => {
  return dayjs(dateString, format, true).isValid();
};

export const convertDateStringToDayjs = (dateString: string) => {
  if (!dateString) return null;
  if (dayjs.isDayjs(dateString)) return dateString;
  if (typeof dateString !== 'string') return null;
  for (const format of Object.values(EDateTimeFormat)) {
    if (isValidDateFormat(dateString, format)) {
      return dayjs(dateString, format, true);
    }
  }

  return null;
};

export const convertTimeStringToDayjs = (dateString: string) => {
  if (!dateString) return null;
  if (dayjs.isDayjs(dateString)) return dateString;
  if (typeof dateString !== 'string') return null;
  const willCheckFormat = [EDateTimeFormat.TIME];
  for (const format of willCheckFormat) {
    if (isValidDateFormat(dateString, format)) {
      return dayjs(dateString, format, true);
    }
  }
};

export const getDaySuffix = (day: number) => {
  if (day >= 11 && day <= 13) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const renderDateTimeDisplay = (value?: string | Date) => {
  if (!value || !dayjs(value).isValid()) {
    return <span className="text-iron-700 text-base">_</span>;
  }

  const dateString = dayjs(value).format(EDateTimeFormat.DATE);
  const timeString = dayjs(value).format(EDateTimeFormat.TIME);

  return (
    <div className="flex flex-col">
      <span className="text-iron-700 text-base">{dateString}</span>
      <span className="text-iron-500 text-sm">{timeString}</span>
    </div>
  );
};
