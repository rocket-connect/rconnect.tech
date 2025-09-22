/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React from 'react';
import AdminBar from './Admin';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';

const Code = (props: any) => {
  const { theme } = useTheme();
  const codeContent =
    typeof props.children === 'string' ? props.children : props.children.props.children;
  const className = props.children.props.className || '';
  // @ts-ignore
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang || '';

  // Use light theme for light mode, dark theme for dark mode
  const codeTheme = theme === 'dark' ? nightOwl : oneLight;

  return (
    <div className="not-prose my-4 flex flex-col gap-0 text-sm">
      <AdminBar code={codeContent} language={language} />
      <SyntaxHighlighter
        className="!m-0 !rounded-lg !bg-transparent"
        style={codeTheme}
        language={language}
        showLineNumbers={false}
        wrapLines={false}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
      >
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
