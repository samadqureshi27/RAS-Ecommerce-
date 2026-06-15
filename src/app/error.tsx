"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-6xl mb-6">⚠️</p>
      <h1 className="text-2xl font-bold text-[#1B2A4A] mb-3">Something went wrong</h1>
      <p className="text-[#9B9489] mb-8 max-w-sm">
        We encountered an unexpected error. Please try again or contact us if the problem persists.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="btn-navy px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
