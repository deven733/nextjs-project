"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-4 border-4 border-dashed border-cyan-500">
      <div className="text-cyan-500">An error occurred: {error.digest}</div>
    </div>
  );
}
