"use client";

import dynamic from "next/dynamic";

export const StationMap = dynamic(
  () => import("@/components/station-map").then((m) => m.StationMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[480px] rounded-md border border-rule-light bg-pierre-2 animate-pulse" />
    ),
  }
);
