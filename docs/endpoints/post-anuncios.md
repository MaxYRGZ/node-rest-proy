
# Endpoint: `POST /anuncios`

Permite asociar un anuncios existente a un nuevo anuncio en el sistema.

## Ejemplo de Solicitud
```http
POST /anuncios
Content-Type: application/json

{
  "id_usuario": 12,
  "id_anuncio": 12
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

- Asegúrate de incluir los campos requeridos para asociar el usuario con el anuncio correctamente.
```

Esta documentación actualizada describe el endpoint `POST /anuncios`, permitiendo asociar un usuario existente a un nuevo anuncio en el sistema.