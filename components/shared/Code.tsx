import React from 'react';
import AdminBar from './Admin';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = (props: any) => {
  const codeContent =
    typeof props.children === 'string' ? props.children : props.children.props.children;
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang || '';

  return (
    <div className="my-4 flex flex-col gap-0 text-sm">
      <AdminBar code={codeContent} language={language} />
      <SyntaxHighlighter className="rounded-lg" style={nightOwl} language={language}>
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
