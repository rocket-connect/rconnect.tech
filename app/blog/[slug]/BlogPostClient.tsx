// app/blog/[slug]/BlogPostClient.tsx
'use client';

import { useTableOfContents } from '@/hooks/useTableOfContents';
import { TableOfContents } from '@/components/shared/TableOfContents';
import { MobileTableOfContents } from '@/components/shared/MobileTableOfContents';

export function BlogPostClient() {
  const { tocItems, activeId, scrollToHeading } = useTableOfContents('article');

  return (
    <>
      {/* Desktop Table of Contents - Sticky Sidebar */}
      <TableOfContents items={tocItems} activeId={activeId} onItemClick={scrollToHeading} />

      {/* Mobile Table of Contents - Floating Button */}
      <MobileTableOfContents items={tocItems} activeId={activeId} onItemClick={scrollToHeading} />
    </>
  );
}
