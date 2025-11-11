import { Component } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';
import { Student } from '../../services/student';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  student_data: Istudent[];

  constructor(private studentService: Student){
    this.student_data = studentService.getStudents()
  }

}
