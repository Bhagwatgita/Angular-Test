import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HttpModule } from '@angular/http';
import { APITestComponent } from './apitest/apitest.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form-validation', component: FormValidationComponent},
  {  path: 'testapi', component: APITestComponent}
  ,{path:'create',component:CreateEmployeeComponent}
  // ,
  // { path: '', redirectTo: '', pathMatch: '' },
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    ContactComponent,
    FormValidationComponent,
    APITestComponent,
    CreateEmployeeComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
