import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-angular-concepts',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './angular-concepts.html',
  styleUrl: './angular-concepts.css',
})
export class AngularConcepts {

}
