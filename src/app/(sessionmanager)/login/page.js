import Logo from "@/components/Branding/Logo";
import Messages from "./message";

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
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="nombre@ejemplo.com"
          required
        />
        <label className="text-md" type="password">
          Contraseña
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Iniciar sesión
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
