import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Students } from './components/students/students';
import { Teachers } from './components/teachers/teachers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Custom } from './directives/custom';
import { Mdf } from './components/mdf/mdf';

@NgModule({
  declarations: [
    App,
    Students,
    Teachers,
    Custom,
    Mdf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
