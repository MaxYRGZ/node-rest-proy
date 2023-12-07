-- Crear la base de datos para ciberguardia
CREATE DATABASE ciberguardia;
USE ciberguardia;

-- Tabla de Usuarios
CREATE TABLE Usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(128) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_usuario)
);

-- Tabla de Contraseñas Guardadas
CREATE TABLE ContrasenaGuardada (
    id_contraseña INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    nombre_sitio VARCHAR(255) NOT NULL,
    nombre_usuario VARCHAR(128) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_contraseña),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

-- Tabla de Anuncios para Consejos de Seguridad
CREATE TABLE AnuncioConsejoSeguridad (
    id_anuncio INT NOT NULL AUTO_INCREMENT,
    contenido VARCHAR(512) NOT NULL,
    PRIMARY KEY (id_anuncio)
);

-- Tabla de Relación entre Usuario y Anuncio de Consejo de Seguridad
CREATE TABLE UsuarioAnuncioConsejo (
    id_usuario INT NOT NULL,
    id_anuncio INT NOT NULL,
    PRIMARY KEY (id_usuario, id_anuncio),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_anuncio) REFERENCES AnuncioConsejoSeguridad(id_anuncio)
);

-- Agregar más tablas según sea necesario para tu aplicación relacionada con ciberguardia
INSERT INTO Usuario (nombre, correo, contrasena) VALUES
('Usuario1', 'usuario1@example.com', 'contraseña1'),
('Usuario2', 'usuario2@example.com', 'contraseña2'),
('Usuario3', 'usuario3@example.com', 'contraseña3'),
('Usuario4', 'usuario4@example.com', 'contraseña4'),
('Usuario5', 'usuario5@example.com', 'contraseña5'),
('Usuario6', 'usuario6@example.com', 'contraseña6'),
('Usuario7', 'usuario7@example.com', 'contraseña7'),
('Usuario8', 'usuario8@example.com', 'contraseña8'),
('Usuario9', 'usuario9@example.com', 'contraseña9'),
('Usuario10', 'usuario10@example.com', 'contraseña10');

INSERT INTO ContrasenaGuardada (id_usuario, nombre_sitio, nombre_usuario, contraseña) VALUES
(1, 'Sitio1', 'UsuarioSitio1', 'contraseñaSitio1'),
(2, 'Sitio2', 'UsuarioSitio2', 'contraseñaSitio2'),
(3, 'Sitio3', 'UsuarioSitio3', 'contraseñaSitio3'),
(4, 'Sitio4', 'UsuarioSitio4', 'contraseñaSitio4'),
(5, 'Sitio5', 'UsuarioSitio5', 'contraseñaSitio5'),
(6, 'Sitio6', 'UsuarioSitio6', 'contraseñaSitio6'),
(7, 'Sitio7', 'UsuarioSitio7', 'contraseñaSitio7'),
(8, 'Sitio8', 'UsuarioSitio8', 'contraseñaSitio8'),
(9, 'Sitio9', 'UsuarioSitio9', 'contraseñaSitio9'),
(10, 'Sitio10', 'UsuarioSitio10', 'contraseñaSitio10');

INSERT INTO AnuncioConsejoSeguridad (contenido) VALUES
('Consejo de seguridad 1'),
('Consejo de seguridad 2'),
('Consejo de seguridad 3'),
('Consejo de seguridad 4'),
('Consejo de seguridad 5'),
('Consejo de seguridad 6'),
('Consejo de seguridad 7'),
('Consejo de seguridad 8'),
('Consejo de seguridad 9'),
('Consejo de seguridad 10');

-- Suponiendo que tenemos 10 usuarios y 10 anuncios existentes en las tablas anteriores
-- Agregamos relaciones aleatorias entre usuarios y anuncios para mostrar un ejemplo

INSERT INTO UsuarioAnuncioConsejo (id_usuario, id_anuncio) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);
