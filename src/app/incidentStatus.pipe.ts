//custom pipe
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'incidentStatus',
    standalone: true
})
export class IncidentStatusPipe implements PipeTransform{
    transform(status:string):string{
        switch(status){
            case 'Open':
                return 'Open';

            case 'Investigating':
                return 'Under Investigation';
            case 'Resolved':
                return 'Resolved';

            default:
                return 'Unknown';
        }
    }
}