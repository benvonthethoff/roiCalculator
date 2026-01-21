"use client";

import { ContactInfo } from "@/lib/types";

interface Step2ContactInfoProps {
  data: ContactInfo;
  onChange: (data: ContactInfo) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2ContactInfo({
  data,
  onChange,
  onNext,
  onBack,
}: Step2ContactInfoProps) {
  const handleChange = (field: keyof ContactInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="bg-[#f2ece3] rounded-lg p-8 shadow-sm h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter first name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter last name"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter email address"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter company name"
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Job Title
          </label>
          <input
            type="text"
            value={data.jobTitle}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter job title"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-2 bg-white border border-black rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter phone number"
          />
        </div>

      </div>

      <p className="text-sm text-gray-600 mt-6 mb-4">* Required field</p>

      <div className="mt-auto pt-4 flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all group"
        >
          Calculate My Savings
          <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
}
