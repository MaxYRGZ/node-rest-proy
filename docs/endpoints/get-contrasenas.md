
# Endpoint: `GET /contrasenas`

Permite obtener la lista de las primeras doce contraseñas registradas en el sistema.

## Ejemplo de Solicitud
```http
GET /contrasenas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_contrasena": 1,
    "id_usuario": 1,
    "nombre_sitio": "Sitio1",
    "nombre_usuario": "UsuarioSitio1",
    "contraseña": "contraseña1"
    // Otros campos de la contraseña
  },
  {
    "id_contrasena": 2,
    "id_usuario": 2,
    "nombre_sitio": "Sitio2",
    "nombre_usuario": "UsuarioSitio2",
    "contraseña": "contraseña2"
    // Otros campos de la contraseña
  },
  // ... hasta la contraseña 12
]


```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró la contraseña."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
   }

  ```

## Notas Adicionales

- Para obtener más detalles sobre una contraseña en particular, consulta la documentación del endpoint
[`GET /contrasenas/{id}`](./endpoints/get-contrasenas-id.md)
[`POST /contrasenas`](./endpoints/post-contrasenas.md)
[`PUT /contrasenas/{id}`](./endpoints/put-contrasenas-id.md)
[`PATCH /contrasenas/{id}`](./endpoints/patch-contrasenas-id.md)
```

Esta documentación describe cómo obtener las primeras doce contraseñas registradas en el sistema a través del endpoint `GET /contrasenas`.