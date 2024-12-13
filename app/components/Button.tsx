"use client";

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="bg-gray-800 text-white px-4 py-2 mx-2 hover:bg-gray-600 transition-all duration-300 ease-in-out 
transform hover:-translate-x-1 hover:-rotate-3"
    >
      Incremented: {count}
    </button>
  );
}
