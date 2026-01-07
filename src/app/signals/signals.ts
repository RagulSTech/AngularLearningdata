import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
testtitle = signal('Angular Signals Works!');
  count = signal(0);
  clickcount(){
    this.count.update(c=>c+1);
  }
  firstname = signal('Ragul');
  lastname = signal('Mani');
  finalname :string='';
  fullName = computed(() => this.firstname()+this.lastname());
  
  derivedsignals(){
    this.finalname = this.fullName();
  }
}
