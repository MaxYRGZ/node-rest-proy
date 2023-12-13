
# Endpoint: `POST /contrasenas`

Permite crear una nueva contraseña guardada en el sistema.

## Ejemplo de Solicitud
```http
POST /contrasenas
Content-Type: application/json

{
  "id_contrasena": 13,
  "id_usuario": 13,
  "nombre_sitio": "Sitio13,
  "nombre_usuario": "UsuarioSitio13",
  "contraseña": "contraseñaSitio13"
  // Otros campos de la contraseña
}
```

## Respuesta Exitosa (Código 201 Created)
```json
{
  "status": 201,
  "message": "Created"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "bad_request",
    "error_description": "Petición incorrecta. Verifica los datos enviados."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud."
  }
  ```

## Notas Adicionales

- Asegúrate de enviar todos los campos obligatorios para crear una nueva contraseña guardada correctamente.
```

Ahora, la documentación refleja correctamente los campos requeridos para crear una nueva contraseña guardada mediante el endpoint `POST /contrasenas`.