"use client";

import { Step } from "@/lib/types";

interface StepIndicatorProps {
  currentStep: Step;
}

const steps = [
  { number: 1, label: "Company Info" },
  { number: 2, label: "Contact Info" },
  { number: 3, label: "Results" },
];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="relative">
        {/* Progress bar container */}
        <div className="absolute top-5 left-[16.67%] right-[16.67%] flex items-center">
          {/* Background bar */}
          <div className="w-full h-1 bg-gray-200 rounded-full">
            {/* Active bar */}
            <div
              className="h-1 bg-primary rounded-full transition-all duration-300"
              style={{
                width: currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%",
              }}
            />
          </div>
        </div>

        {/* Step circles with labels */}
        <div className="relative flex justify-between items-center">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors z-10 ${
                  step.number <= currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.number}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
