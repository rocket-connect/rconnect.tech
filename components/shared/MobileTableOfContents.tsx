'use client';

import { useState } from 'react';
import { TOCItem } from '@/hooks/useTableOfContents';
import { cn } from '@/lib/utils';
import { List } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface MobileTableOfContentsProps {
  items: TOCItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}

export function MobileTableOfContents({
  items,
  activeId,
  onItemClick,
}: MobileTableOfContentsProps) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  const handleItemClick = (id: string) => {
    onItemClick(id);
    setOpen(false);
  };

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
        return 'text-base font-medium';
      case 3:
        return 'text-sm';
      case 4:
        return 'text-xs';
      default:
        return 'text-sm';
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#4C8DE2] to-[#6C5DD3] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
              aria-label="Open table of contents"
            >
              <List className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[85vw] max-w-md overflow-y-auto p-0 sm:w-[400px]">
            <SheetHeader className="sticky top-0 z-10 border-b border-slate-200 bg-background-main p-6 dark:border-slate-700 dark:bg-background-invert">
              <SheetTitle className="flex items-center gap-2 text-lg font-semibold text-foreground-main dark:text-foreground-invert">
                <div className="h-2 w-2 rounded-full bg-[#24BEE1]"></div>
                Table of Contents
              </SheetTitle>
            </SheetHeader>

            <nav className="p-6" aria-label="Table of contents">
              <ul className="space-y-1" role="list">
                {items.map((item) => (
                  <li key={item.id} role="listitem">
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={cn(
                        'block w-full text-left transition-all duration-200',
                        'border-l-2 py-3 pr-2',
                        getPaddingClass(item.level),
                        getFontClass(item.level),
                        activeId === item.id
                          ? 'border-[#24BEE1] text-[#24BEE1]'
                          : 'border-transparent text-slate-700 hover:border-slate-300 hover:text-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100',
                      )}
                      aria-current={activeId === item.id ? 'location' : undefined}
                    >
                      <span className="line-clamp-3">{item.text}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Footer info */}
              <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {items.length} sections in this article
                </p>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
