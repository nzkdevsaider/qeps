import Logo from "@/components/Branding/Logo";
import { LoginForm } from "@/components/Forms/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="w-1/4 bg-white p-5 rounded-md flex flex-col items-center justify-center gap-2">
        <div className="logo bg-black p-3 rounded-xl my-10">
          <Logo icon width={100} height={100} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
