import { Component } from '@angular/core';
import { Childcmp } from '../childcmp/childcmp';

@Component({
  selector: 'app-parentcmp',
  imports: [Childcmp],
  templateUrl: './parentcmp.html',
  styleUrl: './parentcmp.css',
})
export class Parentcmp {
  childvalue: string = '';
  passchildvalues: string = '';
  returnvaluechild(parentpassvalue: string) {
    this.childvalue = parentpassvalue;
  }
  clear() {
    this.childvalue = '';
  }
  passtochild() {
    this.passchildvalues = "Hello from parent";
  }
}
