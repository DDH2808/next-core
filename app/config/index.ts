// NETWORK
const NETWORK_CONFIG = {
  HOST: process.env.NEXT_PUBLIC_APP_URL,
  API_BASE_URL: process.env.NEXT_PUBLIC_APP_URL + '/api/v1',
  BASE_URL: process.env.NEXT_PUBLIC_WEB_URL,
  LAO_CRM_LOGIN_URL: 'https://crm.laoid.net',
  TIMEOUT: 30000,
  RETRY: false,
  DISPLAY_ERROR: process.env.NEXT_PUBLIC_DISPLAY_ERROR === 'true',
  USE_TOKEN: true,
  WITH_METADATA: false,
};

// PATHNAME
const PATHNAME = {
  HOME: '/',
  LOGIN: '/login',
  CAMPAIGN_GROUP: '/campaign-group',
  CAMPAIGN_APPROVAL: '/campaign-approval',
  SEGMENT: '/segment',
  LOG: '/log',
  STATISTICAL: '/statistical',
  SETTING: '/setting',
  ACCOUNT: '/account',
  CAMPAIGN: '/campaign',
  CRM: '/crm',
  SELECT_WORKSPACE: '/select-workspace',
  SERVICE_AUTH: '/service-auth',
};

// LAYOUT
const LAYOUT_CONFIG = {
  useSidebar: true,
  useNavbar: true,
  useFooter: true,
  useBottomNavigator: true,
};

// LANGUAGE
const LANGUAGE = {
  DEFAULT: 'vi',
};

// FIREBASE
// Also update firebase-messaging-sw.js file if update this value

const FIREBASE_DEV = {
  apiKey: 'AIzaSyCKkv7LL9tO5D0U4Cnfi3CM-OFpuyseq_M',
  authDomain: 'nextjs-core.firebaseapp.com',
  projectId: 'nextjs-core',
  storageBucket: 'nextjs-core.appspot.com',
  messagingSenderId: '905897922179',
  appId: '1:905897922179:web:b075e0fe50ba8bbafa15b6',
  measurementId: 'G-ZDEHHJF4SZ',
};

const FIREBASE = {
  apiKey: 'AIzaSyCKkv7LL9tO5D0U4Cnfi3CM-OFpuyseq_M',
  authDomain: 'nextjs-core.firebaseapp.com',
  projectId: 'nextjs-core',
  storageBucket: 'nextjs-core.appspot.com',
  messagingSenderId: '905897922179',
  appId: '1:905897922179:web:b075e0fe50ba8bbafa15b6',
  measurementId: 'G-ZDEHHJF4SZ',
};

export default {
  NETWORK_CONFIG,
  PATHNAME,
  LAYOUT_CONFIG,
  LANGUAGE,
  FIREBASE,
  FIREBASE_DEV,
};
