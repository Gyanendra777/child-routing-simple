import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { DepartmentComponent } from './department/department.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { UserdetailComponent } from './userdetail/userdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // UserComponent,
    // DepartmentComponent,
    // PagenotfoundComponent,
    // UserdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
