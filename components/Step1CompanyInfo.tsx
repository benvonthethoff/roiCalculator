"use client";

import { CompanyInfo } from "@/lib/types";

interface Step1CompanyInfoProps {
  data: CompanyInfo;
  onChange: (data: CompanyInfo) => void;
  onNext: () => void;
}

export default function Step1CompanyInfo({
  data,
  onChange,
  onNext,
}: Step1CompanyInfoProps) {
  const handleChange = (field: keyof CompanyInfo, value: number) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="bg-[#f2ece3] rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Company Information</h2>

      <div className="space-y-4">
        {/* Employee Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Employees
          </label>
          <input
            type="number"
            value={data.employeeCount || ""}
            onChange={(e) => handleChange("employeeCount", Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter employee count"
          />
        </div>

        {/* Dependents */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Average Dependents per Employee
          </label>
          <input
            type="number"
            value={data.dependents || ""}
            onChange={(e) => handleChange("dependents", Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter average dependents"
          />
        </div>

        {/* EAP Spend */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current EAP Spend ($)
          </label>
          <input
            type="number"
            value={data.eapSpend || ""}
            onChange={(e) => handleChange("eapSpend", Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter EAP spend"
          />
        </div>

        {/* Average Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Average Employee Salary ($)
          </label>
          <input
            type="number"
            value={data.averageSalary || ""}
            onChange={(e) => handleChange("averageSalary", Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter average salary"
          />
        </div>

        {/* Health Plan Spend */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Health Plan Spend ($)
          </label>
          <input
            type="number"
            value={data.healthPlanSpend || ""}
            onChange={(e) => handleChange("healthPlanSpend", Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter health plan spend"
          />
        </div>

        {/* Turnover Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Turnover Rate (%)
          </label>
          <input
            type="number"
            value={data.turnoverRate || ""}
            onChange={(e) => handleChange("turnoverRate", Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter turnover rate"
          />
        </div>
      </div>

      <button
        onClick={onNext}
        className="mt-8 w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Next Step
      </button>
    </div>
  );
}
