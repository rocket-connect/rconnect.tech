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
    <div className="code-block-wrapper not-prose my-6 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <AdminBar code={codeContent} language={language} />
      <div className="code-block-content overflow-x-auto">
        <SyntaxHighlighter
          className="!m-0 !bg-transparent"
          style={codeTheme}
          language={language}
          showLineNumbers={false}
          wrapLines={false}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent !important',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            textShadow: 'none !important',
            filter: 'none !important',
          }}
          codeTagProps={{
            style: {
              background: 'transparent !important',
              textShadow: 'none !important',
              WebkitTextFillColor: 'unset !important',
            },
          }}
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
