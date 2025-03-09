import { Routes } from '@angular/router';
import { SwotComponent } from './components/swot/swot.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "swot", component: SwotComponent }
];
