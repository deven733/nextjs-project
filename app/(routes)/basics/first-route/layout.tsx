import Button from "@/app/components/Button";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border-4 border-cyan-500">
      {/* Side Navigation */}
      <nav className="w-64 p-4">
        <h2 className="text-xl font-bold text-white mb-4">Side Navigation</h2>
        <ul className="space-y-2">
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/basics" className="text-cyan-400">
              basics/
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/basics/first-route" className="text-cyan-400">
              basics/first-route
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link
              href="/basics/first-route/second-route"
              className="text-cyan-400"
            >
              basics/first-route/second-route
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-grow p-4 border-l border-1 border-cyan-500">
        <div className="text-cyan-500 mb-2">
          First Route Layout (children)
          <Button />
        </div>
        {children}
      </div>
    </div>
  );
}
