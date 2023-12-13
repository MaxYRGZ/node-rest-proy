
# Endpoint: `PATCH /contrasenas/{id}`

Permite actualizar parcialmente los campos de una contraseña específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la contraseña que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /contrasenas/12
Content-Type: application/json

{
  "nombre_sitio": "SitioModificado"
  // Campos actualizados parcialmente
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "message": "Successfull partial update"
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
    "error_description": "No se encontró la contraseña a actualizar."
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

- Asegúrate de enviar los datos válidos y completos de la contraseña para realizar la actualización parcial.
```

Ahora, la documentación está actualizada y enfocada en el endpoint `PATCH /contrasenas/{id}`, permitiendo actualizar parcialmente los campos de una contraseña específica.