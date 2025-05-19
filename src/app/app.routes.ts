import { Routes } from '@angular/router';
import { SwotComponent } from './pages/swot/swot.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ActionPlanComponent } from './pages/action-plan/action-plan.component';

export const routes: Routes = [
    { 
        path: '', 
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'swot', component: SwotComponent },
            { path: 'action-plan', component: ActionPlanComponent }
        ]
    }
];
