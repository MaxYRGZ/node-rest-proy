# Endpoint: `GET /usuarios`

Permite obtener la lista de los primeros doce usuarios registrados en el sistema.

## Ejemplo de Solicitud
```http
GET /usuarios


```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_usuario": 1,
    "nombre": "Usuario1",
    "correo": "usuario1@example.com",
    "contrasena": "contraseña1"
    // Otros campos del usuario
  },
  {
    "id_usuario": 2,
    "nombre": "Usuario2",
    "correo": "usuario2@example.com",
    "contrasena": "contraseña2"
    // Otros campos del usuario
  },
  // ... hasta el usuario 12
]


```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el usuario."
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


- Para consultar más detalle sobre usuario consultar
  la documentación del endpoint
[`GET /usuarios/{id}`](./endpoints/get-usuarios-id.md)
[`POST /usuarios`](./endpoints/post-usuarios.md)
[`PUT /usuarios/{id}`](./endpoints/put-usuarios-id.md)
[`PATCH /usuarios/{id}`](./endpoints/patch-usuarios-id.md)