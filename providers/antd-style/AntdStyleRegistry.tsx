'use client';

import { StyleProvider, extractStaticStyle } from 'antd-style';
import { useServerInsertedHTML } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { useRef } from 'react';

function AntdStyleRegistry({ children }: PropsWithChildren) {
  const isInsert = useRef(false);

  useServerInsertedHTML(() => {
    if (isInsert.current)
      return;
    isInsert.current = true;
    const styles = extractStaticStyle().map(item => item.style);
    return <>{styles}</>;
  });

  return <StyleProvider cache={extractStaticStyle.cache}>{children}</StyleProvider>;
}

export default AntdStyleRegistry;
