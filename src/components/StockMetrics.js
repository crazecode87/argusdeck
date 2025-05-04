"use client";
import * as React from "react";
import { MetricCard } from "./MetricCard";

export function StockMetrics() {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      <MetricCard title="Market Cap" value="$2.53T" />
      <MetricCard title="Volume" value="59.32M" />
      <MetricCard title="P/E Ratio" value="28.93" />

    </section>
  );
}