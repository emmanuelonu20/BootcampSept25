import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Students } from './components/students/students';
import { Teachers } from './components/teachers/teachers';
import { Pagenotfound } from './components/pagenotfound/pagenotfound';
import { Studentdetails } from './components/studentdetails/studentdetails';
import { Student } from './components/student/student';

@NgModule({
  declarations: [
    App,
    Students,
    Teachers,
    Pagenotfound,
    Studentdetails,
    Student
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
