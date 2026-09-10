import { User } from './user.model';

export type ApprovalStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED';

export interface Approval {
  readonly id: string;
  incidentId: string;
  requestedBy: User;
  reviewedBy?: User;
  status: ApprovalStatus;
  createdAt: string;
}