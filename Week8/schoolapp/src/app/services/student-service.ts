import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  students: Istudent[] = [
    {id: 1, name: 'John Bolton', age: 45, department: 'Music'},
    {id: 2, name: 'Jennifer Lopez', age: 34, department: 'Mathematics'},
    {id: 3, name: 'Sandra Smith', age: 55, department: 'Economics'},
  ];

  getStudents(){
    return this.students;
  }
  
  getStudent(studentId: number){
    return this.students.find(student => student.id === studentId);
  }
}
