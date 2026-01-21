"use client";

import { useState } from "react";
import { CompanyInfo } from "@/lib/types";
import { formatCurrency, parseCurrency } from "@/lib/utils";

interface Step1CompanyInfoProps {
  data: CompanyInfo;
  onChange: (data: CompanyInfo) => void;
  onNext: () => void;
}

// Checkmark component with animation
function Checkmark() {
  return (
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 transition-all duration-300 animate-in fade-in zoom-in">
      ✓
    </span>
  );
}

// Checkmark for fields with % suffix (positioned before the %)
function CheckmarkWithSuffix() {
  return (
    <span className="absolute right-8 top-1/2 -translate-y-1/2 text-green-500 transition-all duration-300 animate-in fade-in zoom-in">
      ✓
    </span>
  );
}

export default function Step1CompanyInfo({
  data,
  onChange,
  onNext,
}: Step1CompanyInfoProps) {
  // Local state for formatted display values
  const [salaryDisplay, setSalaryDisplay] = useState(
    data.averageSalary ? formatCurrency(data.averageSalary) : ""
  );
  const [eapSpendDisplay, setEapSpendDisplay] = useState(
    data.eapSpend ? formatCurrency(data.eapSpend) : ""
  );

  const handleChange = (field: keyof CompanyInfo, value: number) => {
    onChange({ ...data, [field]: value });
  };

  const handleCurrencyChange = (
    field: "eapSpend" | "averageSalary",
    displayValue: string,
    setDisplay: (value: string) => void
  ) => {
    // Allow empty input
    if (!displayValue) {
      setDisplay("");
      handleChange(field, 0);
      return;
    }

    // Parse and update
    const numericValue = parseCurrency(displayValue);
    handleChange(field, numericValue);
    setDisplay(formatCurrency(numericValue));
  };

  const handleCurrencyInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setDisplay: (value: string) => void
  ) => {
    // Allow typing by just updating the display value
    setDisplay(e.target.value);
  };

  return (
    <div className="bg-[#f2ece3] rounded-lg p-8 shadow-sm h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-6">Company Information</h2>

      {/* Section 1 - Employee Information */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Employee Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Employee Count */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Number of Employees <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              autoFocus
              value={data.employeeCount || ""}
              onChange={(e) => handleChange("employeeCount", Number(e.target.value))}
              className="w-full px-4 py-2 pr-10 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter employee count"
            />
            {data.employeeCount > 0 && <Checkmark />}
          </div>
        </div>

        {/* Average Salary */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Average Employee Salary ($)
          </label>
          <div className="relative">
            <input
              type="text"
              value={salaryDisplay}
              onChange={(e) => handleCurrencyInput(e, setSalaryDisplay)}
              onBlur={() => handleCurrencyChange("averageSalary", salaryDisplay, setSalaryDisplay)}
              className="w-full px-4 py-2 pr-10 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="$50,000"
            />
            {data.averageSalary > 0 && <Checkmark />}
          </div>
        </div>
      </div>

      {/* Section 2 - Financial Information */}
      <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">Financial Information</h3>
      <div className="space-y-4">
        {/* EAP Spend */}
        <div className="w-full md:max-w-md">
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Current EAP Spend ($)
          </label>
          <div className="relative">
            <input
              type="text"
              value={eapSpendDisplay}
              onChange={(e) => handleCurrencyInput(e, setEapSpendDisplay)}
              onBlur={() => handleCurrencyChange("eapSpend", eapSpendDisplay, setEapSpendDisplay)}
              className="w-full px-4 py-2 pr-10 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="$0"
            />
            {data.eapSpend >= 0 && eapSpendDisplay !== "" && <Checkmark />}
          </div>
          <p className="text-sm text-gray-600 mt-1">Don&apos;t have an EAP? Enter $0</p>
        </div>

        {/* Absenteeism Rate */}
        <div className="w-full md:max-w-md">
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Absenteeism Rate
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={data.absenteeismRate || ""}
              onChange={(e) => handleChange("absenteeismRate", Number(e.target.value))}
              className="w-full px-4 py-2 pr-14 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="3"
            />
            {data.absenteeismRate > 0 && <CheckmarkWithSuffix />}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>

        {/* Turnover Rate */}
        <div className="w-full md:max-w-md">
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Annual Turnover Rate
          </label>
          <div className="relative">
            <input
              type="number"
              value={data.turnoverRate || ""}
              onChange={(e) => handleChange("turnoverRate", Number(e.target.value))}
              className="w-full px-4 py-2 pr-14 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="15"
            />
            {data.turnoverRate > 0 && <CheckmarkWithSuffix />}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <button
          onClick={onNext}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all group"
        >
          Next Step
          <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
}
