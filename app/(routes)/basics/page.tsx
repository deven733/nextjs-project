import Link from "next/link";
import ArrowNext from "@/app/components/ArrowNext";
import ArrowPrevious from "@/app/components/ArrowPrevious";

export default function Page() {
  return (
    <div className="p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Basics Route Page Content</h2>
      <p className="mb-4">
        Welcome to the first level of our nested routing example. This page
        demonstrates the basic structure of a Next.js app using the App Router.
      </p>
      <div className="space-x-4">
        <ul className="space-y-2">
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/" className="text-cyan-400">
              <ArrowPrevious /> Back to /
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/basics/first-route" className="text-cyan-400">
              Go to basics/first-route <ArrowNext />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
