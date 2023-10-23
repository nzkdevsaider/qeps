"use client";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

import axios from "axios";
import * as Yup from "yup";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import FormCheckerDisplay from "@/components/Displays/FormCheckerDisplay";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
});

export const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        setLoading(true);
        await axios.post("/auth/sign-in", {
          email,
          password,
        });
        toast({
          title: "Sesión iniciada",
          description: "Ahora puedes acceder a tu panel de control.",
        });
        router.push(searchParams.get("redirectedFrom") || "/dashboard");
      } catch (error) {
        toast({
          title: "No hemos podido validar tu usuario.",
          description: "Por favor, revisa tu correo electrónico y contraseña.",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  const handleSignUp = async () => {
    const { email, password } = formik.values;
    try {
      setLoading(true);
      await axios.post("/auth/sign-up", {
        email,
        password,
      });
      toast({
        title: "Registro exitoso",
        description: "Completa los datos de tu perfil para continuar.",
      });
      router.push(searchParams.get("redirectedFrom") || "/dashboard");
    } catch (error) {
      toast({
        title: "No hemos podido validar tu usuario.",
        description: "Por favor, revisa tu correo electrónico y contraseña.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full justify-center gap-2 text-foreground max-w-md"
    >
      <h2 className="text-2xl font-bold">Control de acceso</h2>

      {formik.touched.email && formik.errors.email ? (
        <FormCheckerDisplay>{formik.errors.email}</FormCheckerDisplay>
      ) : null}
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Correo electrónico"
        onChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password ? (
        <FormCheckerDisplay>{formik.errors.password}</FormCheckerDisplay>
      ) : null}
      <Input
        id="password"
        name="password"
        type="password"
        disabled={loading}
        placeholder="Contraseña"
        onChange={formik.handleChange}
      />
      <Button type="submit">Iniciar sesión</Button>
      <Button
        variant="outline"
        onClick={handleSignUp}
        disabled={loading}
        type="submit"
      >
        Registrarse
      </Button>
    </form>
  );
};
