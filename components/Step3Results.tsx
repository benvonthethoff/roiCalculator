"use client";

import { ROIResults } from "@/lib/types";

interface Step3ResultsProps {
  results: ROIResults;
  onStartOver: () => void;
}

export default function Step3Results({ results, onStartOver }: Step3ResultsProps) {
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
    <div className="bg-[#f2ece3] rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Your ROI Results</h2>

      <div className="space-y-6">
        {/* Total Savings */}
        <div className="bg-primary/10 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-600 mb-1">Estimated Annual Savings</p>
          <p className="text-4xl font-bold text-primary">
            {formatCurrency(results.totalSavings)}
          </p>
        </div>

        {/* ROI */}
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-600 mb-1">Return on Investment</p>
          <p className="text-4xl font-bold text-green-600">
            {formatPercentage(results.roi)}
          </p>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Turnover Savings</p>
            <p className="text-xl font-semibold">
              {formatCurrency(results.turnoverSavings)}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Productivity Gains</p>
            <p className="text-xl font-semibold">
              {formatCurrency(results.productivityGains)}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Healthcare Savings</p>
            <p className="text-xl font-semibold">
              {formatCurrency(results.healthcareSavings)}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onStartOver}
        className="mt-8 w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Start Over
      </button>
    </div>
  );
}
