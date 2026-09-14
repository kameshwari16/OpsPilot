export interface Incident{
    id: number;
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    status: 'Open' | 'Investigating' | 'Resolved';
    createdAt: Date;
}