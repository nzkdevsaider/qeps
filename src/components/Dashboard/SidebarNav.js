import Link from "next/link";
import {
  IconTable,
  IconBook,
  IconWallet,
  IconUsers,
  IconDashboard,
} from "@tabler/icons-react";

export const sections = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: IconDashboard,
  },
  {
    name: "Clientes",
    href: "/dashboard/customers",
    icon: IconUsers,
  },
  {
    name: "Matrículas",
    href: "/dashboard/enrollments",
    icon: IconTable,
  },
  {
    name: "Pagos",
    href: "/dashboard/payments",
    icon: IconWallet,
  },
  {
    name: "Cursos",
    href: "/dashboard/courses",
    icon: IconBook,
  },
];

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
