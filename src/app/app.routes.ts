import { Routes } from '@angular/router';
import path from 'node:path';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'app-about', component: AboutComponent},
    {path: 'app-home', component: HomeComponent},
];
