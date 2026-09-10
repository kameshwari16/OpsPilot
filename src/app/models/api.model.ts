export interface ApiResponse<T>{
    data:T;
    success:boolean;
    message?:string;
}
export interface Page<T>{
    items:T[],
    page:number,
    pageSize:number,
    total:number
}