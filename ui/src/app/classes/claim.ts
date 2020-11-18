import { Grade } from './grade';
import { Employee } from './employee';

export interface Claim {
  claimId: number;
  employee: Employee;
  event: string;
  gradeFormat: Grade;
  startDate: string;
  submissionDate: string;
  location: string;
  description: string;
  justification: string;
  cost: number;
}
