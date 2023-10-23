"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const LogoutButton = () => {
  const { toast } = useToast();
  const router = useRouter();
  const handleLogout = async () => {
    toast({
      title: "Cerraste sesión",
      description: "Esperamos volver a verte pronto.",
    });
    await axios.post("/auth/sign-out");
    router.push("/login");
  };
  return (
    <Button variant="destructive" onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
};

export default LogoutButton;
