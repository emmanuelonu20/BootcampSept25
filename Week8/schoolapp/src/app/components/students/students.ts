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
    //then().catch()
    this.studentService.getStudents().subscribe(result => {
      this.students = result;
    });
  }

  deleteStudent(studentId: number) {
    //Find the index of the student within the array
    const index = this.students.findIndex(student => student.id === studentId);

    //Remove the student from the array
    this.students.splice(index, 1);

    //Remove student from database
    this.studentService.deleteStudent(studentId).subscribe(result => {
      console.log(result);
      alert(result.name + ' was deleted successfully.');
    });
  }

}
