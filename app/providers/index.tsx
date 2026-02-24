'use client';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import AppThemeProvider from './AppThemeProvider';
import { useHydration } from '@/hooks/useHydration';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import QueryProvider from './QueryProvider';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from '@/components/common/ErrorBoundaryFallback';

export default function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { hydrated, hydrationProgess } = useHydration();

  if (!hydrated) {
    return <p>Launching {hydrationProgess}%...</p>;
  }

  return (
    <AntdRegistry>
      <AppThemeProvider>
        <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
          <I18nextProvider i18n={i18n}>
            <QueryProvider>{children}</QueryProvider>
          </I18nextProvider>
        </ErrorBoundary>
      </AppThemeProvider>
    </AntdRegistry>
  );
}
