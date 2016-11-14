import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // for localhost:3000
    { path: 'dashboard', component: DashboardComponent },  // for localhost:3000/dashboard
    { path: 'detail/:id', component: HeroDetailComponent },  // for localhost:3000/detal:[some_number]
    { path: 'heroes', component: HeroesComponent }  // for localhost:3000/heroes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]   // exports makes public
})

export class AppRoutingModule { }
