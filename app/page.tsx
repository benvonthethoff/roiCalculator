"use client";

import { useState } from "react";
import StepIndicator from "@/components/StepIndicator";
import TimingEstimate from "@/components/TimingEstimate";
import Step1CompanyInfo from "@/components/Step1CompanyInfo";
import Step2ContactInfo from "@/components/Step2ContactInfo";
import Step3Results from "@/components/Step3Results";
import { CompanyInfo, ContactInfo, ROIResults, Step } from "@/lib/types";
import { calculateROI } from "@/lib/roiCalculations";

const initialCompanyInfo: CompanyInfo = {
  employeeCount: 0,
  dependents: 0,
  eapSpend: 0,
  averageSalary: 0,
  healthPlanSpend: 0,
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
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">ROI Calculator</h1>

        <TimingEstimate />

        <div className="mb-8">
          <StepIndicator currentStep={currentStep} />
        </div>

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

        {currentStep === 3 && results && (
          <Step3Results results={results} onStartOver={handleStartOver} />
        )}
      </div>
    </main>
  );
}
