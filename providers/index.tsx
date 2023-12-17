import type { PropsWithChildren } from 'react';
import { cookies } from 'next/headers';
import type { ThemeMode } from 'antd-style';
import { AntdConfigProvider, AntdRegistry } from './antd';
import { AntdStyleConfigProvider, AntdStyleRegistry } from './antd-style';
import { NextThemesProvider } from './next-themes';

function Providers({ children }: PropsWithChildren) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <AntdRegistry>
      <AntdStyleRegistry>
        <NextThemesProvider>
          <AntdConfigProvider>
            <AntdStyleConfigProvider defaultAppearance={theme?.value}>
              {children}
            </AntdStyleConfigProvider>
          </AntdConfigProvider>
        </NextThemesProvider>
      </AntdStyleRegistry>
    </AntdRegistry>
  );
};

export default Providers;
