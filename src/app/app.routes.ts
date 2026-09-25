import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Incidents } from './features/incidents/incidents';
import { Approvals } from './features/approvals/approvals';
import { Assets } from './features/assets/assets';
import { Audit } from './features/audit/audit';
import { IncidentWorkspaceService } from './features/incidents/data-access/incident-workspace.service';
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: '',
        providers:[IncidentWorkspaceService],
        children:[{
          path:'incidents',
          loadComponent:() =>
            import('./features/incidents/incidents')
            .then(m=>m.Incidents)
        }]
    },
    {
    path: 'approvals',
    component: Approvals
  },

  {
    path: 'assets',
    component: Assets
  },

  {
    path: 'audit',
    component: Audit
  }
];
