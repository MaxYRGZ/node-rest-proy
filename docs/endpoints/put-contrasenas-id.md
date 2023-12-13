
# Endpoint: `PUT /contrasenas/{id}`

Permite actualizar todos los campos de una contraseña guardada específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la contraseña guardada que se desea actualizar.

## Ejemplo de Solicitud
```http
PUT /contrasenas/8
Content-Type: application/json

    {
        "id_contrasena": 8,
        "id_usuario": 8,
        "nombre_sitio": "Sitio12",
        "nombre_usuario": "UsuarioSitio12",
        "contraseña": "contraseñaSitio12"
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

- Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre una contraseña específica.
```

Con estos cambios, la documentación del endpoint `PUT /contrasenas/{id}` estará actualizada con la información correspondiente.
