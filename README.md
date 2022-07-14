

## Configuracíon

El proyecto esta hecho en Laravel 9, por lo que recomiendo utilizar docker

- Ejecutar composer install
- Ejectura npm install
- Copiar .env.example: cp .env.example .env
- Asignar los accesos para mysql en el arcivo .env
- Crear Carpeta simbólica de storage
- ejecutar desde docker laravel con el comando ./vendor/bin/sail up
- Si se tiene problema al ejecutar, intentar con: sudo APP_PORT=5000 ./vendor/bin/sail up
- Ejecutar el interprete de npm para React: ./vendor/bin/sail npm run dev
- Exportar las migraciones con ./vendor/bin/sail artisan migrate:fresh --seed
- En los archivos dentro de resources/views modificar en la linea 13 localhost:3001 por localhost5173
- Se recomdienda crear un usuario nuevo en lugar de usar el generado por el seed.