"use client";
import * as React from "react";
import PropTypes from 'prop-types';

export function MetricCard({ title, value }) {
  return (
    <article className="p-6 rounded-xl bg-white bg-opacity-10">
      <h3 className="mb-2 text-sm text-neutral-400">{title}</h3>
      <div className="text-2xl font-semibold">{value}</div>
    </article>
  );
}

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};