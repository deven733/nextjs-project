import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <main className="flex flex-col row-start-2 sm:items-start r pb-2">
        <ol className="list-inside list-decimal text-3xl">
          <li className="mb-2 transition-all duration-300 hover:translate-x-2">
            <Link href="/basics">The basics</Link>
          </li>
          <li className="mb-2 transition-all duration-300 hover:translate-x-2">
            <Link href="/dynamic-routes">Dynamic Routes</Link>
          </li>
          <li className="mb-2 transition-all duration-300 hover:translate-x-2">
            <Link href="/rendering">Rendering</Link>
          </li>
          <li className="mb-2">(Middleware)</li>
        </ol>
      </main>
    </div>
  );
}
