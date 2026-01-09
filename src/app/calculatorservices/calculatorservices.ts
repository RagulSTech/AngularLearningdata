import { Component } from '@angular/core';
import { SericesCalc } from '../serices-calc';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Loggerservices } from '../loggerservices';

@Component({
  selector: 'app-calculatorservices',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculatorservices.html',
  styleUrl: './calculatorservices.css',
})
export class Calculatorservices {
  constructor(private servicecalc: SericesCalc,private loggerservice: Loggerservices) { }
  availableservices: any[] = [];
  ngOnInit() {
    this.availableservices = this.servicecalc.Availableservices();
  }
  Available: number = 0;
  finalresult : string = '';
  avalue : string = '';
  bvalue : string = '';

  Submit(){
    if(this.Available == 0){
      alert("Please Select Concept");
      return;
    }
    if(this.Available == 1){
      this.finalresult = (this.servicecalc.Addition(Number(this.avalue),Number(this.bvalue))).toString();
    }
    if(this.Available == 2){
      this.finalresult = (this.servicecalc.Subtraction(Number(this.avalue),Number(this.bvalue))).toString();
    }
    if(this.Available == 3){
      this.finalresult = (this.servicecalc.Multiplication(Number(this.avalue),Number(this.bvalue))).toString();
    }
    if(this.Available == 4){
      if(Number(this.avalue)== 1){
        if(Number(this.bvalue) == 0){
          alert("Cannot divide by zero");
          return
        }
      }
      this.finalresult = (this.servicecalc.Division(Number(this.avalue),Number(this.bvalue))).toString();
    }
    this.loggerservice.message(this.finalresult);
    this.loggerservice.downloadlogs();
  }
}
