import {User} from './user.model';
export type IncidentStatus=
    | 'OPEN'
    | 'IN_PROGRESS'
    | 'RESOLVED'
    | 'CLOSED';

export type IncidentSeverity=
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'CRITICAL'

export interface Incident{
    readonly id:string;

    title:string;
    description:string;

    status:IncidentStatus;
    severity: IncidentSeverity;

    assignedTo?: User;

    createdAt: string;
    updatedAt: string;
}

export function isIncidentStatus(value:unknown): value is IncidentStatus
{
    return (
        value==='OPEN'||
        value==='IN_PROGRESS'||
        value==='RESOLVED'||
        value==='CLOSED'
    );
}

export function isIncidentSeverity(value:unknown): value is IncidentSeverity{
    return(
        value==='LOW' ||
        value==='MEDIUM' ||
        value==='HIGH' ||
        value==='CRITICAL'
    )
}
const value:unknown='OPEN';

if(isIncidentStatus(value)){
    console.log(value);
};

export type createIncidentDto=Pick<
    Incident,
    'title'| 'description' | 'severity'
    >;

export type updateIncidentDto=Partial<createIncidentDto>;