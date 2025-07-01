import { Routes } from '@angular/router';
import { SwotComponent } from './pages/swot/swot.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ActionPlanComponent } from './pages/action-plan/action-plan.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { ProfileComponent } from './components/user/profile/profile.component';

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
        path: 'user', 
        component: MainLayoutComponent,
        children: [
            { path: 'profile', component: ProfileComponent }
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
