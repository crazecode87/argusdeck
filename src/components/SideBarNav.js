"use client";
import * as React from "react";

export function SideBarNav() {
  return (
    <nav className="flex flex-col gap-4 justify-start items-start p-5 w-45 border-r border-solid border-r-white border-r-opacity-10">
      <header className="mb-8 text-2xl font-semibold">Dashboard</header>
      <a href="#overview" className="px-4 py-3 text-white no-underline rounded-lg bg-white bg-opacity-10">
        Overview
      </a>
      <a href="#watchlist" className="px-4 py-3 no-underline rounded-lg text-neutral-400">
        Watchlist
      </a>
      <a href="#scanner" className="px-4 py-3 no-underline rounded-lg text-neutral-400">
        Scanner
      </a>
      <a href="#option-flow" className="px-4 py-3 no-underline rounded-lg text-neutral-400">
        Option Flow
      </a>
    </nav>
  );
}