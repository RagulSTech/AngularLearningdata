import { Component } from '@angular/core';
import { TestngmodulesModule } from '../testngmodules/testngmodules-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngmodulesusage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ngmodulesusage.html',
  styleUrl: './ngmodulesusage.css',
})
export class Ngmodulesusage {
  testdata: string = "Welcome to Angular Testdata!";
}
