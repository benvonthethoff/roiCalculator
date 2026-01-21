export interface CompanyInfo {
  employeeCount: number;
  dependents: number;
  eapSpend: number;
  averageSalary: number;
  healthPlanSpend: number;
  turnoverRate: number;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  country: string;
}

export interface ROIResults {
  totalSavings: number;
  turnoverSavings: number;
  productivityGains: number;
  healthcareSavings: number;
  roi: number;
}

export interface FormData {
  companyInfo: CompanyInfo;
  contactInfo: ContactInfo;
}

export type Step = 1 | 2 | 3;
