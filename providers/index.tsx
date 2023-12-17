import type { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import AntdRegistry from './AntdRegistry';

function Providers({ children }: PropsWithChildren) {
  return (
    <AntdRegistry>
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};

export default Providers;
