import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';
import { students } from '../components/students/student-data';

@Injectable({
  providedIn: 'root',
})
export class Student {

  student_data: Istudent[] = students;
  
  //Get student data
  getStudents() {
    return this.student_data;
  }

  //Add new student data

  //Update an existing student data

  //Delete an existing student data
}
