'use client';

import React, { ReactNode, useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { useServerInsertedHTML } from 'next/navigation';

export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  const [styledSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => (
    <>
      {styledSheet.getStyleElement()}
    </>
  ));

  return (
    <StyleSheetManager sheet={styledSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
