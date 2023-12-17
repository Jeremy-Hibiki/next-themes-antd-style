'use client';

import type { ThemeMode } from 'antd-style';
import { ThemeProvider } from 'antd-style';
import { useTheme } from 'next-themes';
import type { PropsWithChildren } from 'react';

function AntdStyleConfigProvider({ children, defaultAppearance = 'light' }: PropsWithChildren<{
  defaultAppearance?: string
}>) {
  const { resolvedTheme } = useTheme();

  return (
    <ThemeProvider
      defaultAppearance={defaultAppearance}
      onAppearanceChange={(themeMode) => {
        document.cookie = `theme=${themeMode};`;
      }}
      themeMode={resolvedTheme as ThemeMode}
      theme={{
        cssVar: true,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default AntdStyleConfigProvider;
