import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  enterage : number = 0;
  inputage : number = 0;
  submitdata(){
    this.inputage = Number(this.enterage);
  }
  textcolor = "Green";
  warningcolor = "Red";

  nameslist : string[] = ['Ragul','Reegan','Raj','Ram', 'Umar'];

  markswitch: number[] = [80,75,88,45,68,58,59,95,22];

}
