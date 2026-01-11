import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, of, interval } from 'rxjs';
import { debounceTime, delay, filter, map, take, tap } from 'rxjs/operators';  // <--- correct import

@Component({
  selector: 'app-rxjxdata',
  imports: [CommonModule],
  templateUrl: './rxjxdata.html',
  styleUrl: './rxjxdata.css',
})
export class Rxjxdata {
  results: number[] = [];

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
    this.results.length = 0;
  }
}
