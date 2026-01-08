import { Component } from '@angular/core';
import { Childcmp } from '../childcmp/childcmp';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parentcmp',
  imports: [Childcmp,RouterLink],
  templateUrl: './parentcmp.html',
  styleUrl: './parentcmp.css',
})
export class Parentcmp {
  childvalue: string = '';
  passchildvalues: string = '';
  returnvaluechild(parentpassvalue: string) {
    this.childvalue = parentpassvalue;
  }
  passtochild() {
    this.passchildvalues = "Hello from parent";
  }
  clearchild(){
    this.passchildvalues = '';
  }
}
