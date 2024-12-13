"use client";

import { ReactNode } from "react";
import { useState, useEffect } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  console.log(isClient);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Client Wrapper</h1>
      {children}
    </div>
  );
}

