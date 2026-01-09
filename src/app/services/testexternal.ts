import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Testexternal {
  
  private apiurl = 'https://api.sampleapis.com/beers/ale';
  constructor(private http:HttpClient) {}
  getdata():Observable<any>{
    return this.http.get<JSON>(this.apiurl);
  }

}
