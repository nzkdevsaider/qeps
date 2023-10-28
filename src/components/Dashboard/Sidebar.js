import LogoutButton from "../Buttons/LogoutButton";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="flex flex-col px-3 h-screen justify-between bg-secondary w-[13%]"
    >
      <SidebarHeader />
      <SidebarNav />
      <div className="flex flex-row justify-center p-4">
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
