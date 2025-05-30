export type TaskStatus = 'pendiente' | 'completada' | 'vencida';
export type TaskPriority = 'alta' | 'media' | 'baja';

export interface Task {
  id: number;
  titulo: string;
  descripcion: string;
  estado: TaskStatus;
  prioridad: TaskPriority;
  fechaCreacion: Date;
  fechaVencimiento: Date;
}
