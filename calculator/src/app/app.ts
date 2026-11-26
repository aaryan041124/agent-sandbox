import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OPERATIONS, Operation } from './calc';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly a = signal(0);
  protected readonly b = signal(0);
  protected readonly op = signal<Operation>('add');
  protected readonly operations = Object.keys(OPERATIONS) as Operation[];
  protected readonly result = computed(() => OPERATIONS[this.op()](this.a(), this.b()));
}
