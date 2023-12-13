
# Endpoint: `GET /consejos`

Permite obtener la lista de los  consejos registrados en el sistema.

## Ejemplo de Solicitud
```http
GET /consejos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_consejo": 1,
    "id_anuncio": 1,
    "contenido": "Consejo de seguridad 1"
    // Otros campos del consejo de seguridad
  },
  {
    "id_consejo": 2,
    "id_anuncio": 2,
    "contenido": "Consejo de seguridad 2"
    // Otros campos de la consejo
  },
  // ... hasta el ultimo consejo
]


```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el consejo."
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


Este es el texto actualizado para el endpoint `GET /consejos`, listo para su uso.
- Para consultar más detalle sobre usuario consultar
  la documentación del endpoint
[`GET /consejos/{id}`](../endpoints/get-consejos-id.md)
[`POST /consejos`](../endpoints/post-consejos.md)
[`PUT /consejos/{id}`](../endpoints/put-consejos-id.md)
[`PATCH /consejos/{id}`](../endpoints/patch-consejos-id.md)