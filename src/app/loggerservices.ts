import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loggerservices {
  private loggers:string[] = [];

  message(values : string){
    const currentime = new Date().toISOString();
    const data = values + " " + currentime;
    this.loggers.push(data);
  }
  downloadlogs(){
    const filename =  new Date().getDate();
    const blob = new Blob([this.loggers.join('\n')],{type:'text/plain'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "test_" + filename +".txt";
    link.click();
  }
}
