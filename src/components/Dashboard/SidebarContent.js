import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import { useContext } from "react";
import { SidebarContext } from "@/context/sidebar";
import { Button } from "../ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import { useEffect } from "react";

const SidebarContent = () => {
  let { open, toggle } = useContext(SidebarContext);

  useEffect(() => {
    if (window.innerWidth < 768) {
      toggle();
    }
  }, []);

  if (!open) {
    return (
      <aside
        id="secondary-sidebar"
        className="flex flex-col h-screen justify-between bg-secondary w-[3%]"
      >
        <div className="flex flex-row justify-center items-center p-3">
          <Button size="icon" variant="outline" onClick={() => toggle()}>
            <IconChevronRight />
          </Button>
        </div>
      </aside>
    );
  }
  return (
    <aside
      id="default-sidebar"
      className="flex flex-col h-screen justify-between bg-secondary w-[13%]"
    >
      <SidebarHeader />
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
};

export default SidebarContent;
