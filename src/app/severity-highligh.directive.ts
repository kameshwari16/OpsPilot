//custom directive
import {Directive,input} from '@angular/core';
import { Incident } from './features/incidents/models/incident.model';

@Directive({
    selector:'[appSeverityHighlight]',
    standalone: true,
    host:{
        '[class.critical]':"severity()==='Critical'",
        '[class.high]': "severity() === 'High'",
        '[class.medium]': "severity() === 'Medium'",
        '[class.low]': "severity() === 'Low'"
    }
})
export class SeverityHighlightDirective{
    severity=input.required<Incident['severity']>({
        alias:'appSeverityHighlight'
    });
}
