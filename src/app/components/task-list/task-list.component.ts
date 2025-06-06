import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tareas: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTareas().subscribe(data => {
      this.tareas = data;
    });
  }

  eliminarTarea(id: number) {
    const confirmar = confirm('¿Estás seguro de eliminar esta tarea?');
    if (confirmar) {
      this.taskService.eliminarTarea(id);
    }
  }
}
