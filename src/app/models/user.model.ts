export type Role=
    | 'ADMIN'
    | 'MANAGER'
    | 'OPERATOR'
    | 'AUDITOR';

export interface User{
    readonly id:string;
    name:string;
    email:string;
    role:Role;
}