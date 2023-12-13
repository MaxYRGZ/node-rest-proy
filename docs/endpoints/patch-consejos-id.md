# Endpoint: `PATCH /consejos/{id}`

Permite actualizar parcialmente los campos de un consejo específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del consejo que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /consejo/12
Content-Type: application/json

{
   "contenido": "Consejo de seguridad 122"
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
    "error_description": "No se encontró el consejo a actualizar."
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

- Asegúrate de enviar los datos válidos y completos del consejo para realizar la actualización parcial.
```

Ahora tendrás todo el contenido del endpoint `PATCH /consejo/{id}` listo para ser copiado y pegado donde lo necesites.