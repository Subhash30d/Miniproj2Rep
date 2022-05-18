import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from '../Addition/addition/addition.component';
import { DivisionComponent } from '../Division/division/division.component';
import { MultiplicationComponent } from '../Multiplication/multiplication/multiplication.component';
import { SubtractionComponent } from '../Subtraction/subtraction/subtraction.component';

const routes: Routes = [
  {path:"add", component:AdditionComponent},
  {path:"sub", component:SubtractionComponent},
  {path:"mul", component:MultiplicationComponent},
  {path:"div", component:DivisionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
