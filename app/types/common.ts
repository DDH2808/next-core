export enum EDateTimeFormat {
  TIME = 'HH:mm',
  DATE = 'DD/MM/YYYY',
  DATETIME = 'DD/MM/YYYY HH:mm',
}

export type TSorter = Record<string, 'asc' | 'desc'>;

export interface IPagination {
  page: number;
  pageSize: number;
}
