import "@/assets/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onboarding",
  description: "Llena tus datos para comenzar a usar la plataforma.",
};

export default async function OnboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data } = await supabase
    .from("proyectos")
    .select("id_user")
    .eq("id_user", user.id);

  if (data) {
    redirect("/dashboard");
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr backdrop-blur-xl from-green-600 to-gray-950">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
