import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcmp',
  standalone: true,
  imports: [],
  templateUrl: './childcmp.html',
  styleUrl: './childcmp.css',
})
export class Childcmp {
  @Output() parentpassvalue = new EventEmitter<string>();
  passtoparent() {
    this.parentpassvalue.emit("Hello from child");
  }
}
