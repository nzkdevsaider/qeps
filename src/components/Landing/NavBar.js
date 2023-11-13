"use client";
import Link from "next/link";
import Logo from "../Branding/Logo";
import { Button } from "../ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

const items = [
  {
    title: "Producto",
    href: "/",
  },
  {
    title: "Caracteristicas",
    href: "#features",
  },
  {
    title: "Precios",
    href: "/",
  },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <navbar className="flex px-10 md:px-52 py-5 justify-between items-center flex-row">
      <Logo black icon height={90} width={90} />
      <div className="space-x-5 hidden md:block">
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            <Button variant="ghost">{item.title}</Button>
          </Link>
        ))}
      </div>
      <Link href="/login">
        <Button className="hidden md:block">Iniciar Sesión</Button>
      </Link>
      <Button onClick={() => setOpen(!open)} className="md:hidden">
        <IconMenu2 size={30} />
      </Button>
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col absolute top-0 right-0 bg-white w-full h-2/5 z-50 animate-in`}
      >
        <div className="flex flex-row items-center justify-between px-10 py-5">
          <Logo black icon height={90} width={90} />
          <Button onClick={() => setOpen(!open)}>
            <IconMenu2 size={30} />
          </Button>
        </div>
        <div className="flex flex-col space-y-3 my-3 px-3">
          {items.map((item, index) => (
            <Link href={item.href} key={index}>
              <Button className="w-full" variant="outline">
                {item.title}
              </Button>
            </Link>
          ))}

          <Button>Iniciar Sesión</Button>
        </div>
      </div>
    </navbar>
  );
};

export default NavBar;
