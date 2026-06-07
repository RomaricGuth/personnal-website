"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import CvDocument from "./cvDocument";

export default function CvPageClient() {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  const [options, setOptions] = useState({
    position: searchParams.get("position") || "Software Engineer",
    email: searchParams.get("email") || "contact@romaricguth.com",
    phone: searchParams.get("phone") || "",
  });

  const setOption = (key) => (e) =>
    setOptions((prev) => ({ ...prev, [key]: e.target.value }));

  const buildParams = () => {
    const params = new URLSearchParams();
    for (const [key, val] of Object.entries(options)) {
      if (val) params.set(key, val);
    }
    return params;
  };

  const exportPdf = () => {
    window.location.href = `/api/cv-pdf?${buildParams().toString()}`;
  };

  const copyUrl = () => {
    const url = `${window.location.origin}${window.location.pathname}?${buildParams().toString()}`;
    navigator.clipboard.writeText(url);
  };

  const inputClass =
    "border border-input rounded-sm px-2 py-1 text-sm bg-background";

  return (
    <div className="cv-screen min-h-screen bg-secondary py-8 flex flex-col items-center gap-6">
      {isAdmin && (
        <div className="cv-controls flex flex-col gap-4 w-[21cm] max-w-full px-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Position</label>
            <input
              className={inputClass}
              placeholder="Position for the job offer"
              value={options.position}
              onChange={setOption("position")}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm font-medium">Email address</label>
              <input
                className={inputClass}
                type="email"
                value={options.email}
                onChange={setOption("email")}
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm font-medium">Phone number</label>
              <input
                className={inputClass}
                type="tel"
                placeholder="hidden"
                value={options.phone}
                onChange={setOption("phone")}
              />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button onClick={exportPdf}>Export to PDF</Button>
            <Button variant="outline" onClick={copyUrl}>
              Copy URL
            </Button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto max-w-full">
        <div className="cv-document w-[21cm] min-h-[29.7cm] bg-white shadow-lg">
          <CvDocument options={options} />
        </div>
      </div>
    </div>
  );
}
