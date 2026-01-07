import { CommonModule } from '@angular/common';
import { Component, NgModule, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestngmodulesModule } from './testngmodules/testngmodules-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,TestngmodulesModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('LearnFirst');
}
