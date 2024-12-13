import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function fetchData() {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    randomNumber: Math.random(),
  };
}

async function DynamicContent() {
  const data = await fetchData();
  return (
    <div>
      <h2 className="text-xl">Dynamic Content</h2>
      <p>Random number: {data.randomNumber}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Dynamic rendering</h1>
      <Suspense
        fallback={<div className="text-l mb-7">Loading dynamic content...</div>}
      >
        <DynamicContent />
      </Suspense>
    </div>
  );
}
