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
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">
        An unexpected error occurred. Try again, or head back to the homepage.
      </p>
      <p className="mt-8 flex gap-6">
        <button onClick={reset} className="link-quiet font-bold">
          Try again
        </button>
        <Link href="/" className="link-quiet">
          Go home
        </Link>
      </p>
    </div>
  );
}
