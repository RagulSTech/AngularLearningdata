import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dummy',
  imports: [CommonModule,FormsModule],
  templateUrl: './dummy.html',
  styleUrl: './dummy.css',
})
export class Dummy {
listdata : number = 0;
printdata :string = "Dummy Component Works!";

testdummy(){
  alert("Dummy Component Works!");  
}

testclickevent(){
    switch(Number(this.listdata)){
      case 1:
        this.printdata = "Metadata is configuration information that tells Angular how a class should be created, used, and behave.";
        break;
      case 2:
        this.printdata = "Data Binding is a mechanism for coordinating parts of a template with parts of a component.";
        break;
      case 3:
        this.printdata = "Directives are classes that add additional behavior to elements in your Angular applications.";
        break;
      default:
        this.printdata = "Please select a valid option from the list.";
    }
  }
}
