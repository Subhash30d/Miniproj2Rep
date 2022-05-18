import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from '../company/company/company.component';
import { ResearchComponent } from '../research/research/research.component';
import { ResourcesComponent } from '../resources/resources/resources.component';

const routes: Routes = [
  {path:'company', component:CompanyComponent},
  {path:'research', component:ResearchComponent},
  {path:'resources', component:ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftnavRoutingModule { }
