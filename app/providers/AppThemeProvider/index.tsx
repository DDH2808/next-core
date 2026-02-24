'use client';

import React from 'react';
import { ConfigProvider, ThemeConfig, theme } from 'antd';
import { EThemeMode, useSettingsStore } from '@/stores/settingsStore';

export default function AppThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { themeMode } = useSettingsStore(); // Nên có bộ màu theme thay vì dùng scheme mặc định của antd
  const themeConfig: ThemeConfig = {
    algorithm:
      themeMode === EThemeMode.DARK
        ? theme.darkAlgorithm
        : theme.defaultAlgorithm,
  };

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}
