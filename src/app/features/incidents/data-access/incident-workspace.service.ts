import {Injectable,signal} from '@angular/core';

@Injectable()
export class IncidentWorkspaceService{
    private readonly _selectedIncidentId=signal<number|null>(null);

    readonly selectedIncidentId=this._selectedIncidentId.asReadonly();

    selectIncident(id:number){
        this._selectedIncidentId.set(id);
    }

    clearIncident(){
        this._selectedIncidentId.set(null);
    }
}