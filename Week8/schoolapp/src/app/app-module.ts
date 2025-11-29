import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Students } from './components/students/students';
import { Teachers } from './components/teachers/teachers';
import { Pagenotfound } from './components/pagenotfound/pagenotfound';
import { Studentdetails } from './components/studentdetails/studentdetails';
import { Student } from './components/student/student';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentForm } from './components/student-form/student-form';

@NgModule({
  declarations: [
    App,
    Students,
    Teachers,
    Pagenotfound,
    Studentdetails,
    Student,
    StudentForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
