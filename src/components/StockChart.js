"use client";
import * as React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

export function StockChart({ selectedStock }) {
  const [timeFrame, setTimeFrame] = useState("1D");

  return (
    <section className="flex flex-col gap-4 p-6 rounded-xl bg-white bg-opacity-10 h-[400px]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {selectedStock} Chart
        </h2>
        <div className="flex gap-2">
        <button
            onClick={() => setTimeFrame("1HR")}
            className={`px-4 py-2 rounded-md cursor-pointer border-[none] ${
              timeFrame === "1HR"
                ? "text-white bg-white bg-opacity-10"
                : "bg-transparent text-neutral-400"
            }`}
          >
            1HR
          </button>
          <button
            onClick={() => setTimeFrame("1D")}
            className={`px-4 py-2 rounded-md cursor-pointer border-[none] ${
              timeFrame === "1D"
                ? "text-white bg-white bg-opacity-10"
                : "bg-transparent text-neutral-400"
            }`}
          >
            1D
          </button>
          <button
            onClick={() => setTimeFrame("1W")}
            className={`px-4 py-2 rounded-md cursor-pointer border-[none] ${
              timeFrame === "1W"
                ? "text-white bg-white bg-opacity-10"
                : "bg-transparent text-neutral-400"
            }`}
          >
            1W
          </button>
          <button
            onClick={() => setTimeFrame("1M")}
            className={`px-4 py-2 rounded-md cursor-pointer border-[none] ${
              timeFrame === "1M"
                ? "text-white bg-white bg-opacity-10"
                : "bg-transparent text-neutral-400"
            }`}
          >
            1M
          </button>
        </div>
      </div>
      <div className="flex-1 rounded-lg bg-white bg-opacity-0" />
    </section>
  );
}

StockChart.propTypes = {
  selectedStock: PropTypes.string.isRequired
};