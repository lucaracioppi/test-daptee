# test-daptee

Este es un proyecto de ejemplo que utiliza **Nuxt3**, **TypeScript**, **Pinia**, y **Tailwind CSS**.

## Descripción

Este proyecto está configurado para proporcionar una base de trabajo con las siguientes tecnologías:

- **Nuxt3**: Framework de Vue.js para la generación de aplicaciones universales.
- **TypeScript**: Superset de JavaScript que agrega tipado estático.
- **Pinia**: Sistema de gestión de estado para Vue 3.
- **Tailwind CSS**: Framework de CSS utilitario para un diseño rápido y responsivo.

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
const user = ref("Daptee");
const PASSWORD = ref("Daptee2024");
Cambia 'user y 'PASSWORD' por las credenciales que desees.


