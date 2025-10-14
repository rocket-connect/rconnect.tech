// app/blog/[slug]/BlogImageWrapper.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface BlogImageWrapperProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export function BlogImageWrapper({
  src,
  alt,
  width,
  height,
  className = '',
  style,
  priority = false,
}: BlogImageWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the image
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={`${className} cursor-pointer transition-opacity hover:opacity-95`}
        style={style}
        priority={priority}
        onClick={handleImageClick}
      />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleCloseModal}
        >
          {/* Close button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
