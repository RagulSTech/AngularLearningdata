import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  gettimedata: string = '';
  ngOnInit(){
    this.gettime();
    setInterval(() => this.gettime(), 1000);
  }
  gettime() {
    const now = new Date();
    this.gettimedata = now.toLocaleTimeString('en-GB');   
  }
}
