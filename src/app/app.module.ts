import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { LeftnavComponent } from './leftnav/leftnav/leftnav.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MainComponent } from './main/main/main.component';
import { RegisterComponent } from './main/register/register/register.component';
import { LoginComponent } from './main/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AdditionComponent } from './dashboard/Addition/addition/addition.component';
import { MultiplicationComponent } from './dashboard/Multiplication/multiplication/multiplication.component';
import { DivisionComponent } from './dashboard/Division/division/division.component';
import { SubtractionComponent } from './dashboard/Subtraction/subtraction/subtraction.component';
import { CompanyComponent } from './leftnav/company/company/company.component';
import { ResearchComponent } from './leftnav/research/research/research.component';
import { ResourcesComponent } from './leftnav/resources/resources/resources.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavComponent,
    MenuComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AdditionComponent,
    MultiplicationComponent,
    DivisionComponent,
    SubtractionComponent,
    CompanyComponent,
    ResearchComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
