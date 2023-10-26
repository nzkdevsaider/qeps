"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import FormCheckerDisplay from "@/components/Displays/FormCheckerDisplay";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import { IconLoader2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

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
  proyecto_descripcion: Yup.string().default("Sin descripción"),
});

export const OnboardForm = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      username: "",
      proyecto_nombre: "",
      proyecto_descripcion: "",
    },
    validationSchema: OnboardSchema,
    onSubmit: async (values) => {
      const { data } = await supabase.auth.getUser();
      setLoading(true);
      try {
        await axios.post("/api/createUser", {
          id: data.user.id,
          nombre: values.nombre,
          apellido: values.apellido,
          username: values.username,
        });
        await axios.post("/api/createProject", {
          id_user: data.user.id,
          name: values.proyecto_nombre,
          description: values.proyecto_descripcion,
        });
        toast({
          title: "Datos guardados en la nube",
          description:
            "Hemos almacenado tus datos de registro para que puedas utilizar la plataforma.",
          status: "success",
          duration: 5000,
        });
        router.push("/dashboard");
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Ha ocurrido un error",
          status: "error",
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
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
      {formik.touched.proyecto_descripcion &&
      formik.errors.proyecto_descripcion ? (
        <FormCheckerDisplay>
          {formik.errors.proyecto_descripcion}
        </FormCheckerDisplay>
      ) : null}
      <Input
        id="proyecto_descripcion"
        name="proyecto_descripcion"
        type="text"
        placeholder="Descriocion del proyecto"
        onChange={formik.handleChange}
        value={formik.values.proyecto_descripcion}
      />
      <Button disabled={loading} type="submit">
        {loading && <IconLoader2 className="animate-spin mr-2" />}
        Completar
      </Button>
    </form>
  );
};
