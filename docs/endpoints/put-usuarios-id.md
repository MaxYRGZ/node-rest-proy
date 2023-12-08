# Endpoint: `PUT /usuarios/{id}`

Permite actualizar todos los campos de un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Ejemplo de Solicitud
```http
PUT /usuarios/12
Content-Type: application/json

{
  "id_usuario": 12,
  "nombre": "UsuarioModificado",
  "correo": "usuariomodificado@example.com",
  "contrasena": "nuevacontraseña"
  // Otros campos actualizados del usuario
}


```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "message": "Updated successfully"
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
- Código 404 Not Found:

  ```json
    {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el usuario a actualizar."
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un usuario en específico.
