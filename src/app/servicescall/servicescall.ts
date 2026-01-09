import { Component } from '@angular/core';
import { Testexternal } from '../services/testexternal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicescall',
  imports: [CommonModule,FormsModule],
  templateUrl: './servicescall.html',
  styleUrl: './servicescall.css',
})
export class Servicescall {
  constructor(private testexternals : Testexternal){}
  returndataapi : any[] = [];
  ngOnInit(){
    this.testexternals.getdata().subscribe((data)=>{
      this.returndataapi = data;
    })
  }
}
