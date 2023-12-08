
```markdown
# Endpoint: `GET /contrasenas/{id}`

Permite obtener información detallada sobre una contraseña específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la contraseña que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /contrasenas/12
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_contrasena": 12,
  "id_usuario": 12,
  "nombre_sitio": "Sitio12",
  "nombre_usuario": "UsuarioSitio12",
  "contraseña": "contraseñaSitio12"
  // Otros campos de la contraseña
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró la contraseña."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ```

## Notas Adicionales

- Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre una contraseña específica.
```

Esta documentación se ha actualizado para reflejar el endpoint `GET /contrasenas/{id}`, permitiendo obtener detalles específicos de una contraseña según su identificador único.