import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Students } from './components/students/students';
import { Teachers } from './components/teachers/teachers';
import { Pagenotfound } from './components/pagenotfound/pagenotfound';
import { Studentdetails } from './components/studentdetails/studentdetails';

const routes: Routes = [
  {path: 'students', component: Students},
  {path: 'students/:student_id', component: Studentdetails},
  {path: 'teachers', component: Teachers},
  {path: '**', component: Pagenotfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
