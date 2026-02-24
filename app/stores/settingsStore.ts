import config from '@/config';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum EThemeMode {
  LIGHT,
  DARK,
}

interface ISettingsState {
  lang: string;
  themeMode: EThemeMode;
}

interface ISettingsActions {
  updateSettings: (setting: Partial<ISettingsState>) => void;
  switchThemeMode: () => void;
  resetSettings: () => void;
}

const defaultState: ISettingsState = {
  lang: config.LANGUAGE.DEFAULT,
  themeMode: EThemeMode.LIGHT,
};

export const useSettingsStore = create<ISettingsState & ISettingsActions>()(
  persist(
    set => ({
      ...defaultState,
      updateSettings: setting => set(setting),
      switchThemeMode: () =>
        set(state => ({
          themeMode:
            state.themeMode === EThemeMode.LIGHT
              ? EThemeMode.DARK
              : EThemeMode.LIGHT,
        })),
      resetSettings: () => set(defaultState),
    }),
    {
      name: 'settings-storage',
    },
  ),
);
