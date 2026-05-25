# TP WebService - Angular

Proyecto realizado para la práctica de Web Services de Programación y Servicios Web.

## Objetivo

Consumir APIs públicas aplicando arquitectura REST, servicios de Angular, componentes, rutas y una interfaz responsiva con Bootstrap.

## Funcionalidades implementadas

- Menú responsivo con Bootstrap y rutas de Angular.
- Portal de películas consumiendo una API pública de películas.
- Card Maker de autos consumiendo marcas y modelos desde un Web Service.
- Modal Bootstrap para mostrar modelos de una marca seleccionada.
- Conversor de monedas usando una API pública.
- Texto a audio usando una API que devuelve audio reproducible en una etiqueta `audio`.
- API extra para generar códigos QR desde un formulario.
- Servicios separados para cada consumo de API.

## APIs utilizadas

- Películas: Studio Ghibli API.
- Autos: NHTSA Vehicle API.
- Conversor: Frankfurter API.
- Texto a audio: StreamElements Speech API.
- QR: QRServer API.

## Estructura principal

```txt
src/app/
 ├── components/navbar/
 ├── pages/
 │   ├── peliculas/
 │   ├── autos/
 │   ├── conversor/
 │   ├── texto-audio/
 │   └── api-extra/
 ├── services/
 │   ├── peliculas.service.ts
 │   ├── autos.service.ts
 │   ├── conversor.service.ts
 │   ├── texto-audio.service.ts
 │   └── qr.service.ts
 └── app.routes.ts
```

## Cómo ejecutar

```bash
npm install
ng serve
```

Luego abrir:

```txt
http://localhost:4200
```

## Observaciones

Las APIs elegidas son públicas para facilitar la prueba del práctico sin depender de claves privadas. Si se desea usar RapidAPI o APILayer, se pueden reemplazar las URLs dentro de los servicios correspondientes.
