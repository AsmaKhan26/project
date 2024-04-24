import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { SupportTeamComponent } from './pages/support-team/support-team.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'support-team',
                component: SupportTeamComponent
            },
            {
                path: 'tickets',
                component: TicketsComponent
            },
            {
                path: 'new_ticket',
                component: NewTicketComponent
            }

        ]
    }
];
