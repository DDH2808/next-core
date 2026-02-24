import {
  AuthResponse,
  EnumCrmUserResponsePermissions,
  EnumCrmUserResponseRole,
} from '@/api/generated/index.defs';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import cookieStorage from './storages/cookieStorage';
import { useUserStore } from './userStore';

export interface TokenStoreState {
  accessToken?: string;
  refreshToken?: string;
  role?: EnumCrmUserResponseRole;
  permissions?: EnumCrmUserResponsePermissions[];
}

interface TokenStore extends TokenStoreState {
  loginUser: (account: AuthResponse) => void;
  logoutUser: () => void;
}

export const useTokenStore = create<TokenStore>()(
  persist(
    set => ({
      loginUser: account => {
        set({
          accessToken: account.accessToken,
          refreshToken: account.refreshToken,
          role: account.userInfo?.role,
          permissions: account.userInfo?.permissions,
        });
        useUserStore.getState().updateUser(account);
      },
      logoutUser: () => {
        set({
          accessToken: undefined,
          refreshToken: undefined,
          role: undefined,
          permissions: [],
        });
        useUserStore.getState().clearUser();
      },
    }),
    {
      name: 'token-storage',
      storage: createJSONStorage(() => cookieStorage),
    },
  ),
);
