import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipesPipe } from '../pipes-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,FormsModule],
  providers: [PipesPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  constructor(private pipespipe:PipesPipe){}

  today = new Date();
  strindata:string = 'hello Ragul';
  titledata :string = 'ragul mani abi';
  finaldata : string = "";

  pipesdata : string = "";
  selectedoptions : number = 0;
  submitpipe(){
    this.finaldata = this.pipespipe.transform(this.pipesdata, Number(this.selectedoptions),"textmethod") as string;
  }
}
