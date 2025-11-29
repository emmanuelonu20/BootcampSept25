import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpClient) {

  }

  getStudents(){
    return this.http.get<Istudent[]>('http://localhost:3000/students');
  }
  
  getStudent(studentId: number){
    return this.http.get<Istudent>('http://localhost:3000/students/' + studentId);
  }

  deleteStudent(studentId: number) {
    return this.http.delete<Istudent>('http://localhost:3000/students/' + studentId);
  }

  createStudent(formData: any){
    return this.http.post<Istudent>('http://localhost:3000/students', formData);
  }
}
