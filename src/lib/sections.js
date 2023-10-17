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
