import { Employee } from './employee1';
export class Claim {
  claimId: number;
  employee: Employee;
  event: string;
  gradeFormat: string;
  startDate: string;
  submissionDate: string;
  location: string;
  description: string;
  justification: string;
  cost: number;
}
