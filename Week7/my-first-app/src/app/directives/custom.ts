import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: false
})
export class Custom {

  constructor(private elem: ElementRef) { 
    elem.nativeElement.style.backgroundColor = 'red';
    elem.nativeElement.innerHTML = "I just got appended";
  }

}
