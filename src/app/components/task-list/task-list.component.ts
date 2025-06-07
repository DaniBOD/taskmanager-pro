import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tareas: Task[] = [];
  tareaEditando: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTareas().subscribe(data => {
      this.tareas = data;
    });
  }

  eliminarTarea(id: number) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.taskService.eliminarTarea(id);
    }
  }

  iniciarEdicion(tarea: Task) {
    // Creamos una copia para evitar editar directamente
    this.tareaEditando = { ...tarea };
  }

  cancelarEdicion() {
    this.tareaEditando = null;
  }

  guardarEdicion() {
    if (this.tareaEditando) {
      this.taskService.actualizarTarea({
        ...this.tareaEditando,
        fechaVencimiento: new Date(this.tareaEditando.fechaVencimiento)
      });
      this.tareaEditando = null;
    }
  }
  toggleEstado(tarea: Task): void {
  tarea.estado = tarea.estado === 'completada' ? 'pendiente' : 'completada';
  this.taskService.actualizarEstado(tarea.id, tarea.estado);
  }
}
