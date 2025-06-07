import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tareas: Task[] = [];
  tareaEditandoId: number | null = null;
  filtroSeleccionado: 'todas' | 'completadas' | 'pendientes' = 'todas';

  formEdit = {
    titulo: '',
    descripcion: '',
    prioridad: 'media',
    fechaVencimiento: ''
  };

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

  iniciarEdicion(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      this.tareaEditandoId = id;
      this.formEdit = {
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        prioridad: tarea.prioridad,
        fechaVencimiento: tarea.fechaVencimiento.toISOString().split('T')[0]
      };
    }
  }

  cancelarEdicion() {
    this.tareaEditandoId = null;
  }

  guardarEdicion(id: number) {
    this.taskService.actualizarTarea(id, {
      ...this.formEdit,
      prioridad: this.formEdit.prioridad as TaskPriority,
      fechaVencimiento: new Date(this.formEdit.fechaVencimiento)
    });
    this.tareaEditandoId = null;
  }

  toggleEstado(tarea: Task) {
    const nuevoEstado = tarea.estado === 'completada' ? 'pendiente' : 'completada';
    this.taskService.actualizarTarea(tarea.id, {
      ...tarea,
      estado: nuevoEstado
    });
  }

  cambiarFiltro(filtro: 'todas' | 'completadas' | 'pendientes') {
    this.filtroSeleccionado = filtro;
  }

  obtenerTareasFiltradas(): Task[] {
    if (this.filtroSeleccionado === 'completadas') {
      return this.tareas.filter(t => t.estado === 'completada');
    } else if (this.filtroSeleccionado === 'pendientes') {
      return this.tareas.filter(t => t.estado === 'pendiente');
    } else {
      return this.tareas;
    }
  }
}
