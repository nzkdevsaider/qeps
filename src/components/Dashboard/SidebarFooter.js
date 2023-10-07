import { Button } from "../ui/button";
import { useContext } from "react";
import { SidebarContext } from "@/context/sidebar";
import { IconChevronLeft } from "@tabler/icons-react";

const SidebarFooter = () => {
  let { toggle } = useContext(SidebarContext);

  return (
    <div className="flex flex-row justify-end space-x-5 m-5">
      <Button size="icon" variant="outline" onClick={toggle}>
        <IconChevronLeft />
      </Button>
    </div>
  );
};

export default SidebarFooter;
