import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { avoidWord, prohibited } from '../../custom_validations';

@Component({
  selector: 'app-mdf',
  standalone: false,
  templateUrl: './mdf.html',
  styleUrl: './mdf.css',
})
export class Mdf {

  studentForm;

  constructor(private fb: FormBuilder){
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), avoidWord]],
      age: [],
      email: ['', [Validators.required, prohibited(/emmanuel/), prohibited(/admin/)]]
    });
  }

  onSubmit(){
    console.log(this.studentForm.value);
    this.studentForm.reset(); //Clear all data on the web form
  }

  //getter method

  get nameFormControl() {
    return this.studentForm.get('name')!;
  }

}
