
# Endpoint: `POST /usuarios`

Permite agregar un nuevo usuario al sistema.

## Ejemplo de Solicitud
```http
POST /usuarios
Content-Type: application/json

{
  "nombre": "NuevoUsuario",
  "correo": "nuevousuario@example.com",
  "contrasena": "nuevacontraseña"
  // Otros campos del usuario
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

- Asegúrate de enviar todos los campos obligatorios del usuario para crearlo correctamente.
```

Este texto contiene la documentación completa para el método `POST /usuarios`, listo para ser copiado y utilizado donde lo necesites.