'use client';

import { Skeleton, theme as antdTheme } from 'antd';
import ComponentDemoPro from 'antd-token-previewer/es/token-panel-pro/ComponentDemoPro';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<Skeleton style={{ margin: 24 }} />}>
      <ComponentDemoPro
        theme={{
          name: 't',
          key: 't',
          config: antdTheme.defaultConfig,
        }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
    </Suspense>
  );
}
