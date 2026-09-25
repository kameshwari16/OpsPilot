import { computed, Injectable, signal } from "@angular/core";
import { readonly } from "@angular/forms/signals";


export interface AuthUser{
    id:number,
    name:string,
    role: 'Admin' | 'Manager' | 'Operator' | 'Auditor';
}

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private readonly _currentUser=signal<AuthUser|null>(null);

    readonly currentUser=this._currentUser.asReadonly();

    readonly isLoggedIn=computed(()=>{
        this.currentUser!==null;
    });

    login(user:AuthUser){
        this._currentUser.set(user);
    }

    logout(){
        this._currentUser.set(null);
    }
}