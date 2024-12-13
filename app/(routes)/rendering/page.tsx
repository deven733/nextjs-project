import Link from "next/link";
import ArrowNext from "@/app/components/ArrowNext";
import ArrowPrevious from "@/app/components/ArrowPrevious";

export default function Page() {
  return (
    <div className="p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Rendering</h2>
      <div className="space-x-4">
        <ul className="space-y-2">
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/" className="text-red-400">
              <ArrowPrevious /> Home
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/rendering/strategies" className="text-red-400">
              <ArrowNext /> Rendering strategies
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/rendering/dynamic" className="text-red-400">
              <ArrowNext /> Dynamic Rendering
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/rendering/hydration-mismatch" className="text-red-400">
              <ArrowNext /> Hydration error
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link
              href="/rendering/prop-server-component"
              className="text-red-400"
            >
              <ArrowNext /> Server Components as props
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
