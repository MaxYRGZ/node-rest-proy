
```markdown
# Endpoint: `PUT /anuncios/{id}`

Permite actualizar todos los campos de un anuncio específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del anuncio que se desea actualizar.

## Ejemplo de Solicitud
```http
PUT /anuncios/12
Content-Type: application/json

{
  "id_usuario": 12,
    "id_anuncio": 12
  // Otros campos actualizados del anuncio
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
    "error_description": "No se encontró el anuncio a actualizar."
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

- Asegúrate de incluir un ID válido para actualizar la información del anuncio específico.
```

Esta versión proporciona detalles sobre cómo actualizar un anuncio específico mediante el método `PUT /anuncios/{id}`.