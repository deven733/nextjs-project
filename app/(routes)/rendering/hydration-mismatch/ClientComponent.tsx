"use client";

import ServerComponent from "./ServerComponent";
import { useState, useEffect } from "react";

export default function ClientComponent() {
  const [isClient, setIsClient] = useState(false);

  console.log(isClient);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="p-4 border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4">Hydration mismatch</h2>
      <ServerComponent />
    </div>
  );
}
