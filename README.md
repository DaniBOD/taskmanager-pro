# TaskManager Pro

**TaskManager Pro** es una aplicación frontend desarrollada con Angular 17 utilizando componentes standalone. Fue creada como parte del desafío técnico para TechNova Solutions.

La app permite gestionar tareas de forma simple: agregarlas, marcarlas como completadas/incompletas y filtrarlas según su estado. **Este proyecto no se conecta a un backend**; toda la lógica se ejecuta en el navegador.

> ⚠️ Por error inicial, el trabajo se estaba realizando en la rama incorrecta. La rama principal activa fue cambiada y ahora es `feature/main-project`, donde se encuentran todos los commits y avances del desarrollo.

---

## 🚀 Funcionalidades implementadas

- ✅ Crear tareas nuevas
- ✅ Editar y eliminar tareas existentes
- ✅ Marcar tareas como completadas o pendientes
- ✅ Filtros por estado: todas, completadas, pendientes
- ✅ Diseño responsivo y limpio usando CSS clásico
- ✅ Uso de Angular 17 con componentes standalone
- ✅ Proyecto contenedorizado usando Docker + NGINX
- ✅ 10+ commits con buenas prácticas en la rama `feature/*`

---

## 📁 Estructura del proyecto

taskmanager-pro/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── task-form/
│ │ │ ├── task-list/
│ │ │ └── ...
│ │ └── app.config.ts
├── Dockerfile
├── angular.json
└── README.md


🐳 Docker
Este proyecto puede ejecutarse como una app de producción usando NGINX.

Build de la imagen

docker build -t taskmanager-pro .

docker run -d -p 8080:80 taskmanager-pro

Luego abre http://localhost:8080 para ver la aplicación ejecutándose.

Nota: Asegúrate de que el puerto 8080 no esté siendo usado por otro servicio.

sino use docker build -t taskmanager-pro .

docker run -d -p 4201:80 taskmanager-pro

Accede a http://localhost:4201

Grupo de Daniel Pilquil Jose Herrera y Christopher Muñoz

 Notas adicionales
El proyecto utiliza Angular 17 con configuración de componentes standalone (sin módulos tradicionales).

Se tomaron medidas manuales para corregir un conflicto con el favicon.ico al compilar en dist/.

El archivo angular.json fue ajustado para asegurar que los assets estén disponibles en producción.
