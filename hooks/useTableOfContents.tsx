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
  const scrollingRef = useRef(false);
  const clickScrollingRef = useRef(false);

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

  // Set up scroll listener for active heading detection
  useEffect(() => {
    if (tocItems.length === 0) return;

    const updateActiveId = () => {
      if (clickScrollingRef.current) return;

      // Debounce to prevent excessive updates
      if (scrollingRef.current) return;
      scrollingRef.current = true;

      requestAnimationFrame(() => {
        const OFFSET = 150; // Offset for fixed header
        const scrollPosition = window.scrollY + OFFSET;

        // Get all heading elements with their positions
        const headingElements = tocItems
          .map(({ id }) => {
            const element = document.getElementById(id);
            if (!element) return null;

            const rect = element.getBoundingClientRect();
            const absoluteTop = rect.top + window.scrollY;

            return {
              id,
              top: absoluteTop,
              element,
            };
          })
          .filter(
            (item): item is { id: string; top: number; element: HTMLElement } => item !== null,
          )
          .sort((a, b) => a.top - b.top);

        if (headingElements.length === 0) {
          scrollingRef.current = false;
          return;
        }

        // Find the active heading:
        // The last heading whose top is above or at the scroll position
        let activeHeading = headingElements[0];

        for (let i = 0; i < headingElements.length; i++) {
          const heading = headingElements[i];

          if (heading.top <= scrollPosition) {
            activeHeading = heading;
          } else {
            // Once we find a heading below scroll position, we're done
            break;
          }
        }

        // Only update if changed to prevent unnecessary re-renders
        setActiveId((prev) => {
          if (prev !== activeHeading.id) {
            return activeHeading.id;
          }
          return prev;
        });

        scrollingRef.current = false;
      });
    };

    // Initial check
    updateActiveId();

    // Listen to scroll events with passive flag for better performance
    window.addEventListener('scroll', updateActiveId, { passive: true });

    // Also listen to resize in case layout changes
    window.addEventListener('resize', updateActiveId, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveId);
      window.removeEventListener('resize', updateActiveId);
    };
  }, [tocItems]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Mark that we're scrolling via click
    clickScrollingRef.current = true;

    // Update active state immediately
    setActiveId(id);

    const offset = 100; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Reset click scrolling flag after scroll completes
    setTimeout(() => {
      clickScrollingRef.current = false;
    }, 1000);
  }, []);

  return { tocItems, activeId, scrollToHeading };
}
