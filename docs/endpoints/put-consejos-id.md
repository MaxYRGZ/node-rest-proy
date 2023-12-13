
# Endpoint: `PUT /consejos/{id}`

Permite actualizar todos los campos de un consejo de seguridad específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del consejo de seguridad que se desea actualizar.

## Ejemplo de Solicitud
```http
PUT /consejos/12
Content-Type: application/json

{
  "id_anuncio": 12,
  "contenido": "Nuevo contenido del consejo de seguridad"
  // Otros campos actualizados del consejo de seguridad
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
    "error_description": "No se encontró el consejo de seguridad a actualizar."
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

- Asegúrate de incluir un ID válido en la solicitud para obtener la información
  sobre un consejo de seguridad en específico.
```

Este contenido describe cómo actualizar todos los campos de un consejo de seguridad específico a través del endpoint `PUT /consejos/{id}` con los campos proporcionados.