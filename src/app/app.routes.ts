import { Routes } from '@angular/router';
import { SwotComponent } from './pages/swot/swot.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ActionPlanComponent } from './pages/action-plan/action-plan.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';

export const routes: Routes = [
    { 
        path: '', 
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'swot', component: SwotComponent },
            { path: 'action-plan', component: ActionPlanComponent }
        ]
    },
    { 
        path: 'auth', 
        component: GuestLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];
