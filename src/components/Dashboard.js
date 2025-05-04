"use client";
import * as React from "react";
import { useState } from "react";
import { SideBarNav } from "./SideBarNav";
import { Search } from "./Search";
import { StockChart } from "./StockChart";
import { StockMetrics } from "./StockMetrics";

export default function Dashboard() {
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [searchQuery, setSearchQuery] = useState("");
  const [stocks, setStocks] = useState([]);

  async function searchStocks(query) {
    const data = await fetch(`/api/stocks/search?q=${query}`);
    setStocks(await data.json());
  }

  return (
    <div className="flex h-screen text-white bg-gray-900">
      <SideBarNav />
      <main className="flex overflow-y-auto flex-col flex-1 gap-6 p-8">
        <Search
          searchQuery={searchQuery}
          onSearchChange={(query) => {
            setSearchQuery(query);
            searchStocks(query);
          }}
        />
        <StockChart selectedStock={selectedStock} />
        <StockMetrics />
      </main>
    </div>
  );
}