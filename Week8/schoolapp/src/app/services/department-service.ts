import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idepartment } from '../interfaces/idepartment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  constructor(private http: HttpClient){

  }

  getDepartments(){
    return this.http.get<Idepartment[]>('http://localhost:3000/departments');
  }
  
}
