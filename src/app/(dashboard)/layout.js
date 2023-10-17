import "@/assets/globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Dashboard/Sidebar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("id_owner", user.id);

  if (!projects) {
    return redirect("/onboarding");
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="flex flex-row">
          <Sidebar />
          <div className="pl-4">
            <div className="p-4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
