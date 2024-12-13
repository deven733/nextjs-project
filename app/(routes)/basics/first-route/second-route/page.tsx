import ArrowPrevious from "@/app/components/ArrowPrevious";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Second Route Page Content</h2>
      <p className="mb-4">
        Welcome to the deepest level of our nested routing example. This page
        demonstrates how multiple layouts and a template can be applied to a
        single page.
      </p>
      <div className="space-x-4">
        <ul className="space-y-2">
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/basics/first-route" className="text-cyan-400">
              <ArrowPrevious /> Back to basics/first-route
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/basics" className="text-cyan-400">
              <ArrowPrevious /> Back to basics/
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
