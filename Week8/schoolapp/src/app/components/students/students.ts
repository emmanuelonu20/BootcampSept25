import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {

  students!: Istudent[];

  constructor(private studentService: StudentService){
    
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  deleteStudent(studentId: number) {
    //Find the index of the student within the array
    const index = this.students.findIndex(student => student.id === studentId);

    //Remove the student from the array
    this.students.splice(index, 1);
  }

}
