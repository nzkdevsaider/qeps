"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import FormCheckerDisplay from "@/components/Displays/FormCheckerDisplay";

const OnboardSchema = Yup.object().shape({
  nombre: Yup.string().required("Este campo es obligatorio"),
  apellido: Yup.string().required("Este campo es obligatorio"),
  username: Yup.string()
    .required("Este campo es obligatorio")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "No pueden haber espacios ni caracteres especiales"
    ),
  proyecto_nombre: Yup.string().required("Este campo es obligatorio"),
});

export const OnboardForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      username: "",
      proyecto_nombre: "",
    },
    validationSchema: OnboardSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center gap-5"
    >
      <h2 className="text-2xl font-bold">Datos personales</h2>

      {formik.touched.nombre && formik.errors.nombre ? (
        <FormCheckerDisplay>{formik.errors.nombre}</FormCheckerDisplay>
      ) : null}
      <Input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Nombre"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />
      {formik.touched.apellido && formik.errors.apellido ? (
        <FormCheckerDisplay>{formik.errors.apellido}</FormCheckerDisplay>
      ) : null}
      <Input
        id="apellido"
        name="apellido"
        type="text"
        placeholder="Apellido"
        onChange={formik.handleChange}
        value={formik.values.apellido}
      />
      {formik.touched.username && formik.errors.username ? (
        <FormCheckerDisplay>{formik.errors.username}</FormCheckerDisplay>
      ) : null}
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="@username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <h2 className="text-2xl font-bold">Datos del proyecto</h2>
      {formik.touched.proyecto_nombre && formik.errors.proyecto_nombre ? (
        <FormCheckerDisplay>{formik.errors.proyecto_nombre}</FormCheckerDisplay>
      ) : null}
      <Input
        id="proyecto_nombre"
        name="proyecto_nombre"
        type="text"
        placeholder="Nombre del proyecto"
        onChange={formik.handleChange}
        value={formik.values.proyecto_nombre}
      />
      <Button disabled={!formik.isValid} type="submit">
        Completar
      </Button>
    </form>
  );
};
