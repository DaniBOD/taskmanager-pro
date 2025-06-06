import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tareas: Task[] = [];
  private tareasSubject = new BehaviorSubject<Task[]>([]);

  getTareas(): Observable<Task[]> {
    return this.tareasSubject.asObservable();
  }

  agregarTarea(tarea: Task) {
    this.tareas.push(tarea);
    this.tareasSubject.next(this.tareas);
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.tareasSubject.next(this.tareas);
  }

  actualizarTarea(tareaActualizada: Task) {
    const index = this.tareas.findIndex(t => t.id === tareaActualizada.id);
    if (index !== -1) {
      this.tareas[index] = { ...tareaActualizada };
      this.tareasSubject.next([...this.tareas]);
    }
  }
}

