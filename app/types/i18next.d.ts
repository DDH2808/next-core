import 'i18next';
import vi from '../i18n/translations/vi.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'vi';
    resources: {
      vi: typeof vi;
    };
  }
}
