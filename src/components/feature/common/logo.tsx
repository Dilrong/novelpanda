"use client";

import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <h1 className="self-center whitespace-nowrap text-xl">
        Novel
        <span className="ml-1 font-bold">Panda</span>
      </h1>
    </Link>
  );
}

export default Logo;
