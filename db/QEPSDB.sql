CREATE TABLE "proyectos" (
  "id" uuid PRIMARY KEY,
  "created_at" timestamp NOT NULL,
  "id_owner" uuid NOT NULL
);

CREATE TABLE "proyecto_info" (
  "id" uuid PRIMARY KEY,
  "id_proyecto" uuid NOT NULL,
  "name" text NOT NULL,
  "description" text
);

CREATE TABLE "proyecto_clientes" (
  "id" uuid PRIMARY KEY,
  "id_proyecto" uuid NOT NULL,
  "id_cliente" uuid NOT NULL
);

CREATE TABLE "proyecto_alumno" (
  "id" uuid PRIMARY KEY,
  "id_proyecto" uuid NOT NULL,
  "id_alumno" uuid NOT NULL
);

CREATE TABLE "proyecto_curso" (
  "id" uuid PRIMARY KEY,
  "id_proyecto" uuid NOT NULL,
  "id_curso" uuid NOT NULL
);

CREATE TABLE "proyecto_matriculas" (
  "id" uuid PRIMARY KEY,
  "id_proyecto" uuid NOT NULL,
  "id_matricula" uuid NOT NULL
);

CREATE TABLE "proyecto_pagos" (
  "id" uuid PRIMARY KEY,
  "id_proyecto" uuid NOT NULL,
  "id_pago" uuid NOT NULL
);

CREATE TABLE "clientes" (
  "id" uuid PRIMARY KEY,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "clientes_info" (
  "id_cliente" uuid PRIMARY KEY,
  "name" text,
  "lastname" text,
  "email" text,
  "phone" text
);

CREATE TABLE "alumnos" (
  "id" uuid PRIMARY KEY,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "alumnos_info" (
  "id_alumno" uuid PRIMARY KEY,
  "name" text,
  "lastname" text,
  "edad" text
);

CREATE TABLE "cursos" (
  "id" uuid PRIMARY KEY,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "cursos_info" (
  "id_curso" uuid PRIMARY KEY,
  "name" text,
  "description" text,
  "max_enrollment" int
);

CREATE TABLE "matriculas" (
  "id" uuid PRIMARY KEY,
  "id_cliente" uuid NOT NULL,
  "id_alumno" uuid NOT NULL,
  "id_curso" uuid NOT NULL,
  "id_pago" uuid NOT NULL,
  "created_at" timestamp
);

CREATE TABLE "pagos" (
  "id" uuid PRIMARY KEY,
  "id_cliente" uuid NOT NULL,
  "id_matricula" uuid NOT NULL,
  "date" timestamp
);

CREATE TABLE "pagos_info" (
  "id_pago" uuid PRIMARY KEY,
  "monto" int,
  "description" text
);

ALTER TABLE "proyecto_info" ADD FOREIGN KEY ("id_proyecto") REFERENCES "proyectos" ("id");

ALTER TABLE "proyecto_clientes" ADD FOREIGN KEY ("id_proyecto") REFERENCES "proyectos" ("id");

ALTER TABLE "proyecto_clientes" ADD FOREIGN KEY ("id_cliente") REFERENCES "clientes" ("id");

ALTER TABLE "proyecto_alumno" ADD FOREIGN KEY ("id_proyecto") REFERENCES "proyectos" ("id");

ALTER TABLE "proyecto_alumno" ADD FOREIGN KEY ("id_alumno") REFERENCES "alumnos" ("id");

ALTER TABLE "proyecto_curso" ADD FOREIGN KEY ("id_proyecto") REFERENCES "proyectos" ("id");

ALTER TABLE "proyecto_curso" ADD FOREIGN KEY ("id_curso") REFERENCES "cursos" ("id");

ALTER TABLE "proyecto_matriculas" ADD FOREIGN KEY ("id_proyecto") REFERENCES "proyectos" ("id");

ALTER TABLE "proyecto_matriculas" ADD FOREIGN KEY ("id_matricula") REFERENCES "matriculas" ("id");

ALTER TABLE "proyecto_pagos" ADD FOREIGN KEY ("id_proyecto") REFERENCES "proyectos" ("id");

ALTER TABLE "proyecto_pagos" ADD FOREIGN KEY ("id_pago") REFERENCES "pagos" ("id");

ALTER TABLE "clientes_info" ADD FOREIGN KEY ("id_cliente") REFERENCES "clientes" ("id");

ALTER TABLE "alumnos_info" ADD FOREIGN KEY ("id_alumno") REFERENCES "alumnos" ("id");

ALTER TABLE "cursos_info" ADD FOREIGN KEY ("id_curso") REFERENCES "cursos" ("id");

ALTER TABLE "matriculas" ADD FOREIGN KEY ("id_cliente") REFERENCES "clientes" ("id");

ALTER TABLE "matriculas" ADD FOREIGN KEY ("id_alumno") REFERENCES "alumnos" ("id");

ALTER TABLE "matriculas" ADD FOREIGN KEY ("id_curso") REFERENCES "cursos" ("id");

ALTER TABLE "matriculas" ADD FOREIGN KEY ("id_pago") REFERENCES "pagos" ("id");

ALTER TABLE "pagos" ADD FOREIGN KEY ("id_cliente") REFERENCES "clientes" ("id");

ALTER TABLE "pagos" ADD FOREIGN KEY ("id_matricula") REFERENCES "matriculas" ("id");

ALTER TABLE "pagos_info" ADD FOREIGN KEY ("id_pago") REFERENCES "pagos" ("id");
