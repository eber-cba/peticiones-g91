# 📘 Ejercicio CRUD Completo — Tienda de Libros

## 🗄️ 1. Base de datos

```sql
CREATE TABLE libros (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor TEXT NOT NULL,
  precio NUMERIC(10,2) NOT NULL,
  stock INT NOT NULL
);
```

### Datos iniciales:

```sql
INSERT INTO libros (titulo, autor, precio, stock) VALUES
('El Principito', 'Antoine de Saint-Exupéry', 2500, 10),
('Rayuela', 'Julio Cortázar', 5400, 5),
('El Aleph', 'Jorge Luis Borges', 3200, 8);
```

---

## 🧩 2. Objetivo del ejercicio

Implementar un **CRUD completo** para la tabla `libros` utilizando **Express** y **PostgreSQL**, siguiendo las rutas indicadas a continuación.

---

## 📚 3. Rutas del CRUD que deben desarrollar

### ✔ GET /libros

Debe devolver todos los libros registrados.

---

### ✔ GET /libros/:id

Debe devolver un solo libro según su ID.  
Si no existe, devolver un error 404.

---

### ✔ POST /libros

Debe crear un libro nuevo.  
El body debe incluir:

```json
{
  "titulo": "",
  "autor": "",
  "precio": 0,
  "stock": 0
}
```

---

### ✔ PUT /libros/:id

Debe actualizar todos los datos del libro indicado por el ID.  
Si no existe, devolver 404.

---

### ✔ DELETE /libros/:id

Debe eliminar un libro según el ID.  
Si no existe, devolver 404.

---

## 🧪 4. Requerimientos del trabajo práctico

- Validar campos obligatorios en POST y PUT.
- Enviar códigos de estado correctos:
  - 200 para operaciones exitosas
  - 201 para creación
  - 400 si falta información
  - 404 si no se encuentra el libro
  - 500 si ocurre un error interno
- Utilizar Express y PostgreSQL.
- Organizar el proyecto en carpetas (controllers, models, routes, db).

---
