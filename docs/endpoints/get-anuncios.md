# Endpoint: `GET /anuncio`

Permite obtener la lista de los primeros doce anuncio registrados en el sistema.

## Ejemplo de Solicitud
```http
GET /anuncio


```

## Respuesta Exitosa (Código 200 OK)
```json
[
 {
  "id_usuario": 1,
  "id_anuncio": 1
}
,
 {
  "id_usuario": 2,
  "id_anuncio": 2
}
,
 {
  "id_usuario": 3,
  "id_anuncio": 3
}
,
 {
  "id_usuario": 4,
  "id_anuncio": 4
}

  // ... hasta el usuario 12
]


```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el usuario."
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


- Para consultar más detalle sobre usuario consultar
  la documentación del endpoint
[`GET /anuncio/{id}`](../endpoints/get-anuncios-id.md)
[`POST /anuncio`](../endpoints/post-anuncios.md)
[`PUT /anuncio/{id}`](../endpoints/put-anuncios-id.md)
[`PATCH /anuncio/{id}`](../endpoints/patch-anuncios-id.md)