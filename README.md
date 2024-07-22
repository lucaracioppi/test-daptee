# test-daptee

Este es un proyecto que utiliza **Nuxt3**, **TypeScript**, **Pinia**, y **Tailwind CSS**. Ademas, es responsive y esta hecho tanto para **Light Mode** como para **Dark Mode** (me focalice más en el Dark Mode)

## Descripción

Este proyecto está configurado para proporcionar una base de trabajo con las siguientes tecnologías:

- **Nuxt3**
- **TypeScript**
- **Pinia**
- **Tailwind CSS**

## Instalación

Para comenzar a trabajar con el proyecto, sigue estos pasos:

1. **Clona el repositorio**:
   ```sh
   git clone https://github.com/lucaracioppi/test-daptee.git
Navega al directorio del proyecto:

2. **Navega al directorio del proyecto**:
   ```sh
   cd test-daptee

3. **Instala las dependencias**:
   ```sh
   npm install

4. **Inicia el servidor de desarrollo**:
   ```sh
   npm run dev
   
5. **Configuración de Autenticación**:
El proyecto incluye una configuración básica de autenticación en el archivo stores/auth.ts. Puedes cambiar el nombre de usuario y la contraseña predeterminados directamente en ese archivo.

Cómo Cambiar el Usuario y la Contraseña
Abre el archivo stores/auth.ts en tu editor de código.

Busca las siguientes variables:
   ```sh
const user = ref("Daptee");
const PASSWORD = ref("Daptee2024");


