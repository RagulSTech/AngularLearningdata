import { Component, Output, EventEmitter,Input } from '@angular/core';

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
  clear(){
    this.parentpassvalue.emit('');
  }
  @Input() parentvalues: string = '';
}
