import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { from, of, interval, Observable, switchMap, pipe, merge, concatMap, retry, throwError, finalize, Subject } from 'rxjs';
import { debounceTime, delay, filter, map, mergeMap, take, tap } from 'rxjs/operators';  // <--- correct import

@Component({
  selector: 'app-rxjxdata',
  imports: [CommonModule],
  templateUrl: './rxjxdata.html',
  styleUrl: './rxjxdata.css',
})
export class Rxjxdata {
  results: Number[] = [];

  testresult: any
  result: any[] = [];

  ngOnInit() {

  }
  mapsubmit() {
    this.results.length = 0;
    of(1, 2, 3)
      .pipe(
        map(x => x * 10)
      )
      .subscribe(result => this.results.push(result));
  }
  filtersubmit() {
    this.results.length = 0;
    of(10, 20, 30, 40, 25, 35, 45, 15, 25, 35, 2, 12, 22, 32, 43)
      .pipe(filter(x => x > 23)).subscribe(result => this.results.push(result));
  }
  tapsubmit() {
    this.results.length = 0;
    of(10, 20, 30, 40, 25, 35, 45, 15, 25, 35, 2, 12, 22, 32, 43)
      .pipe(tap(x => console.log(x)), filter(x => x > 23)).subscribe(result => this.results.push(result));
  }
  takesubmit() {
    this.results.length = 0;
    of(15, 21, 33, 25, 40).pipe(take(1)).subscribe(values => (this.results.push(values)));
  }
  debouncetimesubmit() {
    this.results = [];

    interval(500).pipe(
      map(i => [12, 55, 32, 12, 14, 67][i]),
      take(6),
      debounceTime(3000)
    ).subscribe(value => console.log(value));
  }
  cleardata() {
    this.result = [];
    this.results.length = 0;
  }

  constructor(private http: HttpClient) { }

  getmethodapi(): Observable<any> {
    var url = 'https://localhost:7281/api/Testangularconnect/Getangularconnect';
    return this.http.get(url);
  }

  ApiCalling() {
    this.getmethodapi().subscribe((data) => {
      this.testresult = data;
    });
  }


  ApiCallSwitch() {
    console.log("ApiCallSwitch called");
    of(null)
      .pipe(
        debounceTime(1000),
        switchMap(() => this.getmethodapi())
      ).subscribe((data) => {
        this.result.push(data);
      });
  }

  MergeMap() {
    of(1, 2, 3)
      .pipe(
        mergeMap(val => of(val * 10).pipe(delay(1000)))
      ).subscribe(result => this.results.push(result));
  }


  getmergeapi(empid: any): Observable<any> {
    var url = `https://localhost:7281/api/Testangularconnect/GetEmployeeInfo?EmployeeId=${empid}`;
    return this.http.get(url);
  }

  MergeMapApiCalling() {
    var id = [1, 2];
    from(id)
      .pipe(
        mergeMap(empid => this.getmergeapi(empid))
      ).subscribe(data => {
        this.result.push(data);
      })
  }

  concatmap() {
    of(1, 2, 3)
      .pipe(
        concatMap(val => of(val * 10).pipe(delay(100))
        )).subscribe(result => this.results.push(result)).add(console.log("Concat Map Completed"));
  }
  retryrxjs() {
    this.results.length = 0;
    of(1, 2, 3)
      .pipe(
        mergeMap(val => {
          if (val == 2) {
            return throwError(() => new Error('Error at 2'));
          }
          return of(val);
        }),
        retry(1))
      .subscribe({
        next: result => this.results.push(result),
        error: err => console.error('Final Error after retries: ', err)
      })
  }
  finilizerxjs(input: any = 10) {
    this.results.length = 0;
    const data:number[] = [];

    for(let i=1; i<=input; i++){
      data.push(i);
    }
    from(data)
    .pipe(
      map(val => val * 20),
      finalize(() => console.log('All done processing!'))
    )
    .subscribe(result => this.results.push(result)
    )
  }

  subjectrxjs(){
    var arr1 :number[] = [1,3,5,7,9];
    var arr2 :number[] = [2,4,6,8,10];
    
    from(arr1).pipe(
      filter(x=>x%2!=0)
    ).subscribe(data=>this.results.push(data));
    this.results.push(0);
    from(arr2).pipe(
      filter(x=>x%2==0)
    ).subscribe(data=>this.results.push(data));



    var subjectdata = new Subject<number>();

    subjectdata.pipe(
      filter(x=>x%2!=0 || x%2==0)
    ).subscribe(data=>this.result.push(data));

    arr1.forEach(item=>subjectdata.next(item));
    subjectdata.next(0);
    arr2.forEach(item=>subjectdata.next(item));

  }
}
