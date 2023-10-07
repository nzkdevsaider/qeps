import Link from "next/link";
import { sections } from "@/lib/sections";

const SidebarNav = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
        {sections.map((section, index) => (
          <li key={index}>
            <Link
              href={section.href}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <section.icon />
              <span className="ml-3">{section.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;
