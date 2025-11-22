import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  students: Istudent[];

  constructor(private studentService: StudentService){
    this.students = studentService.getStudents();
  }

}
