import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent as _logEvent } from 'firebase/analytics';
import config from '@/config';
import {
  IFirebaseLogEventName,
  IFirebaseLogEventParams,
} from '@/types/firebase';
import { FirebasePerformance, getPerformance } from 'firebase/performance';

export const perfConfig: {
  performance: FirebasePerformance | null;
} = {
  performance: null,
};

export const initializeFirebase = () => {
  const app = initializeApp(
    window.location.hostname.includes('nextjscore')
      ? config.FIREBASE
      : config.FIREBASE_DEV,
  );
  getAnalytics(app);
  perfConfig.performance = getPerformance(app);
};

export function logEvent<T extends IFirebaseLogEventName>(
  eventName: T,
  eventParams?: IFirebaseLogEventParams<T>,
) {
  const analytics = getAnalytics();

  _logEvent(analytics, eventName as string, eventParams);
}
