import "@/assets/globals.css";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="pl-4">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
