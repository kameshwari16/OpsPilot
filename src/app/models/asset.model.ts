export type AssertStatus=
    | 'HEALTHY'
    | 'DEGRADED'
    | 'DOWN';
export interface Asset{
    readonly id: string;
    name:string;
    serviceName:string;
    owner:string;
    status:AssertStatus;
}