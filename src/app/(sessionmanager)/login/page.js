import Logo from "@/components/Branding/Logo";
import Messages from "./message";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex flex-col items-center px-8 h-screen justify-center gap-2">
      <div className="logo bg-black p-3 rounded-xl my-10">
        <Logo icon width={100} height={100} />
      </div>
      <div className="my-3">
        <Messages />
      </div>
      <form
        className="flex flex-col w-full justify-center gap-2 text-foreground max-w-md"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" type="email">
          Correo eléctronico
        </label>
        <Input
          type="email"
          name="email"
          placeholder="nombre@ejemplo.com"
          required
        />

        <label className="text-md" type="password">
          Contraseña
        </label>
        <Input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button>Iniciar sesión</Button>
        <Button variant="secondary" formAction="/auth/sign-up">Registrarse</Button>
      </form>
    </div>
  );
}
