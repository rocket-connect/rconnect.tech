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
    <div className="relative top-3 flex h-[40px] items-center justify-between rounded-t-lg bg-gray-800 px-4">
      <span className="text-sm text-white">{language}</span>
      <button
        onClick={copyToClipboard}
        className="flex h-6 items-center rounded-md bg-slate-700 px-2 py-1 text-sm text-white active:bg-slate-600"
      >
        {copied ? (
          <div className="flex items-center gap-2">
            <CheckIcon className="h-3 w-3" />
            Code Copied!
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <CopyIcon className="h-3 w-3" />
            Copy
          </div>
        )}
      </button>
    </div>
  );
}

export default AdminBar;
