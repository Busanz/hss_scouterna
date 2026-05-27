'use client'

import React from "react";
import GdprSection from "@/sections/GdprSection"
import PolicySection from "@/sections/PolicySection";
import ProtokollSection from "@/sections/ProtokollSection";

export default function PolicyPage() {
  return (
    <main className="w-full bg-white text-gray-900">
      <PolicySection />
      <GdprSection />
      <ProtokollSection />
    </main>
  );
}
