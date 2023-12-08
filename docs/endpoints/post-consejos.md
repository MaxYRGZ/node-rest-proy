```markdown
# Endpoint: `POST /consejos`

Permite agregar un nuevo consejo de seguridad al sistema.

## Ejemplo de Solicitud
```http
POST /consejos
Content-Type: application/json

{
  "id_anuncio": 12,
  "contenido": "Nuevo consejo de seguridad"
  // Otros campos del consejo de seguridad
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

- Asegúrate de enviar todos los campos obligatorios del consejo de seguridad para crearlo correctamente.
```

Esta es la documentación actualizada para el endpoint `POST /consejos`, listo para ser utilizado donde lo necesites.