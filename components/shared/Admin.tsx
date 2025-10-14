'use client';
import { CheckIcon, CopyIcon } from 'lucide-react';
import React, { useState } from 'react';

function AdminBar({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="code-block-header flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-700 dark:bg-slate-800">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{language}</span>
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 rounded-md bg-slate-700 px-3 py-1.5 text-sm text-white transition-colors hover:bg-slate-600 active:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500"
      >
        {copied ? (
          <>
            <CheckIcon className="h-3.5 w-3.5" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <CopyIcon className="h-3.5 w-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
}

export default AdminBar;
