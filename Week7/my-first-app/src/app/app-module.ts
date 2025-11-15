import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Students } from './components/students/students';
import { Teachers } from './components/teachers/teachers';
import { FormsModule } from '@angular/forms';
import { Custom } from './directives/custom';

@NgModule({
  declarations: [
    App,
    Students,
    Teachers,
    Custom
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
