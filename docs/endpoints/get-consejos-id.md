```markdown
# Endpoint: `GET /consejos/{id}`

Permite obtener información detallada sobre un consejo de seguridad específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del consejo de seguridad que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /consejos/12
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_consejo": 12,
  "id_anuncio": 12,
  "contenido": "Consejo de seguridad 12"
  // Otros campos del consejo de seguridad
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el consejo de seguridad."
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

- Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre un consejo de seguridad en específico.
```

Esta es la documentación para el endpoint `GET /consejos/{id}` listo para ser utilizado.