import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Main } from '@/components/shared/Main';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <Main>
      <Header />
      <div className="flex min-h-[calc(100vh-400px)] flex-col items-center justify-center">
        <div className="text-center">
          <svg
            className="mx-auto mb-8 h-16 w-16 text-slate-600"
            viewBox="0 0 56 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.117 24.0235L32.5459 2.45229C30.0352 -0.0583174 25.9647 -0.058314 23.4541 2.45229L1.88295 24.0235C-0.627653 26.5341 -0.62765 30.6046 1.88296 33.1152L23.4541 54.6864C25.9647 57.197 30.0352 57.197 32.5459 54.6864L54.117 33.1152C56.6277 30.6046 56.6277 26.5341 54.117 24.0235Z"
              fill="currentColor"
            />
          </svg>
          <h1 className="mb-4 text-7xl font-bold text-[#6C5DD3]">404</h1>
          <h2 className="mb-4 text-2xl font-medium text-white">Houston, we have a problem!</h2>
          <p className="mb-8 text-slate-400">
            The page you&#39;re looking for has drifted into deep space or doesn&#39;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4C8DE2] to-[#6C5DD3] px-6 py-3 text-white transition-all hover:opacity-90"
          >
            <Home className="h-5 w-5" />
            <span>Return to Mission Control</span>
          </Link>
        </div>
      </div>
      <Footer />
    </Main>
  );
}
