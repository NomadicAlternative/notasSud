# Blueprint: Plataforma de Ensayos sobre la Doctrina

## Visión General

Crear una aplicación web completa para la publicación y gestión de ensayos y estudios personales sobre temas de la doctrina de La Iglesia de Jesucristo de los Santos de los Últimos Días. La plataforma se dividirá en una página pública para lectores y un panel de administración privado para el autor.

## Diseño y Estilo (Página Pública)

El diseño buscará ser profesional, inspirador y sobrio, facilitando la lectura y la reflexión.

*   **Paleta de Colores:** Tonos serenos y elegantes. Se usará un azul oscuro (`#2c3e50`) para el texto principal, un gris suave (`#ecf0f1`) para los fondos, y un toque de dorado o azul claro para enlaces y elementos destacados.
*   **Tipografía:** Se utiliza la fuente "Roboto" para todo el texto de la aplicación, importada desde Google Fonts. Esto asegura una apariencia consistente y moderna en todo el sitio.
*   **Imagen de Cabecera:** Se utiliza una imagen inspiradora que combina la Primera Visión con una figura que representa a Mormón, reforzando la temática de la restauración y el estudio de las escrituras. Se aplica un efecto de paralaje y una superposición oscura para asegurar la legibilidad del texto.
*   **Layout:** Se utiliza el sistema de rejilla y los componentes de **Bootstrap 5** para una estructura responsive y moderna.
*   **Componentes:** Se ha creado un Web Component `<article-card>` para mostrar un resumen de cada artículo en la página principal. Esto incluye título, fecha y un breve extracto.

## Fase 1: Creación de la Página Pública (Completada)

1.  **[COMPLETADO]** Crear el archivo `blueprint.md` con la visión y el plan del proyecto.
2.  **[COMPLETADO]** Estructurar `index.html`: Definir la maqueta principal con una cabecera (`<header>`), un contenido principal (`<main>`) para las tarjetas de artículos, y un pie de página (`<footer>`).
3.  **[COMPLETADO]** Establecer Estilos Base en `style.css`: Aplicar la paleta de colores y la tipografía.
4.  **[COMPLETADO]** Integrar Bootstrap: Añadir Bootstrap CSS y JS desde CDN y adaptar la estructura HTML.
5.  **[COMPLETADO]** Desarrollar el Web Component `<article-card>` en `main.js`: Crear la estructura y estilo del componente para mostrar los artículos.
6.  **[COMPLETADO]** Poblar la Página con Contenido de Ejemplo: Añadir varias instancias del componente `<article-card>` al `index.html` para simular una lista de artículos.
7.  **[COMPLETADO]** Añadir Imagen de Cabecera: Integrar una imagen de fondo inspiradora en la cabecera con un efecto de paralaje.

## Fase 2: Integración con Firebase y Panel de Administración

1.  **[PENDIENTE]** Configurar Firebase: Inicializar Firebase en el proyecto, configurando Hosting para el despliegue y Firestore como base de datos para almacenar los artículos.
2.  **[PENDIENTE]** Crear la Página de Administración (`admin.html`): Diseñar una página protegida para que el autor pueda crear, editar y eliminar artículos.
3.  **[PENDIENTE]** Conectar el Front-End con Firestore: Modificar `main.js` para que los artículos se lean dinámicamente desde la base de datos de Firestore en lugar de estar codificados en `index.html`.
4.  **[PENDIENTE]** Implementar la Funcionalidad de Administración: Desarrollar el JavaScript necesario en `admin.js` para interactuar con Firestore (CRUD: Create, Read, Update, Delete).
5.  **[PENDIENTE]** Configurar la Autenticación: Añadir autenticación de Firebase para proteger el panel de administración.
