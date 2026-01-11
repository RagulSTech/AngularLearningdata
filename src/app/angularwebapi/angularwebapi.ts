import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-angularwebapi',
  imports: [],
  templateUrl: './angularwebapi.html',
  styleUrl: './angularwebapi.css',
})
export class Angularwebapi {
  private url = 'https://localhost:7125/api/TestAngular';

  constructor(private http: HttpClient) { }
  ngOnInit() {

    this.http.get(this.url).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => console.log(err)
      });
  }
}
