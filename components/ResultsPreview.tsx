"use client";

import { ROIResults } from "@/lib/types";

interface ResultsPreviewProps {
  isBlurred: boolean;
  results: ROIResults | null;
}

export default function ResultsPreview({ isBlurred, results }: ResultsPreviewProps) {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="bg-[#f2ece3] rounded-lg p-8 shadow-sm h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-6">Results</h2>

      {/* Content - blurred or clear based on prop */}
      <div className={`flex-1 ${isBlurred ? "filter blur-md select-none pointer-events-none" : ""}`}>
        <div className="space-y-6">
          {/* Total Savings */}
          <div className="bg-primary/10 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-600 mb-1">Estimated Annual Savings</p>
            <p className="text-4xl font-bold text-primary">
              {results ? formatCurrency(results.totalSavings) : "$XXX,XXX"}
            </p>
          </div>

          {/* ROI */}
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-600 mb-1">Return on Investment</p>
            <p className="text-4xl font-bold text-green-600">
              {results ? formatPercentage(results.roi) : "XXX%"}
            </p>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Turnover Savings</p>
              <p className="text-xl font-semibold">
                {results ? formatCurrency(results.turnoverSavings) : "$XX,XXX"}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Productivity Gains</p>
              <p className="text-xl font-semibold">
                {results ? formatCurrency(results.productivityGains) : "$XX,XXX"}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Healthcare Savings</p>
              <p className="text-xl font-semibold">
                {results ? formatCurrency(results.healthcareSavings) : "$XX,XXX"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
