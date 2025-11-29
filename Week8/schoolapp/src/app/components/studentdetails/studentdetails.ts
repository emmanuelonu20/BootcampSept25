import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student-service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-studentdetails',
  standalone: false,
  templateUrl: './studentdetails.html',
  styleUrl: './studentdetails.css',
})
export class Studentdetails {

  student!: Istudent;

  constructor(private route: ActivatedRoute, private studentService: StudentService){
    const studentId = parseInt(this.route.snapshot.paramMap.get('student_id')!);

    this.studentService.getStudent(studentId).subscribe(result => {
      this.student = result;
    });
  }

}
