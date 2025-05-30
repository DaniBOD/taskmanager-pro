import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskPriority, TaskStatus, Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  form: FormGroup;
  prioridades: TaskPriority[] = ['alta', 'media', 'baja'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      prioridad: ['media', [Validators.required]],
      fechaVencimiento: ['', [Validators.required]]
    });
  }

  crearTarea() {
    if (this.form.valid) {
      const nuevaTarea: Task = {
        id: Date.now(), // ID simulado
        titulo: this.form.value.titulo,
        descripcion: this.form.value.descripcion,
        prioridad: this.form.value.prioridad,
        estado: 'pendiente',
        fechaCreacion: new Date(),
        fechaVencimiento: new Date(this.form.value.fechaVencimiento)
      };

      console.log('Tarea creada localmente:', nuevaTarea);
      alert('Tarea creada (solo en frontend). Ver consola.');
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
