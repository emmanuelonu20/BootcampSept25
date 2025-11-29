import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { DepartmentService } from '../../services/department-service';
import { Idepartment } from '../../interfaces/idepartment';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {

  studentForm;
  departments!: Idepartment[];

  constructor(private fb: FormBuilder, private studentService: StudentService, private deptService: DepartmentService){
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      department_id: ['', [Validators.required]]
    });

    //Fetch all department
    this.deptService.getDepartments().subscribe(result => {
      this.departments = result;
    });
  }

  onSubmit() {
    const formData = this.studentForm.value;

    this.studentService.createStudent(formData).subscribe(result => {
      console.log(result);
      alert(result.name + ' was created successfully');
    });
  }

  //getter method

  get nameFormControl() {
    return this.studentForm.get('name')!;
  }

}
