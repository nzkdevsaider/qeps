import Logo from "@/components/Branding/Logo";
import { LoginForm } from "@/components/Forms/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col items-center px-8 h-screen justify-center gap-2">
      <div className="logo bg-black p-3 rounded-xl my-10">
        <Logo icon width={100} height={100} />
      </div>
      <LoginForm />
    </div>
  );
}
