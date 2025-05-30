import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  template: `
    <app-task-form></app-task-form>
    <hr />
    <app-task-list></app-task-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
