--PostgreSQL Maestro 19.10.0.4
------------------------------------------
--Host     : localhost
--Database : nueva


\connect - postgres
CREATE DATABASE nueva WITH TEMPLATE = template0 ENCODING = 6 TABLESPACE = pg_default;
\connect nueva postgres
SET search_path = public, pg_catalog;
--
-- Data for blobs (OID = 18357) (LIMIT 0,3)
--
INSERT INTO categoria (id, nombre, "createdAt", "updatedAt") VALUES (1, 'Ropa', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04');
INSERT INTO categoria (id, nombre, "createdAt", "updatedAt") VALUES (2, 'Accesorios', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04');
INSERT INTO categoria (id, nombre, "createdAt", "updatedAt") VALUES (3, 'Zapatos', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04');
COMMIT;
--
-- Data for blobs (OID = 18365) (LIMIT 0,3)
--
INSERT INTO marcas (id, nombre, "createdAt", "updatedAt") VALUES (2, 'Mango', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04');
INSERT INTO marcas (id, nombre, "createdAt", "updatedAt") VALUES (1, 'Jlo', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04');
INSERT INTO marcas (id, nombre, "createdAt", "updatedAt") VALUES (3, 'Gucci', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04');
COMMIT;
--
-- Data for blobs (OID = 18373) (LIMIT 0,4)
--
INSERT INTO productos (id, nombre, "createdAt", "updatedAt", "categoriumId", "categoriaId") VALUES (1, 'Pantalon', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 1, 1);
INSERT INTO productos (id, nombre, "createdAt", "updatedAt", "categoriumId", "categoriaId") VALUES (4, 'Tenis', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 3, 3);
INSERT INTO productos (id, nombre, "createdAt", "updatedAt", "categoriumId", "categoriaId") VALUES (2, 'Pulso', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 2, 2);
INSERT INTO productos (id, nombre, "createdAt", "updatedAt", "categoriumId", "categoriaId") VALUES (3, 'Medias', '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 1, 1);
COMMIT;
--
-- Data for blobs (OID = 18409) (LIMIT 0,5)
--
INSERT INTO productomarcas (id, "createdAt", "updatedAt", "productoId", "marcaId") VALUES (1, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 1, 3);
INSERT INTO productomarcas (id, "createdAt", "updatedAt", "productoId", "marcaId") VALUES (2, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 2, 1);
INSERT INTO productomarcas (id, "createdAt", "updatedAt", "productoId", "marcaId") VALUES (3, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 3, 1);
INSERT INTO productomarcas (id, "createdAt", "updatedAt", "productoId", "marcaId") VALUES (4, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 4, 2);
INSERT INTO productomarcas (id, "createdAt", "updatedAt", "productoId", "marcaId") VALUES (5, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 3, 2);
COMMIT;
--
-- Data for blobs (OID = 18427) (LIMIT 0,12)
--
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (1, 'Enero', 50, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 1);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (2, 'Febrero', 150, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 1);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (3, 'Marzo', 100, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 1);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (4, 'Enero', 25, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 2);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (5, 'Febrero', 10, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 2);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (6, 'Marzo', 20, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 2);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (7, 'Enero', 0, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 3);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (8, 'Febrero', 150, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 3);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (9, 'Marzo', 60, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 3);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (10, 'Enero', 80, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 4);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (11, 'Febrero', 45, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 4);
INSERT INTO venta (id, mes, valor, "createdAt", "updatedAt", "productomarcaId") VALUES (12, 'Marzo', 120, '2022-07-07 00:00:00-04', '2022-07-07 00:00:00-04', 4);
COMMIT;
SET search_path = pg_catalog, pg_catalog;
COMMENT ON SCHEMA public IS 'standard public schema';
