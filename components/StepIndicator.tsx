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
      {/* TODO: Implement step indicator UI with progress bar */}
      <div className="flex justify-between items-center">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.number <= currentStep
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step.number}
            </div>
            <span className="mt-2 text-sm">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
