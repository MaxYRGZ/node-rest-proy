
# Endpoint: `PATCH /anuncio/{id}`

Permite actualizar parcialmente los campos de un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /anuncio/12
Content-Type: application/json

{
 "id_usuario": 12,
  "id_anuncio": 12
  // Campos actualizados parcialmente
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "message": "Actualización exitosa"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "bad_request",
    "error_description": "Solicitud incorrecta. Verifica los datos enviados."
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
    "error_description": "Hubo un problema al procesar la solicitud."
  }
  ```

## Notas Adicionales

- Asegúrate de incluir un ID válido para actualizar parcialmente la información del usuario específico.
```