'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo, useRef } from 'react';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

function AntdRegistry({ children }: PropsWithChildren) {
  const cache = useMemo(() => createCache(), []);
  const isServerInserted = useRef<boolean>(false);
  useServerInsertedHTML(() => {
    if (isServerInserted.current)
      return;

    isServerInserted.current = true;
    return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />;
  });
  return <StyleProvider cache={cache} hashPriority="high">{children}</StyleProvider>;
}

export default AntdRegistry;
