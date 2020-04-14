-- -------------------------------------------------------------
-- TablePlus 3.3.0(300)
--
-- https://tableplus.com/
--
-- Database: bookmarks
-- Generation Time: 2020-04-14 07:33:43.5310
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS marcadores_id_seq;

-- Table Definition
CREATE TABLE "public"."marcadores" (
    "id" int4 NOT NULL DEFAULT nextval('marcadores_id_seq'::regclass),
    "url" varchar NOT NULL,
    "nombre" varchar NOT NULL,
    "descripcion" varchar,
    "acciones" bool,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."marcadores" ("id", "url", "nombre", "descripcion", "acciones") VALUES
('22', 'www.facebook.com', 'Facebook', 'Redes Sociales', 't'),
('23', 'www.microsoft-teams.com', 'Teams', 'Trabajo', 't'),
('24', 'www.youtube.com', 'Youtube', 'Videos', 't'),
('25', 'www.github.com', 'Git', 'Repositorio', 't');
