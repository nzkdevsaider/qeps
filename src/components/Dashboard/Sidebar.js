import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="flex flex-col px-3 h-screen justify-between bg-secondary w-[13%]"
    >
      <SidebarHeader />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
