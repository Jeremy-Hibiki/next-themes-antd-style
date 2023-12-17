'use client';

import { ColorPicker, ConfigProvider, Flex, Form, Segmented, Skeleton, Switch, theme as antdTheme } from 'antd';
import ComponentDemoPro from 'antd-token-previewer/es/token-panel-pro/ComponentDemoPro';
import { useTheme } from 'next-themes';
import { Suspense, useEffect, useState } from 'react';

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [primary, setPrimary] = useState('#e93fc4');

  const { token } = antdTheme.useToken();

  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    isMount && (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ConfigProvider theme={{
          token: {
            colorPrimary: primary,
          },
        }}
        >
          <Flex
            justify="center"
            align="center"
            gap={16}
            style={{
              height: 48,
              background: '#ccc6',
            }}
          >
            <Form layout="inline">
              <Form.Item label="主色">
                <ColorPicker showText value={primary} onChangeComplete={color => setPrimary(color.toHexString())} />
              </Form.Item>

              <Form.Item label="明暗">
                <Flex justify="center" align="center" gap={16}>
                  <Segmented
                    options={['light', 'dark']}
                    value={resolvedTheme}
                    onChange={(v) => {
                      setTheme(v as string);
                    }}
                  />
                  <Switch
                    checked={resolvedTheme === 'dark'}
                    onChange={(v) => {
                      setTheme(v ? 'dark' : 'light');
                    }}
                  />
                </Flex>
              </Form.Item>
            </Form>
          </Flex>
        </ConfigProvider>
        <ComponentDemoPro
          theme={{
            name: 't',
            key: 't',
            config: {
              token: {
                ...token,
                colorPrimary: primary,
              },
              algorithm: resolvedTheme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
            },
          }}
          style={{
            width: '100%',
            height: 'calc(100vh - 48px)',
          }}
        />
      </div>
    )
  );
}
