// hooks/useTableOfContents.tsx
'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

export interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3 | 4;
}

export function useTableOfContents(containerSelector: string = 'article') {
  const [activeId, setActiveId] = useState<string>('');
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Extract TOC items from the DOM
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headings = container.querySelectorAll('h2, h3, h4');
    const items: TOCItem[] = [];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1]) as 2 | 3 | 4;
      const text = heading.textContent || '';
      let id = heading.id;

      // Generate ID if not present
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
      }

      items.push({ id, text, level });
    });

    setTocItems(items);
  }, [containerSelector]);

  // Set up Intersection Observer
  useEffect(() => {
    if (tocItems.length === 0) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        headingElementsRef.current[entry.target.id] = entry;
      });

      // Debounce the active heading update
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        // Find the most visible heading in the viewport
        const visibleHeadings = Object.values(headingElementsRef.current).filter(
          (entry) => entry.isIntersecting,
        );

        if (visibleHeadings.length > 0) {
          // Sort by intersection ratio and position
          visibleHeadings.sort((a, b) => {
            if (a.intersectionRatio !== b.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

          setActiveId(visibleHeadings[0].target.id);
        } else {
          // If no headings are visible, find the one just above viewport
          const allEntries = Object.values(headingElementsRef.current);
          const aboveViewport = allEntries.filter((entry) => entry.boundingClientRect.top < 0);

          if (aboveViewport.length > 0) {
            aboveViewport.sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);
            setActiveId(aboveViewport[0].target.id);
          }
        }
      }, 100);
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-80px 0px -80% 0px',
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
    });

    // Observe all headings
    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [tocItems]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update active state immediately
      setActiveId(id);
    }
  }, []);

  return { tocItems, activeId, scrollToHeading };
}
