"use client";

import { useState } from "react";
import StepIndicator from "@/components/StepIndicator";
import TimingEstimate from "@/components/TimingEstimate";
import Step1CompanyInfo from "@/components/Step1CompanyInfo";
import Step2ContactInfo from "@/components/Step2ContactInfo";
import ResultsPreview from "@/components/ResultsPreview";
import { CompanyInfo, ContactInfo, ROIResults, Step } from "@/lib/types";
import { calculateROI } from "@/lib/roiCalculations";

const initialCompanyInfo: CompanyInfo = {
  employeeCount: 0,
  averageSalary: 0,
  eapSpend: 0,
  absenteeismRate: 0,
  turnoverRate: 0,
};

const initialContactInfo: ContactInfo = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  phone: "",
  country: "",
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(initialCompanyInfo);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(initialContactInfo);
  const [results, setResults] = useState<ROIResults | null>(null);

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const calculatedResults = calculateROI(companyInfo);
      setResults(calculatedResults);
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleStartOver = () => {
    setCurrentStep(1);
    setCompanyInfo(initialCompanyInfo);
    setContactInfo(initialContactInfo);
    setResults(null);
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">ROI Calculator</h1>

        <TimingEstimate />

        <div className="mb-8 max-w-2xl mx-auto">
          <StepIndicator currentStep={currentStep} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ minHeight: "650px" }}>
          {/* Left column - Form (2/3 width) */}
          <div className="lg:col-span-2 h-[650px]">
            {currentStep === 1 && (
              <Step1CompanyInfo
                data={companyInfo}
                onChange={setCompanyInfo}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <Step2ContactInfo
                data={contactInfo}
                onChange={setContactInfo}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 3 && (
              <div className="bg-[#f2ece3] rounded-lg p-8 shadow-sm h-full flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
                  <p className="text-gray-700 max-w-md">
                    Your ROI calculation is complete. Review your personalized results on the right.
                  </p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={handleStartOver}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    ↻ Start Over
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Results Preview (1/3 width) */}
          <div className="lg:col-span-1 h-[650px]">
            <ResultsPreview
              isBlurred={currentStep !== 3}
              results={results}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
