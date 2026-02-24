type IFirebaseLogEventMapping = {
  login: {
    username: string;
  };
  logout: {
    username: string;
  };
};

export type IFirebaseLogEventName = keyof IFirebaseLogEventMapping;
export type IFirebaseLogEventParams<T extends IFirebaseLogEventName> =
  IFirebaseLogEventMapping[T];
