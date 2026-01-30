"use client";

import { useEffect } from "react";

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
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-[#EDEDED] mb-2">Something went wrong</h1>
      <p className="text-[#EDEDED]/60 mb-8 text-center max-w-md">
        An error occurred. You can try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#262626] border border-[#262626] text-[#EDEDED] font-semibold rounded-lg hover:border-[#262626]/80 transition-[border-color] duration-200"
      >
        Try again
      </button>
    </div>
  );
}
