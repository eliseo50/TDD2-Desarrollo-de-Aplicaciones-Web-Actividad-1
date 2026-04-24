# Actividad 1 - ToDoList

**Curso:** Desarrollo de Aplicaciones Web

---

## Descripción del Proyecto

Aplicación de lista de tareas (ToDo List) diseñada para la gestión de actividades y metas. El sistema permite administrar registros de forma independiente y cuenta con una interfaz adaptable a dispositivos móviles y de escritorio.

## Funcionalidades

- **Gestión de Tareas y Metas:** Creación y eliminación de elementos (tareas y metas) en categorías independientes.
- **Interfaz Responsiva:** Adaptación del diseño para móviles y escritorio.

## Tecnologías

- React
- Vite
- Sass y React-Bootstrap
- TypeScript
- npm

## Instalación y Ejecución

Clonación del repositorio:

```bash
git clone [url-del-repositorio]
cd "Actividad 1 - ToDoList"
```

Instalación de dependencias:

```bash
npm install
```

Ejecución del proyecto:

```bash
npm run dev
```

## Estructura del Directorio src

- `components/`: Componentes de la interfaz de usuario y estilos SCSS por componente.
- `context/`: Implementación del estado global mediante Zustand.
- `hooks/`: Hooks personalizados de React.
- `styles/`: Definiciones de estilos globales con SCSS.
- `utils/`: Funciones auxiliares.
- `App.tsx`: Componente raíz de la aplicación.
- `main.tsx`: Punto de entrada del cliente.

### Estado Global

Se utiliza **Zustand** para gestionar el estado global de la aplicación, migrando desde una implementación previa con `useContext`. El estado se divide en tres **stores**:

- **useTaskStore:** Gestiona la lista de tareas y las acciones para añadir, eliminar o realizar cargas masivas.
- **useGoalsStore:** Gestiona la lista de metas de forma independiente a las tareas.
- **useNavigationStore:** Controla la pestaña activa (`tasks` o `goals`) y la navegación de la interfaz.

Para mantener la consistencia y no repetir lógica entre las stores, se utilizan funciones (`addItem`, `addItems`, `removeItem`) que separan las operaciones comunes entre las stores.

### Componentes

#### AddTaskForm.tsx

Gestiona la entrada de datos, validaciones y la lógica de creación de nuevos elementos.

#### AddTaskModal.tsx

Contenedor modal para el formulario de creación, utilizado específicamente en la interfaz móvil.

#### CardList.tsx

Componente encargado de iterar y renderizar la lista de elementos según la categoría seleccionada.

#### CustomButton.tsx

Abstracción de botones reutilizables basada en el componente `Button` de React-Bootstrap.

**Nota sobre la personalización de estilos:**
Este componente añade estilos personalizados utilizando _CSS Custom Properties_ (variables de CSS) en lugar de modificar variables estáticas de SCSS (como `$primary` en `index.scss`).

El objetivo es permitir un sistema de temas dinámicos (`useTheme`). A diferencia de las variables de SCSS, que son estáticas y se definen en tiempo de compilación, las variables de CSS permiten realizar cambios en tiempo de ejecución, permitiendo la implementación de un tema oscuro.

#### CustomNavbar.tsx

Barra de navegación que integra la lógica de filtrado por pestañas y la marca del sitio.

#### FloatButton.tsx

Botón flotante utilizado principalmente para abrir el formulario de creación en dispositivos móviles.

El botón también se utiliza para cambiar entre el tema claro y oscuro.

#### ItemCard.tsx

Representación visual de cada elemento que muestra su información y permite su eliminación.

#### FormAlert.tsx

Componente de utilidad para mostrar mensajes de advertencia en la validación de los formularios.

### Hooks

#### useIsMobile

Custom hook que permite detectar si la interfaz se está visualizando en un dispositivo móvil. Este esta sincronizado con el punto de quiebre utilizado por React-Bootstrap en el componente `Navbar` con el valor `expand="md"`.

#### useTasksAndGoals

Custom hook que permite gestionar la lista de tareas y metas, según la pestaña activa. El hook devuelve la lista de elementos y las funciones para agregar y eliminar elementos.

#### useTheme

Custom hook que gestiona el sistema de temas de la aplicación. Esta solución fue implementada para permitir el cambio entre el tema "original" (claro) y el tema "dark" (oscuro). El hook aplica el tema seleccionado al documento mediante el atributo `data-theme`, permitiendo que las variables de CSS se actualicen afectando a toda la interfaz.

### Funciones auxiliares

#### getItemData

Función que recibe el formulario y devuelve un objeto con los datos para crear un nuevo elemento (id, nombre, descripción y fecha).

#### isItemValid

Función que recibe un objeto con los datos para crear un nuevo elemento y devuelve true si es válido y false en caso contrario. Además, devuelve un array con los errores encontrados.

---
