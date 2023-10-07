import "@/assets/globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Dashboard/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="flex flex-row">
          <Sidebar/>
          <div className="pl-4">
            <div className="p-4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
