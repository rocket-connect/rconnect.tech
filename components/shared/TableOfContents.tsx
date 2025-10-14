// components/shared/TableOfContents.tsx
'use client';

import { TOCItem } from '@/hooks/useTableOfContents';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  items: TOCItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}

export function TableOfContents({ items, activeId, onItemClick }: TableOfContentsProps) {
  if (items.length === 0) return null;

  const getPaddingClass = (level: number) => {
    switch (level) {
      case 2:
        return 'pl-2';
      case 3:
        return 'pl-6';
      case 4:
        return 'pl-10';
      default:
        return 'pl-2';
    }
  };

  const getFontClass = (level: number) => {
    switch (level) {
      case 2:
        return 'text-sm font-medium';
      case 3:
        return 'text-sm';
      case 4:
        return 'text-xs';
      default:
        return 'text-sm';
    }
  };

  return (
    <nav
      className="sticky top-24 hidden max-h-[calc(100vh-120px)] overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 lg:block"
      aria-label="Table of contents"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#24BEE1]"></div>
        <h2 className="text-base font-semibold text-foreground-main dark:text-foreground-invert">
          On This Page
        </h2>
      </div>

      <ul className="space-y-1" role="list">
        {items.map((item) => (
          <li key={item.id} role="listitem">
            <button
              onClick={() => onItemClick(item.id)}
              className={cn(
                'block w-full text-left transition-all duration-200',
                'border-l-2 py-2 pr-2',
                getPaddingClass(item.level),
                getFontClass(item.level),
                activeId === item.id
                  ? 'border-[#24BEE1] text-[#24BEE1]'
                  : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200',
              )}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              <span className="line-clamp-2">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Scroll indicator */}
      <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          <span>Scroll to navigate</span>
        </div>
      </div>
    </nav>
  );
}
