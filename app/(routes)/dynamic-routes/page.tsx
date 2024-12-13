import ArrowNext from "@/app/components/ArrowNext";
import ArrowPrevious from "@/app/components/ArrowPrevious";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Dynamic Routes</h2>
      <ul className="space-y-2">
        <li className="transition-all duration-300 hover:translate-x-2">
          <Link href="/" className="text-gray-400 ">
            <ArrowPrevious /> Home
          </Link>
        </li>
        <li className="transition-all duration-300 hover:translate-x-2">
          <Link
            href="/dynamic-routes/default/1234?name=alice&surname=demauro"
            className="text-gray-400 "
          >
            <ArrowNext /> Dynamic Segment (default)
          </Link>
        </li>
        <li className="transition-all duration-300 hover:translate-x-2">
          <Link
            href="/dynamic-routes/multiple-dynamic-segments/1234/5678"
            className="text-gray-400 "
          >
            <ArrowNext /> Multiple Dynamic Segments
          </Link>
        </li>
        <li className="transition-all duration-300 hover:translate-x-2">
          <Link
            href="/dynamic-routes/catch-all/1234/5678/9123"
            className="text-gray-400 "
          >
            <ArrowNext /> Catch-all
          </Link>
        </li>
        <li className="transition-all duration-300 hover:translate-x-2">
          <Link
            href="/dynamic-routes/optional-catch-all/1234/5678/9123"
            className="text-gray-400 "
          >
            <ArrowNext /> Optional catch-all
          </Link>
        </li>
      </ul>
    </div>
  );
}
