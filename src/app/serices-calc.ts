import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SericesCalc {
  Availableservices(){
    return ['Addition','Subtraction','Multiplication','Division'];
  }

  Addition(numbera:number,numberb:number){
    return numbera+numberb;
  }
  Subtraction(numbera:number,numberb:number){
    return numbera-numberb;
  }
  Multiplication(numbera:number,numberb:number){
    return numbera*numberb;
  }
  Division(numbera:number,numberb:number){
    return numbera/numberb;
  }
}
