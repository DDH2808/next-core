import { AuthResponse } from '@/api/generated/index.defs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserState {
  selectedSpCode?: string;
  userInfo?: AuthResponse['userInfo'];
}

const defaultState: IUserState = {};

interface UserStore extends IUserState {
  updateUser: (account: IUserState) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    set => ({
      updateUser: account => set(account),
      clearUser: () => set({ ...defaultState }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
