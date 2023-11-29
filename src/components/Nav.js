import Link from "next/link";

export default function Nav() {
  return (
    <nav className="py-2 flex justify-between">
      <div>
        <h1 className="flex gap-2 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </span>{" "}
          Admin Panel
        </h1>
      </div>
      <div className="flex gap-2">
        <Link href={'/'}>Dashboard</Link>
        <Link href={'/'}>Products</Link>
        <Link href={'/'}>Categories</Link>
      </div>

    </nav>
  );
}
