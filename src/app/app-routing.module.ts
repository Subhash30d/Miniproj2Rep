import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './header/header/header.component';
import { LeftnavComponent } from './leftnav/leftnav/leftnav.component';
import { MainComponent } from './main/main/main.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'main',
loadChildren:() => import('./main/main/main.module').then(m => m.MainModule) },
{path:'dashboard', component:DashboardComponent},
  {path:'dashboard',
loadChildren:() => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
{path:'leftnav',
loadChildren:() => import('./leftnav/leftnav/leftnav.module').then(m => m.LeftnavModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
