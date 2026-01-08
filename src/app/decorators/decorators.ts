import { Component, Signal, signal, ViewChild, ViewChildren,QueryList,AfterViewInit } from '@angular/core';
import { Dummy } from '../dummy/dummy';
import { Sign } from 'crypto';
import { Signals } from '../signals/signals';
import { After } from 'v8';

@Component({
  selector: 'app-decorators',
  imports: [Dummy,Signals],
  templateUrl: './decorators.html',
  styleUrl: './decorators.css',
})

export class Decorators implements AfterViewInit {
  @ViewChild(Dummy) Dummycomponent!:Dummy;
  @ViewChildren(Signals) Signalcomponent!: QueryList<Signals>;
  ngAfterViewInit(){
    console.log(this.Dummycomponent.printdata);

  }
 callChild(){
  this.Dummycomponent.testdummy();
 }
 callsignals(){
  this.Signalcomponent.forEach((signals,index)=>{
     console.log(`Signals ${index + 1}`, signals.testtitle());
  });
 }
}
