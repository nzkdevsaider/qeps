"use client";

import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  return (
    <>
      {error && (
        <p className="p-4 text-red-500 text-center">
          {error}
        </p>
      )}
      {message && (
        <p className="p-4 text-center">
          {message}
        </p>
      )}
    </>
  );
}
