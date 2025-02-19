'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-gray-400">
          We apologize for the inconvenience. Please try again or return home.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-md bg-gradient-to-r from-[#4C8DE2] to-[#8F1AFE] px-4 py-2 text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
