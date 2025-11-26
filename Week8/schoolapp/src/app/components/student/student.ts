import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student implements OnChanges {
  
  //property
  @Input() student!: Istudent;
  @Output() deleteStudentEvent = new EventEmitter(); //makes a new event called deleteStudent

  onDelete() {
    if (confirm(`Are you sure you want to delete ${this.student.name}`)) {
      this.deleteStudentEvent.emit(this.student.id); //triggering the custom event
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
