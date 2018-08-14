import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent }
  // ,
  // { path: '', redirectTo: '', pathMatch: '' },
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
