'use client';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import type { PropsWithChildren } from 'react';

function AntdConfigProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      locale={zhCN}
      warning={{
        strict: false,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigProvider;
